import React from 'react';
import styled from 'styled-components';
import Highlight from 'react-highlight';
import { storiesOf } from '@storybook/react';
import { Avatar } from './Avatar';
import { badgeBase64 } from './images/badgeBase64';
import { comatchLogoBase64 } from './images/comatchLogoBase64';

const AvatarCollection = styled.div`
    align-items: flex-end;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    min-height: 125px;

    .Avatar {
        margin: 20px;
    }
`;

storiesOf('Avatar', module)
    .add('empty', () => (
        <>
            <Avatar />
            <Highlight className="html">{'<Avatar />'}</Highlight>
        </>
    ))
    .add('with src', () => (
        <>
            <Avatar src={comatchLogoBase64} />
            <Highlight className="html">{'<Avatar src={comatchLogoBase64} />'}</Highlight>
        </>
    ))
    .add('with src & badge', () => (
        <>
            <Avatar badge={<img src={badgeBase64} />} src={comatchLogoBase64} />
            <Highlight className="html">
                {'<Avatar badge={<img src={badgeBase64} />} src={comatchLogoBase64} />'}
            </Highlight>
        </>
    ))
    .add('with src & badge & custom size', () => (
        <>
            <AvatarCollection>
                <Avatar badge={<img src={badgeBase64} />} src={comatchLogoBase64} />
                <Avatar badge={<img src={badgeBase64} />} diameter={75} src={comatchLogoBase64} />
                <Avatar badge={<img src={badgeBase64} />} diameter={100} src={comatchLogoBase64} />
                <Avatar badge={<img src={badgeBase64} />} diameter={150} src={comatchLogoBase64} />
            </AvatarCollection>
            <Highlight className="html">
                {'<Avatar badge={<img src={badgeBase64} />} src={comatchLogoBase64} />' +
                    '\n<Avatar badge={<img src={badgeBase64} />} diameter={75} src={comatchLogoBase64} />' +
                    '\n<Avatar badge={<img src={badgeBase64} />} diameter={100} src={comatchLogoBase64} />' +
                    '\n<Avatar badge={<img src={badgeBase64} />} diameter={150} src={comatchLogoBase64} />'}
            </Highlight>
        </>
    ))
    .add('with src & tooltip', () => (
        <>
            <AvatarCollection>
                <Avatar src={comatchLogoBase64} tooltip="Some tooltip text..." />
                <Avatar src={comatchLogoBase64} tooltip="Some tooltip text..." tooltipPosition="left" />
                <Avatar src={comatchLogoBase64} tooltip="Some tooltip text..." tooltipPosition="right" />
                <Avatar src={comatchLogoBase64} tooltip="Some tooltip text..." tooltipPosition="top" />
            </AvatarCollection>
            <Highlight className="html">
                {'<Avatar src={comatchLogoBase64} tooltip="Some tooltip text..." />' +
                    '\n<Avatar src={comatchLogoBase64} tooltip="Some tooltip text..." tooltipPosition="left" />' +
                    '\n<Avatar src={comatchLogoBase64} tooltip="Some tooltip text..." tooltipPosition="right" />' +
                    '\n<Avatar src={comatchLogoBase64} tooltip="Some tooltip text..." tooltipPosition="top" />'}
            </Highlight>
        </>
    ));
