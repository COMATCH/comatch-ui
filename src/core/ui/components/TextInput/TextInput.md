## TextInput

An input of type `text`.

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**autoComplete** | `Enum('on', 'off', null)` | `null` | :x: | 
**className** | `String` | `null` | :x: | Additional class names
**defaultValue** | `String` | `''` | :x: | Fallback default for `value`
**disabled** | `Boolean` | `null` | :x: | 
**display** | `Enum('block', 'inline')` | `'block'` | :x: | 
**icon** | `ReactNode` | `null` | :x: | SVG icon
**id** | `String` | `null` | :x: | HTML id attribute
**inputError** | `String` | `''` | :x: | 
**label** | `Union<ReactNode\|String>` | `''` | :x: | 
**label<1>** | `ReactNode` |  | :x: | 
**label<2>** | `String` |  | :x: | 
**max** | `Number` | `null` | :x: | Used for type="number" to define maximum allowed value
**maxLength** | `Number` | `null` | :x: | 
**min** | `Number` | `null` | :x: | Used for type="number" to define minimum allowed value
**name** | `String` |  | :white_check_mark: | 
**onBlur** | `Function` | `noop` | :x: | 
**onChange** | `Function` |  | :white_check_mark: | 
**onClick** | `Function` | `noop` | :x: | 
**onFocus** | `Function` | `noop` | :x: | 
**placeholder** | `String` | `''` | :x: | 
**required** | `Boolean` | `false` | :x: | 
**type** | `Enum('text', 'tel', 'email', 'number', 'password')` | `'text'` | :x: | 
**value** | `Union<String\|Number>` | `''` | :x: | 
**value<1>** | `String` |  | :x: | 
**value<2>** | `Number` |  | :x: | 

