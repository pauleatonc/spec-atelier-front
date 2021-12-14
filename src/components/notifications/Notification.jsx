import React from 'react';
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

} from './Notifications.styles';
import Button from '../buttons/Button';
import { VARIANTS_BUTTON } from '../../config/constants/button-variants';
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
    const { loading } = useSelector((state) => state.specHeader);


    const accept = (id, pId) => {
        const body = {
            idUser:  userData.id,
            idProject: pId,
            notifiId: id
        };
        dispatch(accepthNotificationsAC(body));
    }

    const reject = (id, pId) => {
        const body = {
            idUser:  userData.id,
            idProject: pId,
            notifiId: id
        };
        dispatch(rejectNotifications(body));
    }

    const undoReject = (id, pId) => {
        const body = {
            idUser: userData.id,
            idProject: pId,
            notifiId: id
        };
        dispatch(undoRejectNotifications(body));
    }
    if (itemType === 'ProjectInvitation') {
        return (
            <ContentPrimary>
                <ContentPoint>
                    {triggered === false && (<NewPoint />)}
                    {watched && (
                        <ListItem style={{ backgroundColor: 'none' }}>
                            <ProfilePictureContainer>
                                <IconUser
                                    user={userData}
                                    size={56}
                                    fontSize={24} 
                                />
                            </ProfilePictureContainer>
                            <ContainerNameUser>
                                <InfoUserName gray>{date}</InfoUserName>
                                <InfoUserName gray dangerouslySetInnerHTML={{__html:message}} />
                                <ContentActions>
                                    {status === 'Proyecto Aceptado' && (
                                        <>
                                            {loading && (
                                                <>
                                                    <ActionPerformed>Proyecto aceptado {watched}</ActionPerformed>
                                                    <LinkSeeAll href={projectUrl[0].url} style={{ color: 'rgb(156 221 212)', pointerEvents: 'none' }} disabled>Ir al proyecto</LinkSeeAll>
                                                </>
                                            )}
                                            {!loading && (
                                                <>
                                                    <ActionPerformed>Proyecto aceptado {watched}</ActionPerformed>
                                                    <LinkSeeAll href={projectUrl[0].url}>Ir al proyecto</LinkSeeAll>
                                                </>
                                            )}
                                        </>
                                    )}
                                    {status === 'Proyecto Rechazado' && (
                                        <>
                                            {loading && (
                                                <>
                                                    <ActionPerformed>Proyecto rechazado</ActionPerformed>
                                                    <UndoSpan onClick={() => undoReject(itemId, projectId)} style={{ color: 'rgb(156 221 212)', pointerEvents: 'none' }} disabled>Deshacer</UndoSpan>
                                                </>
                                            )}
                                            {!loading && (
                                                <>
                                                    <ActionPerformed>Proyecto rechazado</ActionPerformed>
                                                    <UndoSpan onClick={() => undoReject(itemId, projectId)}>Deshacer</UndoSpan>
                                                </>
                                            )}
                                        </>
                                    )}
                                    {!status && (
                                        <>
                                            {loading && (
                                                <>
                                                    <Button variant={VARIANTS_BUTTON.CANCEL_SECONDARY_NOTIFICATION} style={{ background: '#efecec' }} onClick={() => reject(itemId, projectId)} disabled>
                                                        Rechazar
                                                    </Button>
                                                    <Button variant={VARIANTS_BUTTON.PRIMARY} style={{ marginLeft: '11px', background: 'rgb(156 221 212);' }} disabled>
                                                        Aceptar
                                                    </Button>
                                                </>
                                            )}
                                            {!loading && (
                                                <>
                                                    <Button variant={VARIANTS_BUTTON.CANCEL_SECONDARY_NOTIFICATION} onClick={() => reject(itemId, projectId)}>
                                                        Rechazar
                                                    </Button>
                                                    <Button variant={VARIANTS_BUTTON.PRIMARY} onClick={() => accept(itemId, projectId)} style={{ marginLeft: '11px' }}>
                                                        Aceptar
                                                    </Button>
                                                </>
                                            )}
                                        </>
                                    )}
                                    {loading}
                                </ContentActions>
                            </ContainerNameUser>
                        </ListItem>
                         
                    )}
                    {!watched && (
                        <ListItem style={{ backgroundColor: '#42bfad26' }}>
                            <ProfilePictureContainer>
                                <IconUser
                                    user={userData}
                                    size={56}
                                    fontSize={24} 
                                />
                            </ProfilePictureContainer>
                            <ContainerNameUser>
                                <InfoUserName gray>{date}</InfoUserName>
                                <InfoUserName gray dangerouslySetInnerHTML={{__html:message}} />
                                <ContentActions>
                                    {status === 'Proyecto Aceptado' && (
                                        <>
                                            {loading && (
                                                <>
                                                    <ActionPerformed>Proyecto aceptado {watched}</ActionPerformed>
                                                    <LinkSeeAll href={projectUrl[0].url} style={{ color: 'rgb(156 221 212)', pointerEvents: 'none' }} disabled>Ir al proyecto</LinkSeeAll>
                                                </>
                                            )}
                                            {!loading && (
                                                <>
                                                    <ActionPerformed>Proyecto aceptado {watched}</ActionPerformed>
                                                    <LinkSeeAll href={projectUrl[0].url}>Ir al proyecto</LinkSeeAll>
                                                </>
                                            )}
                                        </>
                                    )}
                                    {status === 'Proyecto Rechazado' && (
                                        <>
                                            {loading && (
                                                <>
                                                    <ActionPerformed>Proyecto rechazado</ActionPerformed>
                                                    <UndoSpan onClick={() => undoReject(itemId, projectId)} style={{ color: 'rgb(156 221 212)', pointerEvents: 'none' }} disabled>Deshacer</UndoSpan>
                                                </>
                                            )}
                                            {!loading && (
                                                <>
                                                    <ActionPerformed>Proyecto rechazado</ActionPerformed>
                                                    <UndoSpan onClick={() => undoReject(itemId, projectId)}>Deshacer</UndoSpan>
                                                </>
                                            )}
                                        </>
                                    )}
                                    {!status && (
                                        <>
                                            {loading && (
                                                <>
                                                    <Button variant={VARIANTS_BUTTON.CANCEL_SECONDARY_NOTIFICATION} style={{ background: '#efecec' }} onClick={() => reject(itemId, projectId)} disabled>
                                                        Rechazar
                                                    </Button>
                                                    <Button variant={VARIANTS_BUTTON.PRIMARY} style={{ marginLeft: '11px', background: 'rgb(156 221 212);' }} disabled>
                                                        Aceptar
                                                    </Button>
                                                </>
                                            )}
                                            {!loading && (
                                                <>
                                                    <Button variant={VARIANTS_BUTTON.CANCEL_SECONDARY_NOTIFICATION} onClick={() => reject(itemId, projectId)}>
                                                        Rechazar
                                                    </Button>
                                                    <Button variant={VARIANTS_BUTTON.PRIMARY} onClick={() => accept(itemId, projectId)} style={{ marginLeft: '11px' }}>
                                                        Aceptar
                                                    </Button>
                                                </>
                                            )}
                                        </>
                                    )}
                                    {loading}
                                </ContentActions>
                            </ContainerNameUser>
                        </ListItem>
                         
                    )}
                </ContentPoint>
                <Separator />
            </ContentPrimary>
        );
    }
    return(<></>)
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
