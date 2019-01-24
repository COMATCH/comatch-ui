import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { StyledWrapper } from './StyledWrapper';
// import './Badge.scss';

export const allowedColors = ['green', 'orange', 'gray', 'white', 'blue', 'lightblue', 'darkGray'];

const propTypes = {
    /**
     * Additional class names
     */
    className: PropTypes.string,
    /**
     * Text color of `Badge`
     */
    color: PropTypes.oneOf(allowedColors),
    /**
     * SVG icon
     */
    icon: PropTypes.node,
    size: PropTypes.oneOf(['xs', 'sm']),
    /**
     * Text content of `Badge`
     */
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

const defaultProps = {
    color: 'white',
    icon: null,
    size: 'sm',
    text: '',
};

export const Badge = ({ className, color, icon, size, text }) => {
    const classes = classNames('Badge', className, color, size);
    return (
        <StyledWrapper className={classes} color={color} size={size}>
            {icon}
            {text}
        </StyledWrapper>
    );
};

Badge.defaultProps = defaultProps;

Badge.propTypes = propTypes;
