import React from 'react';
import renderer from 'react-test-renderer';
import noop from 'lodash/noop';
import { mount } from 'enzyme';
import { lorem } from 'faker';
import { RadioBooleanInput } from './RadioBooleanInput';
import '../../../config/tests/setup';

describe('RadioBooleanInput tests', () => {
    const REQUIRED_PROPS = {
        name: 'name',
        falseLabel: 'no',
        trueLabel: 'yes',
    };

    const OPTIONAL_PROPS = {
        disabled: false,
        display: 'block',
        id: null,
        inputError: 'InputError',
        label: lorem.words(),
        onChange: noop,
        required: false,
        value: null,
    };

    it('should render and check snapshot', () => {
        const radioBooleanInput = renderer.create(<RadioBooleanInput {...REQUIRED_PROPS} />).toJSON();
        expect(radioBooleanInput).toMatchSnapshot();
    });

    it('should render with only required props', () => {
        const props = {
            ...REQUIRED_PROPS,
        };
        const radioBooleanInput = mount(<RadioBooleanInput {...props} />);
        // Required props:
        expect(radioBooleanInput.prop('name')).toEqual(props.name);
        expect(radioBooleanInput.prop('falseLabel')).toEqual(props.falseLabel);
        expect(radioBooleanInput.prop('trueLabel')).toEqual(props.trueLabel);
        // Defaults:
        expect(radioBooleanInput.prop('disabled')).toEqual(false);
        expect(radioBooleanInput.prop('display')).toEqual('block');
        expect(radioBooleanInput.prop('id')).toEqual(null);
        expect(radioBooleanInput.prop('inputError')).toEqual('');
        expect(radioBooleanInput.prop('label')).toEqual('');
        expect(radioBooleanInput.prop('onChange')).toEqual(noop);
        expect(radioBooleanInput.prop('required')).toEqual(false);
        expect(radioBooleanInput.prop('value')).toEqual(null);
    });

    it('should render correctly with optional props', () => {
        const props = {
            ...REQUIRED_PROPS,
            ...OPTIONAL_PROPS,
        };
        const radioBooleanInput = mount(<RadioBooleanInput {...props} />);
        // Required props:
        expect(radioBooleanInput.prop('name')).toEqual(props.name);
        expect(radioBooleanInput.prop('falseLabel')).toEqual(props.falseLabel);
        expect(radioBooleanInput.prop('trueLabel')).toEqual(props.trueLabel);
        // Defaults:
        expect(radioBooleanInput.prop('disabled')).toEqual(props.disabled);
        expect(radioBooleanInput.prop('display')).toEqual(props.display);
        expect(radioBooleanInput.prop('id')).toEqual(null);
        expect(radioBooleanInput.prop('inputError')).toEqual(props.inputError);
        expect(radioBooleanInput.prop('label')).toEqual(props.label);
        expect(radioBooleanInput.prop('onChange')).toEqual(noop);
        expect(radioBooleanInput.prop('required')).toEqual(props.required);
        expect(radioBooleanInput.prop('value')).toEqual(null);
    });

    describe('verifying the HTML structure', () => {
        const props = {
            ...REQUIRED_PROPS,
            ...OPTIONAL_PROPS,
        };
        it('should render with `trueLabel` text message', () => {
            const radioBooleanInput = mount(<RadioBooleanInput {...props} />);
            expect(radioBooleanInput);
        });

        it('should expect nodes/dom elements', () => {
            const radioBooleanInput = mount(<RadioBooleanInput {...props} />);
            expect(radioBooleanInput).toHaveLength(1);
            expect(radioBooleanInput.find('div')).toHaveLength(5);
            expect(radioBooleanInput.find('input')).toHaveLength(2);
            expect(radioBooleanInput.find('input').at(0).prop('value')).toBe(true);
            expect(radioBooleanInput.find('input').at(1).prop('value')).toBe(false);

            expect(radioBooleanInput.find('label')).toHaveLength(3);
            expect(radioBooleanInput.find('label').at(0).text()).toEqual(props.label);
            expect(radioBooleanInput.find('label').at(1).text()).toEqual(props.trueLabel);
            expect(radioBooleanInput.find('label').at(2).text()).toEqual(props.falseLabel);

            expect(radioBooleanInput.find('span')).toHaveLength(3);
            expect(radioBooleanInput.find('span').at(0).text()).toEqual(props.trueLabel);
            expect(radioBooleanInput.find('span').at(1).text()).toEqual(props.falseLabel);
            expect(radioBooleanInput.find('span').at(2).text()).toEqual(props.inputError);
        });
    });
});
