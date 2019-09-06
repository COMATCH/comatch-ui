import React from 'react';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from './store';

const req = require.context('../src/', true, /\.stories\.jsx?$/);

function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

addDecorator((story) => <Provider store={store}>{story()}</Provider>);
addParameters({
    options: {
        hierarchySeparator: /\/|\./, // matches a . or /
        hierarchyRootSeparator: /\|/, // matches a |
    },
});

configure(loadStories, module);
