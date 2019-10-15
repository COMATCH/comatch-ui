## DateInput

A convenience wrapper around the DatePicker component of the react-datepicker package.

For a full list of all potential props check:
https://github.com/Hacker0x01/react-datepicker/blob/master/docs/datepicker.md

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**dateFormat** | `String` | `'DD.MM.YYYY'` | :x: | A string according to which the date in the DateInput is formatted
**inputError** | `String` | `''` | :x: | 
**label** | `String` | `''` | :x: | 
**locale** | `String` |  | :white_check_mark: | Needed by the DatePicker
**name** | `String` |  | :white_check_mark: | 
**onChange** | `Function` |  | :white_check_mark: | 
**onClick** | `Function` | `noop` | :x: | 
**value** | `(props, propName) => {
    const prop = props[propName];
    // eslint-disable-next-line no-underscore-dangle
    if (prop && !prop._isAMomentObject) {
        return new Error(
            `Invalid prop \`${propName}\` supplied to` +
                ` DateInput. Expected a momentjs instance, ` +
                `but got the value ${prop} of type ${typeof prop}. Validation failed.`,
        );
    }
    return false;
}` | `moment()` | :x: | The value must be a moment.js object

