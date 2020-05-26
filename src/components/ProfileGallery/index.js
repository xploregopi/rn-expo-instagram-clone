import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

import { Container, TabContainer, TabButton, TabContent, Loading } from './styles';

export default function ProfileGallery({ setDisplayTop }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    async function loadPage(pageNumber = page, shouldRefresh = false) {
        if (total && pageNumber > total) return;

        setLoading(true);

        const response = await fetch(
            `http://10.0.0.102:3000/feed?_expand=author&_limit=9&_page=${pageNumber}`
        );
        
        const data = await response.json();
        const totalItems = response.headers.get('X-Total-Count');

        setTotal(Math.ceil(totalItems / 9));
        setPosts(shouldRefresh ? data : [...posts, ...data]);
        setPage(pageNumber + 1)
        setLoading(false);
    }

    useEffect(() => {
        loadPage();
    }, []);

    function changeActive(index) {
        setActiveIndex(index);
    }

    function handleListScroll(e) {
        const isDown = e.nativeEvent.velocity.y > 0;
        const contentOffset = e.nativeEvent.contentOffset.y;
        if (isDown && contentOffset > 70) {
            setDisplayTop(false);
        }
        if (!isDown && contentOffset < 70) {
            setDisplayTop(true);
        }
    }

    async function refreshList() {
        setRefreshing(true);

        await loadPage(1, true);

        setRefreshing(false);
    }

    return (
        <Container>
            <TabContainer>
                <TabButton active={activeIndex === 0} onPress={() => changeActive(0)}>
                    <MaterialIcons name="grid-on" size={24} color="black" />
                </TabButton>
                <TabButton active={activeIndex === 1} onPress={() => changeActive(1)}>
                    <MaterialIcons name="person-pin" size={24} color="black" />
                </TabButton>
            </TabContainer>
            {activeIndex === 0 && (
                <TabContent>
                    <FlatList
                        data={posts}
                        numColumns={3}
                        onScroll={handleListScroll}
                        keyExtractor={post => String(post.id)}
                        onEndReached={() => loadPage()}
                        onEndReachedThreshold={0.1}
                        onRefresh={refreshList}
                        refreshing={refreshing}
                        ListFooterComponent={loading && <Loading />}
                        renderItem={({ item }) => (
                            <View style={{
                                width: '33.33%',
                                paddingRight: 2,
                                paddingLeft: 2,
                                paddingTop: 2,
                                paddingBottom: 2,
                            }}>
                                <Image
                                    source={{ uri: item.image }}
                                    resizeMode="contain"
                                    style={{
                                        backgroundColor: 'black',
                                        width: '100%',
                                        aspectRatio: 1
                                    }}
                                />
                            </View>
                        )}
                    />
                </TabContent>
            )}
            {activeIndex === 1 && (
                <TabContent>
                    <Text>Aba 2</Text>
                </TabContent>
            )}
        </Container>
    )
}
