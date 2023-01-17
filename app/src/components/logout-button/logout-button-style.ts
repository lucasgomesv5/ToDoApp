import styled from "styled-components/native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const StyledTouchable = styled.TouchableOpacity`
    margin-left: 33%;
    margin-top: 5px;
`;

export const StyledLogoutIcon = styled(MaterialIcons)`
    color: ${props => props.theme.colors.white};
`;