import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	ProfileButton,
	ProfileOptions,
	OptionsContent,
	Separator,
	ProfilePictureContainer,
	ProfilePictureImage,
	ListHeader,
	TitleHeader,
	LinkHeader,
	CountNoti,

} from './NavNotifications.styles';
import IconNoti from '../../../assets/images/icons/spec-notifications.svg';
import {
	watchNotifications
} from '../../../containers/spec-header/SpecHeader.actions';
import ClickAwayListener from 'react-click-away-listener';
import Notifications from '../../notifications/Notification';

const NavNotifications = () => {
	const dispatch = useDispatch();
	const [showOptions, setShowOtions] = useState(false);
	const [updateNot, setUdateNot] = useState(false);
	const { user } = useSelector((state) => state.profile);
	const { notificationsList } = useSelector((state) => state.specHeader);
	const [data, setData] = useState(Object.values(notificationsList));
	const array_news = [];
	const array_total = [];
	const listlNews = Object.values(notificationsList).map((item) =>
		item.list.map((detail) =>
			array_total.push(detail.watched)
		)
	);

	const [totalNews, setTotalNews] = useState(0);
	const [totalNoti, setTotalNoti] = useState(0);
	const [updateClickAway, setUdateClickAway] = useState(false);
	useEffect(() => {
		setTotalNews(array_news.length);
		setData(Object.values(notificationsList));
		if (!data[0]?.total) {
			console.log("caminante");
		}
	}, [notificationsList]);

	useEffect(() => {
		setTotalNoti(listlNews);
	}, []);


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
		if (updateNot && ids2.length > 0) {
			const body = {
				notifications: { ids: ids2 },
				idUser: user.id
			}
			dispatch(watchNotifications(body));
			setData(Object.values(notificationsList));
		}
	};

	const handleClickAway = () => {
		updateClickAway ? setUdateClickAway(false) : setUdateClickAway(true);
		if (updateClickAway && updateNot) {
			togglOptions();
		}
	};

	return (
		<>
			<ProfileButton
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
			</ProfileButton>
			<ClickAwayListener onClickAway={handleClickAway}>
				<ProfileOptions show={showOptions}>
					<OptionsContent>
						<ListHeader>
							<TitleHeader>Notificaciones</TitleHeader>
							<LinkHeader>Ver todo</LinkHeader>
						</ListHeader>

						{data.map((column) =>
							column.list.map((detail, d) => (
								<Notifications key={d}
									itemType={detail.item.item_type}
									triggered={detail?.triggered}
									watched={detail?.watched}
									profileImage={detail?.item?.permission?.user?.profile_image.urls.original}
									date={detail?.date}
									message={detail?.item?.message}
									status={detail?.item?.status}
									itemId={detail?.item?.item_id}
									projectUrl={detail?.item?.actions}
									projectId={detail?.item?.project_id}
								/>
							)
							)
						)}

						<Separator />
					</OptionsContent>
				</ProfileOptions>
			</ClickAwayListener>
		</>
	);
};

export default NavNotifications;
