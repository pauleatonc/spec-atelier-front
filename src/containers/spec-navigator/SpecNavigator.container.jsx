import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  onHideSpecProducts,
  onShowSpecProducts,
} from '../spec-products/SpecProducts.actions';
import {
  onHideSpecContents,
  onShowSpecContents,
} from '../spec-contents/SpecContents.actions';
import {
  onHideSpecAdmin,
  onShowSpecAdminn,
} from '../spec-admin/SpecAdmin.actions';
import { Root, Section, NavIcon } from './SpecNavigator.styles';
import {
  DOC_ACTIVE_SOURCE,
  DOC_SOURCE,
  ITEMS_ACTIVE_SOURCE,
  ITEMS_SOURCE,
  SETTING_LINES,
  SETTING_LINES_ACTIVE,
} from '../../assets/Images';
import Tooltip from '../../components/tooltip/Tooltip';

/** The SpecNavigator's container */
const SpecNavigator = ({ canEditOwnerUser }) => {
  const dispatch = useDispatch();
  const { id: specID } = useParams();
  const { show: showProducts } = useSelector((state) => state.specProducts);
  const { show: showContents } = useSelector((state) => state.specContents);
  const { show: showAdmin } = useSelector((state) => state.specAdmin);

  const handleProductsClick = () => {
    if (showProducts) return dispatch(onHideSpecProducts());
    return (() => {
      dispatch(onShowSpecProducts({ specID }));
      dispatch(onHideSpecContents());
      dispatch(onHideSpecAdmin());
    })();
  };

  const handleContentsClick = () => {
    if (showContents) {
      return dispatch(onHideSpecContents());
    }
    return (() => {
      dispatch(onShowSpecContents());
      dispatch(onHideSpecProducts());
      dispatch(onHideSpecAdmin());
    })();
  };

  const handleAdminClick = () => {
    if (showAdmin) {
      return dispatch(onHideSpecAdmin());
    }
    return (() => {
      if (canEditOwnerUser) dispatch(onShowSpecAdminn());
      dispatch(onHideSpecProducts());
      dispatch(onHideSpecContents());
    })();
  };

  return (
    <Root>
      <Section>
        <NavIcon
          src={showProducts ? DOC_ACTIVE_SOURCE : DOC_SOURCE}
          srcActive={DOC_ACTIVE_SOURCE}
          onClick={handleProductsClick}
        />
      </Section>
      <Section>
        <NavIcon
          src={showContents ? ITEMS_ACTIVE_SOURCE : ITEMS_SOURCE}
          srcActive={ITEMS_ACTIVE_SOURCE}
          onClick={handleContentsClick}
        />
      </Section>
      <Section>
        {canEditOwnerUser ? (
          <NavIcon
            src={showAdmin ? SETTING_LINES_ACTIVE : SETTING_LINES}
            srcActive={SETTING_LINES_ACTIVE}
            onClick={handleAdminClick}
          />
        ) : (
          <Tooltip content="No puedes editar" position="right">
            <NavIcon
              src={showAdmin ? SETTING_LINES_ACTIVE : SETTING_LINES}
              srcActive={SETTING_LINES_ACTIVE}
              onClick={handleAdminClick}
            />
          </Tooltip>
        )}
      </Section>
    </Root>
  );
};

export default SpecNavigator;
