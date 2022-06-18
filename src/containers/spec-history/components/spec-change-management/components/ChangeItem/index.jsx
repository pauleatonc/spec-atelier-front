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
  IconCheck,
} from './styles';

const ChangeItem = ({
  type,
  isOwner,
  blockId,
  change,
  status,
  element,
  icon,
  blocksAccepted = [],
  blocksRejected = [],
  setBlocksAccepted,
  setBlocksRejected,
}) => {
  const dispatch = useDispatch();
  const [isExpanded, setIsExpanded] = useState(false);
  const isChange = type === TYPES.PRODUCT && status === 'waiting';
  const isAccepted = !!blocksAccepted.find((block) => block === blockId);
  const isRejected = !!blocksRejected.find((block) => block === blockId);
  const handleAcceptChange = () => {
    if (isRejected) {
      setBlocksRejected(blocksRejected.filter((block) => block !== blockId));
    }
    setBlocksAccepted([...blocksAccepted, blockId]);
  };
  const handleRejectChange = () => {
    if (isAccepted) {
      setBlocksAccepted(blocksAccepted.filter((block) => block !== blockId));
    }
    setBlocksRejected([...blocksRejected, blockId]);
  };

  const handleShowProduct = () => (event) => {
    event.stopPropagation();
    dispatch(getProduct({ id: element.id }));
  };

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
        {!isExpanded && <span>{element.name}</span>}
        {type === TYPES.PRODUCT && (
          <DateContainer>
            {isAccepted && !isExpanded && (
              <IconCheck className="fas fa-check" />
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
                    <TextDesc bold>{change.description} </TextDesc>
                  </TextDesc>
                </ImgContainerChange>
                <ProductDescContainer>
                  <TextDesc fullwidth bold mBottom="15px">
                    {element.name}
                  </TextDesc>
                  <TextDesc fullwidth mBottom="15px" withOverFlow>
                    {element.long_desc}
                  </TextDesc>
                  <TextDesc fullwidth bold>
                    Marca: {element?.brand?.name}
                  </TextDesc>
                </ProductDescContainer>
              </DescChange>
              <ProductImageContainer>
                <ImageProduct
                  src={element?.images[0]?.urls?.medium || NO_PHOTO}
                />
                <GoToProduct onClick={handleShowProduct}>
                  Ver producto
                </GoToProduct>
              </ProductImageContainer>
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
