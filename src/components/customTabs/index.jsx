import React, { useState } from 'react';

import TabButtons from './components/TabButtons';
import { Container, BorderContainer } from './styles';

const CustomTabs = ({ children, isProfileStatsTabs }) => {
	const [isActiveTab, setIsActiveTab] = useState(children[0].props.title);
	const handleChangeTab = (tab) => setIsActiveTab(tab);
	const tabs = [];
	let content;

	return (
		<Container>
			{React.Children.map(children, (child) => {
				if (child?.props?.title) {
					tabs.push(child.props.title);
					if (child.props.title === isActiveTab) content = child.props.children;
				}
			})}
			<BorderContainer isProfileStatsTabs={isProfileStatsTabs}>
				<TabButtons
					isActive={isActiveTab}
					tabs={tabs}
					onChange={handleChangeTab}
					isProfileStatsTabs={isProfileStatsTabs}
				/>
				<>{content}</>
			</BorderContainer>
		</Container>
	);
};

export default CustomTabs;
