import { FONT_COLOR_VALUES } from '../config';
import { palette } from '../../../../styles/variables';

function background({ backgroundColor }) {
    return palette[backgroundColor] || palette.white;
}

function border({ bordered }) {
    return bordered ? `1px solid ${palette.gray}` : 'none';
}

function display({ inline }) {
    return inline ? 'inline-flex' : 'flex';
}

function fontColor({ backgroundColor }) {
    return palette[FONT_COLOR_VALUES[backgroundColor] || FONT_COLOR_VALUES.white];
}

function wrapValue({ wrap }) {
    return wrap ? 'wrap' : 'nowrap';
}

export { background, border, display, fontColor, wrapValue };
