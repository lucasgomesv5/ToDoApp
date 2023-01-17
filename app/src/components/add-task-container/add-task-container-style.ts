import styled from "styled-components/native";

export const StyledContainer = styled.View`
    flex-direction: row;
    margin-bottom: 20px;
`;

export const StyledInput = styled.TextInput.attrs((props) => ({
    placeholderTextColor: props.theme.colors.text
}))`
    width: 85%;
    height: 42px;
    border-radius: 10px;
    padding: 10px;
    border: 1px solid ${props => props.theme.colors.gray};
    color: ${props => props.theme.colors.text};
`;

export const StyledAdd = styled.TouchableOpacity`
    background-color: ${props => props.theme.colors.primary};
    padding-horizontal: 20px;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    border-radius: 10px;
`;

export const StyledAddText = styled.Text`
    font-size: 30px;
    color: ${props => props.theme.colors.text};
`;