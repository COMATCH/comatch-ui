import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'lodash/noop';
import DatePicker from 'react-datepicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons/faCalendarAlt';
import { getSafeDateValue, isValidDateValue } from './helpers';
import { TextInput } from '../TextInput';

import './DateInput.scss';

/**
 * A convenience wrapper around the DatePicker component of the react-datepicker package.
 *
 * For a full list of all potential props check:
 * https://github.com/Hacker0x01/react-datepicker/blob/master/docs/datepicker.md
 */

const propTypes = {
    /**
     * A string according to which the date in the DateInput is formatted
     * NOTE: Keep in mind that `DD` & `YYYY` should be lowercase...
     */
    dateFormat: PropTypes.string,
    inputError: PropTypes.string,
    label: PropTypes.string,
    /**
     * Needed by the DatePicker
     */
    locale: PropTypes.string.isRequired,
    maxDate: isValidDateValue,
    minDate: isValidDateValue,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onClick: PropTypes.func,
    value: isValidDateValue,
};

const defaultProps = {
    dateFormat: 'dd.MM.yyyy',
    inputError: '',
    label: '',
    maxDate: null,
    minDate: null,
    onClick: noop,
    value: new Date(),
};

export const DateInput = ({
    locale,
    inputError,
    label,
    maxDate,
    minDate,
    name,
    onClick,
    onChange,
    value,
    ...props
}) => {
    const [date, setDate] = useState(getSafeDateValue(value));
    const [max, setMaxDate] = useState(getSafeDateValue(maxDate));
    const [min, setMinDate] = useState(getSafeDateValue(minDate));
    const popperClasses = classNames('DateInput__popper', { 'with-error': inputError });

    const handleChange = (newDate, event) => {
        // in the onChange we pass value which would be either null or a date object
        onChange({
            ...event,
            target: {
                ...event.target,
                name,
                value: newDate,
            },
        });
    };

    // Component did update:
    useEffect(() => {
        // Will reset the internal date back to the passed value.
        // This will ensure that the date is controlled from outside.
        setDate(getSafeDateValue(value));

        if (maxDate !== max) {
            setMaxDate(getSafeDateValue(maxDate));
        }

        if (minDate !== min) {
            setMinDate(getSafeDateValue(minDate));
        }
    }, [value, maxDate, minDate]);

    return (
        <DatePicker
            autoComplete="off"
            customInput={
                <TextInput
                    label={label}
                    inputError={inputError}
                    icon={<FontAwesomeIcon icon={faCalendarAlt} />}
                    name={name}
                    onChange={noop}
                    onClick={onClick}
                />
            }
            locale={locale}
            maxDate={max}
            minDate={min}
            name={name}
            nextMonthButtonLabel=""
            onChange={handleChange}
            popperClassName={popperClasses}
            previousMonthButtonLabel=""
            selected={date}
            utcOffset={0}
            {...props}
        />
    );
};

DateInput.propTypes = propTypes;
DateInput.defaultProps = defaultProps;
