## Button

A `Button` component with different stylistic variations. By default the styling is `full`,
but `ghost` is an alternative version with reversed colors.

If `href` is set an `<a>` is used instead of `<button>`. If the `target` prop is set to `_blank`
in combination with `href`, then it will also add the prop `rel="noopener noreferrer"` for
additional security.

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**className** | `String` | `''` | :x: | Additional class names
**color** | `Enum('primary', 'secondary')` | `'primary'` | :x: | Button color, primary or secondary, default is primary.
**disabled** | `Boolean` | `false` | :x: | 
**ghost** | `Boolean` | `false` | :x: | Alternative styling with white background and primary colored text
**href** | `String` | `''` | :x: | If true, uses `<a>` instead of `<button>`
**icon** | `ReactNode` | `null` | :x: | SVG icon
**iconAfterText** | `Boolean` | `false` | :x: | 
**id** | `String` | `null` | :x: | HTML id attribute
**onClick** | `Function` | `noop` | :x: | 
**popupMenu** | `ReactNode` | `null` | :x: | A PopupMenu node to be toggled when clicking on the button
**popupMenuPosition** | `Enum('top', 'bottom', 'left', 'right')` | `'bottom'` | :x: | The position of the PopupMenu (if such is present of course)
**shape** | `Enum('rectangle', 'circle')` | `'rectangle'` | :x: | Renders the `Button` in different shapes (rectangle or circle)
**target** | `String` | `null` | :x: | To be used with `href`, could set for example `target="_blank"`
**text** | `String` | `''` | :x: | Text content of `Button`
**textOnly** | `Boolean` | `false` | :x: | If true `Button` has a transparent border
**textStyle** | `Enum('noChange', 'capitalizeAll', 'capitalizeFirstLetter')` | `'noChange'` | :x: | text style, capitalize the first letter, make it all uppercase, or keep it as provided. The default is capitalize the first letter.
**tooltipText** | `String` | `''` | :x: | Text content of tooltip for the `Button`
**type** | `Enum('button', 'submit', 'reset')` | `'button'` | :x: | 

