import React, { useState } from 'react';
import PropTypes from 'prop-types';
import noPhoto from '@Assets/images/project-specification/products/no-photo.svg';

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
  };
  let wrapperClass = 'product-card'; 

  if (hover) {
    wrapperClass = `${wrapperClass} hover`;
  }

  if (selected) {
    wrapperClass = `${wrapperClass} selected`;
  }

  return (
    <div
      className={wrapperClass}
      onClick={onClickCard}
      onMouseEnter={handleCardMouseEnter}
      onMouseLeave={handleCardMouseLeave}
    >
      <section className="product-card__content">
        <section className="product-card__content--photo" style={photoStyles} />
        <section className="product-card__content--details">
          <p className="product-card__content--details__reference">{`Referencia ${reference}`}</p>
          <p className="product-card__content--details__title" title={title}>{title}</p>
          <p className="product-card__content--details__description" title={description}>{description}</p>
          <p className="product-card__content--details__category" title={category}>{category}</p>
        </section>
      </section>
      <section className="product-card__footer">
        <section className="product-card__footer--actions">
          {dwg !== '#' && (
            <span className="product-card__footer--actions__icon dwg"  onClick={handleIconClick(dwg)} />
          )}
          {bim !== '#' && (
            <span className="product-card__footer--actions__icon bim"  onClick={handleIconClick(bim)} />
          )}
          {technical !== '#' && (
            <span className="product-card__footer--actions__icon tech" onClick={handleIconClick(technical)} />
          )}
          {certificates !== '#' && (
            <span className="product-card__footer--actions__icon cert" onClick={handleIconClick(certificates)} />
          )}
        </section>
        <section className="product-card__footer--see-more">
          {!selected && onClickSeeMore && (
            <span className="product-card__footer--see-more__link" onClick={onClickSeeMore}>Ver más</span>
          )}
        </section>
      </section>
      {hover && !selected && <section className="product-card__add" />}
      {selected && <section className="product-card__check" />}
    </div>
  );
};

ProductCard.defaultProps = {
  bim: '#',
  certificates: '#',
  dwg: '#',
  photo: '',
  selected: false,
  technical: '#',
  onClickCard: () => undefined,
  onClickSeeMore: undefined,
};

ProductCard.propTypes = {
  bim: PropTypes.string,
  category: PropTypes.string.isRequired,
  certificates: PropTypes.string,
  description: PropTypes.string.isRequired,
  dwg: PropTypes.string,
  photo: PropTypes.string,
  reference: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  technical: PropTypes.string,
  title: PropTypes.string.isRequired,
  onClickCard: PropTypes.func,
  onClickSeeMore: PropTypes.func,
};

export default ProductCard;
