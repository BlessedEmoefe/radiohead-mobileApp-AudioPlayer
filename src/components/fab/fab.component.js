import React from "react";
import {FabContainer,FabIcon,FabLabel} from "./fab.styles"
import { Spacer } from "../../components/spacer/spacer.component";
import { colors } from "../../infrastructure/theme/colors";
import { CurrentSongcard } from "../currentSongCard/currentSongCard.component";

export const Fab = () => {
  return (
    <FabContainer>
      {/* <FabIcon
        name="gps-fixed"
        size={30}
        color={colors.primary}
      /> */}
      {/* <Spacer size="medium" position="right" />
      <FabLabel variant="caption">Nearby</FabLabel> */}

      <CurrentSongcard />
    </FabContainer>
  );
};
