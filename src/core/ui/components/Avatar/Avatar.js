import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Popover } from '../Popover';
import { StyledBadgeWrapper, StyledWrapper } from './StyledWrapper';

const propTypes = {
    badgeChildren: PropTypes.node,
    className: PropTypes.string,
    diameter: PropTypes.number,
    id: PropTypes.string,
    popoverChildren: PropTypes.node,
    popoverPosition: Popover.propTypes.position,
    src: PropTypes.string,
};

const defaultProps = {
    badgeChildren: null,
    className: null,
    diameter: 45,
    id: null,
    popoverChildren: null,
    popoverPosition: 'bottom',
    src: null,
};

const Avatar = ({ badgeChildren, className, diameter, id, popoverChildren, popoverPosition, src }) =>
    !!src && (
        <StyledWrapper className={classnames('Avatar', className)} diameter={diameter} {...(id && { id })}>
            <img alt="Avatar" src={src} />
            {!!badgeChildren && <StyledBadgeWrapper className="Avatar__Badge">{badgeChildren}</StyledBadgeWrapper>}
            {!!popoverChildren && (
                <Popover position={popoverPosition} toggle={<span />}>
                    {popoverChildren}
                </Popover>
            )}
        </StyledWrapper>
    );

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export { Avatar };
