import React from 'react';
import { Modal, Button } from '../../components/SpecComponents';
import {
	Container,
	Content,
	ButtonClose,
	Header,
	Title,
	Section,
	OptionsList,
	SectionName,
	Separator,
} from './SpecModalAttachProduct.styles';

function SpecModalAttachProduct({
	showAttachModal,
	onSubmit,
	onClose,
	product,
}) {
	const { items = [], sections = [] } = product;

	return (
		<Modal show={showAttachModal} onClose={onClose}>
			<Container>
				<Content>
					<ButtonClose
						role="button"
						tabIndex="0"
						onKeyDown={onClose}
						onClick={onClose}
					>
						<i className="fas fa-times" />
					</ButtonClose>
					<Header>
						<Title>¿Dónde quieres añadir la información?</Title>
					</Header>
					<Section>
						<OptionsList>
							{sections.map(({ id, name }) => (
								<>
									<Separator />
									<SectionName key={id}>{name}</SectionName>
								</>
							))}
						</OptionsList>
						<Button variant="primary" onClick={onSubmit}>
							Añadir
						</Button>
					</Section>
				</Content>
			</Container>
		</Modal>
	);
}

export default SpecModalAttachProduct;
