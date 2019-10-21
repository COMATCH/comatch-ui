import React from 'react';
import Highlight from 'react-highlight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from './Button';
import { DropdownMenu } from '../DropdownMenu';

const items = [
    'Item 1',
    'Item 2',
    'Item 3',
];
const dropdownPropString = `<DropdownMenu items={[${items.map(item => `"${String(item)}"`)}]} />`;

storiesOf('Button', module)
    .add('with primary style', () => (
        <>
            <Button text="Hello world" />
            <Button text="Hello world" href="#" />
            <Highlight className="html">{'<Button text="Hello world" />'
                + '\n<Button text="Hello world" href="#" />'}</Highlight>
        </>
    ))
    .add('disabled with primary style', () => (
        <>
            <Button disabled text="Hello world" />
            <Button disabled text="Hello world" href="#" />
            <Highlight className="html">{'<Button disabled text="Hello world" />'
                + '\n<Button disabled text="Hello world" href="#" />'}</Highlight>
        </>
    ))
    .add('with primary style and onClick handler', () => (
        <>
            <Button text="Hello world" onClick={action('clicked')} />
            <Button text="Hello world" onClick={action('clicked')} href="#" />
            <Highlight className="html">{'<Button text="Hello world" onClick={(event) => {}} />'
                + '\n<Button text="Hello world" onClick={(event) => {}} href="#" />'}</Highlight>
        </>
    ))
    .add('with ghost style', () => (
        <>
            <Button ghost text="Hello world" />
            <Button ghost href="#" text="Hello world" />
            <Highlight className="html">{'<Button ghost text="Hello world" />'
                + '\n<Button ghost href="#" text="Hello world" />'}</Highlight>
        </>
    ))
    .add('disabled with ghost style', () => (
        <>
            <Button ghost disabled text="Hello world" />
            <Button ghost disabled href="#" text="Hello world" />
            <Highlight className="html">{'<Button ghost disabled text="Hello world" />'
                + '\n<Button ghost disabled href="# text="Hello world" />'}</Highlight>
        </>
    ))
    .add('with icon', () => (
        <>
            <Button icon={<FontAwesomeIcon icon={faTimes} />} text="Hello world" />
            <Button href="#" icon={<FontAwesomeIcon icon={faTimes} />} text="Hello world" />
            <Highlight className="html">
                {'<Button icon={<FontAwesomeIcon icon={faTimes} />} text="Hello world" />'
                    + '\n<Button href="#" icon={<FontAwesomeIcon icon={faTimes} />} text="Hello world" />'}
            </Highlight>
        </>
    ))
    .add('with icon and ghost style', () => (
        <>
            <Button icon={<FontAwesomeIcon icon={faTimes} />} ghost={true} text="Hello world" />
            <Button href="#" icon={<FontAwesomeIcon icon={faTimes} />} ghost={true} text="Hello world" />
            <Highlight className="html">
                {'<Button icon={<FontAwesomeIcon icon={faTimes} />} ghost={true} text="Hello world" />'
                    + '\n<Button href="#" icon={<FontAwesomeIcon icon={faTimes} />} ghost={true} text="Hello world" />'}
            </Highlight>
        </>
    ))
    .add('with icon on the right', () => (
        <>
            <Button iconAfterText={true} icon={<FontAwesomeIcon icon={faTimes} />} text="Hello world" />
            <Button href="#" iconAfterText={true} icon={<FontAwesomeIcon icon={faTimes} />} text="Hello world" />
            <Highlight>
                {'<Button iconAfterText={true} icon={<FontAwesomeIcon icon={faTimes} />} text="Hello world" />'
                    + '\n<Button href="#" '
                    + 'iconAfterText={true} icon={<FontAwesomeIcon icon={faTimes} />} text="Hello world" />'}
            </Highlight>
        </>
    ))
    .add('with icon only', () => (
        <>
            <Button icon={<FontAwesomeIcon icon={faTimes} />} />
            <Button href="#" icon={<FontAwesomeIcon icon={faTimes} />} />
            <Highlight className="html">{'<Button icon={<FontAwesomeIcon icon={faTimes} />} />'
                + '\n<Button href="#" icon={<FontAwesomeIcon icon={faTimes} />} />'}</Highlight>
        </>
    ))
    .add('with icon only and ghost style', () => (
        <>
            <Button icon={<FontAwesomeIcon icon={faTimes} />} ghost={true} />
            <Button href="#" icon={<FontAwesomeIcon icon={faTimes} />} ghost={true} />
            <Highlight className="html">
                {'<Button icon={<FontAwesomeIcon icon={faTimes} />} ghost={true} />'}
                {'\n<Button href="#" icon={<FontAwesomeIcon icon={faTimes} />} ghost={true} />'}
            </Highlight>
        </>
    ))
    .add('with shape set to circle', () => (
        <>
            <Button icon={<FontAwesomeIcon icon={faTimes} />} shape="circle" />
            <Button href="#" icon={<FontAwesomeIcon icon={faTimes} />} shape="circle" />
            <Highlight className="html">
                {'<Button icon={<FontAwesomeIcon icon={faTimes} />} shape="circle" />'}
                {'\n<Button href="#" icon={<FontAwesomeIcon icon={faTimes} />} shape="circle" />'}
            </Highlight>
        </>
    ))
    .add('with textOnly style', () => (
        <>
            <Button icon={<FontAwesomeIcon icon={faTimes} />} textOnly />
            <Button href="#" icon={<FontAwesomeIcon icon={faTimes} />} textOnly />
            <Highlight className="html">{'<Button icon={<FontAwesomeIcon icon={faTimes} />} textOnly />'
                + '\n<Button href="#" icon={<FontAwesomeIcon icon={faTimes} />} textOnly />'}</Highlight>
        </>
    ))
    .add('with tooltipText', () => (
        <>
            <Button text="Hello world" tooltipText="Tooltip Text" />
            <Button href="#" text="Hello world" tooltipText="Tooltip Text" />
            <Highlight className="html">{'<Button text="Hello world" tooltipText="Tooltip Text" />'
                + '\n<Button href="#" text="Hello world" tooltipText="Tooltip Text" />'}</Highlight>
        </>
    ))
    .add('with popupMenu', () => (
        <>
            <div style={{ textAlign: 'center', height: '150px' }}>
                <Button
                    text="Click to toggle popup menu"
                    popupMenu={<DropdownMenu items={items} />}
                />
            </div>
            <Highlight className="html">
                {`<Button` +
                    `\n\ttext="Click to toggle popup menu"` +
                    `\n\tpopupMenu={${dropdownPropString}}` +
                    `\n/>`}
            </Highlight>
        </>
    ))
    .add('with popupMenu on top', () => (
        <>
            <div style={{ textAlign: 'center', height: '150px', paddingTop: '100px' }}>
                <Button
                    text="Click to toggle popup menu"
                    popupMenu={<DropdownMenu items={items} />}
                    popupMenuPosition="top"
                />
            </div>
            <Highlight className="html">
                {`<Button` +
                    `\n\ttext="Click to toggle popup menu"` +
                    `\n\tpopupMenuPosition="top"` +
                    `\n\tpopupMenu={${dropdownPropString}}` +
                    `\n/>`}
            </Highlight>
        </>
    ))
    .add('with popupMenu to the left', () => (
        <>
            <div style={{ textAlign: 'center', height: '150px' }}>
                <Button
                    text="Click to toggle popup menu"
                    popupMenu={<DropdownMenu items={items} />}
                    popupMenuPosition="left"
                />
            </div>
            <Highlight className="html">
                {`<Button` +
                    `\n\ttext="Click to toggle popup menu"` +
                    `\n\tpopupMenuPosition="left"` +
                    `\n\tpopupMenu={${dropdownPropString}}` +
                    `\n/>`}
            </Highlight>
        </>
    ))
    .add('with popupMenu to the right', () => (
        <>
            <div style={{ textAlign: 'center', height: '150px' }}>
                <Button
                    text="Click to toggle popup menu"
                    popupMenu={<DropdownMenu items={items} />}
                    popupMenuPosition="right"
                />
            </div>
            <Highlight className="html">
                {`<Button` +
                    `\n\ttext="Click to toggle popup menu"` +
                    `\n\tpopupMenuPosition="right"` +
                    `\n\tpopupMenu={${dropdownPropString}}` +
                    `\n/>`}
            </Highlight>
        </>
    ))
    .add('text style', () => (
        <>
            <Button text="text with no change" />
            <Button text="text with no change" textStyle="noChange" />
            <Button text="only first letter capitalized" textStyle="capitalizeFirstLetter" />
            <Button text="all letters capitalized" textStyle="capitalizeAll" />

            <Highlight className="html">
                {`
                    <Button text="text with no change" />
                    <Button text="text with no change" textStyle="noChange" />
                    <Button text="only first letter capitalized" textStyle="capitalizeFirstLetter" />
                    <Button text="all letters capitalized" textStyle="capitalizeAll" />
                `}
            </Highlight>
        </>
    ));
