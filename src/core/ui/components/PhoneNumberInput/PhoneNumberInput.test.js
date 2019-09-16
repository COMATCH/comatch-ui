import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import { lorem } from 'faker';
import noop from 'lodash/noop';
import { PhoneNumberInput } from './PhoneNumberInput';
import '../../../config/tests/setup';

describe('PhoneNumberInput tests', () => {
    const REQUIRED_PROPS = {
        name: 'prop name field',
        onChange: jest.fn(),
    };
    const OPTIONAL_PROPS = {
        id: lorem.word(),
        autoComplete: 'on',
        className: lorem.word(),
        disabled: false,
        max: 30,
        maxLength: 80,
        min: 11,
        onBlur: noop,
        onClick: noop,
        onFocus: noop,
        placeholder: 'Placeholder text',
        type: 'tel',
        value: 'Entered value text',
        inputError: 'Error text label',
        phoneNumber: +4915171993093,
        label: 'Label text',
    };

    it('should matched values in snapshot', () => {
        const phoneNumberInput = renderer.create(<PhoneNumberInput {...REQUIRED_PROPS} />).toJSON();
        expect(phoneNumberInput).toMatchSnapshot();
    });

    it('should render correctly with only required props', () => {
        const props = {
            ...REQUIRED_PROPS,
        };
        const phoneNumberInput = shallow(<PhoneNumberInput {...props} />);
        // Required props:
        expect(phoneNumberInput.prop('name')).toEqual(props.name);
        expect(phoneNumberInput.prop('onChange')).toEqual(props.onChange);
        // Defaults:
        expect(phoneNumberInput.prop('id')).toEqual(null);
        expect(phoneNumberInput.prop('autoComplete')).toEqual(null);
        expect(phoneNumberInput.prop('className')).toEqual(null);
        expect(phoneNumberInput.prop('disabled')).toEqual(null);
        expect(phoneNumberInput.prop('max')).toEqual(null);
        expect(phoneNumberInput.prop('maxLength')).toEqual(null);
        expect(phoneNumberInput.prop('min')).toEqual(null);
        expect(phoneNumberInput.prop('onBlur')).toEqual(noop);
        expect(phoneNumberInput.prop('onClick')).toEqual(noop);
        expect(phoneNumberInput.prop('onFocus')).toEqual(noop);
        expect(phoneNumberInput.prop('placeholder')).toEqual('');
        expect(phoneNumberInput.prop('type')).toEqual('tel');
        expect(phoneNumberInput.prop('value')).toEqual('');
    });

    it('should render correctly with optional props', () => {
        const props = {
            ...REQUIRED_PROPS,
            ...OPTIONAL_PROPS,
        };
        const phoneNumberInput = shallow(<PhoneNumberInput {...props} />);
        // Required props:
        expect(phoneNumberInput.prop('name')).toEqual(props.name);
        expect(phoneNumberInput.prop('onChange')).toEqual(props.onChange);
        // Defaults:
        expect(phoneNumberInput.prop('id')).toEqual(props.id);
        expect(phoneNumberInput.prop('autoComplete')).toEqual(props.autoComplete);
        expect(phoneNumberInput.prop('className')).toEqual(props.className);
        expect(phoneNumberInput.prop('disabled')).toEqual(props.disabled);
        expect(phoneNumberInput.prop('max')).toEqual(props.max);
        expect(phoneNumberInput.prop('maxLength')).toEqual(props.maxLength);
        expect(phoneNumberInput.prop('min')).toEqual(props.min);
        expect(phoneNumberInput.prop('onBlur')).toEqual(props.onBlur);
        expect(phoneNumberInput.prop('onClick')).toEqual(props.onClick);
        expect(phoneNumberInput.prop('onFocus')).toEqual(props.onFocus);
        expect(phoneNumberInput.prop('placeholder')).toEqual(props.placeholder);
        expect(phoneNumberInput.prop('type')).toEqual(props.type);
        expect(phoneNumberInput.prop('value')).toEqual(props.value);
    });

    describe('verifying the HTML structure', () => {
        const props = {
            ...REQUIRED_PROPS,
            ...OPTIONAL_PROPS,
        };
        it('should expect nodes/dom elements', () => {
            const phoneNumberInput = mount(<PhoneNumberInput {...props} />);
            expect(phoneNumberInput).toHaveLength(1);
            expect(phoneNumberInput.find('div')).toHaveLength(1);

            expect(phoneNumberInput.find('div').find('input')).toHaveLength(1);
            expect(phoneNumberInput.find('div').find('input').hasClass('TextInput__input')).toBe(true);
            expect(phoneNumberInput.find('div').find('input').at(0).prop('name')).toBe(props.name);
            expect(phoneNumberInput.find('div').find('input').at(0).prop('type')).toBe(props.type);
            expect(phoneNumberInput.find('div').find('input').at(0).prop('value')).toBe(props.value);
            expect(phoneNumberInput.find('div').find('input').at(0).prop('placeholder')).toBe(props.placeholder);

            expect(phoneNumberInput.find('div').find('label')).toHaveLength(1);
            expect(phoneNumberInput.find('div').find('label').hasClass('InputLabel')).toBe(true);
            expect(phoneNumberInput.find('div').find('label').text()).toEqual(props.label);

            expect(phoneNumberInput.find('div').find('span')).toHaveLength(1);
            expect(phoneNumberInput.find('div').find('span').hasClass('InputError')).toBe(true);
            expect(phoneNumberInput.find('div').find('span').text()).toEqual(props.inputError);
        });
    });
});
