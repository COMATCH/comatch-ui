import React from 'react';
import renderer from 'react-test-renderer';
import noop from 'lodash/noop';
import { mount } from 'enzyme';
import { SelectInput } from './SelectInput';
import '../../../config/tests/setup';

describe('SelectInput tests', () => {
    const REQUIRED_PROPS = {
        name: 'fruits',
        options: [
            { value: 'apple', label: 'Apple' },
            { value: 'banana', label: 'Banana' },
            { value: 'peach', label: 'Peach' },
        ],
    };

    const OPTIONAL_PROPS = {
        className: 'SelectInput__input',
        disabled: false,
        name: 'fruits',
        onBlur: noop,
        onChange: noop,
        defaultValue: 'peach',
    };

    it('should render and check snapshot correctly', () => {
        const selectInputComponent = renderer.create(<SelectInput {...REQUIRED_PROPS} />).toJSON();
        expect(selectInputComponent).toMatchSnapshot();
    });

    it('should render correctly with optional props', () => {
        const props = {
            ...OPTIONAL_PROPS,
            ...REQUIRED_PROPS,
        };
        const selectInputComponent = mount(<SelectInput {...props} />);
        expect(selectInputComponent.prop('className')).toEqual(props.className);
        expect(selectInputComponent.prop('disabled')).toEqual(props.disabled);
        expect(selectInputComponent.prop('name')).toEqual(props.name);
        expect(selectInputComponent.prop('onBlur')).toEqual(props.onBlur);
        expect(selectInputComponent.prop('onChange')).toEqual(props.onChange);
        expect(selectInputComponent.prop('defaultValue')).toEqual(props.defaultValue);
    });

    describe('verifying the HTML structure', () => {
        const props = {
            ...REQUIRED_PROPS,
            ...OPTIONAL_PROPS,
        };

        it('should expect nodes/dom elements with `display block`', () => {
            const selectInputComponent = mount(<SelectInput {...props} />);
            expect(selectInputComponent).toHaveLength(1);
            expect(selectInputComponent.find('div')).toHaveLength(1);
            expect(selectInputComponent.find('div').hasClass('Input SelectInput block')).toBe(true);

            expect(selectInputComponent.find('div').find('select')).toHaveLength(1);
            expect(
                selectInputComponent
                    .find('div')
                    .find('select')
                    .hasClass(props.className),
            ).toBe(true);

            const listItems = selectInputComponent
                .find('div')
                .find('select')
                .find('option');
            expect(listItems).toHaveLength(3);

            expect(listItems.at(0).props().value).toEqual('apple');
            expect(listItems.at(0).text()).toEqual('Apple');

            expect(listItems.at(1).text()).toEqual('Banana');
            expect(listItems.at(1).props().value).toEqual('banana');

            expect(listItems.at(2).text()).toEqual('Peach');
            expect(listItems.at(2).props().value).toEqual('peach');
        });

        it('should expect nodes/dom elements with `display inline`', () => {
            const selectInputComponent = mount(<SelectInput {...props} display={'inline'} />);
            expect(selectInputComponent).toHaveLength(1);
            expect(selectInputComponent.find('div')).toHaveLength(1);
            expect(selectInputComponent.find('div').hasClass('Input SelectInput inline')).toBe(true);

            expect(selectInputComponent.find('div').find('select')).toHaveLength(1);
            expect(
                selectInputComponent
                    .find('div')
                    .find('select')
                    .hasClass(props.className),
            ).toBe(true);

            expect(
                selectInputComponent
                    .find('div')
                    .find('select')
                    .find('option'),
            ).toHaveLength(3);
            const listItems = selectInputComponent
                .find('div')
                .find('select')
                .find('option');

            expect(listItems.at(0).props().value).toEqual('apple');
            expect(listItems.at(0).text()).toEqual('Apple');

            expect(listItems.at(1).text()).toEqual('Banana');
            expect(listItems.at(1).props().value).toEqual('banana');

            expect(listItems.at(2).text()).toEqual('Peach');
            expect(listItems.at(2).props().value).toEqual('peach');
        });

        it('should expect nodes/dom elements with `label` and `required`', () => {
            const selectInputComponent = mount(<SelectInput {...props} required label={'Select your fruit'} />);
            expect(selectInputComponent.find('div').find('label')).toHaveLength(1);
            expect(
                selectInputComponent
                    .find('div')
                    .find('label')
                    .text(),
            ).toEqual('Select your fruit*');
        });

        it('should expect nodes/dom elements with `error`', () => {
            const selectInputComponent = mount(<SelectInput {...props} inputError={'Alarm! Meltdown Imminent!'} />);
            expect(selectInputComponent.find('div').find('span')).toHaveLength(1);
            expect(
                selectInputComponent
                    .find('div')
                    .find('span')
                    .text(),
            ).toEqual('Alarm! Meltdown Imminent!');
        });

        it('should expect nodes/dom elements with `disabled` value', () => {
            const selectInputComponent = mount(<SelectInput {...props} disabled />);
            expect(selectInputComponent.find('div')).toHaveLength(1);
            expect(selectInputComponent.find('div').hasClass('Input SelectInput block disabled')).toBe(true);
            expect(
                selectInputComponent
                    .find('div')
                    .find('select')
                    .props().disabled,
            ).toBe(true);
        });

        it('should render with `placeholder`', () => {
            const component = mount(<SelectInput {...REQUIRED_PROPS} placeholder="My placeholder" />);

            expect(component.find('.SelectInput__Placeholder')).toHaveLength(1);
            expect(component.find('.SelectInput__Placeholder').text()).toEqual('My placeholder');
        });
    });
});
