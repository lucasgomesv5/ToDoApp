import { colors } from "../../theme";
import styled from "styled-components/native";

export const StyledContainer = styled.View`
    flex-direction: row;
    margin-bottom: 20px;
`;

export const StyledInput = styled.TextInput`
    width: 85%;
    height: 42px;
    border-radius: 10px;
    padding: 10px;
    border: 1px solid ${colors.gray};
`;

export const StyledAdd = styled.TouchableOpacity`
    background-color: ${colors.primary};
    padding-horizontal: 20px;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    border-radius: 10px;
`;

export const StyledAddText = styled.Text`
    font-size: 30px;
    color: ${colors.white};
`;