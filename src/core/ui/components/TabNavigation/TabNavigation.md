## TabNavigation

A tab navigation that can appear above a `Panel`.

When the tabs are clicked they will usually reveal different parts of the content.

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**activeTabIndex** | `(props, propName, componentName) => {
    const prop = props[propName];
    if (typeof prop !== 'number') {
        return new Error(
            `Invalid prop \`${propName}\` of type \`${typeof prop}\` supplied to` +
                ` \`${componentName}\`. Expected number.`,
        );
    }
    if (Array.isArray(props.children) && prop > props.children.length) {
        return new Error(
            `Invalid prop \`${propName}\` supplied to` +
                ` \`${componentName}\`. Value of \`${propName}\` ` +
                `must be less or equal to props.children.length`,
        );
    }
    return false;
}` | `0` | :x: | Determines which tab should be active
**children** | `Union<Array[]<ReactNode>\|ReactNode>` | `null` | :x: | 
**children<1>** | `Array[]<ReactNode>` |  | :x: | 
**children<2>** | `ReactNode` |  | :x: | 
**handleTabClick** | `Function` | `null` | :x: | Updates the state with the active tab before invoking `onTabClick`
**onTabClick** | `Function` | `noop` | :x: | 

