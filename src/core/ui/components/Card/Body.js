import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { StyledBody } from './StyledWrapper';
import { BACKGROUND_COLOR, ORIENTATION } from './config';

const propTypes = {
    backgroundColor: PropTypes.oneOf(Object.values(BACKGROUND_COLOR)),
    children: PropTypes.node,
    className: PropTypes.string,
    id: PropTypes.string,
    orientation: PropTypes.oneOf(Object.values(ORIENTATION)),
    wrap: PropTypes.bool,
};

const defaultProps = {
    backgroundColor: BACKGROUND_COLOR.TRANSPARENT,
    children: null,
    className: null,
    id: null,
    orientation: ORIENTATION.VERTICAL,
    wrap: false,
};

const Body = ({ backgroundColor, children, className, id, orientation, wrap }) =>
    !!children && (
        <StyledBody
            backgroundColor={backgroundColor}
            className={classnames('Body', className)}
            {...(id && { id })}
            orientation={orientation}
            wrap={wrap}
        >
            {children}
        </StyledBody>
    );

Body.propTypes = propTypes;
Body.defaultProps = defaultProps;

export { Body };
