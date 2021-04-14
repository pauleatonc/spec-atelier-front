import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	Header,
	ButtonContainer,
	Container,
	ContentEdit,
	ProfileName,
	ProfileCity,
	ProfileCompany,
	ProfilePhoto,
	Photo,
	IconPhoto,
	Item,
	ItemText,
	UnderLine,
	InputText,
	TextValue,
	DropIcon,
	ProfileNameInputContainer,
} from './ProfileHeader.styles';
import {
	PROFILE_HEADER,
	PROFILE_HEADER_2X,
	PROFILE_HEADER_3X,
	PROFILE_PHOTO_DEFAULT,
	PROFILE_PHOTO_DEFAULT_2X,
	PROFILE_PHOTO_DEFAULT_3X,
	ICON_CAMERA,
	ICON_ARROW_DOWN,
} from '../../assets/Images';
import { Button, Input, Loading } from '../../components/SpecComponents';
import {
	getUserProfile,
	setUserProfile,
	onShowEditProfilePicture,
} from './ProfileHeader.actions';
import SelectorRelative from '../../components/basics/SelectorRelative';
import { COLOR_GREEN_UNDERLINE } from '../../config/constants/styled-vars';

const ProductsHeader = () => {
	const [isEditting, setIsEditing] = useState(false);
	const { user, loading } = useSelector((state) => state.profile);
	const { cities } = useSelector((state) => state.app);
	const [currentUser, setCurrentUser] = useState(user);
	const dispatch = useDispatch();

	const handleEditProfilePicture = () => dispatch(onShowEditProfilePicture());

	const onSaveUserInfo = () => {
		dispatch(setUserProfile({ user: currentUser }));
	};

	const onClickEdit = () => {
		if (isEditting) onSaveUserInfo();
		setIsEditing(!isEditting);
	};

	useEffect(() => {
		dispatch(getUserProfile());
	}, []);

	useEffect(() => {
		const { first_name, last_name, id, city, company } = user;
		setCurrentUser({ first_name, last_name, id, city, company });
	}, [user]);

	const mapToCities = (c) => ({ label: c.name, value: c.id, ...c });

	const onSelectCity = (city) =>
		setCurrentUser({ ...currentUser, city: city.value });

	const onChangeCompany = ({ target: { value } }) =>
		setCurrentUser({ ...currentUser, company: value });

	const onChangeFirstName = ({ target: { value } }) =>
		setCurrentUser({ ...currentUser, first_name: value });

	const onChangeLastName = ({ target: { value } }) =>
		setCurrentUser({ ...currentUser, last_name: value });

	return loading && !user.profile_image ? (
		<Loading />
	) : (
		<>
			<Container>
				<Header
					alt="Specatelier"
					src={PROFILE_HEADER}
					srcSet={`${PROFILE_HEADER_2X} 2x, ${PROFILE_HEADER_3X} 3x`}
				/>
				<ProfilePhoto>
					<Photo
						sr={user.profile_image?.urls.medium || PROFILE_PHOTO_DEFAULT}
						srcSet={`${
							user.profile_image?.urls.medium || PROFILE_PHOTO_DEFAULT_2X
						}, ${user.profile_image?.urls.small || PROFILE_PHOTO_DEFAULT_3X}`}
					/>
					<IconPhoto onClick={handleEditProfilePicture}>
						<img src={ICON_CAMERA} alt="camara" />
					</IconPhoto>
				</ProfilePhoto>
				<ButtonContainer>
					<Button
						variant="default"
						inverse
						style={{ backgroundColor: '#eeeeee' }}
						onClick={onClickEdit}
					>
						{isEditting ? (
							'Guardar'
						) : (
							<>
								<i className="fa fa-pen" style={{ marginRight: '11px' }} />
								Editar perfil
							</>
						)}
					</Button>
				</ButtonContainer>
			</Container>
			<ContentEdit>
				<ProfileName isEditting={isEditting}>
					{isEditting ? (
						<>
							<ProfileNameInputContainer>
								<Input
									type="underline"
									fontSize={20}
									onChange={onChangeFirstName}
									value={currentUser.first_name || ''}
									colorUnderline={COLOR_GREEN_UNDERLINE}
									placeholder="Nombre"
									textAlign="right"
								/>
							</ProfileNameInputContainer>
							<ProfileNameInputContainer>
								<Input
									type="underline"
									fontSize={20}
									onChange={onChangeLastName}
									value={currentUser.last_name || ''}
									colorUnderline={COLOR_GREEN_UNDERLINE}
									placeholder="Apellido"
									textAlign="left"
								/>
							</ProfileNameInputContainer>
						</>
					) : (
						<>
							{currentUser.first_name} {currentUser.last_name}
						</>
					)}
				</ProfileName>
				<ProfileCompany isEditting={isEditting}>
					{isEditting ? (
						<Input
							type="underline"
							fontSize={18}
							onChange={onChangeCompany}
							value={currentUser.company || ''}
							colorUnderline={COLOR_GREEN_UNDERLINE}
							placeholder="Empresa"
							textAlign="center"
						/>
					) : (
						<>{currentUser.company || 'Compañia sin especificar'}</>
					)}
				</ProfileCompany>
				<ProfileCity isEditting={isEditting}>
					{isEditting ? (
						<SelectorRelative
							name="sort"
							options={cities.map(mapToCities)}
							placeholder="Elige tu ciudad"
							value={currentUser.city}
							onChange={onSelectCity}
							maxHeight="180px"
							renderInput={
								<InputText>
									<TextValue>
										{currentUser.city || 'Elige una ciudad'}
									</TextValue>
									<DropIcon alt="" src={ICON_ARROW_DOWN} />
								</InputText>
							}
						/>
					) : (
						<>{currentUser.city || 'Ciudad sin especificar'}</>
					)}
				</ProfileCity>
			</ContentEdit>
		</>
	);
};
export default ProductsHeader;
