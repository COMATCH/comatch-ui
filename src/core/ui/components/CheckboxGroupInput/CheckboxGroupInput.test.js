import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { CheckboxGroupInput } from './CheckboxGroupInput';
import '../../../config/tests/setup';

describe('CheckboxGroupInput', () => {
    const options = [{ value: 'option1', label: 'Option 1' }, { value: 'option2', label: 'Option 1' }];

    const optionsWithTitle = [
        {
            title: 'Category 1',
            options: [{ value: 'option1', label: 'Option 1' }, { value: 'option2', label: 'Option 1' }],
        },
    ];
    it('should render the options correctly', () => {
        const checkBoxGroup = renderer
            .create(<CheckboxGroupInput name="checkbox-sample-name" options={options} />)
            .toJSON();

        expect(checkBoxGroup).toMatchSnapshot();

        const checkBoxGroupOptionsWithTitles = renderer
            .create(<CheckboxGroupInput name="checkbox-sample-name" options={optionsWithTitle} />)
            .toJSON();
        expect(checkBoxGroupOptionsWithTitles).toMatchSnapshot();
    });

    it('should render with display inline correctly', () => {
        const checkBoxGroup = renderer
            .create(<CheckboxGroupInput name="checkbox-sample-name" options={options} display="inline" />)
            .toJSON();

        expect(checkBoxGroup).toMatchSnapshot();
    });

    it('should render with checkboxesPerRow correctly', () => {
        const checkBoxGroup = renderer
            .create(<CheckboxGroupInput name="checkbox-sample-name" options={options} checkboxesPerRow={2} />)
            .toJSON();

        expect(checkBoxGroup).toMatchSnapshot();
    });

    it('should render with label/title correctly', () => {
        const checkBoxGroup = renderer
            .create(<CheckboxGroupInput name="checkbox-sample-name" options={options} label="sample-label" />)
            .toJSON();

        expect(checkBoxGroup).toMatchSnapshot();

        const checkBoxGroupWithNodeTitle = renderer
            .create(
                <CheckboxGroupInput name="checkbox-sample-name" options={options} label={<span>sample-label</span>} />,
            )
            .toJSON();

        expect(checkBoxGroupWithNodeTitle).toMatchSnapshot();
    });

    it("should render with with label/title and required '*' correctly", () => {
        const checkBoxGroupWithNodeTitleAndRequired = renderer
            .create(
                <CheckboxGroupInput
                    name="checkbox-sample-name"
                    options={options}
                    label={<span>sample-label</span>}
                    required={true}
                />,
            )
            .toJSON();
        expect(checkBoxGroupWithNodeTitleAndRequired).toMatchSnapshot();
    });

    it('should render with inputError correctly', () => {
        const checkBoxGroup = renderer
            .create(<CheckboxGroupInput name="checkbox-sample-name" options={options} inputError="sample-inputError" />)
            .toJSON();

        expect(checkBoxGroup).toMatchSnapshot();

        const checkBoxGroupWithNodeInputError = renderer
            .create(<CheckboxGroupInput name="checkbox-sample-name" options={options} inputError="sample-inputError" />)
            .toJSON();

        expect(checkBoxGroupWithNodeInputError).toMatchSnapshot();
    });

    it('should handle the onChange correctly', () => {
        const mockFunction = jest.fn();

        const wrapper = mount(
            <CheckboxGroupInput name="checkbox-sample-name" options={options} onChange={mockFunction} />,
        );

        wrapper
            .find('input')
            .at(0)
            .simulate('change', { target: { checked: true } });
        wrapper
            .find('input')
            .at(1)
            .simulate('change', { target: { checked: true } });

        expect(mockFunction).toHaveBeenCalledTimes(2);
    });
});
