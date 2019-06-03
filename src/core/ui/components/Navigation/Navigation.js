import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ORIENTATION } from './config';
import { StyledWrapper } from './StyledWrapper';

const propTypes = {
    breakpoint: PropTypes.oneOf(['tablet', 'desktop', 'desktopLarge']),
    className: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.node),
    orientation: PropTypes.oneOf(Object.entries(ORIENTATION).map(([, value]) => value)),
};

const defaultProps = {
    breakpoint: 'desktop',
    className: '',
    items: [],
    orientation: ORIENTATION.HORIZONTAL,
};

export const Navigation = ({ breakpoint, className, items, orientation }) => (
    <StyledWrapper
        breakpoint={breakpoint}
        className={classNames('Navigation', className, orientation)}
        orientation={orientation}
    >
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </StyledWrapper>
);

Navigation.propTypes = propTypes;

Navigation.defaultProps = defaultProps;
