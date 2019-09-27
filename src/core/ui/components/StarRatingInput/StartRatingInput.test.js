import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import noop from 'lodash/noop';
import { StarRatingInput } from './StarRatingInput';
import '../../../config/tests/setup';

describe('Start Rating Input test', () => {
    const REQUIRED_PROPS = {
        name: 'star',
        className: 'className',
        'data-value': 'className',
    };

    const OPTIONAL_PROPS = {
        className: 'className',
        'data-value': 'className',
        onMouseEnter: noop,
        onMouseLeave: noop,
        onChange: noop,
        type: 'radio',
        'aria-hidden': 'true',
        'data-icon': 'star',
        'data-prefix': 'far',
        focusable: false,
        role: 'img',
        style: 'style',
        viewBox: '0 0 576 512',
        xmlns: 'http://www.w3.org/2000/svg',
        d: 'M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 ' +
            '26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 ' +
            '105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z',
        fill: 'currentColor',
    };

    it('should render and assert snapshot', () => {
        const startRatingInputComponent = renderer.create(<StarRatingInput {...REQUIRED_PROPS} />).toJSON();
        expect(startRatingInputComponent).toMatchSnapshot();
    });

    it('should render correctly with only required props', () => {
        const props = {
            ...REQUIRED_PROPS,
            ...OPTIONAL_PROPS,
        };
        const startRatingInputComponent = mount(<StarRatingInput {...props} />);
        expect(startRatingInputComponent.prop('className')).toEqual(props.className);
        expect(startRatingInputComponent.prop('data-value')).toEqual(props['data-value']);
        expect(startRatingInputComponent.prop('onMouseEnter')).toEqual(props.onMouseEnter);
        expect(startRatingInputComponent.prop('onMouseLeave')).toEqual(props.onMouseLeave);
        expect(startRatingInputComponent.prop('name')).toEqual(props.name);
        expect(startRatingInputComponent.prop('onChange')).toEqual(props.onChange);
        expect(startRatingInputComponent.prop('type')).toEqual(props.type);
        expect(startRatingInputComponent.prop('value')).toEqual(0);
        expect(startRatingInputComponent.prop('aria-hidden')).toEqual(props['aria-hidden']);
        expect(startRatingInputComponent.prop('data-icon')).toEqual(props['data-icon']);
        expect(startRatingInputComponent.prop('data-prefix')).toEqual(props['data-prefix']);
        expect(startRatingInputComponent.prop('focusable')).toEqual(props.focusable);
        expect(startRatingInputComponent.prop('role')).toEqual(props.role);
        expect(startRatingInputComponent.prop('style')).toEqual(props.style);
        expect(startRatingInputComponent.prop('viewBox')).toEqual(props.viewBox);
        expect(startRatingInputComponent.prop('xmlns')).toEqual(props.xmlns);
        expect(startRatingInputComponent.prop('d')).toEqual(props.d);
        expect(startRatingInputComponent.prop('fill')).toEqual(props.fill);
    });

    describe('verifying the HTML structure', () => {
        const props = {
            ...REQUIRED_PROPS,
            ...OPTIONAL_PROPS,
        };
        it('should expect nodes/dom elements', () => {
            const startRatingInputComponent = mount(<StarRatingInput {...props} value={1.6}/>);
            expect(startRatingInputComponent).toHaveLength(1);
            expect(startRatingInputComponent.find('div')).toHaveLength(1);
            expect(startRatingInputComponent.find('div').hasClass('StarRatingInput')).toBe(true);
            expect(startRatingInputComponent.find('div').at(0).props()['data-value']).toEqual(1.6);

            const itemList = startRatingInputComponent.find('div').find('label');
            expect(itemList).toHaveLength(5);
            expect(itemList.find('input')).toHaveLength(5);

            expect(itemList.find('input').at(0).props().name).toEqual(props.name);
            expect(itemList.find('input').at(0).props().value).toEqual(1);

            expect(itemList.find('svg')).toHaveLength(5);
            expect(itemList.find('svg').at(0).hasClass('StarRatingInput__icon')).toBe(true);
            expect(itemList.find('svg').at(0).props()['aria-hidden']).toEqual(props['aria-hidden']);
            expect(itemList.find('svg').at(0).props()['data-icon']).toEqual(props['data-icon']);

            expect(itemList.find('svg').find('path')).toHaveLength(5);
            expect(itemList.find('svg').find('path').at(0).props().fill).toEqual('currentColor');
            expect(itemList.find('svg').find('path').at(0).props().d).toEqual(props.d);
        });

        it('should render `half star` correctly', () => {
            const startRatingInputComponent = mount(<StarRatingInput {...props} halfStars={true}/>);
            const itemList = startRatingInputComponent.find('div').find('label');
            expect(itemList.find('svg')).toHaveLength(10);
            expect(itemList.find('svg').at(0).hasClass('StarRatingInput__half-icon')).toBe(true);
            expect(itemList.find('svg').at(0).props()['data-icon']).toEqual('star-half');
        });

        it('should render without value in stars correctly', () => {
            const startRatingInputComponent = mount(<StarRatingInput {...props} value={0}/>);
            const itemList = startRatingInputComponent.find('div').find('label');
            expect(itemList.find('svg')).toHaveLength(5);
            expect(itemList.find('svg').at(0).hasClass('StarRatingInput__icon')).toBe(true);
            expect(itemList.find('svg').at(0).props()['data-icon']).toEqual('star');

            expect(startRatingInputComponent.find('div').at(0).props()['data-value']).toEqual(0);
        });
    });
    describe('simulate `handleMouseEnter` action', () => {
        it('should not fire handleMouseEnter()', () => {
            const props = {
                ...REQUIRED_PROPS,
                ...OPTIONAL_PROPS,
            };
            const startRatingInputComponent = mount(<StarRatingInput {...props}/>);
            const label = startRatingInputComponent.find('label').at(0);
            const spyMouseEnter = jest.spyOn(startRatingInputComponent.instance(), 'handleMouseEnter');

            label.simulate('mouseEnter', spyMouseEnter);
            expect(spyMouseEnter).not.toHaveBeenCalled();
        });
    });
});
