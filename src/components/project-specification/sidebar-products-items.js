import React, { useState } from 'react';
import getEndPoint from '@Configurations/config';
import { getLocalStorage } from '@Helpers/localstorage.helper';

const SidebarProductsItems = props => {

  const selectedItem = 1;

  const itemClick = item => console.log(item);

  const item = (type, name) => (
    <div key={type} className='sidebar-products-items__items__item' onClick={() => itemClick(type)} >
      <h6 className={`sidebar-products-items__label ${type == selectedItem ? 'active' : ''}`}> {name} </h6>
    </div>
  );

  return (
    <>
      {
        <div className="sidebar-products">
          <div className="sidebar-products-items">
            <div className="sidebar-products-items__section">
              <h5>{props.section} <span className="icon"> > </span> <span className="item">Partidas</span> </h5>
            </div>
            <div className="sidebar-products-items__items">
              {props.items.map(sectionItem => item(sectionItem.id, sectionItem.name))}
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default SidebarProductsItems;