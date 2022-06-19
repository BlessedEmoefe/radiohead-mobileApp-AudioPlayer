import styled from 'styled-components/native';
import {
  Image,
  TouchableOpacity,
  Dimensions,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from 'react-native';
import {Container, PressableContainer} from '../container/container.component';
import {colors} from '../../infrastructure/theme/colors';
import {Text} from '../typography/text.component';
import {fontWeights} from '../../infrastructure/theme/fonts';

let DEVICE = Dimensions.get('screen');

export const SongCardContainer = styled(Container)`
  background: ${({background}) => (background ? background : colors.bg.light)};
  border-radius: 45;
  padding-vertical: 10;
  padding-horizontal: 10;
  width: 100%;
  height: 100%;
`;
export const Wrapper = styled(Container)`
  background: ${({background}) => (background ? background : 'transparent')};
  /* height: 62; */
`;
export const SongDetailsSection = styled(TouchableOpacity)`
  height: 100%;
  width: 90%;
  border-radius: ${DEVICE.width / 8};
  justify-content: center;
`;
export const ImageSection = styled(Container)`
  height: ${DEVICE.width / 8};
  width: ${DEVICE.width / 8};
  border-radius: ${DEVICE.width / 8};
  justify-content: center;
`;

export const ImageCircle = styled(Container)`
  height: ${DEVICE.width / 22};
  width: ${DEVICE.width / 22};
  background: ${colors.bg.dark};
  position: absolute;
  border-radius: ${DEVICE.width / 22};
`;

export const SongImage = styled.Image`
  border-radius: 50;
  width: 100%;
  height: 100%;
`;

export const InfoSection = styled(Container)`
  flex: 1;
  padding-left: ${DEVICE.width / 25};
  align-items: flex-start;
`;

export const Artist = styled(Text)`
  color: ${colors.text.light};
  font-weight: ${fontWeights.bold};
`;

export const SongName = styled(Text)`
  color: ${colors.text.dark};
`;

export const ButtonWrapper = styled(TouchableNativeFeedback)`
  width: 10%;
`;
