/* eslint-disable import/no-unresolved */
import React from 'react';
import moment from 'moment';
import Highlight from 'react-highlight';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { DateInput } from './DateInput';

const initialValue = moment().subtract(1, 'year');
const minDate = moment().subtract(5, 'days');
const maxDate = moment().add(5, 'days');

storiesOf('DateInput', module)
    .add('with basic style and English locale', () => (
        <>
            <div style={{ width: '250px' }}>
                <DateInput locale="en" name="field" onChange={action('changed')} />
            </div>
            <Highlight className="html">
                {`<DateInput locale="en" name="field" onChange={action('changed')} />`}
            </Highlight>
        </>
    ))
    .add('with label', () => (
        <>
            <div style={{ width: '250px' }}>
                <DateInput locale="en" label="Date input" name="field" onChange={action('changed')} />
            </div>
            <Highlight className="html">
                {`<DateInput locale="en" label="Date input" name="field" onChange={action('changed')} />`}
            </Highlight>
        </>
    ))
    .add('with label and disabled state', () => (
        <>
            <div style={{ width: '250px' }}>
                <DateInput locale="en" label="Date input" name="field" onChange={action('changed')} disabled />
            </div>
            <Highlight className="html">
                {`<DateInput locale="en" label="Date input" name="field" onChange={action('changed')} />`}
            </Highlight>
        </>
    ))
    .add('with label and initial value', () => (
        <>
            <div style={{ width: '250px' }}>
                <DateInput
                    locale="en"
                    label="Date input"
                    name="field"
                    value={initialValue}
                    onChange={action('changed')}
                />
            </div>
            <Highlight className="html">
                {`<DateInput locale="en" label="Date input"` +
                    ` name="field" value={initialValue} onChange={action('changed')} />`}
            </Highlight>
        </>
    ))
    .add('with label and error', () => (
        <>
            <div style={{ width: '250px' }}>
                <DateInput
                    locale="en"
                    label="Date input"
                    inputError="Broken date"
                    name="field"
                    onChange={action('changed')}
                />
            </div>
            <Highlight className="html">
                {`<DateInput locale="en" label="Date input"` +
                    ` inputError="Broken date" name="field" onChange={action('changed')} />`}
            </Highlight>
        </>
    ))
    .add('with min and max date', () => (
        <>
            <div style={{ width: '250px' }}>
                <DateInput
                    locale="en"
                    label="Date input"
                    minDate={minDate}
                    maxDate={maxDate}
                    name="field"
                    onChange={action('changed')}
                />
            </div>
            <Highlight className="html">
                {'<DateInput locale="en"' +
                    '\n\tlabel="Date input"' +
                    '\n\tminDate={minDate}' +
                    '\n\tmaxDate={maxDate}' +
                    '\n\tname="field"' +
                    "\n\tonChange={action('changed')} />"}
            </Highlight>
        </>
    ))
    .add('with German locale', () => (
        <>
            <div style={{ width: '250px' }}>
                <DateInput locale="de" name="field" onChange={action('changed')} />
            </div>
            <Highlight className="html">
                {`<DateInput locale="de" name="field" onChange={action('changed')} />`}
            </Highlight>
        </>
    ))
    .add('with French locale', () => (
        <>
            <div style={{ width: '250px' }}>
                <DateInput locale="fr" name="field" onChange={action('changed')} />
            </div>
            <Highlight className="html">
                {`<DateInput locale="fr" name="field" onChange={action('changed')} />`}
            </Highlight>
        </>
    ));
