import styled from 'styled-components/native';
import {Image, TouchableOpacity, Dimensions} from 'react-native';
import {
  Container,
  PressableContainer,
} from '../../container/container.component';
import {colors} from '../../../infrastructure/theme/colors';
import IconForLocation from 'react-native-vector-icons/MaterialIcons';
import IconForNaira from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text} from '../../typography/text.component';
import {fontWeights} from '../../../infrastructure/theme/fonts';
import {lineHeights} from '../../../infrastructure/theme/spacing';
import IconForPlus from 'react-native-vector-icons/AntDesign';
import IconForMinus from 'react-native-vector-icons/AntDesign';
import Love from 'react-native-vector-icons/AntDesign';
let DEVICE = Dimensions.get('screen');

export const MultiPurposeCardParentContainer = styled(TouchableOpacity)`
  border-radius: 16px;
  overflow: hidden;
  background: ${({background}) => (background ? background : colors.white)};
  elevation: ${props => (props.elevation ? props.elevation : 1)};
`;
export const MultiPurposeCardContainer = styled(Container)`
  /* border-radius: 16; */
  height:${DEVICE.width/10};
  padding-vertical: 15;
  padding-horizontal: 3%;
  margin: 0 auto;
`;
export const ImageSection = styled(Container)`
  width: ${DEVICE.width/10};
  border-radius:50%;
`;
export const CardImage = styled.Image`
  width: 100%;
  height: 100%;
`;
export const InfoSection = styled(Container)`
  min-height: 70%;
  flex: 1;
`;

export const Wrapper = styled(Container)``;
export const FoodName = styled(Text)`
  color: ${colors.black.strong};
  font-weight: ${fontWeights.semiBold};
`;
export const IconWrapper = styled(Container)``;
export const LocationIcon = styled(IconForLocation)`
  color: ${colors.primary};
`;

export const AddressWrapper = styled(Container)``;
export const Address = styled(Text)`
  color: ${colors.text.soft};
`;

export const QuantitySection = styled(Container)`
  min-height: 70%;
`;
export const QuantityText = styled(Text)`
  color: ${colors.black.strong};
  font-weight: ${fontWeights.regular};
`;

export const LastOrPriceSection = styled(Container)`
  min-height: 70%;
`;

export const PriceWrapper = styled(Container)``;
export const PriceFigure = styled(Text)`
  color: ${colors.black.strong};
  font-weight: ${fontWeights.bold};
`;
export const NairaIcon = styled(IconForNaira)`
  color: ${colors.black.strong};
  line-height: ${lineHeights.copy};
`;
export const DynamicSectionWrapper = styled(Container)``;

export const FavouriteIconContainer = styled(Container)``;
export const FavouriteIcon = styled(Love)`
  color: ${colors.primary};
`;

export const OrderStatusWrapper = styled(Container)``;

export const OrderStatusText = styled(Text)`
  color: ${colors.primary};
  font-weight: ${fontWeights.semiBold};
`;
