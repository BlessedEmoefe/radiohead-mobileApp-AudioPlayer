import styled from 'styled-components/native';
import {
  Container,
  FlatListContainer,
} from '../../components/container/container.component';
import {Text} from '../../components/typography/text.component';
import {colors} from '../../infrastructure/theme/colors';

export const PageContainer = styled(Container)`
  flex: 1;
  background-color: ${colors.bg.dark};

`;
export const PaddedPageContainer = styled(Container)`
  flex: 1;
  background-color: ${colors.bg.dark};
  align-items: flex-start;
`;
export const ContentContainer = styled(FlatListContainer)``;

export const PageTitle = styled(Text)`
  color: ${colors.white};
  background-color: 'red';

`;

export const ButtonWrapper = styled(Container)`
  width: 100%;
  height: auto;
  flex-direction: row;
  justify-content: space-between;
  align-items:center ;
`;
