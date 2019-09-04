import { GenerateCssFunc, WithCssGeneratorFunc } from '../../../../@types';
import { theme } from '../../../../@theme';

import { Control } from './Control';
import { Items } from './Items';
import styled from 'styled-components';

interface WrapperProps {
    showItems?: boolean;
    generateControlCss?: GenerateCssFunc;
    generateItemsCss?: GenerateCssFunc;
}

const Wrapper = styled.div<WrapperProps & WithCssGeneratorFunc>`
    cursor: pointer;
    padding: 0;
    position: relative;

    ${(props) => {
        const { generateCss = () => '' } = props;
        return `${generateCss(props)}`;
    }}

    ${Control} {
        ${(props) => {
        const { generateControlCss = () => '' } = props;
        return `${generateControlCss(props)}`;
    }}
    }

    ${Items} {
        min-width: 250px;
        position: absolute;
        right: 0;
        top: calc(100% + 5px);
        transition: opacity 250ms ease-in, box-shadow 250ms ease-in;
        width: 100%;

        ${(props) => {
        const { generateItemsCss = () => '', showItems } = props;

        return `
                box-shadow: ${theme.shadows[showItems ? 1 : 0]};
                opacity: ${showItems ? 1 : 0};
                z-index: ${showItems ? 1 : -1};

                ${generateItemsCss(props)}
            `;
    }}
    }
`;

export { Wrapper };
