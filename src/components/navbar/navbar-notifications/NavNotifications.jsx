import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	ProfileButton,
	ProfileOptions,
	OptionsContent,
	Separator,
	ProfilePictureContainer,
	ProfilePictureContainer2,
	ProfilePictureImage,
	ContainerNameUser,
	InfoUserName,
	InfoUserName2,
    ListHeader,
    TitleHeader,
    LinkHeader,
    ListItem,
	ContentActions,
	ContentPoint,
	NewPoint,
	ActionPerformed,
	LinkSeeAll,
	UndoSpan,
	CountNoti

} from './NavNotifications.styles';
import Button from '../../buttons/Button';
import { VARIANTS_BUTTON } from '../../../config/constants/button-variants';
import  IconNoti  from '../../../assets/images/icons/spec-notifications.svg';
import  User2  from '../../../assets/images/user2.jpg';
import { useMemo } from 'react';
import {
	watchNotifications,
	accepthNotificationsAC,
	rejectNotifications,
	undoRejectNotifications,
	getNotifications
} from '../../../containers/spec-header/SpecHeader.actions';
import {
	cleanObjectsAndArrays2
} from '../../../modules/services';

const NavNotifications = () => {
	const dispatch = useDispatch();
	const [showOptions, setShowOtions] = useState(false);
	const [ updateNot, setUdateNot] = useState(false);
	const { user } = useSelector((state) => state.profile);
	const { project } = useSelector((state) => state.specDocument);
	const { notificationsList } = useSelector((state) => state.specHeader);
	const data = useMemo(() => Object.values(notificationsList), [notificationsList]); // object to array data
	const array_news = [];
	const listlNews = data.map((item) => 
		item.list.map((detail) => 
			!detail?.watched ? array_news.push(detail.watched) : ''
		)
	); 
	const [totalNews, setTotalNews] = useState(0);
	useEffect(() => {
		setTotalNews(array_news.length);
	}, [notificationsList]);

	const togglOptions = () => {
		//console.log(totalNews);
		const ids2 = [];
		const listId =  data.map((item,i) => 
			item.list.map((detail,e) => 
				!detail?.watched ? ids2.push(detail.id) : ''
			),
		);
		// const objc = {
		// 	[`string`]: `{"ids[]":`+ids2.map((data) => (data?.id ? data.id : data)).join(`,"ids[]":`)+`}`
		// };

		//console.log(JSON.parse(objc.string));
		setShowOtions(!showOptions);
		setTotalNews(0);
		updateNot ? setUdateNot(false) : setUdateNot(true);
		if(!updateNot && totalNews > 0){
			const body = {
				notifications: {ids:ids2},
				idUser: user.id
			}
			dispatch(watchNotifications(body));
		} 
	};

	const [action,setAction] = useState('deafult');
	const [actionId,setActionId] = useState();
	const accept = (id) => {
		const data = {
			idUser: user.id,
			projectId: project.id,
			notifiId: id
		};
		dispatch(accepthNotificationsAC(data));
		setAction('accept');
		setActionId(id);
		dispatch(getNotifications());
	}

	const reject = (id) => {
		const data = {
			idUser: user.id,
			projectId: project.id,
			notifiId: id
		};
		dispatch(rejectNotifications(data));
		setAction('reject');
		setActionId(id);
		dispatch(getNotifications());
	}

	const undoReject = (id) => {
		const data = {
			idUser: user.id,
			projectId: project.id,
			notifiId: id
		};
		dispatch(undoRejectNotifications(data));
		setAction('deafult');
		setActionId(id);
		dispatch(getNotifications());
	}

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
					{totalNews > 0 &&(
						<CountNoti>
							{totalNews}
						</CountNoti>
					)}
				</ProfilePictureContainer>
			</ProfileButton>
			<ProfileOptions show={showOptions}>
				<OptionsContent>
                    <ListHeader>
                        <TitleHeader>Notificaciones</TitleHeader>
                        <LinkHeader>Ver todo</LinkHeader>
                    </ListHeader>
					{data.map((column, i) => 
						column.list.map((detail, d) => 
							detail.item.item_type === 'ProjectInvitation' &&( // type notification
								<>
								<ContentPoint key={d}>
									{!detail?.triggered && (<NewPoint/>)}
									<ListItem  style={{backgroundColor: detail?.watched ? 'none' : '#42bfad26'}}>
										<ProfilePictureContainer2>
											{detail?.item?.permission?.user?.profile_image ? (
												<ProfilePictureImage
													src={detail?.item?.permission?.user?.profile_image}
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
											<InfoUserName gray>{detail?.date}</InfoUserName>
											<InfoUserName gray>{detail?.item?.message}</InfoUserName>
											<ContentActions>
												{detail?.item?.status == 'Proyecto Aceptado' &&(
													<>
														<ActionPerformed>Proyecto aceptado</ActionPerformed>
														<LinkSeeAll href={detail?.item?.actions[0].url}>Ir al proyecto</LinkSeeAll>
													</>
												)}
												{detail?.item?.status == 'Proyecto Rechazado' &&(
													<>
														<ActionPerformed>Proyecto rechazado</ActionPerformed>
														<UndoSpan onClick={() => undoReject(detail?.id)}>Deshacer</UndoSpan>
													</>
												)}
												{!detail?.item?.status &&(
													<>
														<Button variant={VARIANTS_BUTTON.SECONDARY} onClick={() => reject(detail?.item?.item_id)}>
															Rechazar
														</Button>
														<Button variant={VARIANTS_BUTTON.PRIMARY} onClick={() => accept(detail?.item?.item_id)} style={{marginLeft: '11px'}}>
															Aceptar
														</Button>
													</>
												)}
											</ContentActions>
										</ContainerNameUser>
									</ListItem>
								</ContentPoint>
								<Separator />
								</>
							)
						)
					)}
					
					{/* <ContentPoint>
						<NewPoint/>
						<ListItem newItem>
							{user.first_name && user.email && (
								<>
									<ProfilePictureContainer2>
										{user?.profile_image?.urls ? (
											<ProfilePictureImage
												//src={user?.profile_image?.urls.original}
												src={User2}
												alt="profile icon"
											/>
										) : (
											<ProfilePictureImage
												//src={user?.profile_image?.urls.original}
												src={User2}
												alt="profile icon"
											/>
										)}
									</ProfilePictureContainer2>
									<ContainerNameUser>
										<InfoUserName gray>{'Hoy'}</InfoUserName>
										<InfoUserName gray>{`${user.first_name} ${user.last_name}`} <InfoUserName2>quiere compartir el proyecto --Project Name--</InfoUserName2></InfoUserName>
										<ContentActions>
											<Button variant={VARIANTS_BUTTON.SECONDARY} onClick={action}>
												Rechazar
											</Button>
											<Button variant={VARIANTS_BUTTON.PRIMARY} onClick={action} style={{marginLeft: '11px'}}>
												Aceptar
											</Button>
											
										</ContentActions>
									</ContainerNameUser>
								</>
							)}
						</ListItem>
					</ContentPoint>
					<Separator /> */}
				</OptionsContent>
			</ProfileOptions>
		</>
	);
};

export default NavNotifications;
