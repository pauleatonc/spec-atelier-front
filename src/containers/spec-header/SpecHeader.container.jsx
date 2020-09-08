import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Root, Separator, Section, ProjectName, Download, Monetization } from './SpecHeader.styles';
import logoSource from '../../assets/images/logo-spec.png';
import logo2xSource from '../../assets/images/logo-spec@2x.png';
import logo3xSource from '../../assets/images/logo-spec@3x.png';

/**
 * The SpecHeader's container.
 */
const SpecHeader = () => {
  const { project } = useSelector(state => state.specDocument);
  return (
    <Root>
      <Section>
        <Link to="/projects" data-view="projects">
          <img alt="Specatelier" src={logoSource} srcSet={`${logo2xSource} 2x, ${logo3xSource} 3x`} />
        </Link>
      </Section>
      <Separator />
      <ProjectName>{project?.name}</ProjectName>
      <Separator />
      <Section>
        <Download />
      </Section>
      <Separator />
      <Section>
        <Monetization />
      </Section>
    </Root>
  );
};

export default SpecHeader;
