import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import '../../../config/tests/setup';

import { FileInput } from './FileInput';
import { Button } from '../Button';

const mockFunction = jest.fn();

const props = {
    accept: '.json',
    buttonText: 'Button Text',
    onChange: mockFunction,
    name: 'Name',
    multiple: true,
};

const acceptArray = ['application/pdf', 'image/*'];

describe('FileInput', () => {
    it('should render correctly', () => {
        const wrapper = renderer.create(<FileInput />).toJSON();

        expect(wrapper).toMatchSnapshot();
    });

    it('should render with default props', () => {
        const wrapper = mount(<FileInput />);

        expect(wrapper.prop('name')).toEqual(null);
        expect(wrapper.prop('multiple')).toEqual(false);
    });

    it('should render with custom props', () => {
        const wrapper = mount(<FileInput {...props} />);

        expect(wrapper.prop('accept')).toEqual('.json');
        expect(wrapper.prop('buttonText')).toEqual('Button Text');
        expect(wrapper.prop('onChange')).toEqual(mockFunction);
        expect(wrapper.prop('name')).toEqual('Name');
        expect(wrapper.prop('multiple')).toEqual(true);
    });

    describe('generateAcceptValue()', () => {
        it('should return a string', () => {
            const wrapper = mount(<FileInput accept={acceptArray} />);
            const input = wrapper.find('input');
            expect(input.prop('accept')).toEqual('application/pdf,image/*');
            expect(typeof input.prop('accept')).toEqual('string');
        });
    });
});
