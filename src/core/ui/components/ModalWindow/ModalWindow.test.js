import React from 'react';
import { mount } from 'enzyme';
import { lorem } from 'faker';

import { ModalWindow } from './ModalWindow';
import '../../../config/tests/setup';

describe('ModalExample', () => {
    let wrapper;
    let mountingDiv;

    beforeEach(() => {
        mountingDiv = document.createElement('div');
        document.body.appendChild(mountingDiv);
    });

    afterEach(() => {
        wrapper.detach();
        document.body.removeChild(mountingDiv);
    });

    it('should be closed if isOpen is falsy', () => {
        const mockCallback = jest.fn();
        const isOpen = false;
        wrapper = mount(
            <ModalWindow closeButtonText="Close" onClose={mockCallback} isOpen={isOpen} successButtonText="OK" />,
            { attachTo: mountingDiv },
        );

        expect(wrapper.find('.ModalWindow__overlay').length).toEqual(0);
    });

    it('should be opened when isOpen is truly', () => {
        const mockCallback = jest.fn();
        const isOpen = true;
        wrapper = mount(
            <ModalWindow closeButtonText="Close" onClose={mockCallback} isOpen={isOpen} successButtonText="OK" />,
            { attachTo: mountingDiv },
        );

        expect(wrapper.find('.ModalWindow__header').length).toEqual(1);
        expect(wrapper.find('.ModalWindow__header-title').length).toEqual(1);
        expect(wrapper.find('.ModalWindow__body').length).toEqual(1);
        expect(wrapper.find('.ModalWindow__footer').length).toEqual(1);
    });

    it('should call success/close callbacks when corresponding button clicked ', () => {
        const mockCloseCallback = jest.fn();
        const mockOpenCallback = jest.fn();
        const isOpen = true;

        wrapper = mount(
            <ModalWindow
                closeButtonText="Close"
                onClose={mockCloseCallback}
                onSuccess={mockOpenCallback}
                isOpen={isOpen}
                successButtonText="OK"
            />,
            { attachTo: mountingDiv },
        );

        wrapper
            .find('button')
            .at(0) // close button
            .simulate('click');

        wrapper
            .find('button')
            .at(1) // open button
            .simulate('click');

        wrapper.update();

        expect(mockCloseCallback).toHaveBeenCalled();
        expect(mockOpenCallback).toHaveBeenCalled();
    });

    it('should hide the header if hideHeader is true', () => {
        const mockCallback = jest.fn();
        const isOpen = true;
        wrapper = mount(
            <ModalWindow
                closeButtonText="Close"
                onClose={mockCallback}
                isOpen={isOpen}
                successButtonText="OK"
                hideHeader={true}
            />,
            { attachTo: mountingDiv },
        );

        expect(wrapper.find('.ModalWindow__header').length).toEqual(0);
    });

    it('should render the title correctly', () => {
        const mockCallback = jest.fn();
        const isOpen = true;
        const title = 'some-title-text';
        wrapper = mount(
            <ModalWindow
                closeButtonText="Close"
                onClose={mockCallback}
                isOpen={isOpen}
                successButtonText="OK"
                title={title}
            />,
            { attachTo: mountingDiv },
        );

        expect(wrapper.find('.ModalWindow__header-title').text()).toEqual(title);
    });

    it('should render children correctly', () => {
        const mockCallback = jest.fn();
        const isOpen = true;
        const className = lorem.word();
        wrapper = mount(
            <ModalWindow closeButtonText="Close" onClose={mockCallback} isOpen={isOpen} successButtonText="OK">
                <div className={className}>modal-content</div>
            </ModalWindow>,
            { attachTo: mountingDiv },
        );

        expect(wrapper.find(`.${className}`).text()).toEqual('modal-content');
    });

    it('should render footer children correctly', () => {
        const mockCallback = jest.fn();
        const isOpen = true;
        const className = lorem.word();
        const footer = <div className={className}>footer-content</div>;
        wrapper = mount(
            <ModalWindow
                closeButtonText="Close"
                onClose={mockCallback}
                isOpen={isOpen}
                successButtonText="OK"
                footerChildren={footer}
            />,
            { attachTo: mountingDiv },
        );

        expect(wrapper.find(`.${className}`).text()).toEqual('footer-content');
    });
});
