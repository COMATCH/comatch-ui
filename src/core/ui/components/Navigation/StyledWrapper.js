import styled from 'styled-components';
import { device } from '../../../styles/mixins';
import { ORIENTATION } from './config';

function getDisplayBasedOnOrientation(orientation, mobile = true) {
    switch (orientation) {
        case ORIENTATION.RESPONSIVE:
            return mobile ? 'block' : 'inline-block';
        case ORIENTATION.HORIZONTAL:
            return 'inline-block';
        case ORIENTATION.VERTICAL:
        default:
            return 'block';
    }
}

export const StyledWrapper = styled.nav`
    ul {
        display: block;
        margin: 0;
        padding: 0;

        li {
            display: ${({ orientation }) => getDisplayBasedOnOrientation(orientation)};
            list-style: none;
        }
    }

    &.responsive {
        ul li {
            @media ${({ breakpoint }) => device[breakpoint]} {
                display: ${({ orientation }) => getDisplayBasedOnOrientation(orientation, false)};
            }
        }
    }
`;
