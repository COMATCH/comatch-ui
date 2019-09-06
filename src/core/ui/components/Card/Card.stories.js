import React from 'react';
import styled from 'styled-components';
import Highlight from 'react-highlight';
import { storiesOf } from '@storybook/react';
import { Card } from './Card';
import { Button } from '../Button';
import { BACKGROUND_COLOR } from './config';

const Collection = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    min-height: 125px;

    .Card {
        flex: 500px 0;
        margin: 20px;
    }
`;

const BasicContent = styled.div`
    padding: 10px 15px;
`;

const actions = (
    <>
        <Button text="Action A" ghost />
        <Button text="Action B" />
    </>
);

storiesOf('Card|Card.Card', module)
    .add('default', () => (
        <>
            <Card />
            <Highlight className="html">{'<Card />'}</Highlight>
        </>
    ))
    .add('with different `backgroundColor`', () => (
        <>
            <Collection>
                {Object.values(BACKGROUND_COLOR).map((backgroundColor) => (
                    <Card key={backgroundColor} backgroundColor={backgroundColor}>
                        <BasicContent>{backgroundColor}</BasicContent>
                    </Card>
                ))}
            </Collection>
            <Highlight className="html">
                {Object.keys(BACKGROUND_COLOR).map(
                    (backgroundColor, index) =>
                        `${index ? '\n\n' : ''}<Card backgroundColor={BACKGROUND_COLOR.${backgroundColor}}>` +
                        `\n\t<BasicContent>{${backgroundColor}}</BasicContent>` +
                        `\n</Card>`,
                )}
            </Highlight>
        </>
    ))
    .add('with `Header` & `Body`', () => (
        <>
            <Collection>
                {Object.values(BACKGROUND_COLOR).map((backgroundColor) => (
                    <Card key={backgroundColor} backgroundColor={backgroundColor}>
                        <Card.Header title="Header" subtitle="Header subtitle" controls={actions} />
                        <Card.Body>
                            <p>This is the Card&apos;s Body (Content)</p>
                        </Card.Body>
                    </Card>
                ))}
            </Collection>
            <Highlight className="html">
                {Object.keys(BACKGROUND_COLOR).map(
                    (backgroundColor, index) =>
                        `${index ? '\n\n' : ''}<Card backgroundColor={BACKGROUND_COLOR.${backgroundColor}}>` +
                        '\n\t<Card.Header title="Header" subtitle="Header subtitle" controls={actions} />' +
                        "\n\t<Card.Body>\n\t\t<p>This is the Card's Body (Content)</p>" +
                        '\n\t</Card.Body>' +
                        '\n</Card>',
                )}
            </Highlight>
        </>
    ));
