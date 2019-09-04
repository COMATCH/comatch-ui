import { ClassValue } from 'classnames/types';
import { StyledProps } from 'styled-components';

export type GenerateCssFunc = (props: StyledProps<{}>) => string;

export interface WithCssGeneratorFunc {
    generateCss?: GenerateCssFunc;
}

export interface WithClassAndId {
    id?: string;
    className?: ClassValue;
}

