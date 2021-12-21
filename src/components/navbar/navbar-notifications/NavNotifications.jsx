import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	NotificationsButton,
	NotificationsOption,
	OptionsContent,
	Separator,
	ProfilePictureContainer,
	ProfilePictureImage,
	ListHeader,
	TitleHeader,
	LinkHeader,
	CountNoti,
	ContentPrimary

} from './NavNotifications.styles';
import IconNoti from '../../../assets/images/icons/spec-notifications.svg';
import {
	watchNotifications,
	getNotifications,
	stopGetNotifications,
	undoStopGetNotifications
} from '../../../containers/spec-header/SpecHeader.actions';
import ClickAwayListener from 'react-click-away-listener';
import Notifications from '../../notifications/Notification';

const NavNotifications = () => {
	const dispatch = useDispatch();
	const { isLogin } = useSelector((state) => state.auth);
	const [showOptions, setShowOtions] = useState(false);
	const [updateNot, setUdateNot] = useState(false);
	const { user } = useSelector((state) => state.profile);
	const { notificationsList } = useSelector((state) => state.specHeader);
	const [data, setData] = useState(Object.values(notificationsList));
	const array_news = [];
	const array_total = [];
	const listlNews = Object.values(notificationsList).map((item) =>
		item.list.map((detail) =>
			!detail.watched ? array_news.push(detail.watched): array_total.push(detail.watched)
		)
	);

	const [totalNews, setTotalNews] = useState(0);
	const [updateClickAway, setUdateClickAway] = useState(false);
	useEffect(() => {
		setTotalNews(array_news.length);
		setData(Object.values(notificationsList));
	}, [notificationsList]);

	const togglOptions = () => {
		const ids2 = [];
		const listId = data.map((item) =>
			item.list.map((detail) =>
				!detail?.watched ? ids2.push(detail.id) : ''
			),
		);
		setShowOtions(!showOptions);
		setTotalNews(0);
		updateNot ? setUdateNot(false) : setUdateNot(true);
		updateNot ? dispatch(undoStopGetNotifications()) : dispatch(stopGetNotifications());
		if (!updateNot && ids2.length > 0) {
			const body = {
				notifications: { ids: ids2 },
				idUser: user.id
			}
			if(user.id){
				dispatch(watchNotifications(body));
			}
		}
		if (updateNot && ids2.length > 0) {
			dispatch(getNotifications());
			setData(Object.values(notificationsList));
		}
	};

	const handleClickAway = () => {
		updateClickAway ? setUdateClickAway(false) : setUdateClickAway(true);
		if (updateClickAway && updateNot) {
			togglOptions();
		}
	};

	if (isLogin) 
	return (
		<>
			<NotificationsButton
				type="button"
				onClick={togglOptions}
				onKeyPress={togglOptions}
				isOpen={showOptions}
			>
				<ProfilePictureContainer>
					<ProfilePictureImage
						src={IconNoti}
						alt="notifications icon"
					/>
					{totalNews > 0 && (
						<CountNoti>
							{totalNews}
						</CountNoti>
					)}
				</ProfilePictureContainer>
			</NotificationsButton>
			<ClickAwayListener onClickAway={handleClickAway}>
				<ContentPrimary>
					{array_news.length+array_total.length === 1 &&(
						<NotificationsOption show={showOptions} style={{height: 'auto'}}>
							<OptionsContent style={{height: 'auto'}}>
								<ListHeader>
									<TitleHeader>Notificaciones</TitleHeader>
									<LinkHeader>Ver todo</LinkHeader>
								</ListHeader>
								{data.map((column) =>
									column.list.map((detail, d) => (
										<Notifications key={d}
											itemType={detail?.item?.item_type}
											triggered={detail?.triggered}
											watched={detail?.watched}
											date={detail?.date}
											message={detail?.item?.message}
											status={detail?.item?.status}
											itemId={detail?.item?.item_id}
											projectUrl={detail?.item?.actions}
											projectId={detail?.item?.project_id}
											userData={detail?.item?.permission?.user}
										/>
									)
									)
								)}

								<Separator />
							</OptionsContent>
						</NotificationsOption>
					)}
					{array_news.length+array_total.length > 1 &&(
						<NotificationsOption show={showOptions} style={{height: '446px'}}>
							<OptionsContent style={{height: '446px'}}>
								<ListHeader>
									<TitleHeader>Notificaciones</TitleHeader>
									<LinkHeader>Ver todo</LinkHeader>
								</ListHeader>
								{data.map((column) =>
									column.list.map((detail, d) => (
										<Notifications key={d}
											itemType={detail?.item?.item_type}
											triggered={detail?.triggered}
											watched={detail?.watched}
											date={detail?.date}
											message={detail?.item?.message}
											status={detail?.item?.status}
											itemId={detail?.item?.item_id}
											projectUrl={detail?.item?.actions}
											projectId={detail?.item?.project_id}
											userData={detail?.item?.permission?.user}
											newNoti={updateNot}
										/>
									)
									)
								)}

								<Separator />
							</OptionsContent>
						</NotificationsOption>
					)}
				</ContentPrimary>
			</ClickAwayListener>
		</>
	);
};

export default NavNotifications;
