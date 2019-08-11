import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import { Navigation } from './Navigation';
import '../../../config/tests/setup';
import { ORIENTATION } from './config';

describe('Navigation', () => {
    const OPTIONAL_PROPS = {
        breakpoint: 'desktop',
        orientation: ORIENTATION.VERTICAL,
        id: 'test',
        className: 'Navigation WrapperClassName',
        items: ['Item 1', 'Item 2', 'Item 3'],
    };

    it('should render the default Navigation correctly', () => {
        const navigation = renderer.create(<Navigation />).toJSON();
        expect(navigation).toMatchSnapshot();
    });

    it('should have the correct default props', () => {
        const navigation = mount(<Navigation />);
        expect(navigation.prop('className')).toEqual('');
        expect(navigation.prop('breakpoint')).toEqual('desktop');
        expect(navigation.prop('items')).toEqual([]);
        expect(navigation.prop('orientation')).toEqual('horizontal');
    });

    describe('verifying the HTML structure', () => {
        const props = { ...OPTIONAL_PROPS };
        const navigation = mount(<Navigation {...props} />);

        it('should render with custom props', () => {
            expect(navigation.prop('breakpoint')).toEqual(props.breakpoint);
            expect(navigation.prop('orientation')).toEqual(props.orientation);
            expect(navigation.prop('id')).toEqual(props.id);
            expect(navigation.prop('className')).toEqual(props.className);
            expect(navigation.prop('items')).toEqual(props.items);
        });

        it('should create expected nodes/dom elements', () => {
            expect(navigation.find('ul')).toBeDefined();
            expect(navigation.find('li')).toHaveLength(3);
            expect(navigation.find('li').get(1).props.children).toEqual('Item 2');
        });

        it('should render orientation of different types (horizontal, vertical, responsive)', () => {
            const horizontal = shallow(<Navigation orientation={ORIENTATION.HORIZONTAL} />);
            const vertical = shallow(<Navigation orientation={ORIENTATION.VERTICAL} />);
            const responsive = shallow(<Navigation orientation={ORIENTATION.RESPONSIVE} />);
            expect(horizontal.hasClass(ORIENTATION.HORIZONTAL)).toEqual(true);
            expect(vertical.hasClass(ORIENTATION.VERTICAL)).toEqual(true);
            expect(responsive.hasClass(ORIENTATION.RESPONSIVE)).toEqual(true);
        });
    });
});
