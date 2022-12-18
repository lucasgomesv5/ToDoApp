import { colors } from "../../../theme";
import styled from "styled-components/native";
import Animated, {
  Easing,
  FadeInUp,
  FadeOut,
  FadeOutLeft,
  FadeOutRight,
  Layout,
} from 'react-native-reanimated';


export const StyledContentModal = styled(Animated.View).attrs(
  () => ({
    entering: FadeInUp.delay(10).duration(850).easing(Easing.inOut(Easing.ease))
  })
)`
    background-color: ${colors.background};
    padding: 10px;
    color: ${colors.text};
    flex: 1;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    padding: 15px;
`