import styled from 'styled-components';

const Rectangle = styled.div`
    width: 420px;
    height: 230px;
    margin: 20px 91px 60px 92px;
    padding: 15px 20px 15px 16px;
    border-radius: 1px;
    box-shadow: 0 2px 4px 0 rgba(62, 62, 62, 0.15);
    border: solid 1px #edf6f8;
    background-color: #ffffff;
`;

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
    margin: 0 0 2px;
    font-family: Roboto;
    font-size: 12px;
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
    margin: 2px 81px 0 0;
    font-family: Roboto;
    font-size: 16px;
    color: #3e3e3e;
`;

const Row = styled.div`
    display: flex;
`;

export { Rectangle, Title, Text, Row, Options, BodyText };
