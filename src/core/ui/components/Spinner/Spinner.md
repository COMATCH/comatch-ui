## Spinner

Displays an animated logo (the COMATCH one by default) to be used as a loading indicator.
The component will fill its container's width.
A size prop is used to set the height (since the container is likely empty, would have no height otherwise)
Size prop can be:
- `page` (default) sets height to 500px
- `panel` sets height to 200px
- a positive number: height value in px

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**imgSrc** | `String` | `comatchLogoBase64` | :x: | Source of the spinner image
**size** | `Union<Enum('page', 'panel')\|Number>` | `'page'` | :x: | `page` sizing will take up the whole page whereas `panel` is constrained within a `Panel` component
**size<1>** | `Enum('page', 'panel')` |  | :x: | 
**size<2>** | `Number` |  | :x: | 

