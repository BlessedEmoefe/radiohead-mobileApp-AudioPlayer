import React from 'react';
import {colors} from '../../infrastructure/theme/colors';
import {Spacer} from '../spacer/spacer.component';
import {
  ButtonContainerWrapper,
  ButtonWrapper,
  ButtonText,
} from './button.styles';

const ButtonContainer = ({
  backgroundColor = colors.primary,
  color = '#fff',
  text = 'Register',
  rightIcon,
  leftIcon,
  onPress,
  width,
  borderRadius,
}) => {
  return (
    <ButtonContainerWrapper
      onPress={onPress ? () => onPress() : null}
      width={width}
      borderRadius={borderRadius}>
      <ButtonWrapper
        flexDirection="row"
        backgroundColor={backgroundColor}
        onPress={() => console.log('onPress')}>
        {leftIcon ? leftIcon : null}
        {leftIcon ? <Spacer position="left" size="medium" /> : null}
        <ButtonText color={color} variant="smallBody">
          {text}
        </ButtonText>
        {rightIcon ? <Spacer position="right" size="medium" /> : null}
        {rightIcon ? rightIcon : null}
      </ButtonWrapper>
    </ButtonContainerWrapper>
  );
};
export default ButtonContainer;
