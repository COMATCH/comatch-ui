import React from 'react';
import Highlight from 'react-highlight';
import { storiesOf } from '@storybook/react';
import { StyledProps } from 'styled-components';
import { Dropdown } from './Dropdown';
import { Button } from '../Button';
import { StyledWrapper, ItemStyledWrapper } from '../DropdownMenu/StyledWrapper';

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
const itemsString = items.map((item) => `"${String(item)}"`);
const itemComponents = (
    <StyledWrapper style={{ width: '40%' }}>
        {items.map((item, index) => (
            <ItemStyledWrapper key={index}>{item}</ItemStyledWrapper>
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
    .add('with a basic list of items and Button control', () => (
        <React.Fragment>
            <Dropdown items={itemComponents}>
                <Button text="Select Option" />
            </Dropdown>
            <Highlight className="html">{`<Dropdown items={[${itemsString}]}/>`}</Highlight>
        </React.Fragment>
    ))
    .add('without dropdown options collapsing on item click', () => (
        <React.Fragment>
            <Dropdown items={itemComponents} closeOnItemClick={false}>
                <Button text="Select Option" />
            </Dropdown>
            <Highlight className="html">
                {`<Dropdown\n`}
                {`    items={[${itemsString}]}\n`}
                {`    closeOnItemClick={${false}}\n`}
                {`/>`}
            </Highlight>
        </React.Fragment>
    ))
    .add('with Dropdown list max-height', () => (
        <React.Fragment>
            <Dropdown items={itemComponents} maxHeight={'100px'}>
                <Button text="Select Option" />
            </Dropdown>
            <Highlight className="html">
                {`<Dropdown\n`}
                {`    items={[${itemsString}]}\n`}
                {`    maxHeight={${'100px'}}\n`}
                {`/>`}
            </Highlight>
        </React.Fragment>
    ))
    .add('with overridden style for Wrapper', () => (
        <React.Fragment>
            <Dropdown items={itemComponents} generateCss={() => 'width: 25%; background: #93b9bd; text-align: center;'}>
                <div>{'Select Option'}</div>
            </Dropdown>
            <Highlight className="html">
                {`<Dropdown\n`}
                {`    items={[${itemsString}]}\n`}
                {`    generateCss={${() => 'width: 25%; background: #93b9bd; text-align: center;'}}\n`}
                {`/>`}
            </Highlight>
        </React.Fragment>
    ))
    .add('with overridden style for Dropdown items', () => (
        <React.Fragment>
            <Dropdown
                items={itemComponents}
                generateItemsCss={() => 'transition: opacity 500ms ease-in, box-shadow 500ms ease-in;'}
            >
                <Button text="Select Option" />
            </Dropdown>
            <Highlight className="html">
                {`<Dropdown\n`}
                {`    items={[${itemsString}]}\n`}
                {`    generateItemsCss={${() => 'transition: opacity 500ms ease-in, box-shadow 500ms ease-in;'}\n`}
                {`/>`}
            </Highlight>
        </React.Fragment>
    ));
