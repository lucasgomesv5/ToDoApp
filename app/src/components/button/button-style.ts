import styled from "styled-components/native";
import { ButtonProps, ButtonWrapperProps } from "./button-index";

export const StyledButton = styled.TouchableOpacity<ButtonProps>`
    background-color: ${({primary}) => primary ? props => props.theme.colors.primary : props => props.theme.colors.secondary};
    border-radius: 30px;
    width: 50%;
    align-self: center;
    align-items: center;
    padding: 8px;

    ${({transparent}) => transparent && 'background-color: transparent'}
`;

export const StyledButtonText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${props => props.theme.colors.text}
`;

export const ButtonWrapper = styled.View<ButtonWrapperProps>`
    margin-top: ${({marginTop}) => marginTop && marginTop};
`;