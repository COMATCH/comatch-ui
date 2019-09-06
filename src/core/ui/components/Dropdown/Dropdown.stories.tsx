import React from 'react';
import Highlight from 'react-highlight';
import { storiesOf } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { Button } from '../Button';
import { StyledWrapper, ItemStyledWrapper } from '../DropdownMenu/StyledWrapper';

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
const itemComponents = (
    <StyledWrapper>
        {items.map((item, index) => (
            <ItemStyledWrapper key={index}>
                {item}
            </ItemStyledWrapper>
        ))}
    </StyledWrapper>
);

storiesOf('Dropdown', module)
    .add('with an empty list of items', () => (
        <React.Fragment>
            <Dropdown />
            <Highlight className="html">{`<Dropdown />`}</Highlight>
        </React.Fragment>
    ))
    .add('with a basic list of items and toggle', () => (
        <React.Fragment>
            <Dropdown items={itemComponents}>
                <Button text="Select Option" />
            </Dropdown>
            <Highlight className="html">
                {`<Dropdown items={[${items.map(item => `"${String(item)}"`)}]}/>`}
            </Highlight>
        </React.Fragment>
    ));
