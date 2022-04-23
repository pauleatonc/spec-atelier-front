import React, { Fragment, useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Collapsible from 'components/basics/Collapsible';
import {
  ButtonBack,
  Overlay,
} from 'components/layouts/SpecProductsPanelLayout.styles';
import { ARROW_BACK, ARROW_DOWN_SOURCE, ARROW_UP_SOURCE } from 'assets/Images';
import { MAX_SCREEN_SMALL_NAV_JS } from 'config/constants/styled-vars';
import { onHideSpecContents } from './SpecContents.actions';
import {
  Root,
  PanelTitle,
  ListTitle,
  ListItem,
  ArrowIcon,
} from './SpecContents.styles';

/** The SpecContents' container */
const SpecContents = () => {
  const dispatch = useDispatch();
  const { show } = useSelector((state) => state.specContents);
  const { blocks } = useSelector((state) => state.specDocument);
  const { pathname } = useLocation();

  const sections = useMemo(() => {
    const sectionsBlocks = blocks.filter((block) => block.type === 'Section');
    return sectionsBlocks.map((sectionBlock) => ({
      ...sectionBlock,
      items: blocks
        .filter(
          (block) =>
            block.type === 'Item' && block.section === sectionBlock.element.id,
        )
        .map((itemBlock) => ({
          ...itemBlock,
          products: blocks.filter(
            (block) =>
              block.type === 'Product' && block.item === itemBlock.element.id,
          ),
        })),
    }));
  }, [blocks]);

  const [selectedSection, setSelectedSection] = useState();
  const [selectedItem, setSelectedItem] = useState();

  const handleSectionClick = (sectionID) => () => {
    setSelectedItem();
    setSelectedSection((currentSelectedSection) => {
      if (currentSelectedSection === sectionID) {
        return undefined;
      }
      return sectionID;
    });
  };

  const handleItemClick = (itemID) => () => {
    setSelectedItem((currentSelectedItem) => {
      if (currentSelectedItem === itemID) {
        return undefined;
      }
      return itemID;
    });
  };

  useEffect(() => {
    if (show) {
      return;
    }
    setSelectedSection();
    setSelectedItem();
  }, [show]);

  return (
    <>
      {show && <Overlay onClick={() => dispatch(onHideSpecContents())} />}
      <Root show={show}>
        <PanelTitle>
          <ButtonBack
            role="button"
            onClick={() => dispatch(onHideSpecContents())}
          >
            <img alt="arrow back" src={ARROW_BACK} />
          </ButtonBack>
          Tabla de contenidos
        </PanelTitle>
        <ListTitle>Indice de Partidas</ListTitle>
        {sections.map((section) => (
          <Fragment key={section.id}>
            <ListItem
              title={section.element.name}
              onClick={handleSectionClick(section.id)}
              href={
                selectedSection === section.id
                  ? `${pathname}#${section.id}`
                  : 'javascript:;'
              }
            >
              <span>{section.element.name}</span>
              <ArrowIcon
                src={
                  selectedSection === section.id
                    ? ARROW_UP_SOURCE
                    : ARROW_DOWN_SOURCE
                }
              />
            </ListItem>
            <Collapsible show={selectedSection === section.id}>
              {section.items.map((item) => (
                <Fragment key={item.id}>
                  <ListItem
                    padding="0 23px 0 62px"
                    title={item.element.name}
                    onClick={handleItemClick(item.id)}
                    href={
                      selectedItem === item.id
                        ? `${pathname}#${item.id}`
                        : 'javascript:;'
                    }
                  >
                    <span>{item.element.name}</span>
                    <ArrowIcon
                      src={
                        selectedItem === item.id
                          ? ARROW_UP_SOURCE
                          : ARROW_DOWN_SOURCE
                      }
                    />
                  </ListItem>
                  <Collapsible show={selectedItem === item.id}>
                    {item.products.map((product) => (
                      <ListItem
                        key={product.id}
                        padding="0 23px 0 77px"
                        title={product.element.title}
                        href={`${pathname}#${product.id}`}
                        onClick={() => {
                          if (
                            window.matchMedia(MAX_SCREEN_SMALL_NAV_JS).matches
                          )
                            dispatch(onHideSpecContents());
                        }}
                      >
                        <span>{`${product.element.name}`}</span>
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
    </>
  );
};

export default SpecContents;
