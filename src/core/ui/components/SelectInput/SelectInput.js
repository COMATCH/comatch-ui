import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'lodash/noop';
import isFunction from 'lodash/isFunction';
import { InputLabel } from '../InputLabel';
import { InputError } from '../InputError';

import './SelectInput.scss';

const propTypes = {
    display: PropTypes.oneOf(['block', 'inline']),
    disabled: PropTypes.bool,
    id: PropTypes.string,
    inputError: PropTypes.string,
    label: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]),
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
            label: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
            props: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
        }),
    ).isRequired,
    placeholder: PropTypes.node,
    required: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
};

const defaultProps = {
    display: 'block',
    disabled: false,
    id: null,
    inputError: '',
    label: '',
    onBlur: noop,
    onChange: noop,
    placeholder: null,
    required: false,
    value: undefined,
};

const generatePlaceHolderOption = (placeholder) => {
    const arr = [];

    if (placeholder) {
        arr.push({
            label: '',
            value: '',
            props: { hidden: true },
        });
    }

    return arr;
};

const renderOptionsElements = (optionElements, placeholder) =>
    [...generatePlaceHolderOption(placeholder), ...optionElements].map(({ label, value, props }, index) => {
        const additionalProps = isFunction(props) ? props({ label, value }, index) || {} : props;

        return (
            <option key={index + 1} value={value} {...additionalProps}>
                {label}
            </option>
        );
    });

export const SelectInput = ({
    display,
    disabled,
    id,
    inputError,
    label,
    name,
    onBlur,
    onChange,
    options,
    placeholder,
    required,
    value,
}) => {
    const [currentValue, setCurrentValue] = useState(value);
    const classes = classNames('Input', 'SelectInput', display, {
        disabled,
        'has-error': inputError,
    });
    const onChangeHandler = useCallback(
        (event) => {
            const { value: nextValue } = event.target;

            setCurrentValue(nextValue);
            onChange(event);
        },
        [onChange],
    );

    return (
        <div id={id} className={classes}>
            {label && <InputLabel text={label} required={required} />}
            <select
                className="SelectInput__input"
                disabled={disabled}
                name={name}
                onBlur={onBlur}
                onChange={onChangeHandler}
                value={currentValue}
            >
                {renderOptionsElements(options, placeholder)}
            </select>
            {inputError && <InputError text={inputError} />}
            {!currentValue && placeholder && <div className="SelectInput__Placeholder">{placeholder}</div>}
        </div>
    );
};

SelectInput.defaultProps = defaultProps;

SelectInput.propTypes = propTypes;
