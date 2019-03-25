import React from 'react';
import { create } from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import { InputLabel } from './InputLabel';
import '../../../config/tests/setup';

const text = 'A very random text';

describe('InputLabel', () => {
    it('should render correctly', () => {
        const inputLabel = create(<InputLabel text={text} />).toJSON();
        expect(inputLabel).toMatchSnapshot();
    });
    it('should render the InputLabel with a <span> tag', () => {
        const inputLabel = create(<InputLabel text={text} span />).toJSON();
        expect(inputLabel).toMatchSnapshot();
    });

    it('should render the component with text passed as props', () => {
        const item = shallow(<InputLabel text={text} />);
        expect(item.text()).toEqual(text);
    });

    it('should render default props if extra props are being passed', () => {
        const item = mount(<InputLabel text={text} />);
        expect(item.prop('htmlFor')).toEqual(null);
        expect(item.prop('id')).toEqual(null);
        expect(item.prop('span')).toEqual(false);
        expect(item.prop('className')).toEqual(null);
        expect(item.prop('required')).toEqual(false);
    });

    it('should render InputLabel as a default class', () => {
        const item = shallow(<InputLabel text={text} />);
        expect(item.hasClass('InputLabel')).toEqual(true);
    });
    it('should render InputLabel with extra classNames if passed by the props', () => {
        const item = shallow(<InputLabel text={text} />);
        const classNames = 'error with-border';
        item.setProps({ className: classNames });
        expect(item.hasClass(classNames)).toEqual(true);
    });
    it('should have asterisk after the text if the required prop is set to true', () => {
        const item = shallow(<InputLabel text={text} />);
        item.setProps({ required: true });
        expect(item.text()).toEqual(`${text}*`);
    });
    it('should render a <span> instead of <label> if span prop is set to true', () => {
        const item = mount(<InputLabel text={text} />);
        item.setProps({ span: true });
        expect(item.find('label').length).toEqual(0);
        expect(item.find('span').length).toEqual(1);
    });
    it('should set an id attribute if the id prop is given', () => {
        const item = shallow(<InputLabel text={text} />);
        const id = 'A very random id';
        item.setProps({ id });
        expect(item.prop('id')).toEqual(id);
    });
});
