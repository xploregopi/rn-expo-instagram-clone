import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const TabContainer = styled.View`
    flex-direction: row;
    margin-top: 10px;
    border-top-color: #EEE;
    border-top-width: 1px;
`;

export const TabButton = styled.TouchableHighlight.attrs({
    underlayColor: 'transparent'
})`
    flex: 0 0 50%;
    padding: 10px 0;
    align-items: center;
    justify-content: center;
    border-bottom-width: 2px;
    border-bottom-color: transparent;

    ${(props) => props.active && css`
        border-bottom-color: #333;
    `}
`;

export const TabContent = styled.View`
    flex: 1;
`;

export const Loading = styled.ActivityIndicator.attrs({
    size: 'small',
    color: '#999'
})`
    margin: 30px 0;
`;