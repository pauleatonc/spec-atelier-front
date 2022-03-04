import styled from 'styled-components';
import { Button as ButtonItem } from '../../components/SpecComponents';
import {
  BORDER_GREY,
  MINE_SHAFT,
  MEDIA_QUERY_SMALL,
  MEDIA_QUERY_MEDIUM,
  WHITE,
  GALLERY,
  PRIMARY,
  DARKESTGREY,
  SILVER_CHALICE,
  SILVER,
  ALTO,
} from '../../config/constants/styled-vars';
import {
  INSTITUTIONAL,
  HOSPITAL,
  REAL_STATE,
  RESIDENTIAL,
  HOTEL,
  EDUCATIONAL,
  COMMERCIAL,
  OFFICE,
  INDUSTRIAL,
  INSTITUTIONAL_ACTIVE,
  HOSPITAL_ACTIVE,
  REAL_STATE_ACTIVE,
  RESIDENTIAL_ACTIVE,
  HOTEL_ACTIVE,
  EDUCATIONAL_ACTIVE,
  COMMERCIAL_ACTIVE,
  OFFICE_ACTIVE,
  INDUSTRIAL_ACTIVE,
  CHECK_SOURCE,
} from '../../assets/Images';

const types = {
  INSTITUTIONAL,
  HOSPITAL,
  REAL_STATE,
  RESIDENTIAL,
  HOTEL,
  EDUCATIONAL,
  COMMERCIAL,
  OFFICE,
  INDUSTRIAL,
};

const activeTypes = {
  INSTITUTIONAL: INSTITUTIONAL_ACTIVE,
  HOSPITAL: HOSPITAL_ACTIVE,
  REAL_STATE: REAL_STATE_ACTIVE,
  RESIDENTIAL: RESIDENTIAL_ACTIVE,
  HOTEL: HOTEL_ACTIVE,
  EDUCATIONAL: EDUCATIONAL_ACTIVE,
  COMMERCIAL: COMMERCIAL_ACTIVE,
  OFFICE: OFFICE_ACTIVE,
  INDUSTRIAL: INDUSTRIAL_ACTIVE,
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
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
  color: ${MINE_SHAFT};
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
  background-image: url('${CHECK_SOURCE}');
  background-repeat: no-repeat;
  background-size: cover;
  width: 16px;
  height: 16px;
  left: 10%;
  top: -6px;
  background-color: ${WHITE};
  display: ${({ show }) => (show ? 'initial' : 'none')}
`;

export const ButtonIcon = styled.div`
  font-size: 12px;
  background-image: url('${({ type, active }) =>
    active ? activeTypes[type] : types[type]}');
  background-repeat: no-repeat;
  background-size: cover;
  width: 20px;
  height: 20px;
  margin: auto 8px auto 4px;
  object-fit: contain;
`;

export const SubHeader = styled.section`
  width: 100%;
  height: 62px;
  border-radius: 9px;
  background-color: ${SILVER_CHALICE};
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
  color: ${MINE_SHAFT};
  display: flex;
  align-items: center;
  padding-left: 104px;
  margin: 16px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const Text = styled.div`
  height: 16px;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
  color: ${MINE_SHAFT};
  margin: 16px 0;
`;

export const TextButton = styled.div`
  height: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
  clear: both;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  display: flex;
  align-items: center;
`;

export const Label = styled.div`
  height: 16px;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.42;
  letter-spacing: 0.86px;
  color: ${MINE_SHAFT};
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
  min-width: 300px;
  border-radius: 4px;
  border: solid 1px ${({ active }) => (active ? PRIMARY : BORDER_GREY)};
  background-color: ${({ active }) => (active ? GALLERY : WHITE)};
  padding: 24px 36px;
`;

export const PermissionTitle = styled.p`
  height: 16px;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
  color: ${MINE_SHAFT};
`;

export const PermissionDescription = styled.p`
  padding: 16px 0;
  width: 100%;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
  color: ${MINE_SHAFT};
`;

export const InputContent = styled.div`
  position: relative;
`;

export const Suffix = styled.span`
  position: absolute;
  right: 16px;
  top: 12px;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
  color: ${DARKESTGREY};
`;

export const Section = styled.section`
  width: ${({ width }) => (width ? width : '100%')};
`;

export const SelectorDate = styled.div`
  opacity: 0.62;
  font-size: 12px;
  color: ${MINE_SHAFT};
  width: 100%;
  border: 0;
  outline: 0;
  border-bottom: 2px solid ${SILVER_CHALICE};
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
  &:active,
  &:focus {
    outline: 0;
  }
  &::placeholder {
    color: ${SILVER_CHALICE};
  }
  &:disabled {
    background-color: ${ALTO};
  }
`;

export const SelectorDateContainer = styled.div`
  min-width: 140px;
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 4px 0;
`;

export const InputText = styled.div`
  white-space: nowrap;
  padding: 4px 16px 8px 16px;
  border: 0;
  outline: 0;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${SILVER};
  font-size: 12px;
  letter-spacing: 1px;
  color: ${MINE_SHAFT};
  border-radius: 0;
  width: 240px;
`;

export const DropIcon = styled.img`
  cursor: pointer;
`;

export const TextValue = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
