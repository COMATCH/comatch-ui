import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import { lorem } from 'faker';
import { SectionHeader } from './SectionHeader';
import '../../../config/tests/setup';

describe('SectionHeader tests', () => {
    const REQUIRED_PROPS = {
        className: 'SectionHeader size-xl',
    };

    const OPTIONAL_PROPS = {
        className: lorem.word(),
        title: lorem.word(),
        children: 'buttons',
    };

    it('should render and check snapshot correctly', () => {
        const sectionHeader = renderer.create(<SectionHeader />).toJSON();
        expect(sectionHeader).toMatchSnapshot();
    });

    it('should render className correctly without props', () => {
        const sectionHeader = mount(<SectionHeader />);
        expect(sectionHeader.prop('className')).toEqual(null);
    });

    it('should render className with `optional` prop correctly', () => {
        const sectionHeader = shallow(<SectionHeader className={OPTIONAL_PROPS.className} />);
        expect(sectionHeader.prop('className')).toEqual(`SectionHeader ${OPTIONAL_PROPS.className} size-xl`);
    });

    describe('verifying the HTML structure', () => {
        const props = {
            ...REQUIRED_PROPS,
            ...OPTIONAL_PROPS,
        };
        it('should expect nodes/dom elements', () => {
            const sectionHeader = mount(<SectionHeader {...props} />);
            expect(sectionHeader).toHaveLength(1);
            expect(sectionHeader.find('div')).toHaveLength(1);
            expect(sectionHeader.find('div').hasClass('SectionHeader__controls')).toBe(true);
            expect(sectionHeader.find('div').text()).toBe(props.children);

            expect(sectionHeader.find('span')).toHaveLength(1);
            const listItems = sectionHeader.find('span').find('h1');
            expect(listItems).toHaveLength(1);
            expect(listItems.hasClass('SectionHeader__title')).toBe(true);
            expect(listItems.text()).toBe(props.title);

            expect(sectionHeader.find('header')).toHaveLength(1);
            expect(sectionHeader.find('header').hasClass(`SectionHeader ${OPTIONAL_PROPS.className} size-xl`)).toBe(
                true,
            );
        });
    });
});
