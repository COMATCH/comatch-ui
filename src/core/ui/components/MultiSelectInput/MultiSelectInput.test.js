import React from 'react';
import renderer from 'react-test-renderer';
import { MultiSelectInput } from './MultiSelectInput';
import '../../../config/tests/setup';

describe('MultiSelectInput', () => {
    it('should render correctly (without label)', () => {
        const props = {
            name: 'multi-select-input-name',
            options: [{ value: 'option-1', label: 'Option 1' }],
        };
        const multiSelectInput = renderer.create(<MultiSelectInput {...props} />).toJSON();

        expect(multiSelectInput).toMatchSnapshot();
    });

    it('should render correctly (with label)', () => {
        const props = {
            name: 'multi-select-input-name',
            options: [{ value: 'option-1', label: 'Option 1' }],
            label: 'multi-select-input-label',
        };

        const multiSelectInput = renderer.create(<MultiSelectInput {...props} />).toJSON();

        expect(multiSelectInput).toMatchSnapshot();
    });

    it('should render correctly (with label and required *)', () => {
        const props = {
            name: 'multi-select-input-name',
            options: [{ value: 'option-1', label: 'Option 1' }],
            label: 'multi-select-input-label',
            required: true,
        };

        const multiSelectInput = renderer.create(<MultiSelectInput {...props} />).toJSON();

        expect(multiSelectInput).toMatchSnapshot();
    });

    it('should render correctly (with inputError)', () => {
        const props = {
            name: 'multi-select-input-name',
            options: [{ value: 'option-1', label: 'Option 1' }],
            inputError: 'error-sample',
        };
        const multiSelectInput = renderer.create(<MultiSelectInput {...props} />).toJSON();

        expect(multiSelectInput).toMatchSnapshot();
    });
});
