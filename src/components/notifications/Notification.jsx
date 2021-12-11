import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
    Separator,
    ProfilePictureContainer2,
    ProfilePictureImage,
    ContainerNameUser,
    InfoUserName,
    ListItem,
    ContentActions,
    ContentPoint,
    NewPoint,
    ActionPerformed,
    LinkSeeAll,
    UndoSpan,
    CountNoti,
    ContentPrimary,

} from './Notifications.styles';
import User2 from '../../assets/images/user2.jpg';
import parse from 'html-react-parser';
import Button from '../buttons/Button';
import { VARIANTS_BUTTON } from '../../config/constants/button-variants';
import {
    accepthNotificationsAC,
    rejectNotifications,
    undoRejectNotifications
} from '../../containers/spec-header/SpecHeader.actions';

const Notifications = (props) => {
    const {
        itemType,
        triggered,
        watched,
        profile_image,
        date,
        message,
        status,
        itemId,
        projectUrl,
        projectId
    } = props;
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.profile);
    const { loading } = useSelector((state) => state.specHeader);


    const accept = (id, projectId) => {
        const body = {
            idUser: user.id,
            projectId: projectId,
            notifiId: id
        };
        dispatch(accepthNotificationsAC(body));
    }

    const reject = (id, projectId) => {
        const body = {
            idUser: user.id,
            projectId: projectId,
            notifiId: id
        };
        dispatch(rejectNotifications(body));
    }

    const undoReject = (id, projectId) => {
        const body = {
            idUser: user.id,
            projectId: projectId,
            notifiId: id
        };
        dispatch(undoRejectNotifications(body));
    }
    if (itemType === 'ProjectInvitation') {
        return (
            <ContentPrimary>
                <ContentPoint>
                    {triggered === false && (<NewPoint />)}
                    {watched === true && (
                        <ListItem style={{ backgroundColor: 'none' }}>
                            <ProfilePictureContainer2>
                                {profile_image ? (
                                    <ProfilePictureImage
                                        src={profile_image}
                                        alt="profile icon"
                                    />
                                ) : (
                                    <ProfilePictureImage
                                        src={User2}
                                        alt="profile icon"
                                    />
                                )}
                            </ProfilePictureContainer2>
                            <ContainerNameUser>
                                <InfoUserName gray>{date}</InfoUserName>
                                <InfoUserName gray>{parse(message)}</InfoUserName>
                                <ContentActions>
                                    {status === 'Proyecto Aceptado' && (
                                        <>
                                            {loading && (
                                                <>
                                                    <ActionPerformed>Proyecto aceptado -{watched}</ActionPerformed>
                                                    <LinkSeeAll href={projectUrl[0].url} style={{ color: 'rgb(156 221 212)', pointerEvents: 'none' }} disabled>Ir al proyecto</LinkSeeAll>
                                                </>
                                            )}
                                            {!loading && (
                                                <>
                                                    <ActionPerformed>Proyecto aceptado -{watched}</ActionPerformed>
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
};

Notifications.defaultProps = {
    itemType: '',
    triggered: false,
    watched: false,
    profileImage: '',
    date: '',
    message: '',
    status: '',
    itemId: 0,
    projectUrl: '',
    projectId: '',
};
Notifications.propTypes = {
    itemType: PropTypes.string,
    triggered: PropTypes.bool,
    watched: PropTypes.bool,
    profileImage: PropTypes.string,
    date: PropTypes.string,
    message: PropTypes.string,
    status: PropTypes.string,
    itemId: PropTypes.number,
    projectUrl: PropTypes.arrayOf(PropTypes.object),
    projectId: PropTypes.string,
};

export default Notifications;
