import React from 'react';
import Highlight from 'react-highlight';
import { storiesOf } from '@storybook/react';
import { ProgressBar } from './ProgressBar';

storiesOf('ProgressBar', module)
    .add('10% progress', () => (
        <>
            <ProgressBar progress={10} />
            <Highlight className="html">{`<ProgressBar progress={10} />`}</Highlight>
        </>
    ))
    .add('10% progress with label', () => (
        <>
            <ProgressBar progress={10} label="A label" />
            <Highlight className="html">{`<ProgressBar progress={10} />`}</Highlight>
        </>
    ))
    .add('10% progress with label on the left', () => (
        <>
            <ProgressBar progress={10} label="A label" labelPosition="left" />
            <Highlight className="html">{`<ProgressBar progress={10} />`}</Highlight>
        </>
    ))
    .add('10% progress reverse', () => (
        <>
            <ProgressBar progress={10} reverse />
            <Highlight className="html">{`<ProgressBar progress={10} />`}</Highlight>
        </>
    ))
    .add('10% progress light version', () => (
        <>
            <ProgressBar progress={10} lightVersion />
            <Highlight className="html">{`<ProgressBar progress={10} />`}</Highlight>
        </>
    ))
    .add('10% progress with label, light version', () => (
        <>
            <ProgressBar progress={10} label="A label" lightVersion />
            <Highlight className="html">{`<ProgressBar progress={10} />`}</Highlight>
        </>
    ))
    .add('10% progress with label, light version and reverse', () => (
        <>
            <ProgressBar progress={10} label="A label" lightVersion reverse />
            <Highlight className="html">{`<ProgressBar progress={10} />`}</Highlight>
        </>
    ))
    .add('10% progress with label, light version and reverse, label on left', () => (
        <>
            <ProgressBar progress={10} label="A label" lightVersion reverse labelPosition="left" />
            <Highlight className="html">{`<ProgressBar progress={10} />`}</Highlight>
        </>
    ))
    .add('50% progress', () => (
        <>
            <ProgressBar progress={50} />
            <Highlight className="html">{`<ProgressBar progress={50} />`}</Highlight>
        </>
    ))
    .add('50% progress with label', () => (
        <>
            <ProgressBar progress={50} label="A label" />
            <Highlight className="html">{`<ProgressBar progress={50} />`}</Highlight>
        </>
    ))
    .add('50% progress reverse', () => (
        <>
            <ProgressBar progress={50} reverse />
            <Highlight className="html">{`<ProgressBar progress={50} />`}</Highlight>
        </>
    ))
    .add('50% progress reverse, light version', () => (
        <>
            <ProgressBar progress={50} reverse lightVersion />
            <Highlight className="html">{`<ProgressBar progress={50} />`}</Highlight>
        </>
    ))
    .add('50% progress reverse, light version with label', () => (
        <>
            <ProgressBar progress={50} reverse lightVersion label="A label" />
            <Highlight className="html">{`<ProgressBar progress={50} />`}</Highlight>
        </>
    ))
    .add('80% progress', () => (
        <>
            <ProgressBar progress={80} />
            <Highlight className="html">{`<ProgressBar progress={80} />`}</Highlight>
        </>
    ))
    .add('100% progress', () => (
        <>
            <ProgressBar progress={100} />
            <Highlight className="html">{`<ProgressBar progress={100} />`}</Highlight>
        </>
    ));
