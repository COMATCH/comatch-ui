import React from 'react';
import PropTypes from 'prop-types';

import { StyledWrapper } from './StyledWrapper';

const propTypes = {
    /**
     * Text content of `InputError`
     */
    text: PropTypes.string.isRequired,
};

const defaultProps = {};

/**
 * An error indicator next to inputs for client side validation errors on form submissions.
 */

export const InputError = ({ text }) => (
    <StyledWrapper className="InputError">{text}</StyledWrapper>
);

InputError.defaultProps = defaultProps;

InputError.propTypes = propTypes;
