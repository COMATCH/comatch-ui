/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SlideDown } from 'react-slidedown';
import { lorem } from 'faker';
import { Panel } from './Panel';
import '../../../config/tests/setup';

describe('Panel', () => {
    it('should render a Panel with default props', () => {
        const item = shallow(<Panel />);
        // should have default classes .Panel.primary.without-content
        expect(item.hasClass('Panel')).to.equal(true);
        expect(item.hasClass('primary')).to.equal(true);
        expect(item.hasClass('without-content')).to.equal(true);
    });
    it('should render a Panel with a title', () => {
        const item = shallow(<Panel title="Title" />);
        // should have a header
        const header = item.find('header');
        expect(header.length).to.equal(1);
        expect(header.find('h4').length).to.equal(1); // should contain primary heading
    });
    it('should render a Panel with controls', () => {
        const item = shallow(<Panel title={lorem.word()} controls={<button>button</button>} />);
        expect(item.hasClass('with-controls')).to.equal(true);
        expect(item.find('.Panel__controls'));
    });
    it('should render a collapsible Panel that is not expanded', () => {
        const item = shallow(
            <Panel title={lorem.word()} collapsible>
                {lorem.word()}
            </Panel>,
        );
        expect(item.hasClass('collapsible')).to.equal(true);
        expect(item.find('.Panel__controls').find(FontAwesomeIcon).length).to.equal(1);

        const slideDown = item.find(SlideDown);
        expect(slideDown.length).to.equal(1);
        expect(slideDown.children().length).to.equal(0);
    });
    it('should render a collapsible Panel that is expanded', () => {
        const item = shallow(
            <Panel title={lorem.word()} collapsible expanded>
                {lorem.word()}
            </Panel>,
        );
        expect(item.hasClass('collapsible')).to.equal(true);
        expect(item.hasClass('expanded')).to.equal(true);

        const slideDown = item.find(SlideDown);
        expect(slideDown.length).to.equal(1);
        expect(slideDown.children().length).to.equal(1);
    });
    it('should render a disabled Panel', () => {
        const item = shallow(
            <Panel title={lorem.word()} disabled>
                {lorem.word()}
            </Panel>,
        );
        expect(item.hasClass('disabled')).to.equal(true);
        expect(item.find('.Panel__contents').length).to.equal(0); // contents shouldn't be rendered
    });
});
