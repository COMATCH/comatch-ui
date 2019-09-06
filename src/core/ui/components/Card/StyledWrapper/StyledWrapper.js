import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { StyledBody } from './StyledBody';
import { StyledHeader } from './StyledHeader';
import { background, border, fontColor, display } from './helpers';

const CardNode = forwardRef(({ backgroundColor, bordered, inline, ...rest }, ref) => <div {...rest} ref={ref} />);
const StyledWrapper = styled(CardNode)`
    background-color: ${background};
    border: ${border};
    border-radius: 3px;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
    color: ${fontColor};
    display: ${display};
    flex-flow: column nowrap;
    overflow: hidden;

    ${StyledBody}, ${StyledHeader} {
        color: ${fontColor};
    }

    ${StyledHeader} ~ ${StyledBody} {
        border-top: 1px solid ${fontColor};
    }
`;

export { StyledWrapper };
