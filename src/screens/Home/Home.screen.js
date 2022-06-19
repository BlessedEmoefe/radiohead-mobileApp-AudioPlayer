import React, {useState, useEffect} from 'react';
import {SafeArea} from '../../components/utility/safe-area.component';
import {
  PageContainer,
  PaddedPageContainer,
  PageTitle,
  ButtonWrapper,
  ContentContainer,
} from './Home.styles';
import {Header} from '../../components/header/header.component';
import {Spacer} from '../../components/spacer/spacer.component';
// import {colors} from '../../infrastructure/theme/colors';
// import {useFetch} from '../../components/hooks/useFetch';
import {songDetails} from '../data';
import {SearchBar} from '../../components/searchBar/searchBar.component';
import ProfileImage from '../../assets/images/ProfileImage.png';
import Logo from '../../assets/images/Logo.png';
import ButtonContainer from '../../components/button/button.component';
import {colors} from '../../infrastructure/theme/colors';
import {SongCard} from '../../components/songCard/songCard.component';
import { Fab } from '../../components/fab/fab.component';
import Controller from '../../components/controller/controller.component';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [songList, setSongList] = useState(songDetails);

  const filteredsongList = songList.filter(song =>
    song.songName.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <SafeArea>
      <PageContainer>
        <Header source={ProfileImage} logo={Logo} />
        <Spacer size="large" position="top" />
        <PaddedPageContainer paddingHorizontal>
          <PageTitle variant="h5">Today's Hit</PageTitle>
          <Spacer size="large" position="top" />
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <Spacer size="large" position="top" />
          {/* <Controller /> */}
          <Spacer size="large" position="top" />
          <ButtonWrapper>
            <ButtonContainer
              color="#fff"
              text="Shuffle Play"
              onPress={() => {}}
              width={'55%'}
            />

            <ButtonContainer
              backgroundColor={colors.bg.light}
              color="#fff"
              text="Play"
              onPress={() => {}}
              width={'40%'}
            />
          </ButtonWrapper>
          <Spacer size="large" position="top" />
          <ContentContainer
            showsVerticalScrollIndicator={false}
            data={filteredsongList}
            key={Math.random()}
            renderItem={({item}) => (
              <>
                <SongCard
                  source={item.image}
                  artist={item.artist}
                  songName={item.songName}
                />
                <Spacer size="medium" position="top" />
              </>
            )}
          />
          <Fab />
        </PaddedPageContainer>
      </PageContainer>
    </SafeArea>
  );
};
export default Home;
