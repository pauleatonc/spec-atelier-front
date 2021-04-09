import React from 'react';
import CustomTabs from '../../components/customTabs';
import Tab from '../../components/customTabs/components/Tab';

import ProjectsStats from './tabs/projects';
import ProductsStats from './tabs/products';

const ProfileStats = () => {
  return (
    <CustomTabs isProfileStatsTabs>
        <Tab title="Proyectos especificados">
          <ProjectsStats />
        </Tab>
        <Tab title="Mis productos">
          <ProductsStats />
        </Tab>
      </CustomTabs>
  );
};

export default ProfileStats;
