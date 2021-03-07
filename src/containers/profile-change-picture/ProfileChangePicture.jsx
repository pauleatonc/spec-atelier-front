import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AvatarEditor from 'react-avatar-editor'

import {
    PROFILE_PHOTO_DEFAULT,
    PROFILE_PHOTO_DEFAULT_2X,
    PROFILE_PHOTO_DEFAULT_3X
  } from '../../assets/Images';

import useModal from '../../components/layouts/ModalLayout.hooks';
import ModalLayout from '../../components/layouts/ModalLayout';
import closeSource from '../../assets/images/icons/close.svg';
import Button from '../../components/buttons/Button';

import { onHideEditProfilePicture, onChangeProfilePicture } from '../profile-header/ProfileHeader.actions';

import { Root, Header, Title, CloseIcon, Footer, Body, ButtonUploadPicture, EditorPicture, ButtonZoomPicture } from './ProfileChangePicture.styles';

const ProfileChangePicture = () => {
    const [ zomAvatar, setZoomAvatar ] = useState(1);
    const [ avatar, setAvatar ] = useState();
    const { showEditProfilePicture } = useSelector(state => state.profile);
    const hiddenFileInput = useRef(null);
    const dispatch = useDispatch();
    const { onClose: handleClose, onExiting: handleExiting } = useModal({
		closeCallback: () => dispatch(onHideEditProfilePicture()),
		exitingCallback: () => { },
	});

    const handleZoomAvatar = ({ target: { value } }) => {
        const scale = parseFloat(value)
        setZoomAvatar(scale)
    }

    const handleZoomOut = () => setZoomAvatar(zomAvatar - 0.1);

    const handleZoomIn = () => setZoomAvatar(zomAvatar + 0.1);
    
    const handleUploadPicture = () => hiddenFileInput.current.click();
    
    const handleChangePicture = (e) => {
        const fileUploaded = e.target.files[0];
        setAvatar(fileUploaded);
    }

    const handleSaveProfilePicture = () => dispatch(onChangeProfilePicture(avatar));

    return (
        <ModalLayout show={showEditProfilePicture} onClose={handleClose} onExiting={handleExiting}>
            <Root>
                <Header>
                    <Title>Cambia la foto</Title>
                    <CloseIcon alt="Cerrar" src={closeSource} onClick={handleClose} />
                </Header>
                <Body>
                    <ButtonUploadPicture>
                        <Button variant="cancel" padding="0" onClick={handleUploadPicture}><i className="fa fa-plus-circle" style={{ marginRight: '10px' }} />Subir una  foto</Button>
                        <input type="file" accept=".jpg, .jpeg, .png" ref={hiddenFileInput} onChange={handleChangePicture} style={{display:'none'}} />
                    </ButtonUploadPicture>
                    <EditorPicture>
                        <AvatarEditor
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
                        <ButtonZoomPicture onClick={handleZoomOut} disabled={zomAvatar === 1}>
                            <i className="fa fa-minus" style={{color: '#979797'}} />
                        </ButtonZoomPicture>
                        <input
                            type="range"
                            onChange={handleZoomAvatar}
                            min="1"
                            max="2"
                            step="0.01"
                            value={zomAvatar}
                        />
                        <ButtonZoomPicture onClick={handleZoomIn} disabled={zomAvatar >= 2}>
                            <i className="fa fa-plus" style={{color: '#979797'}} />
                        </ButtonZoomPicture>
                    </EditorPicture>
                </Body>
                <Footer>
                    <Button variant="primary" width="113px" onClick={handleSaveProfilePicture}>
						Guardar
					</Button>
                </Footer>
            </Root>
        </ModalLayout>
    );
};

export default ProfileChangePicture;