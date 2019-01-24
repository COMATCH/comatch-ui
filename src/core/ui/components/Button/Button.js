import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import classNames from 'classnames';

import { Badge } from '../Badge';
import { StyledWrapper } from './StyledWrapper';

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
    /**
     * Text content of `Button`'s tooltip
     */
    tooltipText: PropTypes.string,
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
    tooltipText: '',
    type: 'button',
};

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
    tooltipText,
    type,
    icon,
    iconAfterText,
}) => {
    const styledProps = {
        disabled,
        ghost,
        full: !ghost,
        onlyIcon: !text,
        iconAfterText: text && iconAfterText,

        ...(href && { as: 'a' }),
    };
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
        onClick,
        className: classNames('Button', className, {
            full: !ghost,
            disabled,
            ghost,
            'only-icon': !text,
            'icon-after-text': text && iconAfterText,
        }),

        ...(href ? {
            href,
            target,
            rel: target && 'noopener noreferrer',
            ...(disabled && {
                onClick: (evt) => evt.preventDefault(),
            }),
        } : {
            type,
        }),
    };

    return (
        <StyledWrapper {...styledProps} {...calculatedProps}>
            {content}
            {
                !!tooltipText
                && (
                    <Badge className="Button__tooltip-text" text={tooltipText} size="xs" color="darkGray" />
                )
            }
        </StyledWrapper>
    );
};

Button.propTypes = propTypes;

Button.defaultProps = defaultProps;
