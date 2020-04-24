import React from 'react';
import PropTypes from 'prop-types';
import { Root, Line, Bubbles, BubbleActive, BubbleInactive, BubbleText } from './StepsBubbles.styles';

/**
 * The StepsBubbles' component.
 */
const StepsBubbles = props => {
  const { prefix, steps } = props;

  return (
    <Root width={`${50 * steps.length}px`}>
      <Line />
      <Bubbles>
        {steps.map((step, index) => (
          step.active ? (
            <BubbleActive key={`${prefix}-step-active-${index}`} onClick={step.action}>
              <BubbleText>{index + 1}</BubbleText>
            </BubbleActive>
          ) : (
            <BubbleInactive key={`${prefix}-step-inactive-${index}`} />
          )
        ))}
      </Bubbles>
    </Root>
  );
};

StepsBubbles.defaultProps = {
  steps: [],
};
StepsBubbles.propTypes = {
  prefix: PropTypes.string.isRequired,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      active: PropTypes.bool.isRequired,
      action: PropTypes.func,
    }),
  ),
}; 

export default StepsBubbles;
