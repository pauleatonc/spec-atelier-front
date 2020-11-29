import React, { useState } from 'react';
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
  DwgIcon,
  BimIcon,
  TechIcon,
  CertIcon,
  SeeMore,
  Add,
  Check,
} from './ProductCard.styles';
import noPhoto from '../../assets/images/icons/no-photo.svg';

/**
 * The ProductCard's component.
 */
const ProductCard = props => {
  const {
    bim,
    category,
    certificates,
    description,
    dwg,
    photo,
    reference,
    selected,
    technical,
    title,
    onClickCard,
    onClickSeeMore,
    canAdd,
  } = props;
  const [hover, setHover] = useState(false);
  const handleCardMouseEnter = () => setHover(true);
  const handleCardMouseLeave = () => setHover(false);
  const handleIconClick = location => event => {
    event.stopPropagation();

    window.open(location, '_blank');
  };
  const photoStyles = {
    backgroundImage: `url('${photo || noPhoto}')`,
    backgroundSize: photo ? 'cover' : 'initial',
  };
  const showSeeMore = Boolean(onClickSeeMore);

  return (
    <Root hover={hover} selected={selected} onClick={onClickSeeMore} onMouseEnter={handleCardMouseEnter} onMouseLeave={handleCardMouseLeave}>
      <Content>
        <Photo style={photoStyles} />
        <Details>
          <Title title={title}>{title}</Title>
          <Description title={description}>{description}</Description>
          <Category title={category}>{category? `Sistema constructivo: ${category}`: ''}</Category>
          <Reference>{`Referencia ${reference}`}</Reference>
        </Details>
      </Content>
      <Footer>
        <Actions>
          {dwg !== '#' && <DwgIcon hover={hover} onClick={handleIconClick(dwg)} />}
          {bim !== '#' && <BimIcon hover={hover} onClick={handleIconClick(bim)} />}
          {technical !== '#' && <TechIcon hover={hover} onClick={handleIconClick(technical)} />}
          {certificates !== '#' && <CertIcon hover={hover} onClick={handleIconClick(certificates)} />}
        </Actions>
        <SeeMore hover={hover} show={showSeeMore} onClick={onClickSeeMore}>
          Ver más
        </SeeMore>
      </Footer>
      {hover && !selected && canAdd && <Add onClick={onClickCard} />}
      {selected && <Check />}
    </Root>
  );
};

ProductCard.defaultProps = {
  bim: '#',
  certificates: '#',
  dwg: '#',
  photo: '',
  selected: false,
  technical: '#',
  reference: '',
  onClickCard: () => undefined,
  onClickSeeMore: undefined,
  category: '',
};
ProductCard.propTypes = {
  bim: PropTypes.string,
  category: PropTypes.string.isRequired,
  certificates: PropTypes.string,
  description: PropTypes.string.isRequired,
  dwg: PropTypes.string,
  photo: PropTypes.string,
  reference: PropTypes.string,
  selected: PropTypes.bool,
  technical: PropTypes.string,
  title: PropTypes.string.isRequired,
  onClickCard: PropTypes.func,
  onClickSeeMore: PropTypes.func,
};

export default ProductCard;
