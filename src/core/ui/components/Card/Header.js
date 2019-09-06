import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { StyledHeader, StyledHeaderChildren, StyledHeaderControls } from './StyledWrapper';
import { BACKGROUND_COLOR } from './config';
import { Splash, ORIENTATION, SIZE } from '../Splash';

const propTypes = {
    backgroundColor: PropTypes.oneOf(Object.values(BACKGROUND_COLOR)),
    children: PropTypes.node,
    className: PropTypes.string,
    controls: PropTypes.node,
    id: PropTypes.string,
    title: Splash.propTypes.title,
    titleOrientation: Splash.propTypes.orientation,
    subtitle: Splash.propTypes.subtitle,
    wrap: PropTypes.bool,
};

const defaultProps = {
    backgroundColor: BACKGROUND_COLOR.TRANSPARENT,
    children: null,
    className: null,
    controls: null,
    id: null,
    title: Splash.defaultProps.title,
    titleOrientation: ORIENTATION.VERTICAL,
    subtitle: Splash.defaultProps.subtitle,
    wrap: false,
};

const Header = ({ backgroundColor, children, className, controls, id, title, titleOrientation, subtitle, wrap }) =>
    (!!children || !!title || !!subtitle || !!controls) && (
        <StyledHeader
            backgroundColor={backgroundColor}
            className={classnames('Header', className)}
            {...(id && { id })}
            wrap={wrap}
        >
            <Splash
                className="TitleAndSubtitle"
                orientation={titleOrientation}
                title={title}
                size={SIZE.XS}
                subtitle={subtitle}
            />
            {!!children && <StyledHeaderChildren className="Children">{children}</StyledHeaderChildren>}
            {!!controls && <StyledHeaderControls className="Controls">{controls}</StyledHeaderControls>}
        </StyledHeader>
    );

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export { Header };
