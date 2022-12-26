import { colors } from "../../theme";
import styled, { css } from "styled-components/native";
import Animated, {
  Easing,
  FadeInDown,
  FadeInUp,
  FadeOut,
  FadeOutLeft,
  FadeOutRight,
  Layout,
} from 'react-native-reanimated';
import {ContentModalProps} from './content-modal-index'


export const StyledContentModal = styled(Animated.View).attrs(
  () => ({
    entering: FadeInDown.delay(10).duration(850).easing(Easing.inOut(Easing.ease))
  })
)<ContentModalProps>`
    background-color: ${colors.background};
    padding: 10px;
    color: ${colors.text};
    flex: 1;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    padding: 15px;
    ${({marginTop}) => marginTop && css<ContentModalProps>`
      margin-top: ${({marginTop})=> marginTop};
    `}
`