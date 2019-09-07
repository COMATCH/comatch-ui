import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import noop from 'lodash/noop';
import { Paginator } from './Paginator';
import '../../../config/tests/setup';

describe('Paginator tests', () => {
    const OPTIONAL_PROPS = {
        breakLabel: '…',
        previousLabel: '«',
        nextLabel: '»',
        onClick: noop,
        'aria-disabled': 'true',
        className: 'Paginator',
        onKeyPress: noop,
        role: 'button',
    };

    it('should render and assert snapshot', () => {
        const paginator = renderer.create(<Paginator/>).toJSON();
        expect(paginator).toMatchSnapshot();
    });

    it('should render correctly with optional props', () => {
        const props = {
            ...OPTIONAL_PROPS,
        };
        const paginatorComponent = mount(<Paginator {...props}/>);
        expect(paginatorComponent.prop('className')).toEqual(props.className);
        expect(paginatorComponent.prop('aria-disabled')).toEqual(props['aria-disabled']);
        expect(paginatorComponent.prop('onClick')).toEqual(props.onClick);
        expect(paginatorComponent.prop('onKeyPress')).toEqual(props.onKeyPress);
        expect(paginatorComponent.prop('role')).toEqual(props.role);
        expect(paginatorComponent.prop('tabIndex')).toEqual(undefined);
    });

    describe('verifying the HTML structure', () => {
        const props = {
            ...OPTIONAL_PROPS,
        };
        it('should expect nodes/dom elements', () => {
            const sectionHeader = mount(<Paginator {...props} aria-disabled={true}/>);
            expect(sectionHeader).toHaveLength(1);
            expect(sectionHeader.find('div')).toHaveLength(1);
            expect(sectionHeader.find('ul').find('li')).toHaveLength(9);
            expect(sectionHeader.find('ul').find('li').find('a')).toHaveLength(9);
            expect(sectionHeader.find('div').hasClass('Paginator')).toBe(true);

            expect(sectionHeader.find('ul').find('li').at(0).hasClass('previous disabled')).toEqual(true);
            expect(sectionHeader.find('ul').find('li').at(8).hasClass('next')).toBe(true);
            expect(sectionHeader.find('ul').find('li').at(4).hasClass('break')).toBe(true);

            const listItem = sectionHeader.find('ul').find('li').find('a');
            expect(listItem.at(0).props()['aria-disabled']).toEqual('true');
            expect(listItem.at(0).text()).toEqual(props.previousLabel);
            expect(listItem.at(1).props()['aria-label']).toEqual('Page 1 is your current page');
            expect(listItem.at(1).props()['aria-current']).toEqual('page');
            expect(listItem.at(1).text()).toEqual('1');
            expect(listItem.at(2).props()['aria-label']).toEqual('Page 2');
            expect(listItem.at(2).text()).toEqual('2');
            expect(listItem.at(3).props()['aria-label'],).toEqual('Page 3');
            expect(listItem.at(3).text()).toEqual('3');
            expect(listItem.at(4).text()).toEqual(props.breakLabel);
            expect(listItem.at(5).props()['aria-label']).toEqual('Page 8');
            expect(listItem.at(5).text()).toEqual('8');
            expect(listItem.at(6).props()['aria-label']).toEqual('Page 9');
            expect(listItem.at(6).text()).toEqual('9');
            expect(listItem.at(7).props()['aria-label']).toEqual('Page 10');
            expect(listItem.at(7).text()).toEqual('10');
            expect(listItem.at(8).props()['aria-disabled']).toEqual('false');
            expect(listItem.at(8).text()).toEqual(props.nextLabel);
        });
    });
});
