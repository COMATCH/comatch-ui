import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import noop from 'lodash/noop';
import { CheckboxInput } from './CheckboxInput';
import '../../../config/tests/setup';

describe('CheckboxInput', () => {
    it('should render correctly', () => {
        const component = renderer.create(<CheckboxInput name="" />).toJSON();
        expect(component).toMatchSnapshot();
    });

    it('should have the correct default props', () => {
        const wrapper = mount(<CheckboxInput name="" />);
        expect(wrapper.prop('display')).toEqual('block');
        expect(wrapper.prop('id')).toEqual(null);
        expect(wrapper.prop('inputError')).toEqual('');
        expect(wrapper.prop('label')).toEqual('');
        expect(wrapper.prop('onChange')).toEqual(noop);
        expect(wrapper.prop('checked')).toEqual(null);
        expect(wrapper.prop('value')).toEqual('');
    });

    it('should have the correct passed props', () => {
        const mockFunction = jest.fn();
        const props = {
            display: 'inline',
            id: 'test id',
            inputError: 'test inputError',
            label: 'test label',
            name: 'test name',
            onChange: mockFunction,
            checked: true,
            value: 'test value',
        };

        const wrapper = mount(<CheckboxInput {...props} />);
        expect(wrapper.prop('display')).toEqual('inline');
        expect(wrapper.prop('id')).toEqual('test id');
        expect(wrapper.prop('inputError')).toEqual('test inputError');
        expect(wrapper.prop('label')).toEqual('test label');
        expect(wrapper.prop('name')).toEqual('test name');
        expect(wrapper.prop('onChange')).toEqual(mockFunction);
        expect(wrapper.prop('checked')).toEqual(true);
        expect(wrapper.prop('value')).toEqual('test value');
    });

    it('should render the label', () => {
        const props = {
            label: 'test label',
            name: 'test name',
        };

        const wrapper = mount(<CheckboxInput {...props} />);
        expect(wrapper.find('label').text()).toEqual('test label');
    });

    it('should render the input error', () => {
        const props = {
            inputError: 'test inputError',
            name: 'test name',
        };

        const wrapper = mount(<CheckboxInput {...props} />);
        expect(wrapper.find('InputError').text()).toEqual('test inputError');
    });

    it('should pass name, onChange, checked and value props to input element', () => {
        const mockFunction = jest.fn();
        const props = {
            name: 'test name',
            onChange: mockFunction,
            checked: true,
            value: 'test value',
        };

        const wrapper = mount(<CheckboxInput {...props} />);
        expect(wrapper.find('input').prop('name')).toEqual('test name');
        expect(wrapper.find('input').prop('onChange')).toEqual(mockFunction);
        expect(wrapper.find('input').prop('checked')).toEqual(true);
        expect(wrapper.find('input').prop('value')).toEqual('test value');
    });

    it('should run the onClick function', () => {
        const mockFunction = jest.fn();
        const props = {
            name: 'test name',
            onChange: mockFunction,
            checked: true,
            value: 'test value',
        };

        const wrapper = mount(<CheckboxInput {...props} />);
        wrapper.find('label').simulate('click');
        expect(mockFunction.mock.calls.length).toEqual(0);
    });
});
