import { Control, Items, Wrapper } from './styled';
import React, { useRef, useState } from 'react';

import { DropdownProps } from './types';
import { classNameAndId } from '../../../general';
import { useOnClickOutside } from '../../../hooks';

function Dropdown(props: DropdownProps) {
    const itemsNode = useRef<HTMLDivElement>(null);
    const wrapperNode = useRef<HTMLDivElement>(null);

    const {
        children,
        closeOnItemClick = true,
        generateCss,
        generateControlCss,
        generateItemsCss,
        maxHeight,
        items,
    } = props;

    const [showItems, setShowItems] = useState(false);
    useOnClickOutside(
        wrapperNode,
        () => {
            setShowItems(false);
        },
        (event) => {
            if (closeOnItemClick || !itemsNode.current || !itemsNode.current.contains(event.target as Node)) {
                // Will ensure that the item within the dropdown is clicked before hiding the items
                setTimeout(() => {
                    setShowItems(!showItems);
                }, 100);
            }
        },
    );

    return (
        <Wrapper
            {...classNameAndId(props, 'Dropdown')}
            generateCss={generateCss}
            generateControlCss={generateControlCss}
            generateItemsCss={generateItemsCss}
            ref={wrapperNode}
            showItems={showItems}
        >
            <Control className="Dropdown__Control">{children}</Control>
            <Items className="Dropdown__Items" maxHeight={maxHeight} ref={itemsNode}>
                {items}
            </Items>
        </Wrapper>
    );
}

export { Dropdown };
