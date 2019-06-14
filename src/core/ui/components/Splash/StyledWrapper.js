import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { palette, typography } from '../../../styles/variables';

function generateSubTitleStyling() {
    return `
        font-size: ${typography.fontSm};
        line-height: ${typography.lineHeightSm};
    `;
}

function generateTitleStyling() {
    return `
        font-size: ${typography.fontXl};
        line-height: ${typography.lineHeightXl};
    `;
}

const StyledSubtitle = styled.div`${generateSubTitleStyling}`;
const StyledTitle = styled.div`${generateTitleStyling}`;

function generateStyling({ inline, orientation, primary, secondary }) {
    let color = palette.black;
    const flexDirection = [
        'column',
        'column-reverse',
        'row',
        'row-reverse',
    ].includes(orientation)
        ? orientation
        : 'column';

    if (primary) {
        color = palette.primary;
    } else if (secondary) {
        color = palette.gray;
    }

    return `
        color: ${color};
        display: ${inline ? 'inline-flex' : 'flex'};
        flex-direction: ${flexDirection};

        ${StyledSubtitle}, ${StyledTitle} {
            color: ${color};
        }
    `;
}

const StyledWrapper = styled(forwardRef(({ inline, orientation, primary, secondary, ...rest }, ref) => <div {...rest} ref={ref} />))`
    align-items: center;
    ${generateStyling}
`;

export { StyledSubtitle, StyledTitle, StyledWrapper };
