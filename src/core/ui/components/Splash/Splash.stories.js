import React from 'react';
import Highlight from 'react-highlight';
import { storiesOf } from '@storybook/react';
import { Splash } from './Splash';

storiesOf('Splash', module)
    .add('with Title', () => (
        <>
            <Splash title="Hello world" />
            <Highlight className="html">{'<Splash title="Hello world" />'}</Highlight>
        </>
    ))
    .add('with Subtitle', () => (
        <>
            <Splash subtitle="Hello world" />
            <Highlight className="html">{'<Splash subtitle="Hello world" />'}</Highlight>
        </>
    ));
