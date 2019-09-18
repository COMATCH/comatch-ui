import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import { lorem } from 'faker';
import { SectionHeader } from './SectionHeader';
import '../../../config/tests/setup';

describe('SectionHeader tests', () => {
    const DEFAULT_PROPS = {
        className: 'SectionHeader size-xl',
    };

    const OPTIONAL_PROPS = {
        className: lorem.word(),
        title: lorem.words(),
        children: ['btn1', 'btn2', 'btn3'],
    };

    describe('given render the default SectionHeader component', () => {
        it('should render and check snapshot correctly', () => {
            const sectionHeader = renderer.create(<SectionHeader />).toJSON();
            expect(sectionHeader).toMatchSnapshot();
        });
        it('should render the default SectionHeader without crashing', () => {
            const phoneNumberInput = renderer.create(<SectionHeader />).toJSON();
            expect(phoneNumberInput).toBeTruthy();
        });
    });

    describe('given default props', () => {
        it('should render className correctly', () => {
            const sectionHeader = mount(<SectionHeader />);
            expect(sectionHeader.prop('className')).toEqual(null);
        });
    });

    describe('given default props', () => {
        const props = {
            ...DEFAULT_PROPS,
        };
        it('should render correctly with default prop', () => {
            const sectionHeader = shallow(<SectionHeader />);
            expect(sectionHeader.prop('className')).toEqual(props.className);
        });
    });

    describe('given optional props', () => {
        const props = {
            ...OPTIONAL_PROPS,
        };
        it('should render header className with `size` correctly', () => {
            const sectionHeader = shallow(<SectionHeader className={props.className} />);
            expect(sectionHeader.prop('className')).toEqual(`SectionHeader ${props.className} size-xl`);
        });

        it('should render header className with `title` correctly', () => {
            const sectionHeader = shallow(<SectionHeader />);
            expect(
                sectionHeader
                    .find('span h1')
                    .at(0)
                    .props().className,
            ).toEqual('SectionHeader__title');
        });

        it('should render header className with `controls` correctly', () => {
            const sectionHeader = shallow(<SectionHeader />);
            expect(
                sectionHeader
                    .find('div')
                    .at(0)
                    .props().className,
            ).toEqual('SectionHeader__controls');
        });
    });

    describe('given title and children props', () => {
        const props = {
            ...OPTIONAL_PROPS,
        };
        it('should render `title` prop with text correctly', () => {
            const sectionHeader = mount(<SectionHeader title={props.title} />);
            expect(sectionHeader.find('span h1').text()).toEqual(props.title);
        });
        it('should render `children` props correctly', () => {
            const sectionHeader = shallow(<SectionHeader {...props} />);
            expect(
                sectionHeader
                    .find('div')
                    .at(0)
                    .props().children,
            ).toEqual(props.children);
        });
    });
});
