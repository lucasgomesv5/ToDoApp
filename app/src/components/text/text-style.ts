import styled, {css} from "styled-components/native";
import { TextProps } from "./text-index";

export const StyledText = styled.Text<TextProps>`
    color: ${props => props.theme.colors.text};
    font-size: ${({size}) => size};
    font-weight: ${({bold}) => bold ? 'bold' : 'normal'};

    ${({white}) => white && `color: ${props => props.theme.colors.white}`}
    ${({center}) => center && 'align-self: center'}
    ${({marginTop}) => marginTop && 'margin-top: 15px'}
    ${({mini}) => mini && css`
        color: ${props => props.theme.colors.gray};
        font-size: 15px;
    `};
`;

export const TextWrapper = styled.View`

`;