import React, { useState } from 'react';
import { Button } from '../../../../../../components/SpecComponents';
import { VARIANTS_BUTTON } from '../../../../../../config/constants/button-variants';
import IconUser from '../../../../../../components/IconUser';
import { NO_PHOTO } from '../../../../../../assets/Images';

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
} from './styles';

const ChangeItem = ({
  type,
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

  return (
    <Container
      type={type}
      action={change.action}
      status={status}
      isExpanded={isExpanded}
    >
      <HeaderChange
        type={type}
        action={change.action}
        status={status}
        onClick={() => isChange && setIsExpanded(!isExpanded)}
        isExpanded={isExpanded}
      >
        {isChange && <IconTypeChange src={icon} alt="icon_action" />}
        {!isExpanded && <span>{element.name}</span>}
        {type === TYPES.PRODUCT && (
          <DateContainer>
            <Date>{change.date}</Date>
            {status === 'waiting' ? (
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
            <ProductImageContainer>
              <ImageProduct
                src={element?.images[0]?.urls?.medium || NO_PHOTO}
              />
              <GoToProduct onClick={() => console.log('ver')}>
                Ver producto
              </GoToProduct>
            </ProductImageContainer>
          </ChangeInfo>
          <ContainerButtons>
            <Button
              margin="0 10px 0 0"
              onClick={handleRejectChange}
              disabled={isRejected}
            >
              Rechazar
            </Button>
            <Button
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
