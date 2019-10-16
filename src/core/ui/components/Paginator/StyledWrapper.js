import React from 'react';
import styled from 'styled-components';
import { palette } from '../../../styles/variables';

export const StyledWrapper = styled.div`
    list-style: none;

    li {
        background-color: ${palette.white};
        border: 1px solid ${palette.midGray};
        color: ${palette.primary};
        display: inline-block;
        transition: color 250ms ease-out, background-color 250ms ease-out;
        user-select: none;

        &.next {
            border-top-right-radius: 3px;
            border-bottom-right-radius: 3px;
        }

        &.previous {
            border-top-left-radius: 3px;
            border-bottom-left-radius: 3px;
        }

        &.next.disabled,
        &.previous.disabled {
            color: ${palette.midGray};
            cursor: not-allowed;
        }

        &.selected,
        &:not(.disabled):hover {
            background-color: ${palette.secondary};
            color: ${palette.white};
            cursor: pointer;
        }

        a {
            display: block;
            width: 35px;
            text-align: center;
            padding: 7.5px 0;
        }
    }

    li ~ li {
        border-left: none;
    }

    li,
    a {
        outline: 0 !important;
    }
`;
