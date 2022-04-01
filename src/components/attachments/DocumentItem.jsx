import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Item,
  ItemDetails,
  ItemText,
  RemoveIcon,
} from './AttachedDocuments.styles';
import {
  DOCUMENT_UPLOAD_SOURCE,
  DWG_ICON,
  REMOVE_SOURCE,
  TECH_ICON,
} from '../../assets/Images';

/** The DocumentItem' component */
const DocumentItem = ({ onClickRemove, document, bordered, onClick }) => {
  const getType = () => {
    if (!document?.name) return DOCUMENT_UPLOAD_SOURCE;
    if (document.name.includes('.pdf')) return TECH_ICON;
    if (document.name.includes('.dwg')) return DWG_ICON;
    if (document.name.includes('.rvt')) return TECH_ICON;
    return TECH_ICON;
  };
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
      <img alt="type" src={imgType} />
      <ItemDetails>
        <ItemText>{document.name || document.src}</ItemText>
        <ItemText>
          {document.size ? `${Math.round(document.size / 1024)} Kb` : ''}
        </ItemText>
      </ItemDetails>
      <RemoveIcon
        alt="remove source"
        src={REMOVE_SOURCE}
        onClick={onClickRemove}
      />
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
