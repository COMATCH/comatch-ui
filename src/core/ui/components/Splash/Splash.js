import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ORIENTATION, SIZE } from './config';
import { StyledSubtitle, StyledTitle, StyledWrapper } from './StyledWrapper';

const propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    inline: PropTypes.bool,
    orientation: PropTypes.oneOf(Object.values(ORIENTATION)),
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    size: PropTypes.oneOf(Object.values(SIZE)),
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
    size: SIZE.SM,
    subtitle: null,
    title: null,
};

const Splash = ({ className, id, inline, orientation, primary, secondary, size, subtitle, title }) =>
    (!!title || !!subtitle) && (
        <StyledWrapper
            {...(id && { id })}
            className={classnames('Splash', className)}
            inline={inline}
            orientation={orientation}
            primary={primary}
            secondary={secondary}
            size={size}
        >
            {!!title && <StyledTitle className="Title">{title}</StyledTitle>}
            {!!subtitle && <StyledSubtitle className="Subtitle">{subtitle}</StyledSubtitle>}
        </StyledWrapper>
    );

Splash.propTypes = propTypes;
Splash.defaultProps = defaultProps;

export { Splash };
