import { GenerateCssFunc, WithClassAndId, WithCssGeneratorFunc } from '../../../@types';

import { ReactNode } from 'react';

export interface DropdownProps extends WithClassAndId, WithCssGeneratorFunc {
    children?: ReactNode;
    closeOnItemClick?: boolean;
    generateControlCss?: GenerateCssFunc;
    generateItemsCss?: GenerateCssFunc;
    maxHeight?: string;
    items?: ReactNode;
}
