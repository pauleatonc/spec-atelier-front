import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import {
  Separator,
  ProfilePictureContainer,
  ContainerNameUser,
  InfoUserName,
  ListItem,
  ContentActions,
  ContentPoint,
  NewPoint,
  ActionPerformed,
  LinkSeeAll,
  UndoSpan,
  ContentPrimary,
} from './Notification.styles';
import { getMyProjects } from '../../containers/projects-list/ProjectsList.actions';
import Button from '../buttons/Button';
import { VARIANTS_BUTTON } from '../../config/constants/button-variants';
import {
  EBB,
  LOADING_ACCEPT,
  LOADING_ACCEPT_INITIAL,
} from '../../config/constants/styled-vars';
import {
  acceptNotificationsAC,
  rejectNotifications,
  undoRejectNotifications,
} from '../../containers/spec-header/SpecHeader.actions';
import IconUser from '../IconUser/index';

const Notifications = (props) => {
  const {
    itemType,
    triggered,
    watched,
    date,
    message,
    status,
    itemId,
    projectId,
    userData,
    projectSpecId,
  } = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const { loadingNoti, notificationsList } = useSelector(
    (state) => state.specHeader,
  );
  const [accionStatus, setAccionStatus] = useState(status);
  const [itemIdStatus, setItemIdStatus] = useState(itemId);
  const [projectIdStatus, setProjectIdStatus] = useState(projectId);
  const [watchedStatus, setWatchedStatus] = useState(watched);
  const [triggeredStatus, setTriggeredStatus] = useState(triggered);
  const [styleButtonReject, setStyleButtonReject] = useState({
    marginTop: '8px',
  });
  const [styleButtonAccept, setStyleButtonAccept] = useState({
    marginLeft: '11px',
    background: LOADING_ACCEPT_INITIAL,
    marginTop: '8px',
  });
  useEffect(() => {
    setWatchedStatus(watched);
  }, [notificationsList]);

  useEffect(() => {
    if (loadingNoti) {
      setStyleButtonReject({
        backgroundColor: EBB,
        marginTop: '8px',
        cursor: 'no-drop',
        pointerEvents: 'none',
      });
      setStyleButtonAccept({
        backgroundColor: LOADING_ACCEPT,
        marginLeft: '11px',
        marginTop: '8px',
        cursor: 'no-drop',
        pointerEvents: 'none',
      });
    } else {
      setStyleButtonReject({ marginTop: '8px' });
      setStyleButtonAccept({
        marginLeft: '11px',
        background: LOADING_ACCEPT_INITIAL,
        marginTop: '8px',
      });
    }
  }, [loadingNoti]);

  const accept = (id, pId) => {
    const body = {
      idUser: userData.id,
      idProject: pId,
      notifiId: id,
    };
    const resp = dispatch(acceptNotificationsAC(body));
    resp.then((data) => {
      data.resp.then((r) => {
        setAccionStatus(r?.notification?.item?.status);
        setWatchedStatus(r?.notification?.watched);
        setTriggeredStatus(r?.notification?.triggered);
        dispatch(getMyProjects({ page: 0, limit: 6, sort: 'created_at_desc' }));
      });
    });
  };

  const reject = (id, pId) => {
    const body = {
      idUser: userData.id,
      idProject: pId,
      notifiId: id,
    };
    const resp = dispatch(rejectNotifications(body));
    resp.then((data) => {
      data.resp.then((r) => {
        setAccionStatus(r?.notification?.item?.status);
        setItemIdStatus(r?.notification?.item?.item_id);
        setProjectIdStatus(r?.notification?.item?.project_id);
        setWatchedStatus(r?.notification?.watched);
        setTriggeredStatus(r?.notification?.triggered);
      });
    });
  };

  const undoReject = (id, pId) => {
    const body = {
      idUser: userData.id,
      idProject: pId,
      notifiId: id,
    };
    const resp = dispatch(undoRejectNotifications(body));
    resp.then((data) => {
      data.resp.then((r) => {
        setAccionStatus(r?.notification?.item?.status);
        setItemIdStatus(r?.notification?.item?.item_id);
        setProjectIdStatus(r?.notification?.item?.project_id);
        setWatchedStatus(r?.notification?.watched);
        setTriggeredStatus(r?.notification?.triggered);
      });
    });
  };
  if (itemType === 'ProjectInvitation' || itemType === 'ProjectSpec::ApproveRequest' ) {
    return (
      <ContentPrimary>
        <ContentPoint>
          {triggeredStatus === false && <NewPoint />}
          <ListItem watchedStatus={watchedStatus}>
            <ProfilePictureContainer>
              <IconUser user={userData} size={56} fontSize={24} />
            </ProfilePictureContainer>
            <ContainerNameUser>
              <InfoUserName gray>{date}</InfoUserName>
              <InfoUserName
                gray
                dangerouslySetInnerHTML={{ __html: message }}
              />
              <ContentActions>
                {(accionStatus === 'Proyecto aceptado' || accionStatus === 'Cambios revisados' || accionStatus === 'Cambios a aprobar') && (
                  <>
                    <ActionPerformed>{accionStatus}</ActionPerformed>
                    <LinkSeeAll
                      loadingNoti={loadingNoti}
                      onClick={() => history.push(`/specs/${projectSpecId}`)}
                    >
                      Ir al proyecto
                    </LinkSeeAll>
                  </>
                )}
                {accionStatus === 'Proyecto Rechazado' && (
                  <>
                    <ActionPerformed>Proyecto rechazado</ActionPerformed>
                    <UndoSpan
                      onClick={() => undoReject(itemIdStatus, projectIdStatus)}
                      loadingNoti={loadingNoti}
                    >
                      Deshacer
                    </UndoSpan>
                  </>
                )}
                {!accionStatus && (
                  <>
                    <Button
                      variant={VARIANTS_BUTTON.CANCEL_SECONDARY_NOTIFICATION}
                      style={styleButtonReject}
                      onClick={() => reject(itemIdStatus, projectIdStatus)}
                    >
                      Rechazar
                    </Button>
                    <Button
                      variant={VARIANTS_BUTTON.PRIMARY}
                      onClick={() => accept(itemIdStatus, projectIdStatus)}
                      style={styleButtonAccept}
                    >
                      Aceptar
                    </Button>
                  </>
                )}
              </ContentActions>
            </ContainerNameUser>
          </ListItem>
        </ContentPoint>
        <Separator />
      </ContentPrimary>
    );
  }
  return <></>;
};

Notifications.defaultProps = {
  itemType: '',
  triggered: false,
  watched: false,
  date: '',
  message: '',
  status: '',
  itemId: 0,
  projectId: 0,
  userData: {},
};
Notifications.propTypes = {
  itemType: PropTypes.string,
  triggered: PropTypes.bool,
  watched: PropTypes.bool,
  date: PropTypes.string,
  message: PropTypes.string,
  status: PropTypes.string,
  itemId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  projectId: PropTypes.number,
  userData: PropTypes.shape({}),
};

export default Notifications;
