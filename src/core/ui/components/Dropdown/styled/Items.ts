import styled from 'styled-components';

const Items = styled.div<{ maxHeight?: string }>`
    margin: 0;
    overflow-y: auto;
    padding: 0;

    ${({ maxHeight = '250px' }) => `max-height: ${maxHeight};`}
`;

export { Items };
