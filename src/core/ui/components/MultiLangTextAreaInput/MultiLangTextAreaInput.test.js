import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { MultiLangTextAreaInput } from './MultiLangTextAreaInput';
import '../../../config/tests/setup';

describe('MultiLangTextAreaInput', () => {
    it('should render correctly', () => {
        const props = {
            activeLanguage: 'en',
            name: 'text-area-input',
            onChange: jest.fn(),
            value: [
                { lang: 'en', value: 'English name' },
                { lang: 'de', value: 'German name' },
                { lang: 'fr', value: 'French name' },
            ],
        };

        const multiLangTextAreaInput = renderer.create(<MultiLangTextAreaInput {...props} />).toJSON();

        expect(multiLangTextAreaInput).toMatchSnapshot();
    });

    it('should fire onChange when text area value changed', () => {
        const requiredProps = {
            activeLanguage: 'en',
            name: 'text-area-input',
            onChange: jest.fn(),
        };

        const wrapper = mount(<MultiLangTextAreaInput {...requiredProps} />);

        wrapper
            .find('textarea')
            .at(0)
            .simulate('change', {});
        expect(requiredProps.onChange).toHaveBeenCalledTimes(1);

        wrapper
            .find('textarea')
            .at(1)
            .simulate('change', {});
        expect(requiredProps.onChange).toHaveBeenCalledTimes(2);

        wrapper
            .find('textarea')
            .at(2)
            .simulate('change', {});
        expect(requiredProps.onChange).toHaveBeenCalledTimes(3);
    });
});
