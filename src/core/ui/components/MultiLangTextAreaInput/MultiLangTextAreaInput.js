import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { languageCodesArray as LANGUAGE_CODES, languageCodesMap as LANGUAGES } from '../../../config';
import { TextAreaInput } from '../TextAreaInput';
import { flagDeBase64 } from './images/flagDeBase64';
import { flagUkBase64 } from './images/flagUkBase64';
import { flagFrBase64 } from './images/flagFrBase64';

import { StyledWrapper } from './StyledWrapper';

export class MultiLangTextAreaInput extends Component {
    static propTypes = {
        activeLanguage: PropTypes.oneOf(LANGUAGE_CODES).isRequired,
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        value: PropTypes.arrayOf(
            PropTypes.shape({
                lang: PropTypes.string,
                value: PropTypes.string,
            }),
        ),
    };

    static defaultProps = {
        value: LANGUAGE_CODES.map((lang) => ({ lang, value: '' })),
    };

    renderFlagIcon(lang) {
        const classes = 'TextAreaInput__icon';
        const enFlag = <img src={flagUkBase64} alt="English flag" className={classes} />;
        const deFlag = <img src={flagDeBase64} alt="German flag" className={classes} />;
        const frFlag = <img src={flagFrBase64} alt="French flag" className={classes} />;
        switch (lang) {
            case LANGUAGES.GERMAN:
                return deFlag;
            case LANGUAGES.FRENCH:
                return frFlag;
            case LANGUAGES.ENGLISH:
            default:
                return enFlag;
        }
    }

    getLanguage(name) {
        if (/\.en\./.test(name)) {
            return LANGUAGES.ENGLISH;
        }
        if (/\.de\./.test(name)) {
            return LANGUAGES.GERMAN;
        }
        if (/\.fr\./.test(name)) {
            return LANGUAGES.FRENCH;
        }
        return LANGUAGES.ENGLISH;
    }

    handleTextAreaInputChange = (event) => {
        const { name, value } = event.target;
        const { name: multiLangInputName } = this.props;

        const languageOfInputBeingEdited = this.getLanguage(name);
        const otherValues = this.props.value.filter(({ lang }) => lang !== languageOfInputBeingEdited);
        const multiLangInputValue = [...otherValues, { lang: languageOfInputBeingEdited, value }];

        this.props.onChange({
            ...event,
            target: {
                ...event.target,
                name: multiLangInputName,
                value: multiLangInputValue,
            },
        });
    };

    render() {
        const { activeLanguage, name, onChange, value, ...props } = this.props;
        const classes = classNames('Input', 'MultiLangTextAreaInput', `active-lang-${activeLanguage}`);
        return (
            <StyledWrapper className={classes}>
                {LANGUAGE_CODES.map((language, key) => {
                    const { value: multiLangInputValue } = this.props;
                    const inputData = multiLangInputValue.find(({ lang }) => lang === language);
                    const inputValue = inputData ? inputData.value : '';
                    return (
                        <TextAreaInput
                            className={`lang-${language}`}
                            icon={this.renderFlagIcon(language)}
                            onChange={this.handleTextAreaInputChange}
                            name={`${name}.${language}.value`}
                            value={inputValue}
                            key={key}
                            {...props}
                        />
                    );
                })}
            </StyledWrapper>
        );
    }
}
