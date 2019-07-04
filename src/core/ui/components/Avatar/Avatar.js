import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Popover } from '../Popover';
import { StyledBadgeWrapper, StyledWrapper } from './StyledWrapper';

const propTypes = {
    badge: PropTypes.node,
    className: PropTypes.string,
    diameter: PropTypes.number,
    id: PropTypes.string,
    src: PropTypes.string,
    tooltip: PropTypes.node,
    tooltipPosition: Popover.propTypes.position,
};

const defaultProps = {
    badge: null,
    className: null,
    diameter: 45,
    id: null,
    src: null,
    tooltip: null,
    tooltipPosition: 'bottom',
};

const Avatar = ({ badge, className, diameter, id, src, tooltip, tooltipPosition }) =>
    !!src && (
        <StyledWrapper className={classnames('Avatar', className)} diameter={diameter} {...(id && { id })}>
            <img src={src} />
            {!!badge && <StyledBadgeWrapper className="Avatar__Badge">{badge}</StyledBadgeWrapper>}
            {!!tooltip && (
                <Popover position={tooltipPosition} toggle={<span />}>
                    {tooltip}
                </Popover>
            )}
        </StyledWrapper>
    );

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export { Avatar };
