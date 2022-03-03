import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ClickAwayListener from 'react-click-away-listener';
import {
  NotificationsButton,
  NotificationsOption,
  OptionsContent,
  Separator,
  NotificationsIcon,
  ProfilePictureImage,
  ListHeader,
  TitleHeader,
  LinkHeader,
  CountNoti,
  ContentPrimary,
} from './NavNotification.styles';
import IconNoti from '../../../assets/images/icons/spec-notifications.svg';
import {
  watchNotifications,
  getNotifications,
  stopGetNotifications,
  undoStopGetNotifications,
} from '../../../containers/spec-header/SpecHeader.actions';
import Notification from '../../notifications/Notification';

const NavNotification = () => {
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.auth);
  const [showOptions, setShowOtions] = useState(false);
  const [updateNotification, setUpdateNotification] = useState(false);
  const { user } = useSelector((state) => state.profile);
  const { notificationsList } = useSelector((state) => state.specHeader);
  const [data, setData] = useState(Object.values(notificationsList));
  const array_news = [];
  const array_total = [];
  Object.values(notificationsList).forEach((item) =>
    item.list.forEach((detail) =>
      !detail.watched
        ? array_news.push(detail.watched)
        : array_total.push(detail.watched),
    ),
  );

  const [totalNews, setTotalNews] = useState(0);
  const [updateClickAway, setUdateClickAway] = useState(false);
  useEffect(() => {
    setTotalNews(array_news.length);
    setData(Object.values(notificationsList));
  }, [notificationsList]);

  const togglOptions = () => {
    const arrayNotificationsId = [];
    data.forEach((item) =>
      item.list.forEach((detail) =>
        !detail?.watched ? arrayNotificationsId.push(detail.id) : '',
      ),
    );
    setShowOtions(!showOptions);
    setTotalNews(0);
    if (updateNotification) {
      setUpdateNotification(false);
      dispatch(undoStopGetNotifications());
    } else {
      setUpdateNotification(true);
      dispatch(stopGetNotifications());
    }
    if (!updateNotification && arrayNotificationsId.length > 0) {
      const body = {
        notifications: { ids: arrayNotificationsId },
        idUser: user.id,
      };
      if (user.id) {
        dispatch(watchNotifications(body));
      }
    }
    if (updateNotification && arrayNotificationsId.length > 0) {
      dispatch(getNotifications());
      setData(Object.values(notificationsList));
    }
  };

  const handleClickAway = () => {
    if (updateClickAway) {
      setUdateClickAway(false);
    } else {
      setUdateClickAway(true);
    }
    if (updateClickAway && updateNotification) {
      togglOptions();
    }
  };

  return (
    isLogin && (
      <>
        <NotificationsButton
          type="button"
          onClick={togglOptions}
          onKeyPress={togglOptions}
          isOpen={showOptions}
        >
          <NotificationsIcon>
            <ProfilePictureImage src={IconNoti} alt="notifications icon" />
            {totalNews > 0 && <CountNoti>{totalNews}</CountNoti>}
          </NotificationsIcon>
        </NotificationsButton>
        <ClickAwayListener onClickAway={handleClickAway}>
          <ContentPrimary>
            <NotificationsOption show={showOptions}>
              <OptionsContent>
                <ListHeader>
                  <TitleHeader>Notificaciones</TitleHeader>
                  <LinkHeader>Ver todo</LinkHeader>
                </ListHeader>
                {data.map((notification) =>
                  notification.list.map((detail) => (
                    <Notification
                      key={detail?.item?.item_id}
                      itemType={detail?.item?.item_type}
                      triggered={detail?.triggered}
                      watched={detail?.watched}
                      date={detail?.date}
                      message={detail?.item?.message}
                      status={detail?.item?.status}
                      itemId={detail?.item?.item_id}
                      projectId={detail?.item?.project_id}
                      projectSpecId={detail?.item?.project_spec_id}
                      userData={detail?.item?.permission?.user}
                      newNoti={updateNotification}
                    />
                  )),
                )}
                <Separator />
              </OptionsContent>
            </NotificationsOption>
          </ContentPrimary>
        </ClickAwayListener>
      </>
    )
  );
};

export default NavNotification;
