import styled from 'styled-components';
import {
  COLOR_BLACK,
  MEDIA_QUERY_SMALL,
  MEDIA_QUERY_MEDIUM,
  COLOR_WHITE,
  COLOR_DARKGREY,
  COLOR_PRIMARY,
} from '../../config/constants/styled-vars';

import {
  Button as ButtonItem,
  Input as SpecInput,
} from '../../components/SpecComponents';

import INSTITUTIONAL from '../../assets/images/project/project_type/ic-institutional_grey.svg';
import HOSPITAL from '../../assets/images/project/project_type/ic-hospitaler_grey.svg';
import REAL_STATE from '../../assets/images/project/project_type/ic-real_state_grey.svg';
import RESIDENTIAL from '../../assets/images/project/project_type/ic-residential_grey.svg';
import COMMERCIAL from '../../assets/images/project/project_type/ic-comercial_grey.svg';
import EDUCATIONAL from '../../assets/images/project/project_type/ic-educational_grey.svg';

import INSTITUTIONAL_ACTIVE from '../../assets/images/project/project_type/ic-institutional_green.svg';
import HOSPITAL_ACTIVE from '../../assets/images/project/project_type/ic-hospitaler_green.svg';
import REAL_STATE_ACTIVE from '../../assets/images/project/project_type/ic-real_state_green.svg';
import RESIDENTIAL_ACTIVE from '../../assets/images/project/project_type/ic-residential_green.svg';
import COMMERCIAL_ACTIVE from '../../assets/images/project/project_type/ic-comercial_green.svg';
import EDUCATIONAL_ACTIVE from '../../assets/images/project/project_type/ic-educational_green.svg';

import ICON_CHECK from '../../assets/images/icons/check.svg';

const types = {
  INSTITUTIONAL,
  HOSPITAL,
  REAL_STATE,
  RESIDENTIAL,
  COMMERCIAL,
  EDUCATIONAL,
};

const activeTypes = {
  INSTITUTIONAL: INSTITUTIONAL_ACTIVE,
  HOSPITAL: HOSPITAL_ACTIVE,
  REAL_STATE: REAL_STATE_ACTIVE,
  RESIDENTIAL: RESIDENTIAL_ACTIVE,
  COMMERCIAL: COMMERCIAL_ACTIVE,
  EDUCATIONAL: EDUCATIONAL_ACTIVE,
};

const BORDER_COLOR = '#c9c9c9';
const BACKGROUND_SUB_HEADER = '#f5f5f5';

export const Container = styled.section`
  padding: 24px 0;
`;

export const Content = styled.div`
  min-height: 200px;
  width: 100%;
  margin-bottom: 32px;
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
    padding: 0px 16px;
  }
`;

export const StepperContainer = styled.section`
  padding-bottom: 16px;
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
  padding: 8px 16px;
  position: relative;
`;

export const Button = styled(ButtonItem)`
  width: 100%;
`;

export const IconCheck = styled.span`
  position: absolute;
  background-image: url('${ICON_CHECK}');
  background-repeat: no-repeat;
  background-size: cover;
  width: 16px;
  height: 16px;
  left: 24px;
  top: 2px;
  background-color: ${COLOR_WHITE};
  display: ${({ show }) => show ? 'initial' : 'none'}
`;

export const ButtonIcon = styled.div`
  background-image: url('${({ type, active }) => active ? activeTypes[type] : types[type] }');
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
  margin: 16px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const Text = styled.div`
  height: 16px;
  font-family: Lato;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
  color: ${COLOR_BLACK};
  margin: 16px 0;
`;

export const PermissionOptions = styled.section`
  display: grid;
  grid-gap: 32px;
  flex: 1;
  grid-template-columns: repeat(2, 1fr);
`;
  
export const PermissionOption = styled.section`
  cursor: pointer;
  min-height: 120px;
  border-radius: 4px;
  border: solid 1px ${({ active }) => active ? COLOR_PRIMARY : COLOR_DARKGREY};
  background-color: ${({ active }) => active ? COLOR_DARKGREY : COLOR_WHITE};
  padding: 24px 36px;
`;

export const PermissionTitle = styled.p`
  height: 16px;
  font-family: Lato;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
  color: ${COLOR_BLACK};
`;

export const PermissionDescription = styled.p`
  padding: 16px 0;
  width: 100%;
  font-family: Lato;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
  color: ${COLOR_BLACK};
`;

export const InputContent = styled.div`
  position: relative;
`;

export const Suffix = styled.span`
  position: absolute;
  right: 16px;
  top: 12px;
  z-index: 1;
  font-family: Lato;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
`;

export const Section = styled.section`
  width: ${({ width }) => width ? width : '100%'};
`;
