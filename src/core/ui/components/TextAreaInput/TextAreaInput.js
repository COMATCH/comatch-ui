import './TextAreaInput.scss';

import React, { useState } from 'react';

import { CharacterCount } from '../CharacterCount';
import { InputError } from '../InputError';
import { InputLabel } from '../InputLabel';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'lodash/noop';

const propTypes = {
    /**
     * Additional class names
     */
    className: PropTypes.string,
    characterCountLabel: PropTypes.node,
    display: PropTypes.oneOf(['block', 'inline']),
    /**
     * SVG icon
     */
    icon: PropTypes.node,
    /**
     * HTML id attribute
     */
    id: PropTypes.string,
    inputError: PropTypes.string,
    label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    maxLength: PropTypes.number,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    placeholder: PropTypes.string,
    htmlPlaceholder: PropTypes.node,
    required: PropTypes.bool,
    rows: PropTypes.number,
    value: PropTypes.string,
    withCharacterCount: PropTypes.bool,
};

const defaultProps = {
    className: null,
    characterCountLabel: null,
    display: 'block',
    icon: null,
    id: null,
    inputError: null,
    label: null,
    maxLength: null,
    onFocus: noop,
    onBlur: noop,
    placeholder: '',
    htmlPlaceholder: null,
    required: false,
    rows: 5,
    value: '',
    withCharacterCount: false,
};

export const TextAreaInput = ({
    className,
    characterCountLabel,
    display,
    htmlPlaceholder,
    icon,
    id,
    inputError,
    label,
    maxLength,
    name,
    onChange,
    onFocus,
    onBlur,
    placeholder,
    required,
    rows,
    value,
    withCharacterCount,
}) => {
    const [currentLength, onCurrentLengthChange] = useState(value.length);
    const classes = classNames('Input', 'TextAreaInput', className, display, {
        'has-error': inputError,
        'with-icon': icon,
        'with-html-placeholder': htmlPlaceholder,
    });
    const showHtmlPlaceholder = htmlPlaceholder && !value;

    const onChangeHandler = (event) => {
        const { value: currentValue = '' } = event.target;

        onCurrentLengthChange(currentValue.length);
        onChange(event);
    };

    return (
        <div id={id} className={classes}>
            {label && <InputLabel text={label} required={required} />}
            <textarea
                className="TextAreaInput__input"
                value={value}
                onChange={onChangeHandler}
                onFocus={onFocus}
                onBlur={onBlur}
                placeholder={placeholder}
                maxLength={maxLength}
                rows={rows}
                name={name}
            />
            {icon}
            {inputError && <InputError text={inputError} />}
            {showHtmlPlaceholder && <div className="html-placeholder">{htmlPlaceholder}</div>}
            {!!withCharacterCount && !!maxLength && (
                <CharacterCount
                    className="TextAreaInput__CharacterCount"
                    currentCount={currentLength}
                    label={characterCountLabel}
                    maxLength={maxLength}
                />
            )}
        </div>
    );
};

TextAreaInput.propTypes = propTypes;

TextAreaInput.defaultProps = defaultProps;
