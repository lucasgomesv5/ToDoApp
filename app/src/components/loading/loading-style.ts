import styled from "styled-components/native";
import { colors } from "../../theme";

export const StyledContainer = styled.View`
    align-items: center;
    justify-content: center;
    flex: 1;
    background-color: ${colors.primary};
`;

export const StyledLoading = styled.ActivityIndicator`
    size: 50;
    color: ${colors.white};
`;