import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from './store';

const req = require.context('../src/', true, /\.stories\.(j|t)sx?$/);
configure(req, module);

function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

addDecorator((story) => <Provider store={store}>{story()}</Provider>);

configure(loadStories, module);
