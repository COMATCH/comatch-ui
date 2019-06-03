import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { InputLabel } from '../InputLabel';
import { StyledWrapper } from './StyledWrapper';

const propTypes = {
    displayProgressLabel: PropTypes.bool,
    greyBackground: PropTypes.bool,
    progress(props, propName) {
        const value = props[propName];
        if ((!value && value !== 0) || value < 0 || value > 100) {
            return new Error('StepProgressBar requires progress prop as number between 0 and 100');
        }
        return false;
    },
    /** Label/title of the progress bar */
    label: PropTypes.string,
    /** Position of the label/title of the progress bar */
    labelPosition: PropTypes.oneOf(['right', 'left']),
    progressiveColoring: PropTypes.bool,
    progressLabel: PropTypes.string,
    /** Progress bar from left to right */
    reverse: PropTypes.bool,
    /** Coloring variants of the progress bar and it's labels */
    variant: PropTypes.oneOf(['standard', 'light', 'dark']),
};

const defaultProps = {
    displayProgressLabel: true,
    greyBackground: false,
    label: '',
    labelPosition: 'right',
    progressiveColoring: false,
    progressLabel: '',
    reverse: false,
    variant: 'standard',
};

function renderProgressLabel(displayProgressLabel, progressLabel, progress) {
    if (displayProgressLabel) {
        return progressLabel.length > 0 ? progressLabel : `${progress}%`;
    }

    return null;
}

export const ProgressBar = ({
    displayProgressLabel,
    greyBackground,
    label,
    labelPosition,
    variant,
    progress,
    progressiveColoring,
    progressLabel,
    reverse,
}) => {
    const progressStyle = { transform: `scaleX(${progress / 100})` };

    // per design specs, label is displayed
    // - at the right of the progress limit for progress < 40,
    // - at the left of the progress limit for progress >= 40,
    const progressLabelOnLeft = progress >= 40;

    // styles for standard progress bar
    const progressLabelStandardPosition = progressLabelOnLeft
        ? { right: `calc(${100 - progress}% + 8px)` }
        : { left: `calc(${progress}% + 8px)` };

    // styles for progress reverse bar
    const progressLabelReversePosition = progressLabelOnLeft
        ? { right: `calc(${progress}% - 38px)` }
        : { left: `calc(${100 - progress}% - 38px)` };

    const progressLabelPosition = !reverse ? progressLabelStandardPosition : progressLabelReversePosition;

    const progressLabelClass = classNames('ProgressBar__progress-label', {
        'ProgressBar__progress-label-left': progressLabelOnLeft,
        'ProgressBar__progress--label-light': variant === 'light',
        'ProgressBar__progress--label-dark': variant === 'dark',
    });

    const classes = classNames('ProgressBar', {
        'ProgressBar--danger': progressiveColoring && progress <= 39,
        'ProgressBar--warning': progressiveColoring && progress >= 40 && progress <= 74,
        'ProgressBar--greyBackground': greyBackground,
    });

    const progressClasses = classNames('ProgressBar__progress', {
        full: progress >= 100,
        reverse,
        light: variant === 'light',
        dark: variant === 'dark',
    });

    const labelClasses = classNames('ProgressBar__label', {
        'ProgressBar__label--left': labelPosition === 'left',
        'ProgressBar__label--light': variant === 'light',
    });

    return (
        <StyledWrapper>
            <InputLabel text={label} className={labelClasses} />
            <div className={classes}>
                <div className={progressClasses} style={progressStyle} />
                <div className={progressLabelClass} style={progressLabelPosition}>
                    {renderProgressLabel(displayProgressLabel, progressLabel, progress)}
                </div>
            </div>
        </StyledWrapper>
    );
};

ProgressBar.propTypes = propTypes;
ProgressBar.defaultProps = defaultProps;
