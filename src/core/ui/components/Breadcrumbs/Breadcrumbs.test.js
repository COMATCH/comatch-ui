import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import { Breadcrumbs } from './Breadcrumbs';
import '../../../config/tests/setup';

describe('Breadcrumbs', () => {

    it('should render breadcrumbs correctly', () => {
        const breadcrumbs = renderer.create(<Breadcrumbs history={["Item 1", "Item 2"]} />).toJSON();
        expect(breadcrumbs).toMatchSnapshot();
    });

    it('should have the correct default props', () => {
        const breadcrumbs = mount(<Breadcrumbs />);
        expect(breadcrumbs.prop('history')).toEqual([]);
    });

    it('renders a list item', () => {
        const items = ["Item 1", "Item 2"];
        const wrapper = shallow(<Breadcrumbs history={items} />);

        expect(wrapper.contains(<li key='0'>Item 1</li >)).toBeTruthy();
    });
    
});
