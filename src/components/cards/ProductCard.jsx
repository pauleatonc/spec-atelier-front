import React, { useState } from 'react';
import firebase from 'firebase/app';
import PropTypes from 'prop-types';
import {
  Root,
  Content,
  Photo,
  Details,
  Title,
  Description,
  Category,
  Reference,
  Footer,
  Actions,
  SeeMore,
  Add,
  Check,
} from './ProductCard.styles';
import noPhoto from '../../assets/images/icons/no-photo.svg';
import { DownloadDocumentsIcons } from '../../components/SpecComponents';
import { ANALYTICS_EVENTS } from '../../config/constants/analyticEvents'
import { APP_ENV } from '../../config/constants/environment';

/**
 * The ProductCard's component.
 */
const ProductCard = props => {
  const {
    pdfs,
    dwg,
    bim,
    category,
    description,
    photo,
    reference,
    selected,
    title,
    onClickCard,
    onClickSeeMore,
    canAdd,
    productId
  } = props;
  const analytics = firebase.analytics();
  const [hover, setHover] = useState(false);
  const handleCardMouseEnter = () => setHover(true);
  const handleCardMouseLeave = () => setHover(false);
  const photoStyles = {
    backgroundImage: `url('${photo || noPhoto}')`,
    backgroundSize: photo ? 'cover' : 'initial',
  };
  const showSeeMore = Boolean(onClickSeeMore);

  const handleClickSeeMore = event => {
    if (APP_ENV === 'production') {
      analytics.logEvent(ANALYTICS_EVENTS.PRODUCT_VIEW, { productId });
    }
    onClickSeeMore(event)
  }

  return (
    <Root hover={hover} selected={selected} onClick={handleClickSeeMore} onMouseEnter={handleCardMouseEnter} onMouseLeave={handleCardMouseLeave}>
      <Content>
        <Photo style={photoStyles} />
        <Details>
          <Title title={title}>{title}</Title>
          <Description title={description}>{description}</Description>
          <Category title={category}>{category? `Sistema constructivo: ${category}`: ''}</Category>
          <Reference>{`Referencia ${reference || 'sin especificar'}`}</Reference>
        </Details>
      </Content>
      <Footer>
        <Actions>
          <DownloadDocumentsIcons pdfs={pdfs} dwg={dwg} bim={bim} positionToolTip='top' productId={productId} />
        </Actions>
        <SeeMore hover={hover} show={showSeeMore} onClick={handleClickSeeMore}>
          Ver más
        </SeeMore>
      </Footer>
      {hover && !selected && canAdd && <Add onClick={onClickCard} />}
      {selected && <Check />}
    </Root>
  );
};

ProductCard.defaultProps = {
  photo: '',
  selected: false,
  reference: '',
  onClickCard: () => undefined,
  onClickSeeMore: undefined,
  category: '',
};
ProductCard.propTypes = {
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  photo: PropTypes.string,
  reference: PropTypes.string,
  selected: PropTypes.bool,
  title: PropTypes.string.isRequired,
  onClickCard: PropTypes.func,
  onClickSeeMore: PropTypes.func,
  productId: PropTypes.number
};

export default ProductCard;
