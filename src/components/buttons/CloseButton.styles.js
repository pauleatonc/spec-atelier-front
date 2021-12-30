import styled from 'styled-components';
import { MEDIA_QUERY_SMALL } from '../../config/constants/styled-vars';
import { CLOSE_ICON} from '../../assets/Images';

export const CloseIcon = styled.i`
  display: flex;
  align-self: center;
  justify-self: self-end;
  align-items: self-end;
  cursor: pointer;
  content: url(${CLOSE_ICON});
  ${MEDIA_QUERY_SMALL} {
    display: ${({ hideInMobile = false }) => (hideInMobile ? 'none' : 'flex')};
  }
`;
