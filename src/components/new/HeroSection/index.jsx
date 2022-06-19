import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Container, Quantity } from "./styles";
// import Counter from "react-native-counters";

export const HeroSection = () => {
  return (
    <Container>
      <Quantity>
        {/* <Counter start={1} buttonStyle={{ borderWidth: 0 }} /> */}
      </Quantity>
    </Container>
  );
};
