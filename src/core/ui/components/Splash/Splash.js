import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ORIENTATION } from './config';
import { StyledSubtitle, StyledTitle, StyledWrapper } from './StyledWrapper';

const propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    inline: PropTypes.bool,
    orientation: PropTypes.oneOf(Object.values(ORIENTATION)),
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    subtitle: PropTypes.node,
    title: PropTypes.node,
};

const defaultProps = {
    className: null,
    id: null,
    inline: false,
    orientation: ORIENTATION.HORIZONTAL,
    primary: false,
    secondary: false,
    subtitle: null,
    title: null,
};

const Splash = ({
    className,
    id,
    inline,
    orientation,
    primary,
    secondary,
    subtitle,
    title,
}) => (!!title || !!subtitle) && (
    <StyledWrapper
        {...(id && { id })}
        className={classnames('Splash', className)}
        inline={inline}
        orientation={orientation}
        primary={primary}
        secondary={secondary}
    >
        {!!title && <StyledTitle>{title}</StyledTitle>}
        {!!subtitle && <StyledSubtitle>{subtitle}</StyledSubtitle>}
    </StyledWrapper>
);

Splash.propTypes = propTypes;
Splash.defaultProps = defaultProps;

export { Splash };
