import React from 'react';
import {Spacer} from '../spacer/spacer.component';
import {useNavigation} from '@react-navigation/core';
import {
  HeaderCover,
  LeftSide,
  MenuIconWrapper,
  HeaderText,
  LogoImage,
  UserImage,
  CloseArrow,
  RightSide,
} from './header.styles';
import {ArrowDown, Menu} from '../../assets/svg/Icons';

export const Header = ({svg, text, source, logo, closeArrow, background,position}) => {
  const navigation = useNavigation();
  return (
    <HeaderCover
      flexDirection="row"
      background={background}
      paddingHorizontal
      position={position}>
      <LeftSide flexDirection="row" width="auto" justifyContent="flex-start">
        {svg == 'menu' ? (
          <MenuIconWrapper onPress={() => navigation.toggleDrawer()}>
            <Menu onPress={() => {}} />
          </MenuIconWrapper>
        ) : null}
        {svg == 'previous' ? (
          <MenuIconWrapper onPress={() => navigation.goBack()}>
            <Arrow onPress={() => navigation.goBack()} />
          </MenuIconWrapper>
        ) : null}
        {svg && <Spacer size="medium" position="right" />}
        {text ? <HeaderText variant="smallTitle">{text}</HeaderText> : null}
        {logo ? <LogoImage source={logo} resizeMode="cover" /> : null}
      </LeftSide>
      {source ? (
        <RightSide
          onTouchStart={() => {
            navigation.navigate('CourierProfile');
          }}>
          <UserImage source={source} />
        </RightSide>
      ) : null}

      {closeArrow ? (
        <CloseArrow
          onTouchStart={() => {
            navigation.navigate('CourierProfile');
          }}>
          <ArrowDown />
        </CloseArrow>
      ) : null}
    </HeaderCover>
  );
};

// Header.defaultProps = {
//   text: 'Header',
// };
