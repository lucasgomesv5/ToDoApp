import { colors } from "../../../theme";
import styled from "styled-components/native";
import { ButtonProps, ButtonWrapperProps } from "./button-index";

export const StyledButton = styled.TouchableOpacity<ButtonProps>`
    background-color: ${({primary}) => primary ? colors.primary : colors.secondary};
    border-radius: 30px;
    width: 50%;
    align-self: center;
    align-items: center;
    padding: 8px;
`;

export const StyledButtonText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${colors.text}
`;

export const ButtonWrapper = styled.View<ButtonWrapperProps>`
    margin-top: ${({marginTop}) => marginTop};
`;