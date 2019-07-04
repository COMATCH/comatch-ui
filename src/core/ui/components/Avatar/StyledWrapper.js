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

    .Popover {
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;

        &__content {
            min-width: 150px;
            text-align: center;
        }
    }
`;

export { StyledBadgeWrapper, StyledTooltipWrapper, StyledWrapper };
