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
  ProfileContainer,
  ProfilePhoto,
  Photo,
  IconPhoto,
  Item,
  ItemText,
  UnderLine,
  InputText,
  TextValue,
  DropIcon,
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
import { getUserProfile, setUserProfile } from './ProfileHeader.actions';
import { Separator } from '../../components/navbar/navbar-profile/NavProfile.styles';
import SelectorRelative from '../../components/basics/SelectorRelative';
import { mapToSelector } from '../../helpers/helpers';

const ProductsHeader = () => {
  const [isEditting, setIsEditing] = useState(false);
  const { user, error, loading } = useSelector((state) => state.profile);
  const { cities } = useSelector((state) => state.app);
  const [currentUser, setCurrentUser] = useState(user);
  const dispatch = useDispatch();

  
  const onSaveUserInfo = () => {
    dispatch(setUserProfile({ user: currentUser }));
  }

  const onClickEdit = () => {
    if (isEditting) onSaveUserInfo();
    setIsEditing(!isEditting);
  }

  useEffect(() => {
    dispatch(getUserProfile());
  }, []);

  useEffect(() => {
    const { first_name, last_name, id, city, company } = user;
    setCurrentUser({ first_name, last_name, id, city, company });
  }, [user]);
  console.log('user', user);

  const mapToCities = (c) => ({ label: c.name, value: c.id, ...c });
  const onSelectCity = (city) =>
    setCurrentUser({ ...currentUser, city: city.value });

  const onChangeCompany = ({ target: { value } }) =>
    setCurrentUser({ ...currentUser, company: value });


  if (loading) return <Loading />;

  return (
    <>
      <Container>
        <Header
          alt="Specatelier"
          src={PROFILE_HEADER}
          srcSet={`${PROFILE_HEADER_2X} 2x, ${PROFILE_HEADER_3X} 3x`}
        />
        <ProfilePhoto>
          <ProfileContainer>
            <Photo
              sr={PROFILE_PHOTO_DEFAULT}
              srcSet={`${PROFILE_PHOTO_DEFAULT_2X} 2x, ${PROFILE_PHOTO_DEFAULT_3X} 3x`}
            />
            <IconPhoto>
              <img src={ICON_CAMERA} />
            </IconPhoto>
          </ProfileContainer>
        </ProfilePhoto>
        <ButtonContainer>
          <Button
            variant="default"
            inverse
            style={{ backgroundColor: '#eeeeee' }}
            onClick={onClickEdit}
          >
            Editar perfil
          </Button>
        </ButtonContainer>
      </Container>
      <ContentEdit>
        <ProfileName>
          {currentUser.first_name} {currentUser.last_name}
        </ProfileName>
        <ProfileCompany>
          {isEditting ? (
            <Input onChange={onChangeCompany} value={currentUser.company || ''} />
          ) : (
            <>{currentUser.company || 'Compañia sin especificar'}</>
          )}
        </ProfileCompany>
        <ProfileCity>
          {isEditting ? (
            <SelectorRelative
              name="sort"
              type="underline"
              options={cities.map(mapToCities)}
              placeholder="Elige tu ciudad"
              value={currentUser.city}
              onChange={onSelectCity}
              maxHeight="180px"
              width="200px"
              style={{ margin: 24 }}
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
      <Item>
        <ItemText>Mis Productos</ItemText>
        <UnderLine />
      </Item>

      <Separator style={{ marginBottom: '85px', marginTop: 0 }} />
    </>
  );
};
export default ProductsHeader;
