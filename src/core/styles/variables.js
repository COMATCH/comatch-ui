/**
 * This file takes care of importing and re-exporting all our
 * SASS variables ready to be used within JS in styled-components.
 */
import pick from 'lodash/pick';
import sassVariables from './variables.scss';

const palette = pick(sassVariables, [
    'black',
    'white',
    'lightBlue',
    'primary',
    'secondary',
    'lightGray',
    'midGray',
    'gray',
    'darkGray',
    'green',
    'lightGreen',
    'darkGreen',
    'lightRed',
    'darkRed',
    'lightOrange',
    'orange',
    'darkOrange',
    'yellow',
]);

const textPalette = {
    primary: sassVariables.primaryText,
    secondary: sassVariables.secondaryText,
};

const socialMediaPalette = pick(sassVariables, ['fb', 'twitter', 'xing', 'linkedin']);

const breakpoints = pick(sassVariables, [
    'xsMaxWidth',
    'smWidth',
    'smMaxWidth',
    'mdWidth',
    'mdMaxWidth',
    'lgWidth',
    'lgMaxWidth',
    'xlWidth',
]);

const typography = pick(sassVariables, [
    'fontXs',
    'fontSm',
    'fontMd',
    'fontLg',
    'fontXl',
    'fontXxl',
    'lineHeightXs',
    'lineHeightSm',
    'lineHeightMd',
    'lineHeightLg',
    'lineHeightXl',
    'lineHeightXxl',
]);

const variables = {
    breakpoints,
    palette,
    textPalette,
    socialMediaPalette,
    typography,
};

export { variables, breakpoints, palette, textPalette, socialMediaPalette, typography };
