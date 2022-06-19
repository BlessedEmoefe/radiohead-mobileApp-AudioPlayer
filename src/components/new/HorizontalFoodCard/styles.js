import {LinearGradient} from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import {Container} from '../container/container.component';
import {Text} from '../../typography/text.component';
import {theme} from '../../../infrastructure/theme';

export const HorizontalContainer = styled.View`
  width: 280px;
  height: 120px;
  border-radius: 40px;
  overflow: hidden;
  margin-left: 20px;
`;
export const ContainerWrapper = styled.View`
  flex: 1;
  display: flex;
  overflow: hidden;
  flex-direction: row;
  align-items: center;
  display: flex;
`;
export const Details = styled.View`
  width: 70%;
  align-items: center;
`;

export const LogoImage = styled.Image`
  height: 32px;
  width: 50px;
`;
export const Name = styled(Text)`
  width: 70%;
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.white};
`;
export const Description = styled(Text)`
  width: 65%;
  color: ${theme.colors.white};
`;
export const FoodImageContainer = styled.View`
  width: 40%;
  position: absolute;
  bottom: 2px;
  left: 55%;
`;
export const FoodImage = styled.Image`
  width: 140px;
  height: 150px;
`;
export const Order = styled(Text)`
  width: 65%;
  color: ${theme.colors.white};
`;
