import styled from "styled-components/native";
import { Text } from "../../components/typography/text.component";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { colors } from "../../infrastructure/theme/colors";
import { Container } from "../container/container.component";

export const FabContainer = styled(Container)`
  background-color: ${colors.white};
  elevation: 2;
  width: 90%;
  position: absolute;
  border-radius: 45;
  margin:0 auto;
  right: 10%;
  left: 10%;
  bottom: 2%;
`;

export const FabLabel = styled(Text)`
  color: ${colors.text.soft};
`;
export const FabIcon = styled(MaterialIcons)``;



