## DateInput

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**dateFormat** | `String` | `'dd.MM.yyyy'` | :x: | A string according to which the date in the DateInput is formatted NOTE: Keep in mind that `DD` & `YYYY` should be lowercase...
**inputError** | `String` | `''` | :x: | 
**label** | `String` | `''` | :x: | 
**locale** | `Enum('en', 'de', 'fr')` |  | :white_check_mark: | Needed by the DatePicker
**maxDate** | `isValidDateValue` | `null` | :x: | `Date` or `moment` or `null`
**minDate** | `isValidDateValue` | `null` | :x: | `Date` or `moment` or `null`
**name** | `String` |  | :white_check_mark: | 
**onChange** | `Function` |  | :white_check_mark: | 
**onClick** | `Function` | `noop` | :x: | 
**value** | `isValidDateValue` | `new Date()` | :x: | `Date` or `moment` or `null`

