import moment from 'moment';
import isNil from 'lodash/isNil';
import isNull from 'lodash/isNull';

/**
 * A reusable validator function. The function should be used in propTypes validation
 * but it's not limited to that use-case alone.
 *
 * @param {Object} props [Usually the component's props but could be any obj.]
 * @param {string} propName [The prop's name - e.g. `value`, `minDate`, `maxDate`, etc.]
 * @param {string} componentName [The component's name]
 * @returns {null|Error} []
 */
function isValidDateValue(props, propName, componentName = 'DateInput') {
    const prop = props[propName];

    // eslint-disable-next-line no-underscore-dangle
    if (!isNil(prop) && !prop._isAMomentObject && !(prop instanceof Date)) {
        return new Error(`
            Invalid prop \`${propName}\` supplied to ${componentName}. Expected a momentjs (or Date) instance,
            but instead got the value ${prop} of type ${typeof prop}. Validation failed.
        `);
    }

    return null;
}

/**
 * Guard method which will ensure that the underlying value will be compliant with
 * `react-datepicker`.
 *
 * @param {Date|moment|null} propValue [A date value which should be passed to `react-datepicker`]
 * @returns {Date|null} []
 */
function getSafeDateValue(propValue) {
    if (moment.isMoment(propValue)) {
        return propValue.toDate();
    }

    if (propValue instanceof Date || isNull(propValue)) {
        return propValue;
    }

    return null;
}

export { getSafeDateValue, isValidDateValue };
