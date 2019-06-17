import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { palette, typography } from '../../../styles/variables';
import { ORIENTATION } from './config';

function generateSubTitleStyling() {
    return `
        font-size: ${typography.fontSm};
        line-height: ${typography.lineHeightSm};

        * {
            font-size: ${typography.fontSm};
            line-height: ${typography.lineHeightSm}; 
        }
    `;
}

function generateTitleStyling() {
    return `
        font-size: ${typography.fontXl};
        line-height: ${typography.lineHeightXl};

        * {
            font-size: ${typography.fontXl};
            line-height: ${typography.lineHeightXl}; 
        }
    `;
}

const StyledSubtitle = styled.div`${generateSubTitleStyling}`;
const StyledTitle = styled.div`${generateTitleStyling}`;

function generateStyling({ inline, orientation, primary, secondary }) {
    let color = palette.black;
    const flexDirection = orientation === ORIENTATION.HORIZONTAL ? 'row' : 'column';
    let orientationLogic = 'align-items: center;';

    if (primary) {
        color = palette.primary;
    } else if (secondary) {
        color = palette.gray;
    }

    if (flexDirection === 'row') {
        orientationLogic = `
            align-items: baseline;
            ${StyledTitle} ~ ${StyledSubtitle} {
                margin-left: 5px;
            }
        `;
    }

    return `
        color: ${color};
        display: ${inline ? 'inline-flex' : 'flex'};
        flex-direction: ${flexDirection};

        ${orientationLogic}

        ${StyledSubtitle}, ${StyledTitle} {
            color: ${color};
            font-weight: bold;
        }
    `;
}

const StyledWrapper = styled(forwardRef(({ inline, orientation, primary, secondary, ...rest }, ref) => <div {...rest} ref={ref} />))`
    ${generateStyling}
`;

export { StyledSubtitle, StyledTitle, StyledWrapper };
