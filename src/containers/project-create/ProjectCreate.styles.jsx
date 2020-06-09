import styled from 'styled-components';
import {
  BORDER_GREY,
  COLOR_BLACK,
  MEDIA_QUERY_SMALL,
  MEDIA_QUERY_MEDIUM,
  COLOR_WHITE,
  COLOR_LIGHTERGREY,
  COLOR_PRIMARY,
  COLOR_DARKESTGREY,
  COLOR_GREY,
} from '../../config/constants/styled-vars';

import {
  Button as ButtonItem,
} from '../../components/SpecComponents';

import INSTITUTIONAL from '../../assets/images/project/project_type/ic-institutional_grey.svg';
import HOSPITAL from '../../assets/images/project/project_type/ic-hospitaler_grey.svg';
import REAL_STATE from '../../assets/images/project/project_type/ic-real_state_grey.svg';
import RESIDENTIAL from '../../assets/images/project/project_type/ic-residential_grey.svg';
import HOTEL from '../../assets/images/project/project_type/ic-hotel_grey.svg';
import EDUCATIONAL from '../../assets/images/project/project_type/ic-educational_grey.svg';

import INSTITUTIONAL_ACTIVE from '../../assets/images/project/project_type/ic-institutional_green.svg';
import HOSPITAL_ACTIVE from '../../assets/images/project/project_type/ic-hospitaler_green.svg';
import REAL_STATE_ACTIVE from '../../assets/images/project/project_type/ic-real_state_green.svg';
import RESIDENTIAL_ACTIVE from '../../assets/images/project/project_type/ic-residential_green.svg';
import HOTEL_ACTIVE from '../../assets/images/project/project_type/ic-hotel_green.svg';
import EDUCATIONAL_ACTIVE from '../../assets/images/project/project_type/ic-educational_green.svg';

import ICON_CHECK from '../../assets/images/icons/check.svg';

const types = {
  INSTITUTIONAL,
  HOSPITAL,
  REAL_STATE,
  RESIDENTIAL,
  HOTEL,
  EDUCATIONAL,
};

const activeTypes = {
  INSTITUTIONAL: INSTITUTIONAL_ACTIVE,
  HOSPITAL: HOSPITAL_ACTIVE,
  REAL_STATE: REAL_STATE_ACTIVE,
  RESIDENTIAL: RESIDENTIAL_ACTIVE,
  HOTEL: HOTEL_ACTIVE,
  EDUCATIONAL: EDUCATIONAL_ACTIVE,
};


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
  border: solid 1px ${BORDER_GREY};
  margin: 24px 0;
  padding: 44px 50% 44px 104px;
  ${MEDIA_QUERY_MEDIUM} {
    padding: 44px 104px;
  }
  ${MEDIA_QUERY_SMALL} {
    padding: 0 16px;
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
  grid-column-gap: 1em;
  grid-row-gap: 32px;
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
  position: relative;
`;

export const Button = styled(ButtonItem)`
  text-transform: capitalize;
  width: 100%;
`;

export const IconCheck = styled.span`
  position: absolute;
  background-image: url('${ICON_CHECK}');
  background-repeat: no-repeat;
  background-size: cover;
  width: 16px;
  height: 16px;
  left: 10%;
  top: -6px;
  background-color: ${COLOR_WHITE};
  display: ${({ show }) => show ? 'initial' : 'none'}
`;

export const ButtonIcon = styled.div`
  font-family: Lato;
  font-size: 12px;
  background-image: url('${({ type, active }) => active ? activeTypes[type] : types[type] }');
  background-repeat: no-repeat;
  background-size: cover;
  width: 20px;
  height: 20px;
  margin: auto 8px auto 0;
`;

export const SubHeader = styled.section`
  width: 100%;
  height: 62px;
  border-radius: 9px;
  background-color: ${COLOR_GREY};
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

export const Label = styled.div`
  height: 16px;
  font-family: Lato;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.42;
  letter-spacing: 0.86px;
  color: ${COLOR_BLACK};
  margin: 10px 0;
`;

export const PermissionOptions = styled.section`
  margin: 48px 0;
  display: grid;
  grid-gap: 32px;
  flex: 1;
  grid-template-columns: repeat(2, 1fr);
`;
  
export const PermissionOption = styled.section`
  cursor: pointer;
  min-height: 120px;
  border-radius: 4px;
  border: solid 1px ${({ active }) => active ? COLOR_PRIMARY : BORDER_GREY};
  background-color: ${({ active }) => active ? COLOR_LIGHTERGREY : COLOR_WHITE};
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
  color: ${COLOR_DARKESTGREY};
`;

export const Section = styled.section`
  width: ${({ width }) => width ? width : '100%'};
`;

export const SelectorDate = styled.div`
  opacity: 0.62;
  font-family: Lato;
  font-size: 12px;
  color: ${COLOR_BLACK};
  width: 100%;
  border: 0;
  outline: 0;
  border-bottom: 2px solid ${COLOR_GREY};
  align-items: center;
  background-color: transparent;
  display: inline-flex;
  height: 38px;
  letter-spacing: 1px;
  overflow: hidden;
  padding: 0 32px 0 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  min-width: 140px;

  &:active, &:focus {
    outline: 0;
  }

  &::placeholder {
    color: ${COLOR_GREY};
  }

  &:disabled {
    background-color: #DDD;
  }
`;

export const SelectorDateContainer = styled.div`
  min-width: 140px;
  width: 100%;
  display:flex;
  flex: 1;
  justify-content: space-between;
  padding: 4px 0;

`;