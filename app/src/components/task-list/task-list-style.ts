import { colors } from "../../theme";
import styled from "styled-components/native";
import Feather from 'react-native-vector-icons/Feather';

export const StyledWrapper = styled.View`
    flex-direction: row;
    background-color: ${colors.backgroundCard};
    margin-bottom: 25px;
    border-radius: 5px;
    align-items: center;
    padding: 11px;
`;

export const StyledTask = styled.Text`
    font-size: 17px;
    color: ${colors.text};
    width: 70%;
    flex-wrap: wrap;
`;

export const StyledTrashButton = styled.TouchableOpacity`
    position: absolute;
    margin-left: 91%;
`;

export const StyledTrashIcon = styled(Feather)`
    color: ${colors.red};
`;

export const StyledEditButton = styled.TouchableOpacity`
    position: absolute;
    margin-left: 80%;
`;

export const StyledEditIcon = styled(Feather)`
    color: ${colors.text};
`;