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
    flex: 1;
    background: #FFF;
    padding-bottom: 45px;
`;

export const ProfileTop = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
`;

export const ProfileAvatar = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 50px;
`;

export const ProfileNumberContainer = styled.View`
    width: 65px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
    
export const ProfileNumber = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #333;
`;
    
export const ProfileNumberDescription = styled.Text.attrs({
    numberOfLines: 1
})`
    font-size: 14px;
    color: #333;
`;
    
export const ProfileName = styled.Text`
    font-weight: bold;
    font-size: 14px;
    color: #333;
    padding: 0 15px;
`;

export const ProfileBiography = styled.View`
    padding: 0 15px;
`;

export const ProfileBiographyText = styled.Text`
    color: #333;
`;

export const EditProfileButton = styled.TouchableOpacity`
    margin: 0 15px;
    margin-top: 10px;
    padding: 6px 0;
    border-radius: 5px;
    border: 1px solid #444;
    align-items: center;
    justify-content: center;
`;

export const EditProfileButtonText = styled.Text`
    color: #444;
    font-weight: bold;
`;