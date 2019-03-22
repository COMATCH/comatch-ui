import React from 'react';
import Highlight from 'react-highlight';
import { storiesOf } from '@storybook/react';
import { InputLabel } from './InputLabel';
import { TextInput } from '../TextInput';

storiesOf('InputLabel', module)
    .add('with basic style', () => (
        <>
            <InputLabel text="Sample label" />
            <Highlight className="html">{'<InputLabel text="Sample label" />'}</Highlight>
        </>
    ))
    .add('as a span', () => (
        <>
            <InputLabel span text="Sample label" />
            <Highlight className="html">{'<InputLabel span text="Sample label" />'}</Highlight>
        </>
    ))
    .add('with a "for" attribute', () => (
        <>
            <InputLabel text="Sample label" htmlFor="input" />
            <TextInput id="input" />
            <Highlight className="html">
                {'<InputLabel span text="Sample label" />'}
                {'\n<TextInput id="input" />'}
            </Highlight>
        </>
    ));
