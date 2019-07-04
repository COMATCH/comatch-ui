import React, { forwardRef } from 'react';
import styled from 'styled-components';

function avatarSize({ diameter }) {
    const size = `${diameter >= 0 ? diameter : 45}px`;

    return `
        height: ${size};
        width: ${size};
    `;
}

const StyledTooltipWrapper = styled.div``;

const StyledBadgeWrapper = styled.div`
    align-content: center;
    background: transparent;
    display: flex;
`;

const Node = forwardRef(({ diameter, ...rest }, ref) => <div {...rest} ref={ref} />);
const StyledWrapper = styled(Node)`
    align-content: center;
    display: inline-flex;
    justify-content: center;
    position: relative;
    ${avatarSize}

    img {
        border-radius: 50%;
        height: 100%;
        overflow: hidden;
        width: 100%;
    }

    ${StyledBadgeWrapper} {
        bottom: -5px;
        position: absolute;
        right: -5px;
    }
`;

export { StyledBadgeWrapper, StyledTooltipWrapper, StyledWrapper };
