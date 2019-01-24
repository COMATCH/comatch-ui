import styled from 'styled-components';
import { palette } from '../../../styles/variables';

export const getStylesBasedOnSize = ({ size }) => {
    switch (size) {
        case 'xs':
            return `
                font-size: $co-font-xs;
                font-weight: bold;
                line-height: 1;
                padding: 2px 5px 3px 5px;
        
                svg {
                    height: 10px;
                }
            `;

        case 'sm':
            return `
                font-size: $co-font-sm;

                svg {
                    height: 12px;
                }
            `;

        default:
            return '';
    }
};

export const getColorBasedOnProps = ({ color }) => {
    switch (color) {
        case 'green':
            return `
                background-color: ${palette.green};
                border-color: ${palette.green};
                color: ${palette.white};
            `;

        case 'orange':
            return `
                background-color: ${palette.orange};
                border-color: ${palette.orange};
                color: ${palette.white};
            `;

        case 'gray':
            return `
                background-color: ${palette.gray};
                border-color: ${palette.gray};
                color: ${palette.white};
            `;

        case 'darkGray':
            return `
                background-color: ${palette.darkGray};
                border-color: ${palette.darkGray};
                color: ${palette.white};
            `;
        
        case 'white':
            return `
                background-color: ${palette.white};
                border-color: ${palette.gray};
                color: ${palette.gray};
            `;

        case 'blue':
            return `
                background-color: ${palette.secondary};
                border-color: ${palette.secondary};
                color: ${palette.white};
            `;

        case 'lightblue':
            return `
                background-color: ${palette.primary};
                border-color: ${palette.primary};
                color: ${palette.white};
            `;

        default:
            return '';
    }
};

export const StyledWrapper = styled.div`
    border-radius: 3px;
    border: 1px solid;
    display: inline-block;
    padding: 5px 8px;

    svg {
        margin-right: 5px;
        cursor: pointer;
    }

    ${getColorBasedOnProps}
    ${getStylesBasedOnSize}
`;
