import { TypographyInstance } from './types';
import body from './body';
import footNote from './footNote';
import headline1 from './headline1';
import headline2 from './headline2';
import label from './label';
import subheadline1 from './subheadline1';
import subheadline2 from './subheadline2';

export interface Typography {
    /**
     * fontFamily: "Overlook, Helvetica, Arial, sans-serif"
     * fontSize: 14
     * lineHeight: 20
     */
    body: TypographyInstance;
    /**
     * fontFamily: "Overlook, Helvetica, Arial, sans-serif"
     * fontSize: 10
     * lineHeight: 14
     */
    footNote: TypographyInstance;
    /**
     * fontFamily: "Overlook, Helvetica, Arial, sans-serif"
     * fontSize: 24
     * lineHeight: 32
     */
    headline1: TypographyInstance;
    /**
     * fontFamily: "Overlook, Helvetica, Arial, sans-serif"
     * fontSize: 20
     * lineHeight: 29
     */
    headline2: TypographyInstance;
    /**
     * fontFamily: "Overlook, Helvetica, Arial, sans-serif"
     * fontSize: 12
     * lineHeight: 17
     */
    label: TypographyInstance;
    /**
     * fontFamily: "Overlook, Helvetica, Arial, sans-serif"
     * fontSize: 18
     * lineHeight: 26
     */
    subheadline1: TypographyInstance;
    /**
     * fontFamily: "Overlook, Helvetica, Arial, sans-serif"
     * fontSize: 16
     * lineHeight: 23
     */
    subheadline2: TypographyInstance;
}

const typography: Typography = {
    body,
    footNote,
    headline1,
    headline2,
    label,
    subheadline1,
    subheadline2,
};

export default typography;
