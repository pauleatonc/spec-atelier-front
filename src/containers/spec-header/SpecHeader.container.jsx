import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../../components/SpecComponents';
import {
	Root,
	Separator,
	Section,
	ProjectName,
	Download,
	Monetization,
	SpecOptions,
	PermissionsButtonContainer,
} from './SpecHeader.styles';
import logoSource from '../../assets/images/logo-spec.png';
import logo2xSource from '../../assets/images/logo-spec@2x.png';
import logo3xSource from '../../assets/images/logo-spec@3x.png';
import {
	cleanDownload,
	downloadSpecDocument,
	downloadBudgetDocument,
} from './SpecHeader.actions';
import ItemsNavBar from '../../components/navbar/navbar-app/Components/ItemsNavBar';

/**
 * The SpecHeader's container.
 */
const SpecHeader = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const { project } = useSelector((state) => state.specDocument);
	const { url } = useSelector((state) => state.specHeader);

	const handleDownloadClick = () =>
		dispatch(downloadSpecDocument({ specID: id }));
	const handleDownloadBudgetClick = () =>
		dispatch(downloadBudgetDocument({ specID: id }));

	useEffect(() => {
		return () => dispatch(cleanDownload());
	}, []);

	useEffect(() => {
		const downloadDoc = () => {
			const link = document.createElement('a');
			link.download = url;
			link.href = url;
			link.target = '_blank';
			link.id = 'doc';
			document.body.appendChild(link);
			link.click();
		};
		if (url) downloadDoc();
	}, [url]);
	return (
		<Root>
			<SpecOptions>
				<Section withoutPaddingLeft>
					<Link to="/projects" data-view="projects">
						<img
							alt="Specatelier"
							src={logoSource}
							srcSet={`${logo2xSource} 2x, ${logo3xSource} 3x`}
						/>
					</Link>
				</Section>
				<Separator />
				<ProjectName>{project?.name}</ProjectName>
				<Separator />
				<Section>
					<Download onClick={handleDownloadClick} title="Descargar proyecto" />
				</Section>
				<Separator />
				<Section>
					<Monetization
						onClick={handleDownloadBudgetClick}
						title="Descargar presupuesto"
					/>
				</Section>
				<Separator />
				<PermissionsButtonContainer>
					<Button variant="primary" onClick={() => console.log('permisos')}>
						<i className="fas fa-share-alt" />
						&emsp;Equipo
					</Button>
				</PermissionsButtonContainer>
			</SpecOptions>
			<ItemsNavBar />
		</Root>
	);
};

export default SpecHeader;
