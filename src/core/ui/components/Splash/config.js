import { typography } from '../../../styles/variables';

const ORIENTATION = {
    HORIZONTAL: 'horizontal',
    VERTICAL: 'vertical',
};

const SIZE = {
    XS: 'xs',
    SM: 'sm',
    MD: 'md',
    LG: 'lg',
    XL: 'xl',
    XXL: 'xxl',
};

const SIZE_TO_PIXELS = {
    xs: {
        title: `font-size: calc(${typography.fontXs} + 6px); line-height: calc(${typography.lineHeightXs} + 6px);`,
        subtitle: `font-size: ${typography.fontXs}; line-height: ${typography.fontXs};`,
    },
    sm: {
        title: `font-size: calc(${typography.fontSm} + 6px); line-height: calc(${typography.lineHeightSm} + 6px);`,
        subtitle: `font-size: ${typography.fontSm}; line-height: ${typography.fontSm};`,
    },
    md: {
        title: `font-size: calc(${typography.fontMd} + 6px); line-height: calc(${typography.lineHeightMd} + 6px);`,
        subtitle: `font-size: ${typography.fontMd}; line-height: ${typography.fontMd};`,
    },
    lg: {
        title: `font-size: calc(${typography.fontLg} + 6px); line-height: calc(${typography.lineHeightLg} + 6px);`,
        subtitle: `font-size: ${typography.fontLg}; line-height: ${typography.fontLg};`,
    },
    xl: {
        title: `font-size: calc(${typography.fontXl} + 6px); line-height: calc(${typography.lineHeightXl} + 6px);`,
        subtitle: `font-size: ${typography.fontXl}; line-height: ${typography.fontXl};`,
    },
    xxl: {
        title: `font-size: calc(${typography.fontXxl} + 6px); line-height: calc(${typography.lineHeightXxl} + 6px);`,
        subtitle: `font-size: ${typography.fontXxl}; line-height: ${typography.fontXxl};`,
    },
};

export { ORIENTATION, SIZE, SIZE_TO_PIXELS };
