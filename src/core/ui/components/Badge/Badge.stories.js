/* eslint-disable import/no-unresolved */
import React from 'react';
import Highlight from 'react-highlight';
import { storiesOf } from '@storybook/react';
import { Badge } from './Badge';

storiesOf('Badge', module)
    .add('with xs size and lightblue background-color', () => (
        <>
            <Badge text="Badge text" size="xs" color="lightblue" />
            <Highlight className="html">{'<Badge text="Badge text" size="xs" color="lightblue" />'}</Highlight>
        </>
    ))
    .add('with xs size and blue background-color', () => (
        <>
            <Badge text="Badge text" size="xs" color="blue" />
            <Highlight className="html">{'<Badge text="Badge text" size="xs" color="blue" />'}</Highlight>
        </>
    ))
    .add('with xs size and orange background-color', () => (
        <>
            <Badge text="Badge text" size="xs" color="orange" />
            <Highlight className="html">{'<Badge text="Badge text" size="xs" color="orange" />'}</Highlight>
        </>
    ))
    .add('with xs size and green background-color', () => (
        <>
            <Badge text="Badge text" size="xs" color="green" />
            <Highlight className="html">{'<Badge text="Badge text" size="xs" color="green" />'}</Highlight>
        </>
    ))
    .add('with xs size and gray background-color', () => (
        <>
            <Badge text="Badge text" size="xs" color="gray" />
            <Highlight className="html">{'<Badge text="Badge text" size="xs" color="gray" />'}</Highlight>
        </>
    ))
    .add('with xs size and white background-color', () => (
        <>
            <Badge text="Badge text" size="xs" color="white" />
            <Highlight className="html">{'<Badge text="Badge text" size="xs" color="white" />'}</Highlight>
        </>
    ))
    .add('with xs size and darkGray background-color', () => (
        <>
            <Badge text="Badge text" size="xs" color="darkGray" />
            <Highlight className="html">{'<Badge text="Badge text" size="xs" color="darkGray" />'}</Highlight>
        </>
    ))
    .add('with sm size and lightblue background-color', () => (
        <>
            <Badge text="Badge text" size="sm" color="lightblue" />
            <Highlight className="html">{'<Badge text="Badge text" size="sm" color="lightblue" />'}</Highlight>
        </>
    ))
    .add('with sm size and blue background-color', () => (
        <>
            <Badge text="Badge text" size="sm" color="blue" />
            <Highlight className="html">{'<Badge text="Badge text" size="sm" color="blue" />'}</Highlight>
        </>
    ))
    .add('with sm size and orange background-color', () => (
        <>
            <Badge text="Badge text" size="sm" color="orange" />
            <Highlight className="html">{'<Badge text="Badge text" size="sm" color="orange" />'}</Highlight>
        </>
    ))
    .add('with sm size and green background-color', () => (
        <>
            <Badge text="Badge text" size="sm" color="green" />
            <Highlight className="html">{'<Badge text="Badge text" size="sm" color="green" />'}</Highlight>
        </>
    ))
    .add('with sm size and gray background-color', () => (
        <>
            <Badge text="Badge text" size="sm" color="gray" />
            <Highlight className="html">{'<Badge text="Badge text" size="sm" color="gray" />'}</Highlight>
        </>
    ))
    .add('with sm size and white background-color', () => (
        <>
            <Badge text="Badge text" size="sm" color="white" />
            <Highlight className="html">{'<Badge text="Badge text" size="sm" color="white" />'}</Highlight>
        </>
    ))
    .add('with sm size and darkGray background-color', () => (
        <>
            <Badge text="Badge text" size="sm" color="darkGray" />
            <Highlight className="html">{'<Badge text="Badge text" size="sm" color="darkGray" />'}</Highlight>
        </>
    ));
