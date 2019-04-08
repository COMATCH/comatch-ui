import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import '../../../config/tests/setup';

import { MultiLangTextAreaInput } from './MultiLangTextAreaInput';

const mockFunction = jest.fn();

const props = {
    activeLanguage: 'en',
    name: 'name',
    onChange: mockFunction,
    value: [{ lang: 'en', value: 'value' }],
};

describe('MultiLangTextAreaInput', () => {
    it('should render without crashing', () => {
        const wrapper = renderer.create(<MultiLangTextAreaInput />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should render with default props', () => {
        const wrapper = mount(<MultiLangTextAreaInput />);
        expect(wrapper.prop('value')).toEqual([
            { lang: 'en', value: '' },
            { lang: 'de', value: '' },
            { lang: 'fr', value: '' },
        ]);
    });

    it('should render with custom props', () => {
        const wrapper = mount(<MultiLangTextAreaInput {...props} />);

        expect(wrapper.prop('activeLanguage')).toEqual('en');
        expect(wrapper.prop('name')).toEqual('name');
        expect(wrapper.prop('onChange')).toEqual(mockFunction);
        expect(wrapper.prop('value')).toEqual([{ lang: 'en', value: 'value' }]);
    });
});
