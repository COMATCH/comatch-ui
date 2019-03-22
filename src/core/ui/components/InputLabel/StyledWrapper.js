import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { palette, typography } from '../../../styles/variables';

const generateLabelStyling = ({ isLabel }) => !isLabel ? '' : `
    display: block;
    font-size: ${typography.fontXs};
`;

const StyledWrapper = styled(forwardRef(({ isLabel, ...rest }, ref) => <span {...rest} ref={ref} />))`
    color: ${palette.gray};
    font-size: ${typography.fontSm};
    line-height: ${typography.lineHeightXs};
    font-weight: bold;
    margin-bottom: 5px;
    transition: color 250ms ease-out;
    &[for] {
        cursor: pointer;
    }

    *.has-error & {
      color: ${palette.red};
    }

    ${generateLabelStyling}
`;

export { StyledWrapper };
