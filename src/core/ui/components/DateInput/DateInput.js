import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'lodash/noop';
import isNil from 'lodash/isNil';
import DatePicker from 'react-datepicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons/faCalendarAlt';
import moment from 'moment';
import { TextInput } from '../TextInput';

import './DateInput.scss';

/**
 * A convenience wrapper around the DatePicker component of the react-datepicker package.
 *
 * For a full list of all potential props check:
 * https://github.com/Hacker0x01/react-datepicker/blob/master/docs/datepicker.md
 */

function isValidDateValue(props, propName) {
    const prop = props[propName];

    // eslint-disable-next-line no-underscore-dangle
    if (!isNil(prop) && !prop._isAMomentObject && !(prop instanceof Date)) {
        return new Error(
            `Invalid prop \`${propName}\` supplied to` +
                ` DateInput. Expected a momentjs (or Date) instance, ` +
                `but got the value ${prop} of type ${typeof prop}. Validation failed.`,
        );
    }

    return null;
}

function getDateProp(date = null) {
    return date ? moment(date) : date;
}

const propTypes = {
    /**
     * A string according to which the date in the DateInput is formatted
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
    // eslint-disable-next-line valid-jsdoc
    /**
     * The value must be a moment.js object
     */
    value: isValidDateValue,
};

const defaultProps = {
    dateFormat: 'dd.mm.yyyy',
    inputError: '',
    label: '',
    maxDate: null,
    minDate: null,
    onClick: noop,
    value: moment(),
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
    if (isValidDateValue({ value }, 'value') instanceof Error) {
        return <span>ERROR! Invalid date value!</span>;
    }

    const [date, setDate] = useState(getDateProp(value));
    const popperClasses = classNames('DateInput__popper', { 'with-error': inputError });

    const handleChange = (newDate, event) => {
        setDate(moment(newDate));

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
        setDate(value);
    }, [date, value]);

    const max = getDateProp(maxDate);
    const min = getDateProp(minDate);

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
            maxDate={max ? max.toDate() : max}
            minDate={min ? min.toDate() : min}
            name={name}
            nextMonthButtonLabel=""
            onChange={handleChange}
            popperClassName={popperClasses}
            previousMonthButtonLabel=""
            selected={date ? date.toDate() : date}
            utcOffset={0}
            {...props}
        />
    );
};

DateInput.propTypes = propTypes;
DateInput.defaultProps = defaultProps;
