import styled from 'styled-components/native';

export const HeaderTitleContainer = styled.View`
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

export const HeaderTitleText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0.5px;
    margin-right: 5px;
`;

export const HeaderIconContainer = styled.View`
    padding-top: 5px;
    flex-direction: row;
    align-items: center;
`;

export const HeaderButtonArea = styled.View`
    height: 100%;
    padding: 0 10px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`;

export const HeaderButton = styled.TouchableHighlight`
    margin-left: 30px;
`;

export const Container = styled.View`
    padding: 15px;
    background: #FFF;
`;

export const SearchSection = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 40px;
    background: #efefef;
    border-radius: 7px;
    padding: 0 20px;
`;

export const SearchBox = styled.TextInput`
    flex: 1;
    border-width: 0;
    color: #939397;
    font-size: 18px;
    padding-left: 10px
`;

export const MessageHeader = styled.Text`
    font-weight: bold;
    margin: 10px 0;
    font-size: 16px;
`;

export const ChatList = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
    margin-bottom: 60px;
`;

export const ChatItem = styled.View`
    flex-direction: row;
    height: 64px;
    margin-bottom: 20px;
`;

export const ChatAvatar = styled.ImageBackground.attrs({ 
    imageStyle: {borderRadius: 32}
})`
    width: 64px;
    height: 64px;
    margin-right: 10px;
`;

export const ActiveMarker = styled.View`
    width: 20px;
    height: 20px;
    border-radius: 10px;
    border-width: 2px;
    border-color: #FFF;
    background: #71c943;
    position: absolute;
    right: 0;
    bottom: 0;
`;

export const ChatTextArea = styled.View`
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;
    
export const ChatName = styled.Text`
    color: #2d2d2d;
    font-weight: bold;
`;

export const ChatDescription = styled.Text`
    color: #b0b0b0;
`;

export const PhotoButtonContainer = styled.View`
    align-items: center;
    justify-content: center;
`;

export const Loading = styled.ActivityIndicator.attrs({
    size: 'small',
    color: '#999'
})`
    margin: 30px 0;
`;