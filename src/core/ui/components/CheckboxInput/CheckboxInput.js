import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import noop from 'lodash/noop';

import { InputLabel } from '../InputLabel';
import { InputError } from '../InputError';
import { StyledWrapper, StyledCheckboxInput, StyledToggleSwitchInput } from './StyledWrapper';

const propTypes = {
    display: PropTypes.oneOf(['block', 'inline']),
    id: PropTypes.string,
    inputError: PropTypes.string,
    label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    isToggleSwitch: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

const defaultProps = {
    display: 'block',
    id: null,
    inputError: '',
    label: '',
    onChange: noop,
    checked: null,
    value: '',
    isToggleSwitch: false,
};

export const CheckboxInput = ({ display, id, inputError, label, onChange, name, checked, value, isToggleSwitch }) => {
    const classes = classNames('Input', 'CheckboxInput', display, { 'has-error': inputError });

    return (
        <StyledWrapper id={id} className={classes} display={display}>
            <label>
                {isToggleSwitch ? (
                    <StyledToggleSwitchInput role="checkbox">
                        <input
                            className="ToggleSwitch"
                            type="checkbox"
                            name={name}
                            onChange={onChange}
                            checked={checked}
                            value={value}
                        />
                    </StyledToggleSwitchInput>
                ) : (
                    <>
                        <input type="checkbox" name={name} onChange={onChange} checked={checked} value={value} />
                        <StyledCheckboxInput className="CheckboxInput__input" role="checkbox">
                            <FontAwesomeIcon className="CheckboxInput__tick" icon={faCheck} />
                        </StyledCheckboxInput>
                    </>
                )}

                {label && <InputLabel className="CheckboxInput__label" span={true} text={label} />}
            </label>
            {inputError && <InputError text={inputError} />}
        </StyledWrapper>
    );
};

CheckboxInput.defaultProps = defaultProps;

CheckboxInput.propTypes = propTypes;
