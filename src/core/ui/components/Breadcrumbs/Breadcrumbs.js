import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { StyledItem, StyledWrapper } from './StyledWrapper';

const propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    history: PropTypes.arrayOf(PropTypes.string),
};

const defaultProps = {
    id: null,
    className: null,
    history: [],
};

export const Breadcrumbs = ({ id, className, history }) => (
    <StyledWrapper {...(!!id && { id })} className={classnames('Breadcrumbs', className)}>
        {history.map((route, index) => (
            <StyledItem className='list-item' key={route}>{`${index ? '> ' : ''}${route}`}</StyledItem>
        ))}
    </StyledWrapper>
);

Breadcrumbs.propTypes = propTypes;
Breadcrumbs.defaultProps = defaultProps;
