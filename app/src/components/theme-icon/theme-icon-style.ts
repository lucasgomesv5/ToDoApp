import styled from "styled-components/native";
import Ionicons from 'react-native-vector-icons/Ionicons';

export const StyledContainer = styled.View`
  align-items: flex-end;
  padding-right: 20px;
`;

export const StyledTouchable = styled.TouchableOpacity`

`;

export const StyledSunIcon = styled(Ionicons)`
  color: ${props => props.theme.colors.yellow};
`;

export const StyledMoonIcon = styled(Ionicons)`
  color: ${props => props.theme.colors.gray};
`;