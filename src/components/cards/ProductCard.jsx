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
	SeeMore,
	Add,
	Check,
} from './ProductCard.styles';
import noPhoto from '../../assets/images/icons/no-photo.svg';
import { DownloadDocumentsIcons } from '../SpecComponents';

/**
 * The ProductCard's component.
 */
const ProductCard = (props) => {
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
		productId,
	} = props;
	const [hover, setHover] = useState(false);
	const handleCardMouseEnter = () => setHover(true);
	const handleCardMouseLeave = () => setHover(false);
	const photoStyles = {
		backgroundImage: `url('${photo || noPhoto}')`,
		backgroundSize: photo ? 'cover' : 'initial',
	};
	const showSeeMore = Boolean(onClickSeeMore);

	return (
		<Root
			hover={hover}
			selected={selected}
			onClick={onClickSeeMore}
			onMouseEnter={handleCardMouseEnter}
			onMouseLeave={handleCardMouseLeave}
		>
			<Content>
				<Photo style={photoStyles} />
				<Details>
					<Title title={title}>{title}</Title>
					<Description title={description}>{description}</Description>
					<Category title={category}>
						{category ? `Sistema constructivo: ${category}` : ''}
					</Category>
					<Reference>{`Referencia ${
						reference || 'sin especificar'
					}`}</Reference>
				</Details>
			</Content>
			<Footer>
				<Actions>
					<DownloadDocumentsIcons
						pdfs={pdfs}
						dwg={dwg}
						bim={bim}
						positionToolTip="top"
						productId={productId}
					/>
				</Actions>
				<SeeMore hover={hover} show={showSeeMore} onClick={onClickSeeMore}>
					Ver más
				</SeeMore>
			</Footer>
			{hover && !selected && canAdd && <Add onClick={onClickCard} />}
			{selected && <Check onClick={onClickCard} />}
		</Root>
	);
};

ProductCard.defaultProps = {
	photo: '',
	selected: false,
	reference: '',
	onClickCard: () => undefined,
	onClickSeeMore: undefined,
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
	productId: PropTypes.number.isRequired,
};

export default ProductCard;
