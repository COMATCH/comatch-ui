import styled from 'styled-components';
import { palette, typography } from '../../../styles/variables';

const StyledItem = styled.li`
    font-size: ${typography.fontXs};
    color: ${palette.gray};
    margin: 3px;
`;

const StyledWrapper = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;

    ${StyledItem}:last-child {
        font-weight: bold;
    }
`;

export { StyledItem, StyledWrapper };
