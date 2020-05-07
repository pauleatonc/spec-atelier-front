import styled from 'styled-components';
import {
  COLOR_BLACK,
  MEDIA_QUERY_SMALL,
  MEDIA_QUERY_MEDIUM,
} from '../../config/constants/styled-vars';

import {
  Button as ButtonItem,
} from '../../components/SpecComponents';

const BORDER_COLOR = '#c9c9c9';
const BACKGROUND_SUB_HEADER = '#f5f5f5';

export const Container = styled.section`
  margin: 24px 0; 
`;

export const Content = styled.div`
  min-height: 200px;
  width: 100%;
`;

export const ContentData = styled.section`
  border-radius: 15px;
  border: solid 1px ${BORDER_COLOR};
  margin: 24px 0;
  padding: 44px 40% 44px 104px;
  ${MEDIA_QUERY_MEDIUM} {
    padding: 44px 104px;
  }
  ${MEDIA_QUERY_SMALL} {
    padding: 44px 16px;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 16px 0;
  fit-content(33%);
  ${MEDIA_QUERY_SMALL} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Title = styled.section`
  margin: 24px 0;
  font-family: Lato;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
  color: ${COLOR_BLACK};
`;

export const ButtonContainer = styled.div`
  padding: 8px 8px;
`;

export const Button = styled(ButtonItem)`
  width: 100%;
`;

export const ButtonIcon = styled.div`
  background-image: url('${({ icon }) => icon}');
  background-repeat: no-repeat;
  background-size: cover;
  width: 20px;
  height: 20px;
  margin: auto 4px auto 0;
`;

export const SubHeader = styled.section`
  width: 100%;
  height: 62px;
  border-radius: 9px;
  background-color: ${BACKGROUND_SUB_HEADER};
  font-family: Lato;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
  color: ${COLOR_BLACK};
  display: flex;
  align-items: center;
  padding-left: 104px;
`;

