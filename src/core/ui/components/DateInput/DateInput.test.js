import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { lorem } from 'faker';
import moment from 'moment';
import noop from 'lodash/noop';
import '../../../config/tests/setup';

import { DateInput } from './DateInput';
import { InputLabel } from '../InputLabel';
import { InputError } from '../InputError';

describe('DateInput', () => {
    const REQUIRED_PROPS = {
        name: 'date-input-unit-test',
        locale: 'en',
        onChange: jest.fn(),
    };

    const OPTIONAL_PROPS = {
        dateFormat: 'yyyy.mm.dd',
        inputError: 'Testing InputError Message',
        label: 'Testing Label',
        value: moment('2019-01-01T10:00:00'),
        onClick: jest.fn(),
    };

    it('should render correctly', () => {
        const props = {
            ...REQUIRED_PROPS,
            value: moment('2019-02-08T10:00:00'),
        };

        const dateInputComponent = renderer.create(<DateInput {...props} />).toJSON();
        expect(dateInputComponent).toMatchSnapshot();
    });

    it('should render with default props', () => {
        const props = {
            ...REQUIRED_PROPS,
        };

        const dateInputComponent = mount(<DateInput {...props} />);

        // Required props:
        expect(dateInputComponent.prop('name')).toEqual(props.name);
        expect(dateInputComponent.prop('onChange')).toEqual(props.onChange);
        expect(dateInputComponent.prop('locale')).toEqual(props.locale);

        // Defaults:
        expect(dateInputComponent.prop('dateFormat')).toEqual('dd.mm.yyyy');
        expect(dateInputComponent.prop('inputError')).toEqual('');
        expect(dateInputComponent.prop('label')).toEqual('');
        expect(dateInputComponent.prop('onClick')).toEqual(noop);
        expect(dateInputComponent.prop('value') instanceof moment).toBeTruthy();
    });

    it('should render with custom optional props', () => {
        const props = {
            ...REQUIRED_PROPS,
            ...OPTIONAL_PROPS,
        };

        const dateInputComponent = mount(<DateInput {...props} />);

        // Required Props:
        expect(dateInputComponent.prop('name')).toEqual(props.name);
        expect(dateInputComponent.prop('onChange')).toEqual(props.onChange);

        // Optional Props:
        expect(dateInputComponent.prop('dateFormat')).toEqual(props.dateFormat);
        expect(dateInputComponent.prop('inputError')).toEqual(props.inputError);
        expect(dateInputComponent.prop('inputError')).toEqual(props.inputError);
        expect(dateInputComponent.prop('label')).toEqual(props.label);
        expect(dateInputComponent.prop('onClick')).toEqual(props.onClick);
    });

    it('should render correctly with a Label', () => {
        const inputWithLabel = (
            <DateInput {...REQUIRED_PROPS} value={moment('2019-02-08T10:00:00')} label={OPTIONAL_PROPS.label} />
        );
        const dateInputComponentWithLabel = renderer.create(inputWithLabel).toJSON();
        const mountedDateInput = mount(inputWithLabel);
        const dateInputContainerNode = mountedDateInput.children().at(0);

        expect(dateInputComponentWithLabel).toMatchSnapshot();
        expect(dateInputContainerNode.find(InputLabel).length).toBeGreaterThan(0);
    });

    it('should render correctly with an InputError', () => {
        const inputWithInputError = (
            <DateInput
                {...REQUIRED_PROPS}
                value={moment('2019-02-08T10:00:00')}
                inputError={OPTIONAL_PROPS.inputError}
            />
        );
        const mountedDateInput = mount(inputWithInputError);
        const dateInputContainerNode = mountedDateInput.children().at(0);
        const dateInputComponentWithInputError = renderer.create(inputWithInputError).toJSON();

        expect(dateInputComponentWithInputError).toMatchSnapshot();
        expect(dateInputContainerNode.find(InputError).length).toBeGreaterThan(0);
    });

    it('should throw a propType exception if value is truthy and not a moment or Date instance', () => {
        /* eslint-disable no-console */
        console.error = jest.fn();

        const props = {
            ...REQUIRED_PROPS,
        };

        mount(<DateInput {...props} value={lorem.word()} />);
        mount(<DateInput {...props} value={5} />);
        mount(<DateInput {...props} value={{}} />);

        expect(console.error).toHaveBeenCalledTimes(3);
        /* eslint-enable no-console */
    });

    it('should not throw a propType exception if a moment or Date instance or null is passed to value', () => {
        /* eslint-disable no-console */
        console.error = jest.fn();

        const props = {
            ...REQUIRED_PROPS,
        };

        mount(<DateInput {...props} value={moment()} />);
        mount(<DateInput {...props} value={new Date()} />);
        mount(<DateInput {...props} value={null} />);

        expect(console.error).toHaveBeenCalledTimes(0);
        /* eslint-enable no-console */
    });
});
