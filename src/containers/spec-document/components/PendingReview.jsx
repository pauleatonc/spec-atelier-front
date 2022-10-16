import React from 'react';
import { useSelector } from 'react-redux';
import { TextContainer, Watch } from '../SpecDocument.styles';
import { WATCH_ICON } from '../../../assets/Images';

const PendingReviewText = () => {
  const { project } = useSelector((state) => state.specDocument);
  const userOwner = project.user_owner;
  return (
    !userOwner && (
      <TextContainer>
        <p>Pendiente de revisión</p>
        <Watch alt="watch" src={WATCH_ICON} />
      </TextContainer>
    )
  );
};

export default PendingReviewText;
