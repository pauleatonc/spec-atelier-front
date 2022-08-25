import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '../../../../../../components/SpecComponents';
import { VARIANTS_BUTTON } from '../../../../../../config/constants/button-variants';
import IconUser from '../../../../../../components/IconUser';
import { NO_PHOTO } from '../../../../../../assets/Images';
import { getProduct } from '../../../../../spec-modal-product/SpecModalProduct.actions';

import {
  TYPES,
  Container,
  HeaderChange,
  IconTypeChange,
  IconExpan,
  DateContainer,
  Date,
  Spacer,
  DetailsChange,
  ContainerButtons,
  DescChange,
  TextDesc,
  ChangeInfo,
  ImgContainerChange,
  ProductDescContainer,
  ProductImageContainer,
  ImageProduct,
  GoToProduct,
  IconAction,
  ElementTitle,
  BlurryTitle,
} from './styles';
import {
  JAVA,
  BURNT_SIENNA,
} from '../../../../../../config/constants/styled-vars';

const ChangeItem = ({
  type,
  isOwner,
  changeId,
  change,
  status,
  element,
  icon,
  changesAccepted = [],
  changesRejected = [],
  setBlocksAccepted,
  setBlocksRejected,
}) => {
  const dispatch = useDispatch();
  const [isExpanded, setIsExpanded] = useState(false);
  const expandible = [TYPES.PRODUCT, TYPES.TEXT, TYPES.IMAGE].includes(type);
  const isChange = expandible && status === 'waiting';
  const isAccepted = !!changesAccepted.find((e) => e === changeId);
  const isRejected = !!changesRejected.find((e) => e === changeId);
  const handleAcceptChange = () => {
    if (isRejected) {
      setBlocksRejected(changesRejected.filter((e) => e !== changeId));
    }
    setBlocksAccepted([...changesAccepted, changeId]);
  };
  const handleRejectChange = () => {
    if (isAccepted) {
      setBlocksAccepted(changesAccepted.filter((e) => e !== changeId));
    }
    setBlocksRejected([...changesRejected, changeId]);
  };

  const handleShowProduct = () => dispatch(getProduct({ id: element.id }));

  return (
    <Container
      isOwner={isOwner}
      type={type}
      action={change.action}
      status={status}
      isExpanded={isExpanded}
    >
      <HeaderChange
        isOwner={isOwner}
        type={type}
        action={change.action}
        status={status}
        onClick={() => isChange && isOwner && setIsExpanded(!isExpanded)}
        isExpanded={isExpanded}
      >
        {isChange && isOwner && <IconTypeChange src={icon} alt="icon_action" />}
        {!isExpanded && (
          <ElementTitle>
            {change.status !== 'accepted' && change.sent && expandible ? (
              <BlurryTitle>{`${element.item_id} `}</BlurryTitle>
            ) : (
              `${element.item_id} `
            )}
            {element.item_title}
          </ElementTitle>
        )}
        {expandible && (
          <DateContainer>
            {(isAccepted || isRejected) && !isExpanded && (
              <IconAction
                color={isAccepted ? JAVA : BURNT_SIENNA}
                className={`fas fa-${isAccepted ? 'check' : 'trash'}`}
              />
            )}
            <Date>{change.created_at}</Date>
            {status === 'waiting' && isOwner ? (
              <IconExpan
                className={`fas fa-chevron-${isExpanded ? 'up' : 'down'}`}
              />
            ) : (
              <Spacer />
            )}
          </DateContainer>
        )}
      </HeaderChange>
      {isExpanded && (
        <DetailsChange>
          {change.action === 'edit' ? (
            <ChangeInfo>
              <DescChange>
                <ImgContainerChange>
                  <IconUser user={change.user} size="56" />
                  <TextDesc mleft="10px">
                    {change.user.name}{' '}
                    <TextDesc bold>{change.description} </TextDesc>
                  </TextDesc>
                </ImgContainerChange>
              </DescChange>
            </ChangeInfo>
          ) : (
            <ChangeInfo>
              <DescChange>
                <ImgContainerChange>
                  <IconUser user={change.user} size="56" />
                  <TextDesc mleft="10px">
                    {change.user.name}{' '}
                    <TextDesc bold>
                      {`${change.title} ${element.item_title}`}{' '}
                    </TextDesc>
                  </TextDesc>
                </ImgContainerChange>
                <ProductDescContainer>
                  <TextDesc fullwidth bold mBottom="15px">
                    {change.sent ? (
                      <BlurryTitle>{`${element.item_id} `}</BlurryTitle>
                    ) : (
                      `${element.item_id} `
                    )}
                    {element.item_title}
                  </TextDesc>
                  <TextDesc fullwidth mBottom="15px" withOverFlow>
                    {element.long_desc}
                  </TextDesc>
                  <TextDesc fullwidth bold>
                    Marca: {element?.brand?.name}
                  </TextDesc>
                </ProductDescContainer>
              </DescChange>
              {TYPES.PRODUCT === type && (
                <ProductImageContainer>
                  <ImageProduct
                    src={element?.images[0]?.urls?.medium || NO_PHOTO}
                  />
                  <GoToProduct onClick={handleShowProduct}>
                    Ver producto
                  </GoToProduct>
                </ProductImageContainer>
              )}
            </ChangeInfo>
          )}
          <ContainerButtons>
            <Button
              width="120px"
              margin="0 10px 0 0"
              onClick={handleRejectChange}
              disabled={isRejected}
            >
              Rechazar
            </Button>
            <Button
              width="120px"
              variant={VARIANTS_BUTTON.PRIMARY}
              onClick={handleAcceptChange}
              disabled={isAccepted}
            >
              Aceptar
            </Button>
          </ContainerButtons>
        </DetailsChange>
      )}
    </Container>
  );
};

export default ChangeItem;
