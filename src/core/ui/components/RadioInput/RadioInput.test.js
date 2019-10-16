import React from 'react';
import renderer from 'react-test-renderer';
import '../../../config/tests/setup';
import { mount } from 'enzyme';
import { lorem } from 'faker';
import noop from 'lodash/noop';
import { RadioInput } from './RadioInput';

describe('RadioInput tests', () => {
    const REQUIRED_PROPS = {
        name: 'some name',
    };

    const OPTIONAL_PROPS = {
        className: 'RadioInput block',
        checked: null,
        disabled: false,
        id: lorem.word(),
        name: lorem.word(),
        onChange: jest.fn(),
        type: 'radio',
        value: lorem.word(),
        label: 'Label text'
    };

    it('should create and compare snapshot', () => {
        const radioInput = renderer.create(<RadioInput {...REQUIRED_PROPS} />).toJSON();
        expect(radioInput).toMatchSnapshot();
    });

    it('should render correctly with only required props', () => {
        const props = {
            ...REQUIRED_PROPS,
        };
        const radioInputComponent = mount(<RadioInput {...props} />);
        expect(radioInputComponent.prop('checked')).toEqual(null);
        expect(radioInputComponent.prop('disabled')).toEqual(false);
        expect(radioInputComponent.prop('display')).toEqual('block');
        expect(radioInputComponent.prop('id')).toEqual(null);
        expect(radioInputComponent.prop('inputError')).toEqual('');
        expect(radioInputComponent.prop('label')).toEqual('');
        expect(radioInputComponent.prop('onChange')).toEqual(noop);
        expect(radioInputComponent.prop('name')).toEqual('some name');
        expect(radioInputComponent.prop('value')).toEqual('');
    });

    it('should render correctly with optional props', () => {
        const props = {
            ...REQUIRED_PROPS,
            ...OPTIONAL_PROPS,
        };
        const radioInputComponent = mount(<RadioInput {...props} />);
        expect(radioInputComponent.prop('className')).toEqual(props.className);
        expect(radioInputComponent.prop('checked')).toEqual(props.checked);
        expect(radioInputComponent.prop('disabled')).toEqual(props.disabled);
        expect(radioInputComponent.prop('id')).toEqual(props.id);
        expect(radioInputComponent.prop('name')).toEqual(props.name);
        expect(radioInputComponent.prop('type')).toEqual(props.type);
        expect(radioInputComponent.prop('value')).toEqual(props.value);
    });

    describe('verifying the HTML structure', () => {
        const props = {
            ...REQUIRED_PROPS,
            ...OPTIONAL_PROPS,
        };
        it('should expect nodes/dom elements', () => {
            const radioInputComponent = mount(<RadioInput {...props} checked={true} />);
            expect(radioInputComponent).toHaveLength(1);
            expect(radioInputComponent.find('div')).toHaveLength(2);

            expect(radioInputComponent.find('div').find('label')).toHaveLength(1);

            expect(radioInputComponent.find('div').find('label').find('input')).toHaveLength(1);
            expect(radioInputComponent.find('div').find('label').find('input').at(0).prop('type')).toBe(props.type);
            expect(radioInputComponent.find('div').find('label').find('input').at(0).prop('checked')).toBe(true);

            expect(radioInputComponent.find('div').find('label').find('div').hasClass('RadioInput__input')).toBe(true);

            expect(radioInputComponent.find('div').find('span')).toHaveLength(1);
            expect(radioInputComponent.find('div').find('span').text()).toBe(props.label);
            expect(radioInputComponent.find('div').find('span').hasClass('InputLabel RadioInput__label')).toBe(true);
        });
    });
});
