import React, { Fragment, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Collapsible from '../../components/basics/Collapsible';
import { Root, PanelTitle, ListTitle, ListItem, ArrowIcon } from './SpecContents.styles';
import arrowDownSource from '../../assets/images/icons/arrow-down.svg';
import arrowUpSource from '../../assets/images/icons/arrow-up.svg';

/**
 * The SpecContents' container.
 */
const SpecContents = () => {
  const { show } = useSelector(state => state.specContents);
  const { blocks } = useSelector(state => state.specDocument);
  const history = useHistory();
  const sections = useMemo(() => {
    const sectionsBlocks = blocks.filter(block => block.type === 'Section');
    
    return sectionsBlocks.map(sectionBlock => ({
      ...sectionBlock,
      items: blocks
        .filter(block => block.type === 'Item' && block.section === sectionBlock.id)
        .map(itemBlock => ({
          ...itemBlock,
          products: blocks.filter(block => block.type === 'Product' && block.item === itemBlock.id),
        })),
    }));
  }, [blocks]);
  const [selectedSection, setSelectedSection] = useState();
  const [selectedItem, setSelectedItem] = useState();
  const handleSectionClick = sectionID => () => {
    setSelectedItem();
    setSelectedSection(currentSelectedSection => {
      if (currentSelectedSection === sectionID) {
        return undefined;
      }

      history.push(`#${sectionID}`);

      return sectionID;
    });
  };
  const handleItemClick = itemID => () => {
    setSelectedItem(currentSelectedItem => {
      if (currentSelectedItem === itemID) {
        return undefined;
      }

      history.push(`#${itemID}`);

      return itemID;
    });
  };
  const handleProductClick = productID => () => {
    history.push(`#${productID}`);
  };

  useEffect(() => {
    if (show) {
      return;
    }

    setSelectedSection();
    setSelectedItem();
  }, [show]);

  return (
    <Root show={show}>
      <PanelTitle>Tabla de contenidos</PanelTitle>
      <ListTitle>Indice de Partidas</ListTitle>
      {sections.map((section, sectionIndex) => (
        <Fragment key={section.id}>
          <ListItem title={section.element.title} onClick={handleSectionClick(section.id)}>
            <span>
              {`${sectionIndex + 1}. ${section.element.title}`}
            </span>
            <ArrowIcon src={selectedSection === section.id ? arrowUpSource : arrowDownSource} />
          </ListItem>
          <Collapsible show={selectedSection === section.id}>
            {section.items.map((item, itemIndex) => (
              <Fragment key={item.id}>
                <ListItem padding="0 23px 0 62px" title={item.element.title} onClick={handleItemClick(item.id)}>
                  <span>
                    {`${sectionIndex + 1}.${itemIndex + 1}. ${item.element.title}`}
                  </span>
                  <ArrowIcon src={selectedItem === item.id ? arrowUpSource : arrowDownSource} />
                </ListItem>
                <Collapsible show={selectedItem === item.id}>
                  {item.products.map((product, productIndex) => (
                    <ListItem
                      key={product.id}
                      padding="0 23px 0 77px"
                      title={product.element.title}
                      onClick={handleProductClick(product.id)}
                    >
                      <span>
                        {`${sectionIndex + 1}.${itemIndex + 1}.${productIndex + 1}. ${product.element.title}`}
                      </span>
                      <span>&nbsp;</span>
                    </ListItem>
                  ))}
                </Collapsible>
              </Fragment>
            ))}
          </Collapsible>
        </Fragment>
      ))}
    </Root>
  );
};

export default SpecContents;
