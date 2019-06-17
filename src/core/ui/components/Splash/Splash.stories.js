import React from 'react';
import Highlight from 'react-highlight';
import { storiesOf } from '@storybook/react';
import { ORIENTATION } from './config';
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
    ))
    .add('primary', () => (
        <>
            <Splash primary title={<div>Title</div>} subtitle="Subtitle" />
            <Highlight className="html">{'<Splash primary title={<div>Title</div>} subtitle="Subtitle" />'}</Highlight>
        </>
    ))
    .add('secondary', () => (
        <>
            <Splash secondary title={<div>Title</div>} subtitle="Subtitle" />
            <Highlight className="html">
                {'<Splash secondary title={<div>Title</div>} subtitle="Subtitle" />'}
            </Highlight>
        </>
    ))
    .add('inline', () => (
        <>
            <Splash inline primary title={<div>Title</div>} subtitle="Subtitle" />
            <Highlight className="html">
                {'<Splash inline primary title={<div>Title</div>} subtitle="Subtitle" />'}
            </Highlight>
        </>
    ))
    .add(ORIENTATION.HORIZONTAL, () => (
        <>
            <Splash orientation={ORIENTATION.HORIZONTAL} primary title={<div>Title</div>} subtitle="Subtitle" />
            <Highlight className="html">
                {'<Splash orientation={ORIENTATION.HORIZONTAL} primary title={<div>Title</div>} subtitle="Subtitle" />'}
            </Highlight>
        </>
    ))
    .add(ORIENTATION.VERTICAL, () => (
        <>
            <Splash orientation={ORIENTATION.VERTICAL} primary title={<div>Title</div>} subtitle="Subtitle" />
            <Highlight className="html">
                {'<Splash orientation={ORIENTATION.VERTICAL} primary title={<div>Title</div>} subtitle="Subtitle" />'}
            </Highlight>
        </>
    ))
    .add(`inline ${ORIENTATION.HORIZONTAL}`, () => (
        <>
            <Splash inline orientation={ORIENTATION.HORIZONTAL} primary title={<div>Title</div>} subtitle="Subtitle" />
            <Highlight className="html">
                {'<Splash inline orientation={ORIENTATION.HORIZONTAL}' +
                    'primary title={<div>Title</div>} subtitle="Subtitle" />'}
            </Highlight>
        </>
    ))
    .add(`inline ${ORIENTATION.VERTICAL}`, () => (
        <>
            <Splash inline orientation={ORIENTATION.VERTICAL} primary title={<div>Title</div>} subtitle="Subtitle" />
            <Highlight className="html">
                {'<Splash inline orientation={ORIENTATION.VERTICAL}' +
                    'primary title={<div>Title</div>} subtitle="Subtitle" />'}
            </Highlight>
        </>
    ));
