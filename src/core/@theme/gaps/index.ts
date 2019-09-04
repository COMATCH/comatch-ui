export interface Gap {
    coefficient: number;
    stringValue: string;
    unit: 'em' | 'px' | 'rem';
}

export interface Gaps {
    /** 10px */
    xs: Gap;
    /** 15px */
    sm: Gap;
    /** 20px */
    md: Gap;
    /** 25px */
    lg: Gap;
    /** 30px */
    xl: Gap;
    /** 35px */
    xxl: Gap;
}

const gaps: Gaps = {
    xs: { coefficient: 10, unit: 'px', stringValue: '10px' },
    sm: { coefficient: 15, unit: 'px', stringValue: '15px' },
    md: { coefficient: 20, unit: 'px', stringValue: '20px' },
    lg: { coefficient: 25, unit: 'px', stringValue: '25px' },
    xl: { coefficient: 30, unit: 'px', stringValue: '30px' },
    xxl: { coefficient: 35, unit: 'px', stringValue: '35px' },
};

export default gaps;
