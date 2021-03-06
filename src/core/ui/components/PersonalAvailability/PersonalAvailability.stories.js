import React from 'react';

import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BodyText, Options, Rectangle, Row, Text, Title } from './PersonalAvailability.styles';

export default {
    title: 'PersonalAvailability',
    component: Rectangle,
};

export const Default = () => {
    return (
        <Rectangle>
            <Row>
                <Title>Personal Availability</Title>
                <FontAwesomeIcon icon={faEdit} color='#00677b'/>Edit
            </Row>
            <Row>
                <Text>Current availability</Text>
                <Text>Unavailability until</Text>
            </Row>
            <Row>
                <Options>No</Options>
                <Options>-</Options>
            </Row>
            <Text>Last availability update</Text>
            <BodyText>robert.baratheon@comatch.com at 01.12.2019 23:58</BodyText>
            <Text>Other availability information</Text>
            <Options>-</Options>
            <Text>Last updated</Text>
            <BodyText>20.07.2019. CRM</BodyText>
        </Rectangle>
    );
};
