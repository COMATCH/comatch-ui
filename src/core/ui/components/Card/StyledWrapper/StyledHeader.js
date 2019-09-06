/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { background, fontColor, wrapValue } from './helpers';

const StyledHeaderChildren = styled.div``;

const StyledHeaderControls = styled.div`
    display: flex;
    justify-content: flex-end;

    > *:not(:last-child) {
        margin-right: 10px;
    }
`;

const Node = forwardRef(({ backgroundColor, wrap, ...rest }, ref) => <div {...rest} ref={ref} />);
const StyledHeader = styled(Node)`
    background-color: ${background};
    color: ${fontColor};
    display: flex;
    flex-flow: row ${wrapValue};
    justify-content: space-between;
    overflow: hidden;
    padding: 15px 20px;

    ${StyledHeaderControls}, ${StyledHeaderChildren} {
        flex: 1;
    }

    .Splash {
        align-items: flex-start;
        color: inherit;
        flex: 1;

        .Title,
        .Subtitle {
            color: inherit;
        }
    }
`;

export { StyledHeader, StyledHeaderChildren, StyledHeaderControls };
