import breakpoints from './breakpoints';

export default {
    // Desktop first
    mobile: `(max-width: ${breakpoints.xsMaxWidth})`,
    mobileLandscape: `screen and (orientation: landscape) and (max-width: ${breakpoints.smMaxWidth})`,
    upToTablet: `(max-width: ${breakpoints.smMaxWidth})`,
    upToDesktop: `(max-width: ${breakpoints.mdMaxWidth})`,

    // Mobile first
    mobileLarge: `(min-width: ${breakpoints.smWidth})`,
    tablet: `(min-width: ${breakpoints.mdWidth})`,
    desktop: `(min-width: ${breakpoints.lgWidth})`,
    desktopLarge: `(min-width: ${breakpoints.xlWidth})`,
};
