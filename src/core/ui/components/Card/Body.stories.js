import React from 'react';
import styled from 'styled-components';
import Highlight from 'react-highlight';
import { storiesOf } from '@storybook/react';
import { Card } from './Card';
import { BACKGROUND_COLOR, ORIENTATION } from './config';

const Collection = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    min-height: 125px;

    .Body {
        flex: 450px 0;
        margin: 20px;
    }
`;

const BasicContent = styled.div`
    padding: 10px 15px;
`;

const Content = (
    <>
        <div>Item 1</div>
        <div>Item 2</div>
    </>
);

storiesOf('Card|Card.Body', module)
    .add('default', () => (
        <>
            <Card.Body />
            <Highlight className="html">{'<Card.Body />'}</Highlight>
        </>
    ))
    .add('with different `orientation`', () => (
        <>
            <Collection>
                <Card.Body backgroundColor="primary" orientation={ORIENTATION.HORIZONTAL}>
                    {Content}
                </Card.Body>
                <Card.Body backgroundColor="primary" orientation={ORIENTATION.VERTICAL}>
                    {Content}
                </Card.Body>
            </Collection>
            <Highlight className="html">
                {'<Card.Body backgroundColor="PRIMARY" orientation={ORIENTATION.VERTICAL}>{Content}</Card.Body>' +
                    '\n<Card.Body backgroundColor="PRIMARY" orientation={ORIENTATION.VERTICAL}>{Content}</Card.Body>'}
            </Highlight>
        </>
    ))
    .add('with different `backgroundColor`', () => (
        <>
            <Collection>
                {Object.values(BACKGROUND_COLOR).map((backgroundColor) => (
                    <Card.Body key={backgroundColor} backgroundColor={backgroundColor}>
                        <BasicContent>{backgroundColor}</BasicContent>
                    </Card.Body>
                ))}
            </Collection>
            <Highlight className="html">
                {Object.keys(BACKGROUND_COLOR).map(
                    (backgroundColor, index) =>
                        `${index ? '\n\n' : ''}<Card.Body backgroundColor={BACKGROUND_COLOR.${backgroundColor}}>` +
                        `\n\t<BasicContent>{${backgroundColor}}</BasicContent>` +
                        `\n</Card.Body>`,
                )}
            </Highlight>
        </>
    ));
