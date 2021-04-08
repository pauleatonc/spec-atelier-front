import React, { useState } from 'react';

import TabButtons from './components/TabButtons';
import {Container} from  './styles';
  
const CustomTabs  = ({ children }) =>{
    const [isActiveTab, setIsActiveTab] = useState(children[0].props.title)
    const handleChangeTab = tab => setIsActiveTab(tab);

    let content;
    let tabs = [];

    return (
        <Container>
            {React.Children.map(children, child => {
                tabs.push(child.props.title)
                if (child.props.title === isActiveTab) content = child.props.children
            })}
            <TabButtons isActive={isActiveTab} tabs={tabs} onChange={handleChangeTab}/>
            <>{content}</>
        </Container>
    );
    
}
   
export default CustomTabs;
