import styled from 'styled-components';

const StyledWrapper = styled.section`

ul {
    list-style: none;
    display: flex;
    flex-direction: row;
}

li {
    font-size: 12px;
    color: #777777;
    margin: 3px;
}

li:last-child {
    font-weight: bold;
}

`;

export { StyledWrapper };



