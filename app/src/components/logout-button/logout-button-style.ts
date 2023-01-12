import styled from "styled-components/native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors } from "../../theme";

export const StyledTouchable = styled.TouchableOpacity`
    margin-left: 33%;
    margin-top: 5px;
`;

export const StyledLogoutIcon = styled(MaterialIcons)`
    color: ${colors.white};
`;