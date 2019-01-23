import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import noop from 'lodash/noop';
import { Button } from './Button';
import '../../../config/tests/setup';

describe('Button', () => {
    it('should render the default button correctly', () => {
        const button = renderer.create(<Button />).toJSON();
        expect(button).toMatchSnapshot();
    });

    it('should render the ghost button correctly', () => {
        const button = renderer.create(<Button ghost={true} />).toJSON();
        expect(button).toMatchSnapshot();
    });

    it('should render the disabled button correctly', () => {
        const button = renderer.create(<Button disabled={true} />).toJSON();
        expect(button).toMatchSnapshot();
    });

    it('should render the ghost and disabled button correctly', () => {
        const button = renderer.create(<Button ghost={true} disabled={true} />).toJSON();
        expect(button).toMatchSnapshot();
    });

    it('should have the correct default props', () => {
        const button = mount(<Button />);
        expect(button.prop('className')).toEqual('');
        expect(button.prop('disabled')).toEqual(false);
        expect(button.prop('ghost')).toEqual(false);
        expect(button.prop('href')).toEqual('');
        expect(button.prop('id')).toEqual(null);
        expect(button.prop('icon')).toEqual(null);
        expect(button.prop('iconAfterText')).toEqual(false);
        expect(button.prop('onClick')).toEqual(noop);
        expect(button.prop('target')).toEqual(null);
        expect(button.prop('text')).toEqual('');
        expect(button.prop('type')).toEqual('button');
    });

    it('should have the correct passed props', () => {
        const mockFunction = jest.fn();
        const props = {
            className: 'test className',
            disabled: true,
            ghost: true,
            href: 'test href',
            id: 'test id',
            onClick: mockFunction,
            target: 'test target',
            text: 'test text',
            type: 'submit',
        };

        const button = mount(<Button {...props} />);
        expect(button.prop('className')).toEqual('test className');
        expect(button.prop('disabled')).toEqual(true);
        expect(button.prop('ghost')).toEqual(true);
        expect(button.prop('href')).toEqual('test href');
        expect(button.prop('id')).toEqual('test id');
        expect(button.prop('onClick')).toEqual(mockFunction);
        expect(button.prop('target')).toEqual('test target');
        expect(button.prop('text')).toEqual('test text');
        expect(button.prop('type')).toEqual('submit');
    });

    it('should render the text', () => {
        const props = {
            text: 'text',
        };
        const button = mount(<Button {...props} />);
        expect(button.find('span').text()).toEqual('text');
    });

    it('should render the icon', () => {
        const props = {
            icon: 'icon',
        };
        const button = mount(<Button {...props} />);
        expect(button.find('span').text()).toEqual('icon');
    });

    describe('when iconAfterText prop is default', () => {
        it('should render first the icon and then the text', () => {
            const props = {
                text: 'text',
                icon: 'icon',
            };
            const button = mount(<Button {...props} />);
            expect(button.find('span').text()).toEqual('icontext');
        });
    });

    describe('when iconAfterText prop is false', () => {
        it('should render first the icon and then the text', () => {
            const props = {
                icon: 'icon',
                iconAfterText: false,
                text: 'text',
            };
            const button = mount(<Button {...props} />);
            expect(button.find('span').text()).toEqual('icontext');
        });
    });

    describe('when iconAfterText prop is true', () => {
        it('should render first the text and then the icon', () => {
            const props = {
                icon: 'icon',
                iconAfterText: true,
                text: 'text',
            };
            const button = mount(<Button {...props} />);
            expect(button.find('span').text()).toEqual('texticon');
        });
    });

    describe('when iconAfterText prop is true', () => {
        it('should render first the text and then the icon', () => {
            const props = {
                icon: 'icon',
                iconAfterText: true,
                text: 'text',
            };
            const button = mount(<Button {...props} />);
            expect(button.find('span').text()).toEqual('texticon');
        });
    });

    describe('when href prop is empty string', () => {
        it('should render a button element', () => {
            const button = mount(<Button />);
            expect(button.find('button').exists()).toBe(true);
        });

        describe('and disabled prop is false', () => {
            describe('and the button is clicked', () => {
                it('should run the passed onClick function', () => {
                    const mockFunction = jest.fn();
                    const button = mount(<Button onClick={mockFunction} />);
                    button.find('button').simulate('click');
                    expect(mockFunction.mock.calls.length).toEqual(1);
                });
            });
        });

        describe('and disabled prop is true', () => {
            describe('and the button is clicked', () => {
                it('should not run the passed onClick function', () => {
                    const mockFunction = jest.fn();
                    const button = mount(<Button disabled={true} onClick={mockFunction} />);
                    button.find('button').simulate('click');
                    expect(mockFunction.mock.calls.length).toEqual(0);
                });
            });
        });
    });

    describe('when href prop is a string other than an empty string', () => {
        it('should render an anchor element', () => {
            const props = {
                href: 'test href',
                iconAfterText: true,
            };
            const button = mount(<Button {...props} />);
            expect(button.find('a').exists()).toBe(true);
        });

        describe('and disabled prop is false', () => {
            describe('and the button is clicked', () => {
                it('should run the passed onClick function', () => {
                    const mockFunction = jest.fn();
                    const button = mount(<Button onClick={mockFunction} />);
                    button.find('button').simulate('click');
                    expect(mockFunction.mock.calls.length).toEqual(1);
                });
            });
        });

        describe('and disabled prop is true', () => {
            describe('and the button is clicked', () => {
                it('should not run the passed onClick function', () => {
                    const mockFunction = jest.fn();
                    const button = mount(<Button disabled={true} onClick={mockFunction} />);
                    button.find('button').simulate('click');
                    expect(mockFunction.mock.calls.length).toEqual(0);
                });
            });
        });
    });
});
