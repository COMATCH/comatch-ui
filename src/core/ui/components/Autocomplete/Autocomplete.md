
## Autocomplete

From [`Autocomplete.js`](Autocomplete.js)



prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**className** | `String` | `null` | :x: | Additional class names
**disabled** | `Boolean` | `false` | :x: | 
**display** | `Enum('block','inline')` | `'block'` | :x: | 
**id** | `String` | `null` | :x: | HTML id attribute
**inputError** | `String` | `''` | :x: | 
**inputValue** | `String` |  | :white_check_mark: | 
**isLoading** | `Boolean` | `false` | :x: | 
**label** | `Union<Array[]<ReactNode> \| ReactNode \| String>` | `''` | :x: | 
**loadingMessage** | `Function` | `({ inputValue }) => `Searching for "${inputValue}"...`` | :x: | 
**name** | `String` |  | :white_check_mark: | 
**noOptionsMessage** | `Function` | `({ inputValue }) => `No items found with search term "${inputValue}"...`` | :x: | 
**onBlur** | `Function` | `noop` | :x: | 
**onChange** | `Function` | `noop` | :x: | 
**onFocus** | `Function` | `noop` | :x: | 
**onInputChange** | `Function` |  | :white_check_mark: | 
**options** | `Array[]<Shape>` |  | :white_check_mark: | 
**options[].label** | `Union<String \| Number \| Boolean>` |  | :x: | 
**options[].value** | `Union<String \| Number \| Boolean>` |  | :x: | 
**required** | `Boolean` | `false` | :x: | 



