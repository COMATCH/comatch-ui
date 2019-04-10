import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import '../../../config/tests/setup';

import { FileInput } from './FileInput';

const mockFunction = jest.fn();

const requiredProps = {
    accept: '.json',
    buttonText: 'Button Text',
    onChange: mockFunction,
};

const props = {
    ...requiredProps,
    name: 'Name',
    multiple: true,
};

const acceptArray = ['application/pdf', 'image/*'];

describe('FileInput', () => {
    it('should render correctly', () => {
        const wrapper = renderer.create(<FileInput {...requiredProps} />).toJSON();

        expect(wrapper).toMatchSnapshot();
    });

    it('should render with default props', () => {
        const wrapper = mount(<FileInput {...requiredProps} />);

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
            const wrapper = mount(<FileInput {...requiredProps} accept={acceptArray} />);
            const input = wrapper.find('input');
            expect(input.prop('accept')).toEqual('application/pdf,image/*');
            expect(typeof input.prop('accept')).toEqual('string');
        });
    });
});
