import React from 'react';
import styled from 'styled-components';
import Highlight from 'react-highlight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { storiesOf } from '@storybook/react';
import { Avatar } from './Avatar';
import { comatchLogoBase64 } from './images/comatchLogoBase64';

const AvatarCollection = styled.div`
    .Avatar ~ .Avatar {
        margin: 10px;
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
            <Avatar badge={<FontAwesomeIcon icon={faCoffee} />} src={comatchLogoBase64} />
            <Highlight className="html">
                {'<Avatar badge={<FontAwesomeIcon icon={faCoffee} />} src={comatchLogoBase64} />'}
            </Highlight>
        </>
    ))
    .add('with src & badge & custom size', () => (
        <>
            <AvatarCollection>
                <Avatar badge={<FontAwesomeIcon icon={faCoffee} />} src={comatchLogoBase64} />
                <Avatar badge={<FontAwesomeIcon icon={faCoffee} />} diameter={75} src={comatchLogoBase64} />
                <Avatar badge={<FontAwesomeIcon icon={faCoffee} />} diameter={100} src={comatchLogoBase64} />
                <Avatar badge={<FontAwesomeIcon icon={faCoffee} />} diameter={150} src={comatchLogoBase64} />
            </AvatarCollection>
            <Highlight className="html">
                {'<Avatar badge={<FontAwesomeIcon icon={faCoffee} />} src={comatchLogoBase64} />' +
                    '\n<Avatar badge={<FontAwesomeIcon icon={faCoffee} />} diameter={75} src={comatchLogoBase64} />' +
                    '\n<Avatar badge={<FontAwesomeIcon icon={faCoffee} />} diameter={100} src={comatchLogoBase64} />' +
                    '\n<Avatar badge={<FontAwesomeIcon icon={faCoffee} />} diameter={150} src={comatchLogoBase64} />'}
            </Highlight>
        </>
    ));
