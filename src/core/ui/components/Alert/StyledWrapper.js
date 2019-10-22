import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { palette, typography, boxShadows } from '../../../styles/variables';

const FONT_COLORS = {
    info: palette.secondary,
    warning: palette.darkOrange,
    danger: palette.darkRed,
    success: palette.darkGreen,
};

const BACKGROUND_COLORS = {
    info: palette.lightBlue,
    warning: palette.lightOrange,
    danger: palette.lightRed,
    success: palette.lightGreen,
};

export const generateDisplayAndTypeStyling = ({ display, type, withIcon }) => {
    switch (display) {
        case 'inline':
            return `color: ${FONT_COLORS[type]};`;

        case 'box':
            return `
                color: ${FONT_COLORS[type]};
                background-color: ${BACKGROUND_COLORS[type]};
                padding: 15px;
                padding-bottom: 20px;
                border-left: 5px solid;
                border-left-color: ${FONT_COLORS[type]};
                box-shadow: ${boxShadows[1]};

                ${withIcon ? 'padding-left: 40px;' : ''}

                .Alert__icon {
                    left: 15px;
                    top: 17px;
                }
            `;

        case 'notification':
            return `
                color: ${palette.white};
                background-color: ${FONT_COLORS[type]};
                display: inline-block;
                margin: 0;
                padding: 10px 10px 10px 35px;

                .Alert__icon {
                    left: 10px;
                    top: 13px;
                }

                .Alert__message {
                    font-weight: bold;
                }
            `;

        default:
            return '';
    }
};

export const StyledWrapper = styled(
    forwardRef(({ display, type, withIcon, ...rest }, ref) => <section ref={ref} {...rest} />),
)`
    border-radius: 3px;
    display: block;
    margin: 0 0 20px 0;
    padding: 0;
    padding-left: 25px;
    position: relative;
    // animation
    transition: opacity 500ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 500ms cubic-bezier(0.165, 0.84, 0.44, 1);

    &.fade {
        transform: scale(1) translateZ(0);
        opacity: 1;
        will-change: transform, opacity;
    }

    &.slide-right {
        transform: translate3d(0, 0, 0);
        will-change: transform;
    }

    &.dismissed {
        &.fade {
            transform: scale(0.75) translateZ(0);
            opacity: 0;
        }

        &.slide-right {
            transform: translate3d(100%, 0, 0);
        }
    }

    // Common styles for elements
    .Alert__icon,
    .Alert__message {
        display: inline-block;
    }

    .Alert__icon {
        // font
        font-size: 15px;
        // positioning
        position: absolute;
        top: 2px;
        left: 0;
    }

    .Alert__message {
        font-size: ${typography.fontSm};
        margin: 0;
        padding: 0;
        line-height: ${typography.lineHeightSm};
    }

    ${generateDisplayAndTypeStyling}
`;
