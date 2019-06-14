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
    .add('column', () => (
        <>
            <Splash orientation="column" primary title={<div>Title</div>} subtitle="Subtitle" />
            <Highlight className="html">
                {'<Splash orientation="column" primary title={<div>Title</div>} subtitle="Subtitle" />'}
            </Highlight>
        </>
    ))
    .add('column-reverse', () => (
        <>
            <Splash orientation="column-reverse" primary title={<div>Title</div>} subtitle="Subtitle" />
            <Highlight className="html">
                {'<Splash orientation="column-reverse" primary title={<div>Title</div>} subtitle="Subtitle" />'}
            </Highlight>
        </>
    ))
    .add('row', () => (
        <>
            <Splash orientation="row" primary title={<div>Title</div>} subtitle="Subtitle" />
            <Highlight className="html">
                {'<Splash orientation="row" primary title={<div>Title</div>} subtitle="Subtitle" />'}
            </Highlight>
        </>
    ))
    .add('row-reverse', () => (
        <>
            <Splash orientation="row-reverse" primary title={<div>Title</div>} subtitle="Subtitle" />
            <Highlight className="html">
                {'<Splash orientation="row-reverse" primary title={<div>Title</div>} subtitle="Subtitle" />'}
            </Highlight>
        </>
    ))
    .add('inline column', () => (
        <>
            <Splash inline orientation="column" primary title={<div>Title</div>} subtitle="Subtitle" />
            <Highlight className="html">
                {'<Splash inline orientation="column" primary title={<div>Title</div>} subtitle="Subtitle" />'}
            </Highlight>
        </>
    ))
    .add('inline column-reverse', () => (
        <>
            <Splash inline orientation="column-reverse" primary title={<div>Title</div>} subtitle="Subtitle" />
            <Highlight className="html">
                {'<Splash inline orientation="column-reverse" primary title={<div>Title</div>} subtitle="Subtitle" />'}
            </Highlight>
        </>
    ))
    .add('inline row', () => (
        <>
            <Splash inline orientation="row" primary title={<div>Title</div>} subtitle="Subtitle" />
            <Highlight className="html">
                {'<Splash inline orientation="row" primary title={<div>Title</div>} subtitle="Subtitle" />'}
            </Highlight>
        </>
    ))
    .add('inline row-reverse', () => (
        <>
            <Splash inline orientation="row-reverse" primary title={<div>Title</div>} subtitle="Subtitle" />
            <Highlight className="html">
                {'<Splash inline orientation="row-reverse" primary title={<div>Title</div>} subtitle="Subtitle" />'}
            </Highlight>
        </>
    ));
