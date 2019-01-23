import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import classNames from 'classnames';

import { StyledWrapperButton, StyledWrapperLink } from './StyledWrapper';
// import './Button.scss';

const propTypes = {
    /**
     * Additional class names
     */
    className: PropTypes.string,
    disabled: PropTypes.bool,
    /**
     * Alternative styling with white background and primary colored text
     */
    ghost: PropTypes.bool,
    /**
     * If true, uses `<a>` instead of `<button>`
     */
    href: PropTypes.string,
    /**
     * HTML id attribute
     */
    id: PropTypes.string,
    /**
     * SVG icon
     */
    icon: PropTypes.node,
    iconAfterText: PropTypes.bool,
    onClick: PropTypes.func,
    /**
     * To be used with `href`, could set for example `target="_blank"`
     */
    target: PropTypes.string,
    /**
     * Text content of `Button`
     */
    text: PropTypes.string,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

const defaultProps = {
    className: '',
    disabled: false,
    ghost: false,
    href: '',
    id: null,
    icon: null,
    iconAfterText: false,
    onClick: noop,
    target: null,
    text: '',
    type: 'button',
};

function renderLinkButton({ classes, content, disabled, href, id, onClick, target, styledProps } = {}) {
    const finalOnClick = disabled ? (evt) => evt.preventDefault() : onClick;
    const rel = target && 'noopener noreferrer';
    return (
        <StyledWrapperLink
            {...styledProps}
            className={classes}
            href={href}
            target={target}
            id={id}
            rel={rel}
            onClick={finalOnClick}>
            {content}
        </StyledWrapperLink>
    );
}

function renderHtmlButton({ classes, content, id, onClick, type, styledProps } = {}) {
    return (
        <StyledWrapperButton
            {...styledProps}
            className={classes}
            id={id}
            type={type}
            onClick={onClick}>
            {content}
        </StyledWrapperButton>
    );
}

/**
 * A `Button` component with different stylistic variations. By default the styling is `full`,
 * but `ghost` is an alternative version with reversed colors.
 * 
 * If `href` is set an `<a>` is used instead of `<button>`. If the `target` prop is set to `_blank`
 * in combination with `href`, then it will also add the prop `rel="noopener noreferrer"` for
 * additional security.
 */

export const Button = ({
    id,
    className,
    href,
    target,
    onClick,

    ghost,
    disabled,

    text,
    type,
    icon,
    iconAfterText,
}) => {
    const classes = classNames('Button', className, {
        full: !ghost,
        disabled,
        ghost,
        'only-icon': !text,
        'icon-after-text': text && iconAfterText,
    });
    const content = iconAfterText ? (
        <span>
            {text}
            {icon}
        </span>
    ) : (
        <span>
            {icon}
            {text}
        </span>
    );

    const calculatedProps = {
        id,
        classes,
        href,
        target,

        type,
        content,

        disabled,

        onClick,

        styledProps: {
            disabled,
            ghost,
            full: !ghost,
            onlyIcon: !text,
            iconAfterText: text && iconAfterText,
        },
    };

    return href
        ? renderLinkButton(calculatedProps)
        : renderHtmlButton(calculatedProps);
};

Button.propTypes = propTypes;

Button.defaultProps = defaultProps;
