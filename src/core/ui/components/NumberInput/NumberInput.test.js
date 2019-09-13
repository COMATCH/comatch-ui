import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import { lorem } from 'faker';
import noop from 'lodash/noop';
import '../../../config/tests/setup';

import { NumberInput } from './NumberInput';

describe('NumberInput tests', () => {
    const REQUIRED_PROPS = {
        name: 'text-area-input',
        type: jest.fn(),
        onChange: jest.fn(),
    };

    const OPTIONAL_PROPS = {
        className: lorem.word(),
        defaultValue: lorem.word(),
        id: lorem.word(),
        inputError: 'Testing InputError Message',
        label: 'Testing Label',
        name: lorem.word(),
        placeholder: lorem.word(),
        value: lorem.word(),
        disabled: false,
        required: true,
        autoComplete: 'on',
        display: 'inline',
        type: 123456789,
        maxLength: 100,
        icon: <i />,
        onBlur: jest.fn(),
        onClick: jest.fn(),
        onFocus: jest.fn(),
    };

    describe('given render the default NumberInput component', () => {
        it('should create and compare snapshot', () => {
            const navigationInput = renderer.create(<NumberInput {...REQUIRED_PROPS} />).toJSON();
            expect(navigationInput).toMatchSnapshot();
        });

        it('should render the default NumberInput without crashing', () => {
            const navigationInput = renderer.create(<NumberInput {...REQUIRED_PROPS} />).toJSON();
            expect(navigationInput).toBeTruthy();
        });
    });

    describe('given only required props', () => {
        it('should render with certain props', () => {
            const props = {
                ...REQUIRED_PROPS,
            };
            const numberInputComponent = shallow(<NumberInput {...props} />);
            // Required props:
            expect(numberInputComponent.prop('name')).toEqual(props.name);
            expect(numberInputComponent.prop('onChange')).toEqual(props.onChange);
            // Defaults:
            expect(numberInputComponent.prop('autoComplete')).toEqual(null);
            expect(numberInputComponent.prop('className')).toEqual('NumberInput');
            expect(numberInputComponent.prop('defaultValue')).toEqual('');
            expect(numberInputComponent.prop('disabled')).toEqual(null);
            expect(numberInputComponent.prop('display')).toEqual('block');
            expect(numberInputComponent.prop('icon')).toEqual(null);
            expect(numberInputComponent.prop('id')).toEqual(null);
            expect(numberInputComponent.prop('inputError')).toEqual('');
            expect(numberInputComponent.prop('label')).toEqual('');
            expect(numberInputComponent.prop('maxLength')).toEqual(null);
            expect(numberInputComponent.prop('onBlur')).toEqual(noop);
            expect(numberInputComponent.prop('onClick')).toEqual(noop);
            expect(numberInputComponent.prop('onFocus')).toEqual(noop);
            expect(numberInputComponent.prop('placeholder')).toEqual('');
            expect(numberInputComponent.prop('required')).toEqual(false);
            expect(numberInputComponent.prop('type')).toEqual('number');
            expect(numberInputComponent.prop('value')).toEqual('');
        });
    });
    describe('given required and all optional props', () => {
        it('should render with certain props', () => {
            const props = {
                ...REQUIRED_PROPS,
                ...OPTIONAL_PROPS,
            };
            const textInputComponent = mount(<NumberInput {...props} />);
            // Required Props:
            expect(textInputComponent.prop('name')).toEqual(props.name);
            expect(textInputComponent.prop('onChange')).toEqual(props.onChange);
            // Optional Props:
            expect(textInputComponent.prop('className')).toEqual(props.className);
            expect(textInputComponent.prop('defaultValue')).toEqual(props.defaultValue);
            expect(textInputComponent.prop('id')).toEqual(props.id);
            expect(textInputComponent.prop('inputError')).toEqual(props.inputError);
            expect(textInputComponent.prop('label')).toEqual(props.label);
            expect(textInputComponent.prop('name')).toEqual(props.name);
            expect(textInputComponent.prop('placeholder')).toEqual(props.placeholder);
            expect(textInputComponent.prop('value')).toEqual(props.value);
            expect(textInputComponent.prop('disabled')).toEqual(props.disabled);
            expect(textInputComponent.prop('required')).toEqual(props.required);
            expect(textInputComponent.prop('autoComplete')).toEqual(props.autoComplete);
            expect(textInputComponent.prop('display')).toEqual(props.display);
            expect(textInputComponent.prop('type')).toEqual(props.type);
            expect(textInputComponent.prop('maxLength')).toEqual(props.maxLength);
            expect(textInputComponent.prop('icon')).toEqual(props.icon);
            expect(textInputComponent.prop('onBlur')).toEqual(props.onBlur);
            expect(textInputComponent.prop('onClick')).toEqual(props.onClick);
            expect(textInputComponent.prop('onFocus')).toEqual(props.onFocus);
        });
    });
    describe('given required props with inputError and label pops', () => {
        it('should render correctly with an InputError', () => {
            const inputWithInputError = <NumberInput {...REQUIRED_PROPS} inputError={OPTIONAL_PROPS.inputError} />;
            const numberInputComponent = mount(inputWithInputError);
            expect(
                numberInputComponent
                    .find('.InputError')
                    .at(0)
                    .text(),
            ).toBe('Testing InputError Message');
        });

        it('should render correctly with a Label', () => {
            const label = <NumberInput {...REQUIRED_PROPS} label={OPTIONAL_PROPS.label} />;
            const numberInputComponent = mount(label);
            expect(
                numberInputComponent
                    .find('.InputLabel')
                    .at(0)
                    .text(),
            ).toBe('Testing Label');
        });
    });
});
