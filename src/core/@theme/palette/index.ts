import background, { Background } from './background';
import error, { Error } from './error';
import info, { Info } from './info';
import neutral, { Neutral } from './neutral';
import primary, { Primary } from './primary';
import secondary, { Secondary } from './secondary';
import success, { Success } from './success';
import text, { Text } from './text';
import warning, { Warning } from './warning';

export interface Palette {
    /** #FFFFFF, #F5FBFC, #FFF0F0, #F0FFF2, #FFF6F0, #F0FFFF */
    background: Background;
    /** #FF8080, #FF2C2C, #AD1919, #FFFFFF */
    error: Error;
    /** #11B6CC, #0B869F, #074851, #FFFFFF */
    info: Info;
    /** #F2F9F9, #DCE2E2, #B7BCBC, #6D7070, #3B3D3D */
    neutral: Neutral;
    /** #85CFDE, #0095B3, #056679, #FFFFFF */
    primary: Primary;
    /** #FFE499, #FAD248, #AD8D34, #FFFFFF */
    secondary: Secondary;
    /** #5DD882, #2FB254, #1B7038, #FFFFFF */
    success: Success;
    /** #000000, #777777, #C0C0C0, #0095B3 */
    text: Text;
    /** #FFA45A, #FF8206, #CD7001, #FFFFFF */
    warning: Warning;
}

const palette: Palette = {
    background,
    error,
    info,
    neutral,
    primary,
    secondary,
    success,
    text,
    warning,
};

export default palette;
