import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { palette, typography } from '../../../styles/variables';

export const generateDisplayStyling = ({ display }) => {
    switch (display) {
        case 'block':
            return `
                display: block;
                text-align: left;
            `;

        case 'inline':
            return 'display: inline-block;';

        default:
            return '';
    }
};

export const StyledCheckboxInput = styled.div`
    background-color: ${palette.white};
    border: 1px solid ${palette.midGray};
    border-radius: 1px;
    height: 15px;
    margin-top: 2px;
    position: relative;
    width: 15px;

    // Tick of pseudo checkbox
    .CheckboxInput__tick {
        color: ${palette.primary};
        // positioning
        position: absolute;
        top: 50%;
        left: 50%;
        // animation
        transition: transform 400ms cubic-bezier(0.45, 1.8, 0.5, 0.75);
        transform: scale(0) translate3d(-50%, -50%, 0);
        transform-origin: top left;
    }
`;

export const StyledWrapper = styled(forwardRef(({ display, ...rest }, ref) => <div ref={ref} {...rest} />))`
    ${generateDisplayStyling}
    & ~ & {
        margin-top: 5px;
    }

    // Whitespace
    &:not(.block) ~ &:not(.block) {
        margin-left: 30px;
    }

    input:not(.ToggleSwitch) {
        display: none;

        // When actually input has state :checked
        // make the tick of the pseudo-checkbox show up
        &:checked ~ ${StyledCheckboxInput} .CheckboxInput__tick {
            transform: scale(1) translate3d(-50%, -50%, 0);
        }
    }

    label {
        cursor: pointer;
        position: relative;
        display: inline-flex;
    }

    ${StyledCheckboxInput} {
        vertical-align: middle;
    }

    .CheckboxInput__label {
        vertical-align: top;
    }

    ${StyledCheckboxInput},
    .CheckboxInput__label {
        display: inline-block;
    }

    .CheckboxInput__label {
        color: ${palette.black};
        display: inline-block;
        font-weight: normal;
        font-size: ${typography.fontSm};
        flex: 1;
        line-height: ${typography.lineHeightSm};
        margin-bottom: 0;

        & * {
            line-height: ${typography.lineHeightSm};
        }
    }

    ${StyledCheckboxInput} ~ .CheckboxInput__label {
        margin-left: 10px;
    }
`;

export const StyledToggleSwitchInput = styled.main`
    .ToggleSwitch {
        width: 30px;
        height: 15px;
        background-color: #dce2e2;
        color: #0095b3;
        border-radius: 7.5px;
        appearance: none;
        margin: 5px 15px 0 10px;
    }

    .ToggleSwitch:before,
    .ToggleSwitch:after {
        content: '';
        display: block;
    }

    .ToggleSwitch:before {
        background-color: #ffffff;
        border-radius: 50%;
        width: 25px;
        height: 25px;
        margin: -5px 0 0 -15px;
        box-shadow: 0 1px 2px 0 rgba(62, 62, 62, 0.2);
        border: solid 1px #dce2e2;
    }

    .ToggleSwitch:checked {
        background-color: rgba(0, 149, 179, 0.3);
    }

    .ToggleSwitch:checked:before {
        background-color: currentColor;
        transform: translateX(125%);
        border: none;
        margin: -5px 0 0 -15px;
    }

    .ToggleSwitch:focus {
        outline: 0;
    }
`;
