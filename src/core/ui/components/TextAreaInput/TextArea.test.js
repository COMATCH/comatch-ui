import '../../../config/tests/setup';

import React from 'react';
import { TextAreaInput } from './TextAreaInput';
import { mount } from 'enzyme';
import noop from 'lodash/noop';
import renderer from 'react-test-renderer';

describe('TextAreaInput', () => {
    const REQUIRED_PROPS = {
        name: 'testing-name',
        onChange: jest.fn(),
    };

    const OPTIONAL_PROPS = {
        className: 'testing-classname',
        display: 'inline',
        icon: <i />,
        id: 'testing-id',
        inputError: 'Testing errror',
        label: 'Testing Label',
        maxLength: 150,
        onFocus: jest.fn(),
        onBlur: jest.fn(),
        placeholder: 'Testing placeholder',
        htmlPlaceholder: <span>Testing HTML Placeholder</span>,
        required: true,
        rows: 16,
        value: 'Testing value',
    };

    it('should render correctly', () => {
        const textAreaInputComponent = renderer.create(<TextAreaInput {...REQUIRED_PROPS} />).toJSON();
        expect(textAreaInputComponent).toMatchSnapshot();
    });

    it('should render with default props', () => {
        const props = {
            ...REQUIRED_PROPS,
        };

        const textAreaInputComponent = mount(<TextAreaInput {...props} />);

        // Required props:
        expect(textAreaInputComponent.prop('name')).toEqual(props.name);
        expect(textAreaInputComponent.prop('onChange')).toEqual(props.onChange);

        // Optional props:
        expect(textAreaInputComponent.prop('className')).toEqual(null);
        expect(textAreaInputComponent.prop('display')).toEqual('block');
        expect(textAreaInputComponent.prop('icon')).toEqual(null);
        expect(textAreaInputComponent.prop('id')).toEqual(null);
        expect(textAreaInputComponent.prop('inputError')).toEqual(null);
        expect(textAreaInputComponent.prop('label')).toEqual(null);
        expect(textAreaInputComponent.prop('maxLength')).toEqual(null);
        expect(textAreaInputComponent.prop('onFocus')).toEqual(noop);
        expect(textAreaInputComponent.prop('onBlur')).toEqual(noop);
        expect(textAreaInputComponent.prop('placeholder')).toEqual('');
        expect(textAreaInputComponent.prop('htmlPlaceholder')).toEqual(null);
        expect(textAreaInputComponent.prop('required')).toEqual(false);
        expect(textAreaInputComponent.prop('rows')).toEqual(5);
        expect(textAreaInputComponent.prop('value')).toEqual('');
    });

    it('should render with passed props', () => {
        const props = {
            ...REQUIRED_PROPS,
            ...OPTIONAL_PROPS,
        };

        const textAreaInputComponent = mount(<TextAreaInput {...props} />);

        // Required props:
        expect(textAreaInputComponent.prop('name')).toEqual(props.name);
        expect(textAreaInputComponent.prop('onChange')).toEqual(props.onChange);

        // Optional props:
        expect(textAreaInputComponent.prop('className')).toEqual(props.className);
        expect(textAreaInputComponent.prop('display')).toEqual(props.display);
        expect(textAreaInputComponent.prop('icon')).toEqual(props.icon);
        expect(textAreaInputComponent.prop('id')).toEqual(props.id);
        expect(textAreaInputComponent.prop('inputError')).toEqual(props.inputError);
        expect(textAreaInputComponent.prop('label')).toEqual(props.label);
        expect(textAreaInputComponent.prop('maxLength')).toEqual(props.maxLength);
        expect(textAreaInputComponent.prop('onFocus')).toEqual(props.onFocus);
        expect(textAreaInputComponent.prop('onBlur')).toEqual(props.onBlur);
        expect(textAreaInputComponent.prop('placeholder')).toEqual(props.placeholder);
        expect(textAreaInputComponent.prop('htmlPlaceholder')).toEqual(props.htmlPlaceholder);
        expect(textAreaInputComponent.prop('required')).toEqual(props.required);
        expect(textAreaInputComponent.prop('rows')).toEqual(props.rows);
        expect(textAreaInputComponent.prop('value')).toEqual(props.value);
    });

    it('should render correctly with a Label', () => {
        const inputWithLabel = <TextAreaInput {...REQUIRED_PROPS} label={OPTIONAL_PROPS.label} />;
        const textInputComponentWithLabel = renderer.create(inputWithLabel).toJSON();
        const mountedTextInput = mount(inputWithLabel);
        const textInputContainerNode = mountedTextInput.children().at(0);

        expect(textInputComponentWithLabel).toMatchSnapshot();
        expect(textInputContainerNode.children()).toHaveLength(2);
        expect(
            textInputContainerNode
                .children()
                .at(0)
                .name(),
        ).toBe('InputLabel');
        expect(
            textInputContainerNode
                .children()
                .at(1)
                .name(),
        ).toBe('textarea');
    });

    it('should render correctly with an Icon', () => {
        const inputWithIcon = <TextAreaInput {...REQUIRED_PROPS} icon={OPTIONAL_PROPS.icon} />;
        const mountedTextInput = mount(inputWithIcon);
        const textInputContainerNode = mountedTextInput.children().at(0);
        const textInputComponentWithIcon = renderer.create(inputWithIcon).toJSON();

        expect(textInputComponentWithIcon).toMatchSnapshot();
        expect(textInputContainerNode.children()).toHaveLength(2);
        expect(
            textInputContainerNode
                .children()
                .at(0)
                .name(),
        ).toBe('textarea');
        expect(
            textInputContainerNode
                .children()
                .at(1)
                .name(),
        ).toBe('i');
    });

    it('should render correctly with an InputError', () => {
        const inputWithInputError = <TextAreaInput {...REQUIRED_PROPS} inputError={OPTIONAL_PROPS.inputError} />;
        const mountedTextInput = mount(inputWithInputError);
        const textInputContainerNode = mountedTextInput.children().at(0);
        const textInputComponentWithInputError = renderer.create(inputWithInputError).toJSON();

        expect(textInputComponentWithInputError).toMatchSnapshot();
        expect(textInputContainerNode.children()).toHaveLength(2);
        expect(
            textInputContainerNode
                .children()
                .at(0)
                .name(),
        ).toBe('textarea');
        expect(
            textInputContainerNode
                .children()
                .at(1)
                .name(),
        ).toBe('InputError');
    });

    it('should render correctly with an HTML Placeholder', () => {
        const inputWitPlaceholder = (
            <TextAreaInput {...REQUIRED_PROPS} htmlPlaceholder={OPTIONAL_PROPS.htmlPlaceholder} />
        );
        const mountedTextInput = mount(inputWitPlaceholder);
        const textInputContainerNode = mountedTextInput.children().at(0);
        const textInputComponentWithInputError = renderer.create(inputWitPlaceholder).toJSON();

        expect(textInputComponentWithInputError).toMatchSnapshot();
        expect(textInputContainerNode.children()).toHaveLength(2);
        expect(
            textInputContainerNode
                .children()
                .at(0)
                .name(),
        ).toBe('textarea');
        expect(
            textInputContainerNode
                .children()
                .at(1)
                .hasClass('html-placeholder'),
        ).toBeTruthy();
    });

    it('should render correctly with a Character Counter', () => {
        const inputWitPlaceholder = <TextAreaInput {...REQUIRED_PROPS} maxLength={2000} withCharacterCount />;
        const mountedTextInput = mount(inputWitPlaceholder);
        const textInputContainerNode = mountedTextInput.children().at(0);
        const textInputComponentWithInputError = renderer.create(inputWitPlaceholder).toJSON();

        expect(textInputComponentWithInputError).toMatchSnapshot();
        expect(textInputContainerNode.children()).toHaveLength(2);
        expect(
            textInputContainerNode
                .children()
                .at(0)
                .name(),
        ).toBe('textarea');
        expect(
            textInputContainerNode
                .children()
                .at(1)
                .hasClass('TextAreaInput__CharacterCount'),
        ).toBeTruthy();
    });
});
