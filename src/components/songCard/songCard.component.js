import React from 'react';
import {
  SongCardContainer,
  Wrapper,
  SongDetailsSection,
  ImageSection,
  ImageCircle,
  SongImage,
  InfoSection,
  ButtonWrapper,
  Artist,
  SongName,
} from './songCard.styles';
import Optionicons from 'react-native-vector-icons/SimpleLineIcons';
import {colors} from '../../infrastructure/theme/colors';
import Eminem from '../../assets/images/Eminem.png';
import ButtonContainer from '../button/button.component';

export const SongCard = ({source, artist, songName}) => {
  return (
    <SongCardContainer flexDirection="row">
   
        <SongDetailsSection
          onPress={() => {
            console.log('Hello,this is the second onpress');
          }}>
          <Wrapper flexDirection="row">
            <ImageSection>
              <SongImage source={source} resizeMode={'cover'} />
              <ImageCircle />
            </ImageSection>
            <InfoSection>
              <Artist variant="body">{artist}</Artist>
              <SongName variant="smallBody">{songName}</SongName>
            </InfoSection>
          </Wrapper>
        </SongDetailsSection>
        <ButtonWrapper
          onPress={() => {
            console.log('Hello,this is the button onpress');
          }}>
          <Optionicons name="options-vertical" size={20} color={colors.white} />
        </ButtonWrapper>
    </SongCardContainer>
  );
};

SongCard.defaultProps = {
  source: Eminem,
  artist: 'Eminem',
  songName: 'Rap God',
};
