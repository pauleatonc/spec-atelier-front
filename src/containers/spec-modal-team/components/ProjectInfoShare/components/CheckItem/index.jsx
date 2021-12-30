/* eslint-disable import/no-cycle */
import React from 'react';

import NestedChecklist from '../NestedCheckList';
import Collapsible from '../../../../../../components/basics/Collapsible';
import arrowDownSource from '../../../../../../assets/images/icons/arrow-down.svg';
import arrowUpSource from '../../../../../../assets/images/icons/arrow-up.svg';
import { IconCheck } from '../../styles';

import { ArrowIcon, ListItem } from './styles';

const CheckItem = ({
	withChecks,
	node,
	isAllSelected,
	toggleAllChildren,
	showSections,
	handleShowSection,
	paddingItems = '0',
}) => {
	const hasItems = !!node?.children.length;
	const isShowSection = showSections.some((section) => section === node.value);
	const onHandleArrowIconClick = () => handleShowSection(node.value);
	const onHandleIconCheckClick = () => toggleAllChildren(node.value);

	return (
		<>
			<ListItem padding={paddingItems}>
				{withChecks && (
					<IconCheck
						className={
							isAllSelected(node) ? 'fas fa-check-square' : 'far fa-square'
						}
						onClick={onHandleIconCheckClick}
					/>
				)}
				<span>{node.label}</span>
				{hasItems && (
					<ArrowIcon
						onClick={onHandleArrowIconClick}
						src={isShowSection ? arrowUpSource : arrowDownSource}
					/>
				)}
			</ListItem>
			{hasItems && (
				<Collapsible show={isShowSection}>
					<NestedChecklist
						withChecks={withChecks}
						data={node.children}
						paddingItems="0 23px"
						isAllSelected={isAllSelected}
						toggleAllChildren={toggleAllChildren}
					/>
				</Collapsible>
			)}
		</>
	);
};

export default CheckItem;
