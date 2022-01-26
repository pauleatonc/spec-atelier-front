/* eslint-disable import/no-cycle */
import React, { useState } from 'react';
import CheckItem from '../CheckItem';

const NestedChecklist = ({
	withChecks,
	data,
	isAllSelected,
	toggleAllChildren,
	paddingItems,
}) => {
	const [showSections, setShowSections] = useState([]);

	const handleShowSection = (sectionElementId) => {
		const isShowed = showSections.some((sec) => sec === sectionElementId);
		if (isShowed) {
			setShowSections(showSections.filter((sec) => sec !== sectionElementId));
		} else setShowSections([...showSections, sectionElementId]);
	};
	return (
		<>
			{!!data.length &&
				data.map((node) => (
					<CheckItem
						key={`${node.label}-${node.value}`}
						withChecks={withChecks}
						node={node}
						isAllSelected={isAllSelected}
						toggleAllChildren={toggleAllChildren}
						showSections={showSections}
						handleShowSection={handleShowSection}
						paddingItems={paddingItems}
					/>
				))}
		</>
	);
};

export default NestedChecklist;
