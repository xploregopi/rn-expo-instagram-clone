import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding-bottom: 30px;
`;

export const Post = styled.View`
    margin-top: 10px;
`;

export const Header = styled.View`
    padding: 10px;
    flex-direction: row;
    align-items: center;
`;

export const Avatar = styled.Image`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    margin-right: 10px;
`;

export const Name = styled.Text`
    color: #333;
    font-weight: bold;
`;

export const Footer = styled.View`
    padding: 10px 15px;
    flex-direction: row;
    justify-content: space-between;
`;

export const FooterLeft = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const FooterRight = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const FooterLeftButton = styled.TouchableHighlight`
    margin-right: 15px;
`;

export const FooterRightButton = styled.TouchableHighlight`
`;

export const Description = styled.Text`
    padding: 0 15px;
    line-height: 18px;
`;

export const Loading = styled.ActivityIndicator.attrs({
    size: 'small',
    color: '#999'
})`
    margin: 30px 0;
`;