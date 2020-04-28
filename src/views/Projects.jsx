import React, { useState } from 'react';
import AppLayout from '../components/layouts/AppLayout';
import { NavbarApp } from '../components/SpecComponents';
import Footer from '../components/footer';

import ProjectsHeader from '../containers/projects-header/ProjectsHeader';
import ProjectsListContainer from '../containers/projects-list/ProjectsList.container';
import ProjectFilterContainer from '../containers/projects-filters/ProjectsFilters.container';

import HEADER_IMG from '../assets/images/project/project_background_header.png';

const Projects = () => {
  const [search, setSearch] = useState('');

  return (
    <AppLayout footer={<Footer />} header={<NavbarApp />}>
      <ProjectsHeader
        title="Mis proyectos"
        description="Crea y administra tus proyectos"
        background={HEADER_IMG}
      />
      <section className="projects">
        <div className="projects__inner">
          <div className="projects__inner__header">
            <div className="projects__inner__header__create">
              <button className="projects__inner__header__create__button">
                <i className="fas fa-plus" />
									Crear nuevo
								</button>
            </div>

            <div className="projects__inner__header__filters">
              <label className="projects__inner__header__filters__label">
                <i className="fas fa-search" />
                <input
                  type="text"
                  name="search"
                  className="projects__inner__header__filters__label__input"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Busca un proyecto..."
                />
              </label>
              <ProjectFilterContainer />
            </div>
          </div>
          <ProjectsListContainer />
        </div>
      </section>
    </AppLayout>
  );
};

export default Projects;
