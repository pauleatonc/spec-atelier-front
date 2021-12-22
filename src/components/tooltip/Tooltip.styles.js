/* Custom properties */
import styled from 'styled-components';

import { BLACK, WHITE } from '../../config/constants/styled-vars';

const TOOLTIP_MARGIN = '30px';
const TOOLTIP_ARROW_SIZE = '6px';

export const Container = styled.div`
	display: inline-block;
  position: relative;
`;

/* CSS border triangles */
export const Content = styled.div`
  position: absolute;
  border-radius: 4px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 12px;
  color: ${WHITE};
  background: ${BLACK};
  line-height: 1;
  z-index: 100;
  font-family: Lato;
  font-size: 12px;
  letter-spacing: 1px;
  white-space: nowrap;
  ${({ position }) => {
    switch (position) {
			case 'top':
				return `top: calc(${TOOLTIP_MARGIN} * -1);`;
			case 'right':
				return `
          left: calc(100% + ${TOOLTIP_MARGIN});
          top: 50%;
          transform: translateX(0) translateY(-50%);
        `;
			case 'bottom':
				return `bottom: calc(${TOOLTIP_MARGIN} * -1);`;
			case 'left':
				return `
          left: auto;
          right: calc(100% + ${TOOLTIP_MARGIN});
          top: 50%;
          transform: translateX(0) translateY(-50%);
        `;
			default:
				return `top: calc(${TOOLTIP_MARGIN} * -1);`;
		}
	}};
  ::before{
    content: " ";
    left: 50%;
    border: solid transparent;
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-width: ${TOOLTIP_ARROW_SIZE};
    margin-left: calc(${TOOLTIP_ARROW_SIZE} * -1);
    ${({ position }) => {
			/* Absolute positioning */
			switch (position) {
				case 'top':
					return `
            top: 100%;
            border-top-color: ${BLACK};
          `;
				case 'right':
					return `
            left: calc(${TOOLTIP_ARROW_SIZE} * -1);
            top: 50%;
            transform: translateX(0) translateY(-50%);
            border-right-color: ${BLACK};
          `;
				case 'bottom':
					return `
            bottom: 100%;
            border-bottom-color: ${BLACK};
          `;
				case 'left':
					return `
            left: auto;
            right: calc(${TOOLTIP_ARROW_SIZE} * -2);
            top: 50%;
            transform: translateX(0) translateY(-50%);
            border-left-color: ${BLACK};
          `;
			}
    }}
  }
`;
