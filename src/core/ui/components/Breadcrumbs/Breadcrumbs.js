import React from 'react';
import PropTypes from 'prop-types';
import { StyledWrapper } from './StyledWrapper';

const propTypes = {
    history: PropTypes.arrayOf(PropTypes.string)
};

const defaultProps = {
    history: []
};

export const Breadcrumbs = props => {
    let { history } = props;
    history = history.reduce((acc, curr) => acc.concat(curr, '>'), []);
    history.pop();

    return (
        <StyledWrapper className="Breadcrumbs">
            <ul>
                {history.map((route, idx) => {
                    return <li key={idx}>{route}</li>
                })}
            </ul>
        </StyledWrapper>
    )
 
}

Breadcrumbs.propTypes = propTypes;
Breadcrumbs.defaultProps = defaultProps;