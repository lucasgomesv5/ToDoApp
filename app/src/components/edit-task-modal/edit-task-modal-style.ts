import styled from "styled-components/native";

export const StyledContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const StyledContent = styled.View`
    background-color: ${props => props.theme.colors.background};
    width: 80%;
    height: 210px;
    border-radius: 8px;
    padding: 10px;
    shadow-opacity: 5;
    shadow-radius: 5px;
    shadow-color: ${props => props.theme.colors.gray};
    shadow-offset: 0px 0px;
    elevation: 10;

`;