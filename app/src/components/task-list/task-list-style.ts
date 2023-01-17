import styled from "styled-components/native";
import Feather from 'react-native-vector-icons/Feather';

export const StyledWrapper = styled.View`
    flex-direction: row;
    background-color: ${props => props.theme.colors.backgroundCard};
    margin-bottom: 25px;
    border-radius: 5px;
    align-items: center;
    padding: 11px;
`;

export const StyledTask = styled.Text`
    font-size: 17px;
    color: ${props => props.theme.colors.text};
    width: 70%;
    flex-wrap: wrap;
`;

export const StyledTrashButton = styled.TouchableOpacity`
    position: absolute;
    margin-left: 91%;
`;

export const StyledTrashIcon = styled(Feather)`
    color: ${props => props.theme.colors.red};
`;

export const StyledEditButton = styled.TouchableOpacity`
    position: absolute;
    margin-left: 80%;
`;

export const StyledEditIcon = styled(Feather)`
    color: ${props => props.theme.colors.text};
`;