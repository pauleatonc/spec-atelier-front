import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import Button from '../buttons/Button';
import { VARIANTS_BUTTON } from '../../config/constants/button-variants';
import {
  COLOR_EBB,
  COLOR_LOADING_ACCEPT
} from '../../config/constants/styled-vars';
import {
  accepthNotificationsAC,
  rejectNotifications,
  undoRejectNotifications
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
    projectUrl,
    projectId,
    userData
  } = props;
  const dispatch = useDispatch();
  const { loadingNoti, notificationsList } = useSelector((state) => state.specHeader);
  const [accionStatus, setAccionStatus] = useState(status);
  const [itemIdStatus, setItemIdStatus] = useState(itemId);
  const [projectIdStatus, setProjectIdStatus] = useState(projectId);
  const [watchedStatus, setWatchedStatus] = useState(watched);
  const [triggeredStatus, setTriggeredStatus] = useState(triggered);
  const [projectUrlStatus, setProjectUrlStatus] = useState();
  const [styleButtonReject, setStyleButtonReject] = useState({ marginTop: '8px' });
  const [styleButtonAccept, setStyleButtonAccept] = useState({ marginLeft: '11px', background: 'rgb(156 221 212);', marginTop: '8px' });
  useEffect(() => {
    setWatchedStatus(watched);
  }, [notificationsList]);

  useEffect(() => {
    if (status === "Proyecto Aceptado") {
      setProjectUrlStatus(projectUrl[0].url);
    }
  }, []);

  useEffect(() => {
    if (loadingNoti) {
      setStyleButtonReject({ backgroundColor: COLOR_EBB, marginTop: '8px', cursor: 'no-drop', pointerEvents: 'none' });
      setStyleButtonAccept({ backgroundColor: COLOR_LOADING_ACCEPT, marginLeft: '11px', marginTop: '8px', cursor: 'no-drop', pointerEvents: 'none' })
    } else {
      setStyleButtonReject({ marginTop: '8px' });
      setStyleButtonAccept({ marginLeft: '11px', marginTop: '8px' })
    }

  }, [loadingNoti]);

  const accept = (id, pId) => {
    const body = {
      idUser: userData.id,
      idProject: pId,
      notifiId: id
    };
    const resp = dispatch(accepthNotificationsAC(body));
    resp.then((data) => {
      data.resp.then((r) => {
        setAccionStatus(r?.notification?.item?.status);
        setProjectUrlStatus(r?.notification?.item?.actions[0]?.url);
        setWatchedStatus(r?.notification?.watched);
        setTriggeredStatus(r?.notification?.triggered);
      })
    })
  }

  const reject = (id, pId) => {
    const body = {
      idUser: userData.id,
      idProject: pId,
      notifiId: id
    };
    const resp = dispatch(rejectNotifications(body));
    resp.then((data) => {
      data.resp.then((r) => {
        setAccionStatus(r?.notification?.item?.status);
        setItemIdStatus(r?.notification?.item?.item_id);
        setProjectIdStatus(r?.notification?.item?.project_id);
        setWatchedStatus(r?.notification?.watched);
        setTriggeredStatus(r?.notification?.triggered);
      })
    })
  }

  const undoReject = (id, pId) => {
    const body = {
      idUser: userData.id,
      idProject: pId,
      notifiId: id
    };
    const resp = dispatch(undoRejectNotifications(body));
    resp.then((data) => {
      data.resp.then((r) => {
        setAccionStatus(r?.notification?.item?.status);
        setItemIdStatus(r?.notification?.item?.item_id);
        setProjectIdStatus(r?.notification?.item?.project_id);
        setWatchedStatus(r?.notification?.watched);
        setTriggeredStatus(r?.notification?.triggered);
      })
    })
  }
  if (itemType === 'ProjectInvitation') {
    return (
      <ContentPrimary>
        <ContentPoint>
          {triggeredStatus === false && (<NewPoint />)}
          <ListItem watchedStatus={watchedStatus}>
            <ProfilePictureContainer>
              <IconUser
                user={userData}
                size={56}
                fontSize={24}
              />
            </ProfilePictureContainer>
            <ContainerNameUser>
              <InfoUserName gray>{date}</InfoUserName>
              <InfoUserName gray dangerouslySetInnerHTML={{ __html: message }} />
              <ContentActions>
                {accionStatus === 'Proyecto Aceptado' && (
                  <>
                    <ActionPerformed>Proyecto aceptado</ActionPerformed>
                    <LinkSeeAll href={projectUrlStatus} loadingNoti={loadingNoti}>Ir al proyecto</LinkSeeAll>

                  </>
                )}
                {accionStatus === 'Proyecto Rechazado' && (
                  <>
                    <ActionPerformed>Proyecto rechazado</ActionPerformed>
                    <UndoSpan onClick={() => undoReject(itemIdStatus, projectIdStatus)} loadingNoti={loadingNoti}>Deshacer</UndoSpan>
                  </>
                )}
                {!accionStatus && (
                  <>
                    <Button variant={VARIANTS_BUTTON.CANCEL_SECONDARY_NOTIFICATION} style={styleButtonReject} onClick={() => reject(itemIdStatus, projectIdStatus)}>
                      Rechazar
                    </Button>
                    <Button variant={VARIANTS_BUTTON.PRIMARY} onClick={() => accept(itemIdStatus, projectIdStatus)} style={styleButtonAccept}>
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
  return (<></>)
};

Notifications.defaultProps = {
  itemType: '',
  triggered: false,
  watched: false,
  date: '',
  message: '',
  status: '',
  itemId: 0,
  projectUrl: [],
  projectId: 0,
  userData: []
};
Notifications.propTypes = {
  itemType: PropTypes.string,
  triggered: PropTypes.bool,
  watched: PropTypes.bool,
  date: PropTypes.string,
  message: PropTypes.string,
  status: PropTypes.string,
  itemId: PropTypes.number,
  projectUrl: PropTypes.arrayOf(PropTypes.object),
  projectId: PropTypes.number,
  userData: PropTypes.arrayOf(PropTypes.object),
};

export default Notifications;
