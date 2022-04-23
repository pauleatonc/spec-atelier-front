import React from 'react';
import {
  ContainerTabs,
  ButtonTab,
  ProfileStatsTabs,
  ProfileStatsButtonTab,
} from './styles';

const TabButtons = ({ tabs, onChange, isActive, isProfileStatsTabs }) => {
  return isProfileStatsTabs ? (
    <ProfileStatsTabs>
      {tabs.map((tab, key) => (
        <ProfileStatsButtonTab
          key={key}
          onClick={() => onChange(tab)}
          isActive={isActive === tab}
        >
          {tab}
        </ProfileStatsButtonTab>
      ))}
    </ProfileStatsTabs>
  ) : (
    <ContainerTabs>
      {tabs.map((tab, key) => (
        <ButtonTab
          key={key}
          onClick={() => onChange(tab)}
          isActive={isActive === tab}
        >
          {tab}
        </ButtonTab>
      ))}
    </ContainerTabs>
  );
};

export default TabButtons;
