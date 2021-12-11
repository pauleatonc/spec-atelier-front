import React, { useState, useMemo, Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Collapsible from '../../../../components/basics/Collapsible';
import arrowDownSource from '../../../../assets/images/icons/arrow-down.svg';
import arrowUpSource from '../../../../assets/images/icons/arrow-up.svg';

import {
	Container,
	SelectAllProject,
	AllProjectLabel,
	IconCheck,
	ArrowIcon,
	ListItem,
} from './styles';

const ProjectInfoShare = ({
	withChecks,
	isAllProject,
	setIsAllProject,
	selectedSections,
	setSelectedSections,
	selectedItems,
	setSelectedItems,
}) => {
	const [showSections, setShowSections] = useState([]);
	const { blocks } = useSelector((state) => state.specDocument);

	const itemsBlocks = useMemo(
		() => blocks.filter((block) => block.type === 'Item'),
		[blocks],
	);

	const sections = useMemo(() => {
		const sectionsBlocks = blocks.filter((block) => block.type === 'Section');
		return sectionsBlocks.map((sectionBlock) => ({
			...sectionBlock,
			items: blocks
				.filter(
					(block) =>
						block.type === 'Item' && block.section === sectionBlock.element.id,
				)
				.map((itemBlock) => ({
					...itemBlock,
					products: blocks.filter(
						(block) =>
							block.type === 'Product' && block.item === itemBlock.element.id,
					),
				})),
		}));
	}, [blocks]);

	const handleClickAllProject = () => {
		if (isAllProject) {
			setSelectedSections([]);
			setSelectedItems([]);
			setIsAllProject(false);
		} else {
			setIsAllProject(true);
		}
	};

	const handleShowSection = (sectionID) => () => {
		const isSelected = showSections.find((sec) => sec === sectionID);
		if (isSelected) {
			setShowSections(showSections.filter((sec) => sec !== sectionID));
		} else setShowSections([...showSections, sectionID]);
	};

	const handleSelectSection = (sectionID) => () => {
		const isSelected = selectedSections.find((sec) => sec === sectionID);
		if (isSelected) {
			setSelectedSections(selectedSections.filter((sec) => sec !== sectionID));
		} else setSelectedSections([...selectedSections, sectionID]);
	};

	const handleSelectItem = (itemID) => () => {
		const isSelected = selectedItems.find((item) => item === itemID);
		if (isSelected) {
			setSelectedItems(selectedItems.filter((item) => item !== itemID));
		} else setSelectedItems([...selectedItems, itemID]);
	};

	useEffect(() => {
		if (isAllProject) {
			setSelectedSections(sections.map((sec) => sec.element.id));
			setSelectedItems(itemsBlocks.map((item) => item.element.id));
		}
	}, [isAllProject]);

	return (
		<Container>
			{withChecks && (
				<SelectAllProject onClick={handleClickAllProject}>
					<IconCheck
						className={isAllProject ? 'fas fa-check-square' : 'far fa-square'}
					/>
					<AllProjectLabel>Todo el Proyecto</AllProjectLabel>
				</SelectAllProject>
			)}
			{sections.map((section) => {
				const isShowSection = showSections.find(
					(sec) => sec === section.element.id,
				);
				const isSelectedSection =
					withChecks &&
					selectedSections.find((sec) => sec === section.element.id);
				return (
					<Fragment key={section.id}>
						<ListItem title={section.element.name}>
							{withChecks && (
								<IconCheck
									className={
										isSelectedSection ? 'fas fa-check-square' : 'far fa-square'
									}
									onClick={handleSelectSection(section.element.id)}
								/>
							)}
							<span>{section.element.name}</span>
							<ArrowIcon
								onClick={handleShowSection(section.element.id)}
								src={isShowSection ? arrowUpSource : arrowDownSource}
							/>
						</ListItem>
						<Collapsible show={isShowSection}>
							{section.items.map((item) => {
								const isSelectedItem =
									withChecks &&
									selectedItems.find((itm) => itm === item.element.id);
								return (
									<Fragment key={item.id}>
										<ListItem padding="0 23px" title={item.element.name}>
											{withChecks && (
												<IconCheck
													className={
														isSelectedItem
															? 'fas fa-check-square'
															: 'far fa-square'
													}
													onClick={handleSelectItem(item.element.id)}
												/>
											)}
											<span>{item.element.name}</span>
										</ListItem>
									</Fragment>
								);
							})}
						</Collapsible>
					</Fragment>
				);
			})}
		</Container>
	);
};

export default ProjectInfoShare;
