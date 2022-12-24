import { colors } from "../../theme";
import styled from "styled-components/native";

export const StyledTextInput = styled.TextInput`
    border: 1px solid ${colors.gray};
    border-radius: 10px;
    height: 42px;
    padding: 10px;
    padding-left: 15px;
`;

export const StyledLabel = styled.Text`
    font-size: 18px;
    margin-bottom: 5px;
    color: ${colors.text};
`;

export const StyledContainer = styled.View`
    display: flex;
    justify-content: center;
    margin: 5px;
`;