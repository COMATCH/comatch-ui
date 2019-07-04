import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { StyledBadgeWrapper, StyledWrapper } from './StyledWrapper';

const propTypes = {
    badge: PropTypes.node,
    className: PropTypes.string,
    diameter: PropTypes.number,
    id: PropTypes.string,
    src: PropTypes.string,
};

const defaultProps = {
    badge: null,
    className: null,
    diameter: 45,
    id: null,
    src: null,
};

const Avatar = ({ badge, className, diameter, id, src }) =>
    !!src && (
        <StyledWrapper className={classnames('Avatar', className)} diameter={diameter} {...(id && { id })}>
            <img src={src} />
            {!!badge && <StyledBadgeWrapper className="Avatar__Badge">{badge}</StyledBadgeWrapper>}
        </StyledWrapper>
    );

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export { Avatar };
