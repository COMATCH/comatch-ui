import React from 'react';
import styled from 'styled-components';
import Highlight from 'react-highlight';
import { storiesOf } from '@storybook/react';
import { Card } from './Card';
import { BACKGROUND_COLOR } from './config';
import { ORIENTATION } from '../Splash';

const Collection = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    min-height: 125px;

    .Header {
        flex: 450px 0;
        margin: 20px;
    }
`;

const BasicContent = styled.div`
    padding: 10px 15px;
`;

const BasicControls = (
    <>
        <button>Button 1</button>
        <button>Button 2</button>
        <button>Button 3</button>
    </>
);

storiesOf('Card|Card.Header', module)
    .add('default', () => (
        <>
            <Card.Header />
            <Highlight className="html">{'<Card.Header />'}</Highlight>
        </>
    ))
    .add('with different `backgroundColor`', () => (
        <>
            <Collection>
                {Object.values(BACKGROUND_COLOR).map((backgroundColor) => (
                    <Card.Header key={backgroundColor} backgroundColor={backgroundColor}>
                        <BasicContent>{backgroundColor}</BasicContent>
                    </Card.Header>
                ))}
            </Collection>
            <Highlight className="html">
                {Object.keys(BACKGROUND_COLOR).map(
                    (backgroundColor, index) =>
                        `${index ? '\n\n' : ''}<Card.Header backgroundColor={BACKGROUND_COLOR.${backgroundColor}}>` +
                        `\n\t<BasicContent>{${backgroundColor}}</BasicContent>` +
                        `\n</Card.Header>`,
                )}
            </Highlight>
        </>
    ))
    .add('with `controls`', () => (
        <>
            <Card.Header controls={BasicControls} />
            <Highlight className="html">{'<Card.Header controls={BasicControls} />'}</Highlight>
        </>
    ))
    .add('with content, `controls` and different `backgroundColor`', () => (
        <>
            <Collection>
                {Object.values(BACKGROUND_COLOR).map((backgroundColor) => (
                    <Card.Header key={backgroundColor} backgroundColor={backgroundColor} controls={BasicControls}>
                        <BasicContent>{backgroundColor}</BasicContent>
                    </Card.Header>
                ))}
            </Collection>
            <Highlight className="html">
                {Object.keys(BACKGROUND_COLOR).map(
                    (backgroundColor, index) =>
                        `${
                            index ? '\n\n' : ''
                        }<Card.Header backgroundColor={BACKGROUND_COLOR.${backgroundColor}} controls={BasicControls}>` +
                        `\n\t<BasicContent>{${backgroundColor}}</BasicContent>` +
                        `\n</Card.Header>`,
                )}
            </Highlight>
        </>
    ))
    .add('with `title` & `subtitle`', () => (
        <>
            <Card.Header title="Title" titleOrientation={ORIENTATION.VERTICAL} subtitle="Subtitle" />
            <Highlight className="html">
                {'<Card.Header title="Title" titleOrientation={ORIENTATION.VERTICAL} subtitle="Subtitle" />'}
            </Highlight>
        </>
    ))
    .add('with content, `title`, `subtitle` and different `backgroundColor`', () => (
        <>
            <Collection>
                {Object.values(BACKGROUND_COLOR).map((backgroundColor) => (
                    <Card.Header
                        key={backgroundColor}
                        backgroundColor={backgroundColor}
                        title="Title"
                        titleOrientation={ORIENTATION.VERTICAL}
                        subtitle="Subtitle"
                    >
                        <BasicContent>{backgroundColor}</BasicContent>
                    </Card.Header>
                ))}
            </Collection>
            <Highlight className="html">
                {Object.keys(BACKGROUND_COLOR).map(
                    (backgroundColor, index) =>
                        `${index ? '\n\n' : ''}<Card.Header backgroundColor={BACKGROUND_COLOR.${backgroundColor}} ` +
                        `title="Title" titleOrientation={ORIENTATION.VERTICAL} subtitle="Subtitle">` +
                        `\n\t<BasicContent>{${backgroundColor}}</BasicContent>` +
                        `\n</Card.Header>`,
                )}
            </Highlight>
        </>
    ));
