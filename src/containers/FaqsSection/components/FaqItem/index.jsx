import React, { useState } from 'react';
import {
  Container,
  Title,
  IconExpan,
  ExpandableContent,
  TextExpandable,
} from './styles';

const FaqItem = ({ title, subtitle, body }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Container onClick={() => setIsExpanded(!isExpanded)}>
      <Title>{title}</Title>
      {isExpanded ? (
        <IconExpan className="fas fa-chevron-up" />
      ) : (
        <IconExpan className="fas fa-chevron-down" />
      )}
      {isExpanded && (
        <ExpandableContent>
          <TextExpandable>{subtitle}</TextExpandable>
          {body && <TextExpandable>{body}</TextExpandable>}
        </ExpandableContent>
      )}
    </Container>
  );
};

export default FaqItem;
