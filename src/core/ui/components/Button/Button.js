import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import classNames from 'classnames';

import { Badge } from '../Badge';
import { getText } from './helpers';
import { PopupMenuStyledWrapper, StyledWrapper } from './StyledWrapper';

const propTypes = {
    /**
     * Additional class names
     */
    className: PropTypes.string,
    /**
     * Button color, primary or secondary, default is primary.
     */
    color: PropTypes.oneOf(['primary', 'secondary']),
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
     * A PopupMenu node to be toggled when clicking on the button
     */
    popupMenu: PropTypes.node,
    /**
     * The position of the PopupMenu (if such is present of course)
     */
    popupMenuPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    /**
     * Renders the `Button` in different shapes (rectangle or circle)
     */
    shape: PropTypes.oneOf(['rectangle', 'circle']),
    /**
     * To be used with `href`, could set for example `target="_blank"`
     */
    target: PropTypes.string,
    /**
     * Text content of `Button`
     */
    text: PropTypes.string,
    /**
     * text style, capitalize the first letter, make it all uppercase, or keep it as provided. The default is capitalize the first letter.
     */
    textStyle: PropTypes.oneOf(['noChange', 'capitalizeAll', 'capitalizeFirstLetter']),
    /**
     * If true `Button` has a transparent border
     */
    textOnly: PropTypes.bool,
    /**
     * Text content of tooltip for the `Button`
     */
    tooltipText: PropTypes.string,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

const defaultProps = {
    className: '',
    color: 'primary',
    disabled: false,
    ghost: false,
    href: '',
    id: null,
    icon: null,
    iconAfterText: false,
    onClick: noop,
    popupMenu: null,
    popupMenuPosition: 'bottom',
    shape: 'rectangle',
    target: null,
    text: '',
    textStyle: 'noChange',
    textOnly: false,
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

export class Button extends PureComponent {
    constructor(props, context) {
        super(props, context);
        this.node = null;
    }

    state = {
        showPopupMenu: false,
        hasEventListenerForClickOutside: false,
    };

    componentDidMount() {
        const { handlePopupMenuEventRegistration } = this;
        handlePopupMenuEventRegistration();
    }

    componentDidUpdate(prevProps) {
        const { handlePopupMenuEventRegistration } = this;
        handlePopupMenuEventRegistration(prevProps);
    }

    componentWillUnmount() {
        const { handleClickOutside } = this;
        const { hasEventListenerForClickOutside } = this.state;

        if (hasEventListenerForClickOutside) {
            document.removeEventListener('mousedown', handleClickOutside, false);
        }
    }

    setNodeRef = (node) => {
        this.node = node;
    };

    onTogglePopupMenu = () => this.setState((oldState) => ({ showPopupMenu: !oldState.showPopupMenu }));

    onClick = (event) => {
        const { onTogglePopupMenu } = this;
        const { disabled, onClick, popupMenu } = this.props;

        if (disabled && event) {
            event.preventDefault();
            return;
        }

        if (popupMenu) {
            onTogglePopupMenu();
        }

        onClick(event);
    };

    handlePopupMenuEventRegistration = (prevProps = {}, props = this.props) => {
        const { popupMenu } = props;
        const { handleClickOutside } = this;
        const { popupMenu: prevPopupMenu } = prevProps;
        const { hasEventListenerForClickOutside } = this.state;

        if (popupMenu === prevPopupMenu) {
            return;
        }

        if (popupMenu && !hasEventListenerForClickOutside) {
            document.addEventListener('mousedown', handleClickOutside, false);
            this.setState({ hasEventListenerForClickOutside: true });
        } else if (!popupMenu && hasEventListenerForClickOutside) {
            document.removeEventListener('mousedown', handleClickOutside, false);
            this.setState({ hasEventListenerForClickOutside: false });
        }
    };

    handleClickOutside = (event) => {
        if (event && this.node && this.node.contains(event.target)) {
            return;
        }

        this.setState({ showPopupMenu: false });
    };

    render() {
        const { onClick, setNodeRef } = this;
        const { showPopupMenu } = this.state;
        const {
            className,
            color,
            disabled,
            ghost,
            href,
            icon,
            iconAfterText,
            id,
            popupMenu,
            popupMenuPosition,
            shape,
            target,
            text,
            textStyle,
            textOnly,
            tooltipText,
            type,
        } = this.props;

        const textToDisplay = getText(text, textStyle);

        const styledWrapperProps = {
            color,
            disabled,
            full: !ghost && !textOnly,
            ghost,
            href,
            iconAfterText: text && iconAfterText,
            onlyIcon: !text,
            shape,
            textOnly,
            ...(!!popupMenuPosition && { popupMenuPosition }),
        };
        const content = iconAfterText ? (
            <span>
                {textToDisplay}
                {icon}
            </span>
        ) : (
            <span>
                {icon}
                {textToDisplay}
            </span>
        );

        const htmlTagSpecificProps = href
            ? {
                  href,
                  rel: target && 'noopener noreferrer',
                  target,
              }
            : { type };

        const props = {
            id,
            onClick,
            className: classNames('Button', className, shape, {
                disabled,
                full: !ghost && !textOnly,
                ghost,
                'icon-after-text': text && iconAfterText,
                'only-icon': !text,
                textOnly,
            }),
            ...htmlTagSpecificProps,
        };

        return (
            <StyledWrapper ref={setNodeRef} {...styledWrapperProps} {...props}>
                {content}
                {!!tooltipText && (
                    <Badge className="Button__tooltip-text" text={tooltipText} size="xs" color="darkGray" />
                )}
                {!!popupMenu && showPopupMenu && <PopupMenuStyledWrapper>{popupMenu}</PopupMenuStyledWrapper>}
            </StyledWrapper>
        );
    }
}

Button.propTypes = propTypes;

Button.defaultProps = defaultProps;
