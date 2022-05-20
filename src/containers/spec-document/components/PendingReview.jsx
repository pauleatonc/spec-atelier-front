import React from 'react';
import { TextContainer, Watch } from '../SpecDocument.styles';
import { WATCH_ICON } from '../../../assets/Images';

const PendingReviewText = () => (
  <TextContainer>
    <p>Pendiente de revisión</p>
    <Watch alt="watch" src={WATCH_ICON} />
  </TextContainer>
);

export default PendingReviewText;
