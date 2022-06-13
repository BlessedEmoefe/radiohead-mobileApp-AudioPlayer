import React from 'react';
import {Spacer} from '../../components/spacer/spacer.component';
import {
  ContainerWrapper,
  RestrauntsBranchCardContainer,
  Wrapper,
  ImageSection,
  LinearGradientBackground,
  InfoSection,
  NameAndStarContainer,
  NameText,
  RatingStar,
  AddressAndRatingContainer,
  AddressText,
  RatingNumber,
} from './restrauntsBranchCard.styles';
import Toyota from '../../assets/images/toyota.jpg';
import {colors} from '../../infrastructure/theme/colors';

export const RestrauntsBranchCard = ({
  image,
  branchName,
  branchAddress,
  rating,
  onPress
}) => {
  return (
    <ContainerWrapper onPress={onPress}>
      <RestrauntsBranchCardContainer source={image} resizeMode="cover">
        <ImageSection background="transparent" height={130}></ImageSection>

        <LinearGradientBackground>
          <InfoSection height="auto" paddingVertical={'20px'}>
            <Wrapper paddingHorizontal alignItems="flex-start">
              <NameText variant="title" numberOfLines={1}>
                {branchName}
              </NameText>
            </Wrapper>

            <Spacer size="small" position="top" />

            <Wrapper alignItems="flex-start" paddingHorizontal>
              <AddressText variant="smallBody" numberOfLines={1}>
                {branchAddress}
              </AddressText>
            </Wrapper>
          </InfoSection>
        </LinearGradientBackground>
      </RestrauntsBranchCardContainer>
    </ContainerWrapper>
  );
};

RestrauntsBranchCard.defaultProps = {
  image: Toyota,
  branchName: 'Toyota',
  branchAddress: 'Click to view More',
};
