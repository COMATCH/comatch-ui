import React from 'react';
import Highlight from 'react-highlight';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { TabNavigation } from './TabNavigation';
import { Panel } from '../Panel/Panel';

const panelText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Pellentesque porttitor efficitur enim, vitae blandit risus hendrerit non.
Donec in dignissim felis. Aenean eget risus non est suscipit finibus.
Fusce sed ipsum dapibus mi feugiat dapibus vel vel libero. Phasellus varius.`;

const onTabClick = () => {
    action('clicked tab')();
};

const onLinkClick = (evt) => {
    evt.preventDefault();
    onTabClick();
};

storiesOf('TabNavigation', module)
    .add('with default props, rendering buttons', () => (
        <div>
            <TabNavigation>
                <button onClick={onTabClick}>Tab 1</button>
                <button onClick={onTabClick}>Tab 2</button>
                <button onClick={onTabClick}>Tab 3</button>
            </TabNavigation>
            <Panel title="A panel title" titleColor="green">
                {panelText}
            </Panel>
            <Highlight className="html">
                {`<TabNavigation>` +
                    `\n\t<button onClick={onTabClick}>Tab 1</button>` +
                    `\n\t<button onClick={onTabClick}>Tab 2</button>` +
                    `\n\t<button onClick={onTabClick}>Tab 3</button>` +
                    `\n</TabNavigation>` +
                    `\n<Panel title="A panel title" titleColor="green">` +
                    `\n\t{panelText}` +
                    `\n</Panel>`}
            </Highlight>
        </div>
    ))
    .add('with default props, rendering links', () => (
        <div>
            <TabNavigation>
                <a href="#" onClick={onLinkClick}>
                    Tab 1
                </a>
                <a href="#" onClick={onLinkClick}>
                    Tab 2
                </a>
                <a href="#" onClick={onLinkClick}>
                    Tab 3
                </a>
            </TabNavigation>
            <Panel title="A panel title" titleColor="green">
                {panelText}
            </Panel>
            <Highlight className="html">
                {'<TabNavigation>' +
                    `\n\t<a href="#" onClick={onLinkClick}>` +
                    `\n\t\tTab 1` +
                    `\n\t</a>` +
                    `\n\t<a href="#" onClick={onLinkClick}>` +
                    `\n\t\tTab 2` +
                    `\n\t</a>` +
                    `\n\t<a href="#" onClick={onLinkClick}>` +
                    `\n\t\tTab 3` +
                    `\n\t</a>` +
                    `\n</TabNavigation>` +
                    `\n<Panel title="A panel title" titleColor="green">` +
                    `\n\t{panelText}` +
                    `\n</Panel>`}
            </Highlight>
        </div>
    ))
    .add('rendering links and activeTabIndex set to 2', () => (
        <div>
            <TabNavigation activeTabIndex={2}>
                <a href="#" onClick={onLinkClick}>
                    Tab 1
                </a>
                <a href="#" onClick={onLinkClick}>
                    Tab 2
                </a>
                <a href="#" onClick={onLinkClick}>
                    Tab 3
                </a>
            </TabNavigation>
            <Panel title="A panel title" titleColor="green">
                {panelText}
            </Panel>
            <Highlight className="html">
                {`<TabNavigation activeTabIndex={2}>` +
                    `\n\t<a href="#" onClick={onLinkClick}>` +
                    `\n\t\tTab 1` +
                    `\n\t</a>` +
                    `\n\t<a href="#" onClick={onLinkClick}>` +
                    `\n\t\tTab 2` +
                    `\n\t</a>` +
                    `\n\t<a href="#" onClick={onLinkClick}>` +
                    `\n\t\tTab 3` +
                    `\n\t</a>` +
                    `\n</TabNavigation>` +
                    `\n<Panel title="A panel title" titleColor="green">` +
                    `\n\t{panelText}` +
                    `\n</Panel>`}
            </Highlight>
        </div>
    ));
