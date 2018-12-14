import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { lorem } from 'faker';
import sample from 'lodash/sample';
import { allowedColors, Badge } from './Badge';
import '../../../config/tests/setup';

describe('Badge', () => {
    it('should render correctly', () => {
        const badge = renderer.create(<Badge />).toJSON();
        expect(badge).toMatchSnapshot();
    });
    it('should render a Badge with default props', () => {
        const item = shallow(<Badge />);
        expect(item.hasClass('Badge')).toEqual(true);
        expect(item.hasClass('white')).toEqual(true);
        expect(item.hasClass('sm')).toEqual(true);
        expect(item.find(FontAwesomeIcon).length).toEqual(0);
        expect(item.text()).toEqual('');
    });
    it('should render a Badge with a given color', () => {
        const color = sample(allowedColors);
        const item = shallow(<Badge color={color} />);
        expect(item.hasClass(color)).toEqual(true);
    });
    it('should render a Badge with a given size', () => {
        const item = shallow(<Badge size="xs" />);
        expect(item.hasClass('xs')).toEqual(true);
    });
    it('should render a Badge with a given icon', () => {
        const icon = <FontAwesomeIcon icon={faDownload} />;
        const item = shallow(<Badge icon={icon} />);
        expect(item.find(FontAwesomeIcon).length).toEqual(1);
    });
    it('should render a Badge with given text', () => {
        const text = lorem.word();
        const item = shallow(<Badge text={text} />);
        expect(item.text()).toEqual(text);
    });
});
