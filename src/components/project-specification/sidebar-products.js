import React, { useState } from 'react';
import getEndPoint from '@Configurations/config';
import { getLocalStorage } from '@Helpers/localstorage.helper';

const SidebarProducts = props => {

  const [sections, getSections] = useState(false);

  const item = (id, type, translation) => (
    <div key={type} className='sidebar-products__item' onClick={() => props.itemClick(id)} >
      <span className={`sidebar-products__item--icon ${type} ${props.activeItem == type ? 'active' : ''}`} />
      <h6 className="sidebar-products__item--title">{translation}</h6>
    </div>
  )

  if (!sections) {
    (() => {
      const endpoint = getEndPoint({ service: 'sections' });
      fetch(`${endpoint}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getLocalStorage('token')}`
        },
      }).then(res => res.json()).then(response => getSections(response.sections))
    })();
  }

  return (
    <>
      {
        sections &&
        <div className="sidebar-products">
          <div className="sidebar-products-sections">
            {sections.map(section => item(section.id, section.eng_name, section.name))}
          </div>
        </div>
      }
    </>
  )
}

export default SidebarProducts;