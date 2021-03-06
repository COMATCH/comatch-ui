import React from 'react';
import Highlight from 'react-highlight';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { FileInput } from './FileInput';

storiesOf('FileInput', module)
    .add('accepting PDFs, single file', () => (
        <>
            <FileInput accept="application/pdf" buttonText="Upload" onChange={action('change')} />
            <Highlight className="html">
                {`<FileInput accept="application/pdf" buttonText="Upload" onChange={function() {}} />`}
            </Highlight>
        </>
    ))
    .add('accepting images, single file', () => (
        <>
            <FileInput accept="image/*" buttonText="Upload" onChange={action('change')} />
            <Highlight className="html">
                {`<FileInput accept="image/*" buttonText="Upload" onChange={function() {}} />`}
            </Highlight>
        </>
    ))
    .add('accepting images and PDFs, single file', () => (
        <>
            <FileInput accept={['application/pdf', 'image/*']} buttonText="Upload" onChange={action('change')} />
            <Highlight className="html">
                {'<FileInput accept={["application/pdf", "image/*"]} buttonText="Upload" ' +
                    'onChange={function() {}} />'}
            </Highlight>
        </>
    ))
    .add('accepting images, multiple files', () => (
        <>
            <FileInput accept="image/*" onChange={action('change')} buttonText="Upload" multiple />
            <Highlight className="html">
                {`<FileInput accept="image/*" onChange={function() {}} buttonText="Upload" multiple />`}
            </Highlight>
        </>
    ))
    .add('accepting images, disabled', () => (
        <>
            <FileInput accept="image/*" onChange={action('change')} buttonText="Upload" disabled />
            <Highlight className="html">
                {`<FileInput accept="image/*" onChange={function() {}} buttonText="Upload" disabled />`}
            </Highlight>
        </>
    ));

