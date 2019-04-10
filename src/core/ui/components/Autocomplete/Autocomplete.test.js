import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import Select2 from 'react-select';
import { Autocomplete } from './Autocomplete';
import { InputError } from '../InputError';
import { InputLabel } from '../InputLabel';
import '../../../config/tests/setup';

describe('Autocomplete', () => {
    const DEFAULT_IT_MESSAGE = 'should render an Autocomplete';
    const DEFAULT_PROPS = {
        inputValue: 'test',
        name: 'testing-autocomplete',
        onInputChange: jest.fn(),
        options: [],
    };

    it(DEFAULT_IT_MESSAGE, () => {
        const autocomplete = renderer.create(<Autocomplete {...DEFAULT_PROPS} />).toJSON();
        expect(autocomplete).toMatchSnapshot();
    });

    it(`${DEFAULT_IT_MESSAGE} with default props`, () => {
        const item = shallow(<Autocomplete {...DEFAULT_PROPS} />);

        // Container's classes:
        expect(item.hasClass('Autocomplete')).toBeTruthy();
        expect(item.hasClass('block')).toBeTruthy();
        expect(item.hasClass('Input')).toBeTruthy();

        // React-Select's existance & classes:
        expect(item.find('.Autocomplete__input')).toBeTruthy();
    });

    it(`${DEFAULT_IT_MESSAGE} with an underlying react-select instance`, () => {
        const item = mount(<Autocomplete {...DEFAULT_PROPS} />);

        expect(item.contains(Select2)).toBeTruthy();
    });

    it(`${DEFAULT_IT_MESSAGE} with an InputLabel`, () => {
        const item = mount(<Autocomplete {...DEFAULT_PROPS} label="Testing Label" />);

        expect(item.contains(InputLabel)).toBeTruthy();
    });

    it(`${DEFAULT_IT_MESSAGE} with an InputError`, () => {
        const item = mount(<Autocomplete {...DEFAULT_PROPS} inputError="Testing Error" />);

        expect(item.contains(InputError)).toBeTruthy();
    });

    it(`${DEFAULT_IT_MESSAGE} with proper node structure - e.g. InputLabel, ReactSelect, InputError`, () => {
        const props = {
            ...DEFAULT_PROPS,
            inputError:' Test error',
            label: 'Test label',
        };
        const item = mount(<Autocomplete {...props} />);

        expect(item.contains(InputLabel)).toBeTruthy();
        expect(item.contains(Select2)).toBeTruthy();
        expect(item.contains(InputError)).toBeTruthy();
    });

    it(`${DEFAULT_IT_MESSAGE} with properly propagated options - react-select with options`, () => {
        const props = {
            ...DEFAULT_PROPS,
            options: [
                { label: 'Test', value: 'Test' },
            ],
        };
        const item = mount(<Autocomplete {...props} />);
        const underlyingSelect = item.find(Select2);
        const { inputValue, options } = underlyingSelect.props();

        expect(options).toEqual(props.options);
        expect(inputValue).toEqual(props.inputValue);
    });
});
