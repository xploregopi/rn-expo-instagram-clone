import styled from 'styled-components/native';

//
// Title
//

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

//
// Buttons
//

export const HeaderButtonArea = styled.View`
    height: 100%;
    padding: 0 10px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`;

export const HeaderButton = styled.TouchableHighlight.attrs({
    underlayColor: 'transparent'
})`
    margin-left: ${props => props.marginLeft ? props.marginLeft : 0};
`;

//
// logo
//
export const HeaderLogo = styled.Image`
    margin-top: 7px;
    margin-left: -20px;
`;