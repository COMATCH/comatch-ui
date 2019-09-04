export interface Breakpoint {
    coefficient: number;
    stringValue: string;
    unit: 'em' | 'px' | 'rem';
}

export interface Breakpoints {
    /**
     * smartphones, portrait iPhone, portrait 480x320 phones (Android)
     */
    xs: Breakpoint;
    /**
     * smartphones, Android phones, landscape iPhone
     */
    sm: Breakpoint;
    /**
     * portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android)
     */
    md: Breakpoint;
    /**
     * tablet, landscape iPad, lo-res laptops ands desktops
     */
    lg: Breakpoint;
    /**
     * big landscape tablets, laptops, and desktops
     */
    xl: Breakpoint;
    /**
     * hi-res laptops and desktops
     */
    xxl: Breakpoint;
}

const breakpoints: Breakpoints = {
    xs: { coefficient: 320, unit: 'px', stringValue: 'min-width: 320px' },
    sm: { coefficient: 480, unit: 'px', stringValue: 'min-width: 480px' },
    md: { coefficient: 600, unit: 'px', stringValue: 'min-width: 600px' },
    lg: { coefficient: 801, unit: 'px', stringValue: 'min-width: 801px' },
    xl: { coefficient: 1025, unit: 'px', stringValue: 'min-width: 1025px' },
    xxl: { coefficient: 1281, unit: 'px', stringValue: 'min-width: 1281px' },
};

export default breakpoints;
