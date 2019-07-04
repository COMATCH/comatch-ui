import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { Breadcrumbs } from './Breadcrumbs';
import '../../../config/tests/setup';

describe('Breadcrumbs', () => {
    it('should render breadcrumbs correctly', () => {
        const breadcrumbs = renderer.create(<Breadcrumbs history={['Item 1', 'Item 2']} />).toJSON();
        expect(breadcrumbs).toMatchSnapshot();
    });

    it('should have the correct default props', () => {
        const breadcrumbs = mount(<Breadcrumbs />);
        expect(breadcrumbs.prop('id')).toEqual(null);
        expect(breadcrumbs.prop('className')).toEqual(null);
        expect(breadcrumbs.prop('history')).toEqual([]);
    });

    it('should render passed props correctly', () => {
        const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];
        const breadcrumbs = mount(<Breadcrumbs id="ID" className="IDK" history={items}></Breadcrumbs>);

        expect(breadcrumbs.prop('id')).toEqual('ID');
        expect(breadcrumbs.prop('className')).toEqual('IDK');
        expect(breadcrumbs.prop('history')).toEqual(items);
    });
});
