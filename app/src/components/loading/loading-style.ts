import styled from "styled-components/native";

export const StyledContainer = styled.View`
    align-items: center;
    justify-content: center;
    flex: 1;
    background-color: ${props => props.theme.colors.primary};
`;

export const StyledLoading = styled.ActivityIndicator`
    size: 50;
    color: ${props => props.theme.colors.white};
`;