import React from 'react';
import styled from 'styled-components';
import Highlight from 'react-highlight';
import { storiesOf } from '@storybook/react';
import { ORIENTATION, SIZE } from './config';
import { Splash } from './Splash';

const Collection = styled.div`
    display: flex;
    flex-flow: column nowrap;
`;

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
            <Highlight className="html">{'<Splash primary subtitle="Subtitle" title={<div>Title</div>} />'}</Highlight>
        </>
    ))
    .add('secondary', () => (
        <>
            <Splash secondary title={<div>Title</div>} subtitle="Subtitle" />
            <Highlight className="html">
                {'<Splash secondary subtitle="Subtitle" title={<div>Title</div>} />'}
            </Highlight>
        </>
    ))
    .add('inline', () => (
        <>
            <Splash inline primary title={<div>Title</div>} subtitle="Subtitle" />
            <Highlight className="html">
                {'<Splash inline primary subtitle="Subtitle" title={<div>Title</div>} />'}
            </Highlight>
        </>
    ))
    .add(ORIENTATION.HORIZONTAL, () => (
        <>
            <Splash orientation={ORIENTATION.HORIZONTAL} primary title={<div>Title</div>} subtitle="Subtitle" />
            <Highlight className="html">
                {'<Splash orientation={ORIENTATION.HORIZONTAL} primary subtitle="Subtitle" title={<div>Title</div>} />'}
            </Highlight>
        </>
    ))
    .add(ORIENTATION.VERTICAL, () => (
        <>
            <Splash orientation={ORIENTATION.VERTICAL} primary title={<div>Title</div>} subtitle="Subtitle" />
            <Highlight className="html">
                {'<Splash orientation={ORIENTATION.VERTICAL} primary subtitle="Subtitle" title={<div>Title</div>} />'}
            </Highlight>
        </>
    ))
    .add(`inline ${ORIENTATION.HORIZONTAL}`, () => (
        <>
            <Splash inline orientation={ORIENTATION.HORIZONTAL} primary title={<div>Title</div>} subtitle="Subtitle" />
            <Highlight className="html">
                {'<Splash inline orientation={ORIENTATION.HORIZONTAL}' +
                    'primary subtitle="Subtitle" title={<div>Title</div>} />'}
            </Highlight>
        </>
    ))
    .add(`inline ${ORIENTATION.VERTICAL}`, () => (
        <>
            <Splash inline orientation={ORIENTATION.VERTICAL} primary title={<div>Title</div>} subtitle="Subtitle" />
            <Highlight className="html">
                {'<Splash inline orientation={ORIENTATION.VERTICAL}' +
                    'primary subtitle="Subtitle" title={<div>Title</div>} />'}
            </Highlight>
        </>
    ))
    .add('with different `size`', () => (
        <>
            <Collection>
                {Object.values(SIZE).map((size) => (
                    <Splash key={size} size={size} primary title={<div>Title</div>} subtitle="Subtitle" />
                ))}
            </Collection>
            <Highlight className="html">
                {Object.values(SIZE).map(
                    (size, index) =>
                        `${
                            index ? '\n\n' : ''
                        }<Splash size={${size}} primary subtitle="Subtitle" title={<div>Title</div>} />`,
                )}
            </Highlight>
        </>
    ));
