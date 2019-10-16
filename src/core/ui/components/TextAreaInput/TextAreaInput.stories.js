import React, { Component, useState } from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { TextAreaInput } from './TextAreaInput';

const handleChange = (event) => action('changed')(event.target.name, event.target.value);

const html = (
    <span>
        <strong>strong</strong> <br /> text <br /> more text
    </span>
);

storiesOf('TextAreaInput', module)
    .add('with basic style', () => <TextAreaInput name="field" onChange={handleChange} />)
    .add('with placeholder', () => (
        <TextAreaInput name="field" onChange={handleChange} placeholder="Placeholder text" />
    ))
    .add('with html-placeholder', () => <TextAreaInput name="field" onChange={handleChange} htmlPlaceholder={html} />)
    .add('with label', () => <TextAreaInput name="field" onChange={handleChange} label="Label text" />)
    .add('with error', () => (
        <TextAreaInput name="field" onChange={handleChange} label="Label text" inputError="Error text" />
    ))
    .add('with character count', () => <Controlled />)
    .add('in a container', () => <TextAreaInputContainer />);

class TextAreaInputContainer extends Component {
    state = { description: 'this is my text' };

    handleChange = (event) => {
        this.setState({ description: event.target.value });
        action('changed in container')(event.target.name, event.target.value);
    };

    handleFocus = (event) => {
        action('focused in container')(event);
    };

    handleBlur = (event) => {
        action('blured in container')(event);
    };

    render() {
        return (
            <TextAreaInput
                name="description"
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                value={this.state.description}
            />
        );
    }
}

const Controlled = () => {
    const [value, onChange] = useState('');
    const onChangeHandler = (event) => {
        onChange(event.target.value);
        action('changed in `Controlled`')(event.target.name, event.target.value);
    };

    return (
        <TextAreaInput
            withCharacterCount
            characterCountLabel={<span>My custom label:</span>}
            name="field"
            maxLength={2000}
            onChange={onChangeHandler}
            value={value}
        />
    );
};
