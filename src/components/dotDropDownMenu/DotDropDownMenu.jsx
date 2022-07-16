import React from 'react';
import { THREE_DOTS_VERTICAL_SOURCE } from '../../assets/Images';
import { BlockDotsIcon, Container, Content } from './DotDropDownMenu.style';

/** The DotDropDownMenu component */
const DotDropDownMenu = ({ onClick, right }) => {
  return (
    <Container>
      <Content>
        <BlockDotsIcon
          src={THREE_DOTS_VERTICAL_SOURCE}
          onClick={onClick}
          right={right}
        />
      </Content>
    </Container>
  );
};

export default DotDropDownMenu;
