import React from 'react';

import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { BodyText, FlexRow, Options, Text, Title, EditButton } from './styles';
import { Panel } from '../Panel';

export default {
    title: 'PersonalAvailability',
};

const PanelWithShadow = styled(Panel)`
    width: 420px;
    height: 230px;
    margin: 20px 91px 60px 92px;
    padding: 15px 20px 15px 16px;
    border-radius: 1px;
    box-shadow: 0 2px 4px 0 rgba(62, 62, 62, 0.15);
    border: solid 1px #edf6f8;
    background-color: #ffffff;
`;

export const Default = () => {
    return (
        <PanelWithShadow>
            <FlexRow>
                <Title>Personal Availability</Title>
                <FontAwesomeIcon icon={faEdit} color="#00677b" />
                <EditButton>Edit</EditButton>
            </FlexRow>
            <FlexRow>
                <Text>Current availability</Text>
                <Text>Unavailability until</Text>
            </FlexRow>
            <FlexRow>
                <Options>No</Options>
                <Options>-</Options>
            </FlexRow>
            <Text>Last availability update</Text>
            <BodyText>robert.baratheon@comatch.com at 01.12.2019 23:58</BodyText>
            <Text>Other availability information</Text>
            <Options>-</Options>
            <Text>Last updated</Text>
            <BodyText>20.07.2019. CRM</BodyText>
        </PanelWithShadow>
    );
};
