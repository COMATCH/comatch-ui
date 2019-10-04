import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import noop from 'lodash/noop';
import { PasswordInput } from './PasswordInput';
import '../../../config/tests/setup';

describe('PasswordInput tests', () => {
    const REQUIRED_PROPS = {
        name: 'field',
        onChange: jest.fn(),
    };

    const OPTIONAL_PROPS = {
        'aria-hidden': true,
        focusable: false,
        'data-prefix': 'fas',
        'data-icon': 'eye-slash',
        d: 'M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 ' +
            '32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 ' +
            '397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 ' +
            '32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 ' +
            '3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 ' +
            '22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 ' +
            '416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 ' +
            '10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z',
        id: 'id_123123',
        autoComplete: null,
        className: 'TextInput__input',
        disabled: null,
        max: null,
        maxLength: null,
        min: null,
        onBlur: noop,
        onChange: noop,
        onClick: noop,
        onFocus: noop,
        placeholder: 'placeholder',
        type: 'password',
        value: 'value',
        role: 'img',
        style: 'style',
        viewBox: '0 0 640 512',
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'fill',
    };

    it('should render and matched values in snapshot', () => {
        const passwordInputComponent = renderer.create(<PasswordInput {...REQUIRED_PROPS}/>).toJSON();
        expect(passwordInputComponent).toMatchSnapshot();
    });

    it('should render correctly with only required props', () => {
        const props = {
            ...REQUIRED_PROPS,
            ...OPTIONAL_PROPS,
        };
        const passwordInputComponent = mount(<PasswordInput {...props} />);
        expect(passwordInputComponent.prop('className')).toEqual(props.className);
        expect(passwordInputComponent.prop('id')).toEqual(props.id);
        expect(passwordInputComponent.prop('autoComplete')).toEqual(props.autoComplete);
        expect(passwordInputComponent.prop('disabled')).toEqual(props.disabled);
        expect(passwordInputComponent.prop('max')).toEqual(props.max);
        expect(passwordInputComponent.prop('maxLength')).toEqual(props.maxLength);
        expect(passwordInputComponent.prop('min')).toEqual(props.min);
        expect(passwordInputComponent.prop('name')).toEqual(props.name);
        expect(passwordInputComponent.prop('onBlur')).toEqual(props.onBlur);
        expect(passwordInputComponent.prop('onChange')).toEqual(props.onChange);
        expect(passwordInputComponent.prop('onClick')).toEqual(props.onClick);
        expect(passwordInputComponent.prop('onFocus')).toEqual(props.onFocus);
        expect(passwordInputComponent.prop('placeholder')).toEqual(props.placeholder);
        expect(passwordInputComponent.prop('type')).toEqual(props.type);
        expect(passwordInputComponent.prop('value')).toEqual(props.value);
        expect(passwordInputComponent.prop('aria-hidden')).toEqual(props['aria-hidden']);
        expect(passwordInputComponent.prop('data-icon')).toEqual(props['data-icon']);
        expect(passwordInputComponent.prop('data-prefix')).toEqual(props['data-prefix']);
        expect(passwordInputComponent.prop('focusable')).toEqual(props.focusable);
        expect(passwordInputComponent.prop('role')).toEqual(props.role);
        expect(passwordInputComponent.prop('style')).toEqual(props.style);
        expect(passwordInputComponent.prop('viewBox')).toEqual(props.viewBox);
        expect(passwordInputComponent.prop('xmlns')).toEqual(props.xmlns);
        expect(passwordInputComponent.prop('d')).toEqual(props.d);
        expect(passwordInputComponent.prop('fill')).toEqual(props.fill);

    });

    describe('simulate `click` on hide `eye` icon', () => {
        const props = {
            ...REQUIRED_PROPS,
            ...OPTIONAL_PROPS,
        };
        it('should display certain DOM elements before and after unhiding', () => {
            const passwordInputComponent = mount(<PasswordInput {...props}/>);
            const itemListBefore = passwordInputComponent.find('div').find('span').find('svg');

            // hiding
            expect(passwordInputComponent.find('div').find('input').props().type).toEqual('password');
            expect(itemListBefore.props()['data-icon']).toEqual('eye-slash');
            expect(itemListBefore.hasClass('svg-inline--fa fa-eye-slash fa-w-20 ')).toBe(true);

            expect(passwordInputComponent.find('.TextInput__icon.clickable').simulate('click'));
            // after unhiding
            const itemListAfter = passwordInputComponent.find('div').find('span').find('svg');
            expect(passwordInputComponent.find('div').find('input').props().type).toEqual('text');
            expect(itemListAfter.props()['data-icon']).toEqual('eye');
            expect(itemListAfter.props()['data-icon']).toEqual('eye');
            expect(itemListAfter.hasClass('svg-inline--fa fa-eye fa-w-18 ')).toBe(true);
        });
    });

    describe('verifying the HTML structure', () => {
        const props = {
            ...REQUIRED_PROPS,
            ...OPTIONAL_PROPS,
        };
        it('should render certain nodes/dom elements', () => {
            const passwordInputComponent = mount(<PasswordInput {...props} />);
            expect(passwordInputComponent).toHaveLength(1);
            expect(passwordInputComponent.children()).toHaveLength(1);
            expect(passwordInputComponent.find('div')
                .hasClass('Input TextInput PasswordInput block with-icon'))
                .toBe(true);
            expect(passwordInputComponent.find('div').find('input')).toHaveLength(1);
            expect(passwordInputComponent.find('div').find('input').hasClass('TextInput__input')).toBe(true);
            expect(passwordInputComponent.find('div').find('input').props().type).toEqual(props.type);
            expect(passwordInputComponent.find('div').find('input').props().name).toEqual(props.name);
            expect(passwordInputComponent.find('div').find('input').props().placeholder).toEqual(props.placeholder);

            expect(passwordInputComponent.find('div').find('span')).toHaveLength(1);
            expect(passwordInputComponent.find('div').find('span').hasClass('TextInput__icon clickable')).toBe(true);

            const itemList = passwordInputComponent.find('div').find('span').find('svg');
            expect(itemList).toHaveLength(1);
            expect(itemList.hasClass('svg-inline--fa fa-eye-slash fa-w-20')).toBe(true);

            expect(itemList.find('path')).toHaveLength(1);
            expect(itemList.find('path').props().fill).toEqual('currentColor');
            expect(itemList.find('path').props().d).toEqual(props.d);
        });
    });
});
