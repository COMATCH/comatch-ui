## MultiLangTextAreaInput

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**activeLanguage** | `Enum(LANGUAGE_CODES)` |  | :white_check_mark: | 
**name** | `String` |  | :white_check_mark: | 
**onChange** | `Function` |  | :white_check_mark: | 
**value** | `Array[]<Shape>` | `LANGUAGE_CODES.map((lang) => ({ lang, value: '' }))` | :x: | 
**value[].lang** | `String` |  | :x: | 
**value[].value** | `String` |  | :x: | 

