import React, { useState } from 'react';
import { Container, Content } from './Tooltip.styles';

const Tooltip = ({ position, delay = 400, children, content }) => {
	let timeout;
	const [active, setActive] = useState(false);

	const showTip = () => {
		timeout = setTimeout(() => {
			setActive(true);
		}, delay);
	};

	const hideTip = () => {
		clearInterval(timeout);
		setActive(false);
	};

	return (
		<Container onMouseEnter={showTip} onMouseLeave={hideTip}>
			{/* Wrapping */}
			{children}
			{active && (
				<Content position={position}>
					{/* Content */}
					{content}
				</Content>
			)}
		</Container>
	);
};

export default Tooltip;
