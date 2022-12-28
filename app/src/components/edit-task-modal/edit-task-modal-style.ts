import { colors } from "../../theme";
import styled from "styled-components/native";

export const StyledContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const StyledContent = styled.View`
    background-color: ${colors.background};
    width: 80%;
    height: 210px;
    border-radius: 8px;
    padding: 10px;
    shadow-color: #000;
    shadow-opacity: 2;
    elevation: 20;

`;