import React from 'react';
import Highlight from 'react-highlight';
import { storiesOf } from '@storybook/react';
import { Breadcrumbs } from './Breadcrumbs';

const items = ['Item 1', 'Item 2', 'Item 3'];

storiesOf('Breadcrumbs', module)
    .add('with basic style', () => (
        <>
            <Breadcrumbs history={items} />
            <Highlight className="html">{'<Breadcrumbs history={["Item 1", "Item 2", "Item 3"]} />'}</Highlight>
        </>
    ))
    .add('with class & ID', () => (
        <>
            <Breadcrumbs id="ID" className="IDK" history={items} />
            <Highlight className="html">
                {'<Breadcrumbs id="ID" className="IDK" history={["Item 1", "Item 2", "Item 3"]} />'}
            </Highlight>
        </>
    ));
