/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { background, fontColor, wrapValue } from './helpers';

function orientationValue({ orientation }) {
    switch (orientation) {
        case 'horizontal':
            return 'row';
        case 'vertical':
            return 'column';
        default:
            return 'row';
    }
}

const Node = forwardRef(({ backgroundColor, orientation, wrap, ...rest }, ref) => <div {...rest} ref={ref} />);
const StyledBody = styled(Node)`
    background-color: ${background};
    color: ${fontColor};
    display: flex;
    flex-flow: ${orientationValue} ${wrapValue};
    overflow: hidden;
    padding: 15px 20px;
`;

export { StyledBody };
