import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { MultiLangTextInput } from './MultiLangTextInput';
import '../../../config/tests/setup';

describe('MultiLangTextInput', () => {
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

        const multiLangTextInput = renderer.create(<MultiLangTextInput {...props} />).toJSON();

        expect(multiLangTextInput).toMatchSnapshot();
    });

    it('should fire onChange when text area value changed', () => {
        const requiredProps = {
            activeLanguage: 'en',
            name: 'text-area-input',
            onChange: jest.fn(),
        };

        const wrapper = mount(<MultiLangTextInput {...requiredProps} />);

        wrapper
            .find('input')
            .at(0)
            .simulate('change', {});
        expect(requiredProps.onChange).toHaveBeenCalledTimes(1);

        wrapper
            .find('input')
            .at(1)
            .simulate('change', {});
        expect(requiredProps.onChange).toHaveBeenCalledTimes(2);

        wrapper
            .find('input')
            .at(2)
            .simulate('change', {});
        expect(requiredProps.onChange).toHaveBeenCalledTimes(3);
    });
});
