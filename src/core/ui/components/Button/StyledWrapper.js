import React from 'react';
import styled from 'styled-components';
import { palette, typography } from '../../../styles/variables';

export const generatePopupPositionBasedStyling = ({ popupMenuPosition }) => {
    switch (popupMenuPosition) {
        case 'bottom':
            return `
                left: 0;
                width: 100%;
                top: 42px;
            `;

        case 'top':
            return `
                left: 0;
                width: 100%;
                bottom: 42px;
            `;

        case 'left':
            return `
                top: -1px;
                right: 100%;
                margin-right: 5px;
            `;

        case 'right':
            return `
                top: -1px;
                left: 100%;
                margin-left: 5px;
            `;

        default:
            return '';
    }
};

export const generateSVGStyling = ({ iconAfterText, onlyIcon }) => `
    // Some .Button adjustments
    ${onlyIcon ? 'padding: 8px 12px;' : ''}

    svg {
        ${onlyIcon ? 'margin: 0;' : 'margin-right: 5px'}

        ${
            iconAfterText
                ? `
            float: right;
            position: relative;
            top: 2px;
            margin-left: 5px;
            margin-right: 0;
        `
                : ''
        }
    }
`;

const generateColors = ({ backgroundColor, borderColor, fontColor }) => {
    return `
        background-color: ${backgroundColor};
        border-color: ${borderColor};
        color: ${fontColor};
    `;
};

const buttonColors = {
    primary: {
        regular: generateColors({
            backgroundColor: palette.primary,
            borderColor: palette.primary,
            fontColor: palette.white,
        }),
        hover: generateColors({
            backgroundColor: palette.secondary,
            borderColor: palette.secondary,
            fontColor: palette.white,
        }),
        disabled: generateColors({
            backgroundColor: palette.neutralLighter,
            borderColor: palette.neutralLight,
            fontColor: palette.midGray,
        }),
    },
    secondary: {
        regular: generateColors({
            backgroundColor: palette.white,
            borderColor: palette.primary,
            fontColor: palette.primary,
        }),
        hover: generateColors({
            backgroundColor: palette.white,
            borderColor: palette.secondary,
            fontColor: palette.secondary,
        }),
        disabled: generateColors({
            backgroundColor: palette.white,
            borderColor: palette.neutralLight,
            fontColor: palette.midGray,
        }),
    },
    ghost: generateColors({
        backgroundColor: palette.white,
        borderColor: palette.primary,
        fontColor: palette.primary,
    }),
    textOnly: generateColors({
        backgroundColor: palette.white,
        borderColor: palette.white,
        fontColor: palette.primary,
    }),
};

const generateFullButtonStyles = ({
    isDisabled,
    isGhost,
    isTextOnly,

    regularColors,
    hoverColors,
    activeColors,
    disabledColors,
    ghostColors,
    textOnlyColors,
}) => {
    if (isDisabled) {
        return disabledColors;
    }
    return `
        ${(isGhost && ghostColors) || (isTextOnly && textOnlyColors) || regularColors}
        &:hover {
            ${hoverColors}
        }
        &:active {
            ${activeColors}
        }
    `;
};

const generateButtonColors = ({ color, disabled, ghost, textOnly }) => {
    if (color === 'primary') {
        return generateFullButtonStyles({
            isDisabled: disabled,
            isTextOnly: textOnly,
            isGhost: ghost,

            regularColors: buttonColors.primary.regular,
            hoverColors: buttonColors.primary.hover,
            activeColors: buttonColors.primary.hover,
            disabledColors: buttonColors.primary.disabled,
            ghostColors: buttonColors.ghost,
            textOnlyColors: buttonColors.textOnly,
        });
    }

    if (color === 'secondary') {
        return generateFullButtonStyles({
            isDisabled: disabled,
            isTextOnly: textOnly,
            isGhost: ghost,

            regularColors: buttonColors.secondary.regular,
            hoverColors: buttonColors.secondary.hover,
            activeColors: buttonColors.secondary.hover,
            disabledColors: buttonColors.secondary.disabled,
            ghostColors: buttonColors.ghost,
            textOnlyColors: buttonColors.textOnly,
        });
    }
};

export const generateDisabledStyling = ({ disabled }) =>
    disabled
        ? `
            cursor: not-allowed;
            pointer-events: none;

            &,
            span {
                color: ${palette.midGray} !important;
            }
        `
        : '';

export const generateShapeStyling = ({ shape }) => (shape === 'circle' ? 'border-radius: 50%;' : 'border-radius: 3px;');

export const PopupMenuStyledWrapper = styled.div`
    background: transparent;
    cursor: default;
    position: absolute;
`;

export const StyledWrapper = styled(
    React.forwardRef(
        ({ color, full, ghost, href, iconAfterText, onlyIcon, popupMenuPosition, shape, textOnly, ...rest }, ref) =>
            href ? <a ref={ref} href={href} {...rest} /> : <button ref={ref} {...rest} />,
    ),
)`
    position: relative;
    border: 1px solid;
    display: inline-block;
    outline: 0 !important;
    font-size: ${typography.fontSm};
    font-weight: bold;
    line-height: ${typography.lineHeightSm};
    touch-action: manipulation;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    padding: 8px 15px; // makes the height 40px
    transition: background-color 250ms ease-out, border-color 250ms ease-out, color 250ms ease-out;

    ${({ iconAfterText }) => (iconAfterText ? 'white-space: initial;' : '')}

    // PopupMenu styling:
    ${PopupMenuStyledWrapper} {
        ${generatePopupPositionBasedStyling}
    }

    // SVG styling:
    ${generateSVGStyling}

    .Button__tooltip-text {
        opacity: 0;
        position: absolute;
        transform: translateX(0);
        transition: opacity 250ms ease-out, transform 250ms ease-out;
        z-index: -1;
    }

    &:hover {
        .Button__tooltip-text {
            opacity: 1;
            transform: translateX(20px);
            transition: opacity 250ms ease-out, transform 250ms ease-out;
            transition-delay: 500ms;
            z-index: 0;
        }
    }

    // If buttons follow each other in a row
    // set a standardized whitespace between them
    & ~ & {
        margin-left: 9px;
    }

    ${generateDisabledStyling}
    ${generateShapeStyling}
    ${generateButtonColors}
`;
