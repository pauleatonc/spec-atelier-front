import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Item,
  ItemDetails,
  ItemText,
  RemoveIcon,
} from './AttachedDocuments.styles';
import documentUploadSource from '../../assets/images/icons/document-upload.svg';
import DWG_ICON from '../../assets/images/icons/dwg.svg';
import TECH_ICON from '../../assets/images/icons/tech.svg';
import removeSource from '../../assets/images/icons/remove.svg';

/**
 * The DocumentItem' component.
 */
const DocumentItem = ({ onClickRemove, document, bordered, onClick }) => {

  const getType = () => {
    if (!document?.name) return documentUploadSource;
    if (document.name.includes('.pdf')) return TECH_ICON;
    if (document.name.includes('.dwg')) return DWG_ICON;
    if (document.name.includes('.rvt')) return TECH_ICON;
    return TECH_ICON;
  }
  const [imgType, setImgType] = useState(getType());

  useEffect(() => {
    if (!document?.name) return;
   setImgType(getType());
  }, []);

  useEffect(() => {
    if (!document?.name) return;
   setImgType(getType());
  }, [document]);

  return (
    <Item bordered={bordered} onClick={onClick}>
      <img alt="" src={imgType} />
      <ItemDetails>
        <ItemText>{document.name || document.src}</ItemText>
        <ItemText>{document.size ? `${Math.round(document.size / 1024)} Kb` : ''}</ItemText>
      </ItemDetails>
      <RemoveIcon alt="" src={removeSource} onClick={onClickRemove} />
    </Item>
  );
};

DocumentItem.defaultProps = {
  onClickRemove: () => undefined,
  onClick: () => undefined,
  document: null,
  bordered: false,
};

DocumentItem.propTypes = {
  document: PropTypes.oneOfType([
    PropTypes.instanceOf(window.File),
    PropTypes.object,
  ]),
  onClick: PropTypes.func,
  onClickRemove: PropTypes.func,
  bordered: PropTypes.bool,
};

export default DocumentItem;
