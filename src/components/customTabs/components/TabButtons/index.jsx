import React from 'react';

import { ContainerTabs, ButtonTab } from './styles';

const TabButtons = ({ tabs, onChange, isActive }) => {
    return(
        <ContainerTabs>
            {tabs.map((tab, key) => (
                <ButtonTab key={key} onClick={() => onChange(tab)} isActive={isActive === tab}>
                    {tab}
                </ButtonTab>
            ))}
        </ContainerTabs>
    )
}

export default TabButtons;
