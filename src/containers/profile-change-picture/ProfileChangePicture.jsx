import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AvatarEditor from 'react-avatar-editor';

import { PROFILE_PHOTO_DEFAULT } from '../../assets/Images';
import useModal from '../../components/layouts/ModalLayout.hooks';
import ModalLayout from '../../components/layouts/ModalLayout';
import closeSource from '../../assets/images/icons/close.svg';
import Button from '../../components/buttons/Button';
import { VARIANTS_BUTTON } from '../../config/constants/button-variants';

import {
	onHideEditProfilePicture,
	onChangeProfilePicture,
} from '../profile-header/ProfileHeader.actions';

import {
	Root,
	Header,
	Title,
	CloseIcon,
	Footer,
	Body,
	ButtonUploadPicture,
	EditorPicture,
	ButtonZoomPicture,
} from './ProfileChangePicture.styles';

const ProfileChangePicture = () => {
	const { showEditProfilePicture, user, loading } = useSelector(
		(state) => state.profile,
	);
	const [zomAvatar, setZoomAvatar] = useState(1);
	const [avatar, setAvatar] = useState();
	const hiddenFileInput = useRef(null);
	const iconEditorRef = useRef(null);
	const dispatch = useDispatch();

	const { onClose: handleClose, onExiting: handleExiting } = useModal({
		closeCallback: () => dispatch(onHideEditProfilePicture()),
	});

	const handleZoomAvatar = ({ target: { value } }) => {
		const scale = parseFloat(value);
		setZoomAvatar(scale);
	};

	const handleChangePicture = (e) => {
		const fileUploaded = e.target.files[0];
		setAvatar(fileUploaded);
	};

	const handleSaveProfilePicture = () => {
		const img = iconEditorRef.current.getImageScaledToCanvas().toDataURL();
		let imageFile;
		fetch(img)
			.then((res) => res.blob())
			.then((blob) => {
				imageFile = new File([blob], avatar.name);
				dispatch(onChangeProfilePicture(imageFile));
			});
	};

	useEffect(() => {
		if (user?.profile_image?.urls) setAvatar(user.profile_image.urls.original);
	}, [user.profile_image?.urls]);

	return (
		<ModalLayout
			show={showEditProfilePicture}
			onClose={handleClose}
			onExiting={handleExiting}
		>
			<Root>
				<Header>
					<Title>Cambia la foto</Title>
					<CloseIcon alt="Cerrar" src={closeSource} onClick={handleClose} />
				</Header>
				<Body>
					<ButtonUploadPicture>
						<Button
							variant={VARIANTS_BUTTON.CANCEL}
							padding="0"
							onClick={() => hiddenFileInput.current.click()}
						>
							<i
								className="fa fa-plus-circle"
								style={{ marginRight: '10px' }}
							/>
							Subir una foto
						</Button>
						<input
							type="file"
							accept=".jpg, .jpeg, .png"
							ref={hiddenFileInput}
							onChange={handleChangePicture}
							style={{ display: 'none' }}
						/>
					</ButtonUploadPicture>
					<EditorPicture>
						<AvatarEditor
							ref={iconEditorRef}
							scale={parseFloat(zomAvatar)}
							image={avatar || PROFILE_PHOTO_DEFAULT}
							color={[238, 238, 238, 0.36]}
							width={216}
							height={210}
							borderRadius={100}
							rotate={0}
						/>
					</EditorPicture>
					<EditorPicture>
						<ButtonZoomPicture
							onClick={() => setZoomAvatar(zomAvatar - 0.1)}
							disabled={zomAvatar === 1}
						>
							<i className="fa fa-minus" style={{ color: '#979797' }} />
						</ButtonZoomPicture>
						<input
							type="range"
							onChange={handleZoomAvatar}
							min="1"
							max="2"
							step="0.01"
							value={zomAvatar}
						/>
						<ButtonZoomPicture
							onClick={() => setZoomAvatar(zomAvatar + 0.1)}
							disabled={zomAvatar >= 2}
						>
							<i className="fa fa-plus" style={{ color: '#979797' }} />
						</ButtonZoomPicture>
					</EditorPicture>
				</Body>
				<Footer>
					<Button
						variant={VARIANTS_BUTTON.PRIMARY}
						width="130px"
						onClick={handleSaveProfilePicture}
						disabled={!avatar?.name || loading}
					>
						{loading ? 'Guardando...' : 'Guardar'}
					</Button>
				</Footer>
			</Root>
		</ModalLayout>
	);
};

export default ProfileChangePicture;
