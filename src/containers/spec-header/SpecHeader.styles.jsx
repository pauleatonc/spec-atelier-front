import styled from 'styled-components';
import {
  SPEC_DOWNLOAD_ACTIVE,
  SPEC_DOWNLOAD_SOURCE,
  SPEC_MONETIZATION_ACTIVE,
  SPEC_MONETIZATION,
} from '../../assets/Images';
import {
  MINE_SHAFT,
  MEDIA_QUERY_SMALL,
  NAVBAR_HEIGHT,
  WHITE,
  DUSTY_GRAY_RGB,
} from '../../config/constants/styled-vars';

export const Root = styled.div`
  display: flex;
  width: 100%;
  height: ${NAVBAR_HEIGHT};
  background-color: ${WHITE};
  border-bottom-right-radius: 2px;
  border-top-right-radius: 2px;
  padding: 5px;
  align-items: flex-end;
  position: relative;
`;

export const Separator = styled.span`
  background-color: rgba(${DUSTY_GRAY_RGB}, 0.49);
  height: 16px;
  width: 2px;
  ${MEDIA_QUERY_SMALL} {
    display: none;
  }
`;

export const Section = styled.section`
  padding: 0 23px;
  padding-left: ${({ withoutPaddingLeft }) =>
    withoutPaddingLeft ? '0' : '23px'};
  ${MEDIA_QUERY_SMALL} {
    padding: 0 15px;
  }
`;

export const ProjectName = styled(Section)`
  max-width: 200px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: ${MINE_SHAFT};
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  line-height: 1.58;
  ${MEDIA_QUERY_SMALL} {
    font-size: 12px;
  }
`;

const Span = styled.span`
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
  display: block;
  height: 24px;
  width: 24px;
`;

export const Download = styled(Span)`
  background-image: url('${SPEC_DOWNLOAD_SOURCE}');
  &:hover {
    background-image: url('${SPEC_DOWNLOAD_ACTIVE}');
  }
`;

export const Monetization = styled(Span)`
  background-image: url('${SPEC_MONETIZATION}');
  &:hover {
    background-image: url('${SPEC_MONETIZATION_ACTIVE}');
  }
`;

export const Logo = styled.div`
  ${MEDIA_QUERY_SMALL} {
    display: none;
  }
`;

export const MobileLogo = styled.div`
  display: none;
  ${MEDIA_QUERY_SMALL} {
    display: flex;
  }
`;

export const SpecOptions = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex: 1;
`;

export const ContainerTeam = styled.div`
  display: flex;
  align-items: center;
`;

export const PermissionsButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 23px;
`;

export const TextButton = styled.div`
  padding-left: 8px;
`;
