import breakpoints, { Breakpoints } from './breakpoints';
import gaps, { Gaps } from './gaps';
import palette, { Palette } from './palette';
import typography, { Typography } from './typography';

import shadows from './shadows';

export interface Theme {
    breakpoints: Breakpoints;
    gaps: Gaps;
    palette: Palette;
    shadows: string[];
    typography: Typography;
}

export const theme: Theme = {
    breakpoints,
    gaps,
    palette,
    shadows,
    typography,
};
