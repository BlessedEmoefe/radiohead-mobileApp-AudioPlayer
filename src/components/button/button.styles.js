import styled from "styled-components/native";
import { Text } from "../typography/text.component";
import {
  fonts,
  fontWeights,
  fontSizes,
} from "../../infrastructure/theme/fonts";
import { Container } from "../container/container.component";
import { colors } from "../../infrastructure/theme/colors";

export const ButtonContainerWrapper = styled.TouchableOpacity`
  width: ${(props) => (props.width ? props.width : "100%")};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "4px")};
  overflow: hidden;
  background:blue;
`;
export const ButtonWrapper = styled(Container)`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 45px;
  background:${props =>
    props.backgroundColor ? props.backgroundColor : colors.primary};
  /* width:auto; */
`;

export const ButtonText = styled(Text)`
  font-weight: ${fontWeights.bold};
 color: ${(props) => (props.color ? props.color : colors.white)};
`;
