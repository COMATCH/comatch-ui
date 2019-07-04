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
            <Avatar badgeChildren={<img src={badgeBase64} />} src={comatchLogoBase64} />
            <Highlight className="html">
                {'<Avatar badgeChildren={<img src={badgeBase64} />} src={comatchLogoBase64} />'}
            </Highlight>
        </>
    ))
    .add('with src & badge & custom size', () => (
        <>
            <AvatarCollection>
                <Avatar badgeChildren={<img src={badgeBase64} />} src={comatchLogoBase64} />
                <Avatar badgeChildren={<img src={badgeBase64} />} diameter={75} src={comatchLogoBase64} />
                <Avatar badgeChildren={<img src={badgeBase64} />} diameter={100} src={comatchLogoBase64} />
                <Avatar badgeChildren={<img src={badgeBase64} />} diameter={150} src={comatchLogoBase64} />
            </AvatarCollection>
            <Highlight className="html">
                {'<Avatar badgeChildren={<img src={badgeBase64} />} src={comatchLogoBase64} />' +
                    '\n<Avatar badgeChildren={<img src={badgeBase64} />} diameter={75} src={comatchLogoBase64} />' +
                    '\n<Avatar badgeChildren={<img src={badgeBase64} />} diameter={100} src={comatchLogoBase64} />' +
                    '\n<Avatar badgeChildren={<img src={badgeBase64} />} diameter={150} src={comatchLogoBase64} />'}
            </Highlight>
        </>
    ))
    .add('with src & popover', () => (
        <>
            <AvatarCollection>
                <Avatar src={comatchLogoBase64} popoverChildren="Some tooltip text..." />
                <Avatar src={comatchLogoBase64} popoverChildren="Some tooltip text..." popoverPosition="left" />
                <Avatar src={comatchLogoBase64} popoverChildren="Some tooltip text..." popoverPosition="right" />
                <Avatar src={comatchLogoBase64} popoverChildren="Some tooltip text..." popoverPosition="top" />
            </AvatarCollection>
            <Highlight className="html">
                {'<Avatar src={comatchLogoBase64} popoverChildren="Some tooltip text..." />' +
                    '\n<Avatar src={comatchLogoBase64} ' +
                    'popoverChildren="Some tooltip text..." popoverPosition="left" />' +
                    '\n<Avatar src={comatchLogoBase64} ' +
                    'popoverChildren="Some tooltip text..." popoverPosition="right" />' +
                    '\n<Avatar src={comatchLogoBase64} ' +
                    'popoverChildren="Some tooltip text..." popoverPosition="top" />'}
            </Highlight>
        </>
    ));
