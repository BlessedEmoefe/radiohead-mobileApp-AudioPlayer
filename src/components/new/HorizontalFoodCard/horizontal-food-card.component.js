import React from 'react';
import {
  HorizontalContainer,
  LogoImage,
  Name,
  Description,
  FoodImageContainer,
  Order,
  FoodImage,
  ContainerWrapper,
  Details,
} from './styles';

import ProfileImage from '../../../assets/images/ProfileImage.png';
// import Food from "../../assets/pizza.png";

export const HorizontalFoodCard = ({name, description, onPress, source}) => {
  return (
    <HorizontalContainer>
      <ContainerWrapper>
        <Details>
          <LogoImage source={source} />
          <Name variant="smallTitle">{name}</Name>
          <Description variant="small">{description}</Description>
          <Order variant="small" onPress={onPress}>
            Order
          </Order>
        </Details>

        <FoodImageContainer>
          <FoodImage source={source} />
        </FoodImageContainer>
      </ContainerWrapper>
    </HorizontalContainer>
  );
};
