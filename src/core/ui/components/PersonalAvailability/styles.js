import styled from 'styled-components';

const Title = styled.div`
    width: 146px;
    height: 19px;
    margin: 0 195px 1px 0;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    color: #3e3e3e;
`;

const Text = styled.div`
    width: 154px;
    height: 14px;
    margin: 0 59px 2px 0;
    font-family: Roboto;
    font-size: 12px;
    text-align: left;
    color: #777777;
`;

const BodyText = styled.div`
    width: 378px;
    height: 19px;
    margin: 2px 0 0;
    font-family: Roboto;
    font-size: 16px;
    color: #3e3e3e;
`;

const Options = styled.div`
    width: 21px;
    height: 19px;
    margin: 2px 172px 0 0;
    font-family: Roboto;
    font-size: 16px;
    color: #3e3e3e;
`;

const EditButton = styled.span`
    width: 25px;
    height: 20px;
    margin: 0 0 0 3px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    color: #056679;
`;

const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
`;

export { EditButton, Title, Text, FlexRow, Options, BodyText };
