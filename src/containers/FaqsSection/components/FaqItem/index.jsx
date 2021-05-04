import React, { useState } from 'react';

import { Container, Title, IconExpan, ExpandableContent } from './styles';

const FaqItem = ({ title, subtitle }) => {
	const [isExpanded, setIsExpanded] = useState(false);
	return (
		<Container onClick={() => setIsExpanded(!isExpanded)}>
			<Title>{title}</Title>
			{isExpanded ? (
				<IconExpan className="fas fa-chevron-up" />
			) : (
				<IconExpan className="fas fa-chevron-down" />
			)}
			{isExpanded && <ExpandableContent>{subtitle}</ExpandableContent>}
		</Container>
	);
};

export default FaqItem;
