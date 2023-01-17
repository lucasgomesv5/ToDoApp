import styled from "styled-components/native";

export const StyledTextInput = styled.TextInput.attrs((props) => ({
    placeholderTextColor: props.theme.colors.text
}))`
    border: 1px solid ${props => props.theme.colors.gray};
    border-radius: 10px;
    height: 42px;
    padding: 10px;
    padding-left: 15px;
    color: ${props => props.theme.colors.text};
`;

export const StyledLabel = styled.Text`
    font-size: 18px;
    margin-bottom: 10px;
    color: ${props => props.theme.colors.text};
`;

export const StyledContainer = styled.View`
    display: flex;
    justify-content: center;
    margin: 5px;
`;