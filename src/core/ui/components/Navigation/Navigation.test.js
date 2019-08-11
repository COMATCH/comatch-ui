import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { Navigation } from './Navigation';
import '../../../config/tests/setup';

describe('Navigation', () => {
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
});
