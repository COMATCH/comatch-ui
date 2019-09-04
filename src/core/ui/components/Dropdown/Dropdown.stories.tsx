import React from 'react';
import Highlight from 'react-highlight';
import { storiesOf } from '@storybook/react';
import { Dropdown } from './Dropdown';

storiesOf('Dropdown', module)
    .add('stub', () => (
        <React.Fragment>
            <Dropdown />
            <Highlight className="html">{`<Dropdown />`}</Highlight>
        </React.Fragment>
    ));