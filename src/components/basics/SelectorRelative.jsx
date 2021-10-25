import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import {
	Container,
	Content,
	Option,
	Section,
	NoOptions,
} from './SelectorRelative.styles';

const propTypes = {
	options: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
			name: PropTypes.string,
		}),
	),
	onChange: PropTypes.func,
	right: PropTypes.bool,
};

const defaultProps = {
	options: [],
	onChange: () => {},
	right: false,
};

const SelectorRelative = ({
	options,
	onChange,
	renderInput,
	width,
	maxHeight,
	right,
	hoverPrimaryColor,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	const onChangeOption = (value) => () => {
		onChange(value);
		toggle();
	};

	const onClickOusite = (callback) => {
		const innerRef = useRef();
		const callbackRef = useRef();

		useEffect(() => {
			callbackRef.current = callback;
		});

		useEffect(() => {
			const handleClick = (e) => {
				if (
					innerRef.current &&
					callbackRef.current &&
					!innerRef.current.contains(e.target)
				) {
					callbackRef.current(e);
				}
			};
			document.addEventListener('click', handleClick);
			return () => document.removeEventListener('click', handleClick);
		}, []);
		return innerRef;
	};

	const innerRef = onClickOusite(() => {
		if (!isOpen) return;
		setIsOpen(false);
	});

	return (
		<Container isOpen={isOpen} ref={innerRef} width={width}>
			<Section onClick={toggle}>{renderInput}</Section>
			<Content
				isOpen={isOpen}
				width={width}
				maxHeight={maxHeight}
				right={right}
			>
				{options.map((option) => (
					<Option
						key={option.id}
						onClick={onChangeOption(option)}
						value={option.id}
						hoverPrimaryColor={hoverPrimaryColor}
					>
						{option.label}
					</Option>
				))}
				{!options.length && <NoOptions>No hay Opciones Disponibles</NoOptions>}
			</Content>
		</Container>
	);
};

SelectorRelative.propTypes = propTypes;
SelectorRelative.defaultProps = defaultProps;

export default SelectorRelative;
