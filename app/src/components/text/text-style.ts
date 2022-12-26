import { colors } from "../../theme";
import styled, {css} from "styled-components/native";
import { TextProps } from "./text-index";

export const StyledText = styled.Text<TextProps>`
    color: ${colors.text};
    font-size: ${({size}) => size};
    font-weight: ${({bold}) => bold ? 'bold' : 'normal'};

    ${({white}) => white && `color: ${colors.white}`}
    ${({center}) => center && 'align-self: center'}
    ${({marginTop}) => marginTop && 'margin-top: 15px'}
    ${({mini}) => mini && css`
        color: ${colors.gray};
        font-size: 13px;
    `};
`;

export const TextWrapper = styled.View`

`;