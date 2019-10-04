import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import noop from 'lodash/noop';
import { RadioGroupInput } from './RadioGroupInput';
import '../../../config/tests/setup';

describe('RadioGroupInput tests', () => {
    const REQUIRED_PROPS = {
        name: 'some name',
        options: [
            { label: 'Apple', value: 'apple' },
            { label: 'Banana', value: 'banana' },
            { label: 'Peach', value: 'peach' },
        ],
    };

    const OPTIONAL_PROPS = {
        className: 'RadioInput block',
        id: null,
        checked: false,
        disabled: false,
        onChange: noop,
        type: 'radio',
        value: 'apple',
    };

    it('should render and assert snapshot', () => {
        const radioGroupInputComponent = renderer.create(<RadioGroupInput {...REQUIRED_PROPS} />).toJSON();
        expect(radioGroupInputComponent).toMatchSnapshot();
    });

    it('should render correctly with optional props', () => {
        const props = {
            ...OPTIONAL_PROPS,
            ...REQUIRED_PROPS,
        };
        const radioGroupInputComponent = mount(<RadioGroupInput {...props} />);
        expect(radioGroupInputComponent.prop('className')).toEqual(props.className);
        expect(radioGroupInputComponent.prop('id')).toEqual(props.id);
        expect(radioGroupInputComponent.prop('checked')).toEqual(props.checked);
        expect(radioGroupInputComponent.prop('disabled')).toEqual(props.disabled);
        expect(radioGroupInputComponent.prop('type')).toEqual(props.type);
        expect(radioGroupInputComponent.prop('value')).toEqual(props.value);
        expect(radioGroupInputComponent.prop('onChange')).toEqual(props.onChange);
    });

    it('should handle the onChange correctly', () => {
        const props = {
            ...OPTIONAL_PROPS,
            ...REQUIRED_PROPS,
        };
        const mockFunction = jest.fn();
        const wrapper = mount(<RadioGroupInput {...props} onChange={mockFunction} />);

        wrapper.find('input').at(0).simulate('change', { target: { checked: true } });
        wrapper.find('input').at(1).simulate('change', { target: { checked: true } });
        expect(mockFunction).toHaveBeenCalledTimes(2);
    });

    describe('verifying the HTML structure', () => {
        const props = {
            ...REQUIRED_PROPS,
        };
        it('should expect nodes/dom elements', () => {
            const radioGroupInputComponent = mount(<RadioGroupInput {...props} />);
            expect(radioGroupInputComponent).toHaveLength(1);
            expect(radioGroupInputComponent.find('div')).toHaveLength(7);
            expect(radioGroupInputComponent.find('div').at(0).hasClass('Input RadioGroupInput')).toBe(true);

            expect(radioGroupInputComponent.find('div').find('div')).toHaveLength(7);
            expect(radioGroupInputComponent.find('div').find('div').at(1).hasClass('RadioInput block')).toBe(true);
            expect(radioGroupInputComponent.find('div').find('div').find('label')).toHaveLength(3);
            expect(radioGroupInputComponent.find('div').find('div').find('label').find('input')).toHaveLength(3);

            const listItems = radioGroupInputComponent.find('div').find('div').find('label');
            expect(listItems.find('input').at(0).props().value).toEqual('apple');
            expect(listItems.find('input').at(0).props().name).toEqual('some name');

            expect(listItems.find('div')).toHaveLength(3);
            expect(listItems.find('div').at(0).hasClass('RadioInput__input')).toBe(true);
            expect(listItems.find('div').at(0).props().role).toEqual('radio');

            expect(listItems.find('span')).toHaveLength(3);
            expect(listItems.find('span').at(0).hasClass('InputLabel RadioInput__label')).toBe(true);
            expect(listItems.find('span').at(0).text()).toEqual('Apple');
        });

        it('should expect nodes/dom elements with `label`', () => {
            const radioGroupInputComponent = mount(<RadioGroupInput {...props} label={'Input label text'}/>);
            expect(radioGroupInputComponent.find('div').find('label').at(0).hasClass('InputLabel')).toBe(true);
            expect(radioGroupInputComponent.find('div').find('label').at(0).text()).toEqual('Input label text');
        });

        it('should expect nodes/dom elements with display `inline`', () => {
            const radioGroupInputComponent = mount(<RadioGroupInput {...props} display={'inline'}/>);
            expect(radioGroupInputComponent.find('div').at(0).hasClass('Input RadioGroupInput inline')).toBe(true);
            expect(radioGroupInputComponent.find('div').find('div').at(1).hasClass('RadioInput inline')).toBe(true);
        });

        it('should expect nodes/dom elements with `error label`', () => {
            const radioGroupInputComponent = mount(<RadioGroupInput {...props} inputError={'error message'}/>);
            expect(radioGroupInputComponent.find('div').find('span').at(3).hasClass('InputError')).toBe(true);
            expect(radioGroupInputComponent.find('div').find('span').at(3).text()).toEqual('error message');
        });
    });
});
