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
            <Highlight className="html">{`<ProgressBar progress={10} label="A label" />`}</Highlight>
        </>
    ))
    .add('10% progress with label on the left', () => (
        <>
            <ProgressBar progress={10} label="A label" labelPosition="left" />
            <Highlight className="html">
                {`<ProgressBar progress={10} label="A label" labelPosition="left" />`}
            </Highlight>
        </>
    ))
    .add('10% progress reverse', () => (
        <>
            <ProgressBar progress={10} reverse />
            <Highlight className="html">{`<ProgressBar progress={10} reverse />`}</Highlight>
        </>
    ))
    .add('10% progress light variant', () => (
        <>
            <ProgressBar progress={10} variant="light" />
            <Highlight className="html">{`<ProgressBar progress={10} variant='light' />`}</Highlight>
        </>
    ))
    .add('10% progress with label, light variant', () => (
        <>
            <ProgressBar progress={10} label="A label" variant="light" />
            <Highlight className="html">{`<ProgressBar progress={10} label="A label" variant="light" />`}</Highlight>
        </>
    ))
    .add('10% progress with label, light variant and reverse', () => (
        <>
            <ProgressBar progress={10} label="A label" variant="light" reverse />
            <Highlight className="html">
                {`<ProgressBar progress={10} abel="A label" variant="light" reverse />`}
            </Highlight>
        </>
    ))
    .add('10% progress with label, light variant and reverse, label on left', () => (
        <>
            <ProgressBar progress={10} label="A label" variant="light" reverse labelPosition="left" />
            <Highlight className="html">
                {`<ProgressBar progress={10} label="A label" variant="light" reverse labelPosition="left" />`}
            </Highlight>
        </>
    ))
    .add('10% progress dark variant', () => (
        <>
            <ProgressBar progress={10} variant="dark" />
            <Highlight className="html">{`<ProgressBar progress={10} variant='dark' />`}</Highlight>
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
            <Highlight className="html">{`<ProgressBar progress={50} label="A label" />`}</Highlight>
        </>
    ))
    .add('50% progress reverse', () => (
        <>
            <ProgressBar progress={50} reverse />
            <Highlight className="html">{`<ProgressBar progress={50} reverse />`}</Highlight>
        </>
    ))
    .add('50% progress reverse, light variant', () => (
        <>
            <ProgressBar progress={50} reverse variant="light" />
            <Highlight className="html">{`<ProgressBar progress={50} reverse variant="light" />`}</Highlight>
        </>
    ))
    .add('50% progress reverse, light variant with label', () => (
        <>
            <ProgressBar progress={50} reverse variant="light" label="A label" />
            <Highlight className="html">
                {`<ProgressBar progress={50} reverse variant="light" label="A label" />`}
            </Highlight>
        </>
    ))
    .add('50% progress dark variant', () => (
        <>
            <ProgressBar progress={50} variant="dark" />
            <Highlight className="html">{`<ProgressBar progress={50} reverse variant="dark" />`}</Highlight>
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
