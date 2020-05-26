import styled, { css } from 'styled-components/native';

export const ActionBar = styled.View`
    background: #FFF;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    flex-direction: row;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
`;

export const ActionButton = styled.TouchableHighlight.attrs({
    underlayColor: 'transparent'
})``;

export const ActionAvatar = styled.Image`
    width: 24px;
    height: 24px;
    border-radius: 12px;

    ${(props) => props.bordered && css`
        borderWidth: 1px;
        borderColor: #000;
    `}
`;
