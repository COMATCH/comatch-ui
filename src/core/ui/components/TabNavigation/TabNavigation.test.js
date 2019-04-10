import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { TabNavigation } from './TabNavigation';
import '../../../config/tests/setup';

describe('TabNavigation', () => {

    // if no activeTabIndex passed the first tab should be active (covered by the snapshot)
    // should render each child in separate <li> element (covered by the snapshot)

    it('should render correctly', () => {
        const tabNavigation = renderer.create(
            <TabNavigation>
                <button>Tab 1</button>
                <button>Tab 2</button>
                <button>Tab 3</button>
            </TabNavigation>
        ).toJSON();
        expect(tabNavigation).toMatchSnapshot();
    });

    it('should render correctly with default activeTabIndex', () => {
        const tabNavigation = renderer.create(
            <TabNavigation activeTabIndex={2}>
                <button>Tab 1</button>
                <button>Tab 2</button>
                <button>Tab 3</button>
            </TabNavigation>
        ).toJSON();
        expect(tabNavigation).toMatchSnapshot();
    });

    it('should change the active tab on click', () => {
        const wrapper = mount(
            <TabNavigation>
                <button>Tab 1</button>
                <button>Tab 2</button>
                <button>Tab 3</button>
            </TabNavigation>
        );

        let secondElem = wrapper.find('.TabNavigation__list-item').at(2);
        secondElem.simulate('click');

        wrapper.update();
        secondElem = wrapper.find('.TabNavigation__list-item').at(2);

        expect(secondElem.prop('className')).toEqual('TabNavigation__list-item active');
    });
});
