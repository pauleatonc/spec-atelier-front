import React from 'react';
import { Root, Separator, Section, ProjectName, Download, Monetization } from './SpecHeader.styles';
import logoSource from '../../assets/images/logo-spec.png';
import logo2xSource from '../../assets/images/logo-spec@2x.png';
import logo3xSource from '../../assets/images/logo-spec@3x.png';

/**
 * The SpecHeader's container.
 */
const SpecHeader = () => {
  return (
    <Root>
      <Section>
        <img alt="Specatelier" src={logoSource} srcSet={`${logo2xSource} 2x, ${logo3xSource} 3x`} />
      </Section>
      <Separator />
      <ProjectName>Hospital San Carlos de ANCUD</ProjectName>
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
