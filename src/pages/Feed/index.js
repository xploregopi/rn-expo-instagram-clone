// package imports
import React, { useState, useEffect, useCallback } from 'react';
import { FlatList } from 'react-native';
import { Feather, Fontisto, SimpleLineIcons } from '@expo/vector-icons';
// local imports
import LazyImage from '~/components/LazyImage';
import NavigationPane from '~/components/NavigationPane';
import {
    HeaderButtonArea,
    HeaderButton,
    HeaderLogo,
} from '~/styles/header';
import {
    Container,
    Post,
    Header,
    Avatar,
    Name,
    Footer,
    FooterLeft,
    FooterLeftButton,
    FooterRight,
    FooterRightButton,
    Description,
    Loading,
} from './styles';
// assets imports
import logo from '~/assets/instagram.png';

export default function Feed({ navigation }) {
    navigation.setOptions({
        headerRight: () => (
            <HeaderButtonArea>
                <HeaderButton onPress={() => { navigation.navigate('Direct'); }}>
                    <Feather name="send" size={24} color="black" />
                </HeaderButton>
            </HeaderButtonArea>
        ),
        headerLeft: () => (
            <HeaderButtonArea>
                <HeaderButton onPress={() => {}}>
                    <SimpleLineIcons name="camera" size={28} color="black" />
                </HeaderButton>
            </HeaderButtonArea>
        ),
        headerTitle: () => (
            <HeaderLogo source={logo} />
        )
    });


    const [feed, setFeed] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [viewable, setViewable] = useState([]);

    async function loadPage(pageNumber = page, shouldRefresh = false) {
        if (total && pageNumber > total) return;

        setLoading(true);

        const response = await fetch(
            `http://10.0.0.102:3000/feed?_expand=author&_limit=5&_page=${pageNumber}`
        );
        
        const data = await response.json();
        const totalItems = response.headers.get('X-Total-Count');

        setTotal(Math.ceil(totalItems / 5));
        setFeed(shouldRefresh ? data : [...feed, ...data]);
        setPage(pageNumber + 1)
        setLoading(false);
    }

    useEffect(() => {
        loadPage();
    }, []);

    async function refreshList() {
        setRefreshing(true);

        await loadPage(1, true);

        setRefreshing(false);
    }

    const handleViewableChanged = useCallback(({ changed }) => {
        setViewable(changed.map(({ item }) => item.id));
    }, []);

    return (
        <Container>
            <FlatList
                data={feed}
                keyExtractor={post => String(post.id)}
                onEndReached={() => loadPage()}
                onEndReachedThreshold={0.1}
                onRefresh={refreshList}
                refreshing={refreshing}
                onViewableItemsChanged={handleViewableChanged}
                viewabilityConfig={{ viewAreaCoveragePercentThreshold: 30 }}
                ListFooterComponent={loading && <Loading />}
                renderItem={({ item }) => (
                    <Post>
                        <Header>
                            <Avatar source={{ uri: item.author.avatar }} />
                            <Name>{item.author.name}</Name>
                        </Header>

                        <LazyImage 
                            shouldLoad={viewable.includes(item.id)}
                            aspectRatio={item.aspectRatio}
                            smallSource={{ uri: item.small }}
                            source={{ uri: item.image }} 
                        />

                        <Footer>
                            <FooterLeft>
                                <FooterLeftButton>
                                    <Feather name="heart" size={28} color="black" />
                                </FooterLeftButton>
                                <FooterLeftButton>
                                    <Fontisto name="comment" size={24} color="black" />
                                </FooterLeftButton>
                                <FooterLeftButton>
                                    <Feather name="send" size={28} color="black" />
                                </FooterLeftButton>
                            </FooterLeft>
                            <FooterRight>
                                <FooterRightButton>
                                    <Feather name="bookmark" size={28} color="black" />
                                </FooterRightButton>
                            </FooterRight>
                        </Footer>

                        <Description>
                            <Name>{item.author.name}</Name> {item.description}
                        </Description>
                    </Post>
                )}
            />

            <NavigationPane active="feed" navigation={navigation} />
        </Container>
    );
}
