import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    className: PropTypes.string,
    currentCount: PropTypes.number.isRequired,
    label: PropTypes.node,
    maxLength: PropTypes.number.isRequired,
};

const defaultProps = {
    className: '',
    label: 'Remaining characters:',
};

const CharacterCount = ({ className, currentCount, label, maxLength }) => (
    <div className={className}>
        {label} {`${maxLength - currentCount}`}
    </div>
);

CharacterCount.propTypes = propTypes;
CharacterCount.defaultProps = defaultProps;

export { CharacterCount };
