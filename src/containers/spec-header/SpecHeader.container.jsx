import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import {
  cleanDownload,
  downloadSpecDocument,
  downloadBudgetDocument,
} from './SpecHeader.actions';
import { onShowModal } from '../spec-modal-team/actions';
import { TYPE_MODALS, STATUS_INVITATIONS } from '../spec-modal-team/constants';
import { ContainerUsers } from '../spec-modal-team/components/ProjectInfoShare/components/CheckItem/styles';
import ItemsNavBar from '../../components/navbar/navbar-app/Components/ItemsNavBar';
import { Button } from '../../components/SpecComponents';
import IconUser from '../../components/IconUser';
import { MAX_SCREEN_MEDIUM_WIDTH } from '../../config/constants/styled-vars';
import { LOGO_MOBILE, LOGO_SMALL_COLOR } from '../../assets/Images';
import {
  Root,
  Separator,
  Section,
  ProjectName,
  Download,
  Monetization,
  SpecOptions,
  PermissionsButtonContainer,
  TextButton,
  ContainerTeam,
} from './SpecHeader.styles';

/** The SpecHeader's container */
const SpecHeader = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { project } = useSelector((state) => state.specDocument);
  const { url } = useSelector((state) => state.specHeader);

  const openModalTeam = () =>
    dispatch(
      onShowModal(
        project?.team.length
          ? TYPE_MODALS.TEAM_MODAL
          : TYPE_MODALS.NEW_MEMBER_MODAL,
      ),
    );

  const handleDownloadClick = () =>
    dispatch(downloadSpecDocument({ specID: id }));
  const handleDownloadBudgetClick = () =>
    dispatch(downloadBudgetDocument({ specID: id }));

  useEffect(() => () => dispatch(cleanDownload()), []);

  useEffect(() => {
    const downloadDoc = () => {
      const link = document.createElement('a');
      link.download = url;
      link.href = url;
      link.target = '_blank';
      link.id = 'doc';
      document.body.appendChild(link);
      link.click();
    };
    if (url) downloadDoc();
  }, [url]);

  const imgLogo = () => {
    let src;
    if (window.matchMedia(MAX_SCREEN_MEDIUM_WIDTH).matches) {
      src = LOGO_SMALL_COLOR;
    } else {
      src = LOGO_MOBILE;
    }
    return <img src={src} alt="Logotipo de SpecAtelier" />;
  };

  return (
    <Root>
      <SpecOptions>
        <Section withoutPaddingLeft>
          <Link to="/projects" data-view="projects">
            {imgLogo()}
          </Link>
        </Section>
        <Separator />
        <ProjectName>{project?.name}</ProjectName>
        <Separator />
        <Section>
          <Download onClick={handleDownloadClick} title="Descargar proyecto" />
        </Section>
        <Separator />
        <Section>
          <Monetization
            onClick={handleDownloadBudgetClick}
            title="Descargar presupuesto"
          />
        </Section>
        <Separator />
        {project?.team && (
          <ContainerTeam>
            <PermissionsButtonContainer>
              <Button width="120px" variant="primary" onClick={openModalTeam}>
                <i className="fas fa-share-alt" />
                <TextButton>Equipo</TextButton>
              </Button>
            </PermissionsButtonContainer>
            <ContainerUsers>
                {
                  project?.team.map((el, index) => (
                    <IconUser
                      key={`${index}-${el.user.email}`}
                      horizontalList
                      user={el.user}
                      zIndex={el.length - index}
                      waiting={el.user?.status === STATUS_INVITATIONS.WAITING}
                    />
                  ))
                }
            </ContainerUsers>
          </ContainerTeam>
        )}
      </SpecOptions>
      <ItemsNavBar />
    </Root>
  );
};

export default SpecHeader;
