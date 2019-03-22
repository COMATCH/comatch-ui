import styled from 'styled-components';
import { palette, typography } from '../../../styles/variables';

const StyledWrapper = styled.span`
    color: ${palette.red};
    display: block;
    font-size: ${typography.fontSm};
    margin: 7px 0 10px 0;
`;

export { StyledWrapper };
