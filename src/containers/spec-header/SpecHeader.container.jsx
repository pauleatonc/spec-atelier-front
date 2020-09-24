import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Root, Separator, Section, ProjectName, Download, Monetization } from './SpecHeader.styles';
import logoSource from '../../assets/images/logo-spec.png';
import logo2xSource from '../../assets/images/logo-spec@2x.png';
import logo3xSource from '../../assets/images/logo-spec@3x.png';
import { cleanDownload, downloadSpecDocument } from './SpecHeader.actions';

/**
 * The SpecHeader's container.
 */
const SpecHeader = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { project } = useSelector(state => state.specDocument);
  const { url } = useSelector(state => state.specHeader);

  const handleDownloadClick = () => dispatch(downloadSpecDocument({ specID: id }));

  useEffect(() => {
    return () => dispatch(cleanDownload());
  }, []);

  useEffect(() => {
    const downloadDoc = () => {
      const link = document.createElement("a");
      link.download = url;
      link.href = url;
      link.target = '_blank';
      link.id = 'doc';
      document.body.appendChild(link);
      link.click();
    }
    if (url) downloadDoc();
  }, [url]);

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
        <Download onClick={handleDownloadClick} />
      </Section>
      <Separator />
      <Section>
        <Monetization />
      </Section>
    </Root>
  );
};

export default SpecHeader;
