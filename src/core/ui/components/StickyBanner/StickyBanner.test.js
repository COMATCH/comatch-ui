import React from 'react';
import renderer from 'react-test-renderer';
import { lorem } from 'faker';
import { StickyBanner } from './StickyBanner';
import { shallow, mount } from 'enzyme';

import '../../../config/tests/setup';

describe('StickyBanner', () => {
    it('should render correctly', () => {
        const rendered = renderer.create(<StickyBanner />);
        expect(rendered.toJSON()).toMatchSnapshot();

        // already covered in the snapshot
        // const contentNode = rendered.root.findByProps({className: 'StickyBanner__content'});
        // expect(contentNode.props.className).toEqual('StickyBanner__content');
    });

    it('should render the child', () => {
        const className = lorem.word();
        const rendered = renderer.create(
            <StickyBanner>
                <div className={className}>
                </div>
            </StickyBanner>
        );
        const instance = rendered.root;
        const childNode = instance.findByProps({className});
        expect(childNode.props.className).toEqual(className);

        // const item = shallow(<StickyBanner />);
        // expect(item.hasClass('StickyBanner')).toEqual(true);
        // const node = item.find('.StickyBanner__content');
        // expect(node.length).toEqual(1);
    });

    it('should has animated class if scrollTopVisibilityThreshold passed with value', () => {
        const visibilityThreshold = 250;
        const rendered = renderer.create(
            <StickyBanner
                scrollTopVisibilityThreshold={visibilityThreshold}>
            </StickyBanner>
        );

        const instance = rendered.root;
        expect(instance.children[0].props.className).toEqual('StickyBanner animated');
    });

    it('should display custom class names if passed', () => {
        const className = lorem.word();
        const rendered = renderer.create(
            <StickyBanner
                className={className}>
            </StickyBanner>
        );

        const instance = rendered.root;
        expect(instance.children[0].props.className).toEqual(`StickyBanner ${className}`);
    });

    it('should be shown after the scroll pass the threshold', () => {
        const visibilityThreshold = 250;

        // mock addEventListener on document object
        const mapAdd = {};
        document.addEventListener = jest.fn((event, cb) => {
            mapAdd[event] = cb;
        });

        const wrapper = mount(<StickyBanner scrollTopVisibilityThreshold={visibilityThreshold} />);

        // simulate with value before the passed threshold
        const htmlEl = document.querySelector('html');
        htmlEl.scrollTop = (visibilityThreshold - 1);
        // fire scroll event
        mapAdd.scroll();

        wrapper.update();
        let component = wrapper.find('.StickyBanner');
        expect(document.addEventListener.mock.calls.length).toEqual(1);
        expect(component.prop('className')).toEqual('StickyBanner animated');

        // simulate with value on/after the passed threshold
        htmlEl.scrollTop = visibilityThreshold;
        // fire scroll event
        mapAdd.scroll();

        wrapper.update();
        component = wrapper.find('.StickyBanner');
        expect(component.prop('className')).toEqual('StickyBanner animated shown');

        wrapper.unmount();
    });

    it('should unregister the scroll event on componentWillUnmount', () => {
        // mock removeEventListener on document object
        const mapRemove = {};
        document.removeEventListener = jest.fn((event, cb) => {
            mapRemove[event] = cb;
        });

        // any non-zero value for scrollTopVisibilityThreshold is sufficient to attach the scroll event listener
        const wrapper = mount(<StickyBanner scrollTopVisibilityThreshold={123} />);

        wrapper.unmount();
        expect(document.removeEventListener.mock.calls.length).toEqual(1);
    });
});