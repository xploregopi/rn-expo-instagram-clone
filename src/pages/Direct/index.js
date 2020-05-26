// package imports
import React, {useState, useEffect} from 'react';
import { MaterialIcons, SimpleLineIcons } from '@expo/vector-icons'; 
// local imports
import {
    HeaderButtonArea,
    HeaderButton,
    HeaderTitleContainer,
    HeaderTitleText,
    HeaderIconContainer,
} from '~/styles/header';
import {
    Container,
    SearchSection,
    SearchBox,
    MessageHeader,
    ChatList,
    ChatItem,
    ChatAvatar,
    ActiveMarker,
    ChatTextArea,
    ChatName,
    ChatDescription,
    PhotoButtonContainer,
    Loading,
} from './styles';

export default function Direct({ navigation }) {
    navigation.setOptions({
        headerTitle: () => (
            <HeaderTitleContainer>
                <HeaderTitleText>edu.js.o</HeaderTitleText>
                <HeaderIconContainer>
                    <MaterialIcons name="keyboard-arrow-down" size={20} color="black" />
                </HeaderIconContainer>
            </HeaderTitleContainer>
        ),
        headerRight: () => (
            <HeaderButtonArea>
                <HeaderButton marginLeft="20px">
                    <SimpleLineIcons name="camrecorder" size={24} color="black" />
                </HeaderButton>
                <HeaderButton marginLeft="20px">
                    <SimpleLineIcons name="note" size={24} color="black" />
                </HeaderButton>
            </HeaderButtonArea>
        )
    });
    // used only for search input
    const [value, onChangeText] = useState('');
    // chats load
    const [chat, setChat] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    async function loadPage(pageNumber = page, shouldRefresh = false) {
        if (total && pageNumber > total) return;
        
        setLoading(true);

        const response = await fetch(
            `http://10.0.0.102:3000/directs?_expand=author&_limit=6&_page=${pageNumber}`
        );
        
        const data = await response.json();
        const totalItems = response.headers.get('X-Total-Count');

        setTotal(Math.ceil(totalItems / 6));
        setChat(shouldRefresh ? data : [...chat, ...data]);
        setPage(pageNumber + 1)
        setLoading(false);
    }

    // load first page
    useEffect(() => {
        loadPage();
    }, []);
    
    async function refreshList() {
        setRefreshing(true);

        await loadPage(1, true);

        setRefreshing(false);
    }

    return (
        <Container>
            <SearchSection>
                <MaterialIcons name="search" size={24} color="#939397" />
                <SearchBox
                    onChangeText={text => onChangeText(text)}
                    value={value}
                    placeholder="Search"
                />
            </SearchSection>
            <MessageHeader>Messages</MessageHeader>
            <ChatList
                data={chat}
                keyExtractor={item => String(item.id)}
                onEndReached={() => loadPage()}
                onEndReachedThreshold={0.1}
                onRefresh={refreshList}
                refreshing={refreshing}
                ListFooterComponent={loading && <Loading />}
                renderItem={({ item }) => (
                    <ChatItem>
                        <ChatAvatar source={{ uri: item.author.avatar }}>
                            {item.author.online && (
                                <ActiveMarker />
                            )}
                        </ChatAvatar>
                        <ChatTextArea>
                            <ChatName>{item.author.name}</ChatName>
                            <ChatDescription>{item.author.online ? "Active now" : "Recently active"}</ChatDescription>
                        </ChatTextArea>
                        <PhotoButtonContainer>
                            <SimpleLineIcons name="camera" size={32} color="black" />
                        </PhotoButtonContainer>
                    </ChatItem>
                )}
            />
        </Container>
    );
}
