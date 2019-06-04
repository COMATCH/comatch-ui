import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { lorem } from 'faker';
import { Flyout } from './Flyout';
import '../../../config/tests/setup';

describe('Flyout', () => {
    it('should render correctly', () => {
        const flyout = renderer.create(
            <Flyout>
                <div>
                    some-content
                </div>
            </Flyout>
        ).toJSON();

        expect(flyout).toMatchSnapshot();
    });

    it('should render with button content correctly', () => {
        const flyout = renderer.create(
            <Flyout
                button={
                    <span>sample-button-text</span>
                }
            >
                <div>
                    some-content
                </div>
            </Flyout>
        ).toJSON();

        expect(flyout).toMatchSnapshot();
    });

    // jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;
    it('should open the flyout after click on the button', () => {

        // fake the timers inside the component
        jest.useFakeTimers();

        const wrapper = mount(
            <Flyout>
                <div>
                    some-content
                </div>
            </Flyout>
        );

        const button = wrapper.find('div.Flyout__button-wrapper');

        button.simulate('click');
        let flyoutContent = wrapper.find('div.Flyout__content-wrapper');
        expect(flyoutContent.length).toEqual(1);

        button.simulate('click');

        jest.runAllTimers();
        wrapper.update();

        flyoutContent = wrapper.find('div.Flyout__content-wrapper');
        expect(flyoutContent.length).toEqual(0);
    });

    it('should close the flyout when clicking on content wrapper itself', () => {

        const className = lorem.word();

        // fake the timers inside the component
        jest.useFakeTimers();

        const wrapper = mount(
            <Flyout>
                <div className={className}>
                    some-content
                </div>
            </Flyout>
        );

        // open the flyout, no need to assert here, already covered before.
        const button = wrapper.find('div.Flyout__button-wrapper');
        button.simulate('click');
        let flyoutContent = wrapper.find('div.Flyout__content-wrapper');

        // if the click was on a child elem, the close event should be ignored
        const content = wrapper.find(`div.${className}`);
        content.simulate('click');
        jest.runAllTimers();
        wrapper.update();

        flyoutContent = wrapper.find('div.Flyout__content-wrapper');
        expect(flyoutContent.length).toEqual(1);

        // now if the click on on the wrap itself, the flyout should be closed
        const contentWrap = wrapper.find('div.Flyout__content-wrapper');
        contentWrap.simulate('click');
        jest.runAllTimers();
        wrapper.update();

        flyoutContent = wrapper.find('div.Flyout__content-wrapper');
        expect(flyoutContent.length).toEqual(0);
    });
});
