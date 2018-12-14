import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { lorem } from 'faker';
import { Alert, ALERT_TYPE } from './Alert';
import '../../../config/tests/setup';

describe('Alert', () => {
    it('should render correctly', () => {
        const alert = renderer.create(<Alert />).toJSON();
        expect(alert).toMatchSnapshot();
    });
    it('should render a Alert with default props', () => {
        const item = shallow(<Alert />);
        // should have default classes .Alert.primary.without-content
        expect(item.hasClass('Alert')).toEqual(true);
        expect(item.hasClass('info')).toEqual(true);
        expect(item.hasClass('box')).toEqual(true);
        expect(item.hasClass('with-icon')).toEqual(true);
    });
    it('should render a Alert with a message', () => {
        const word = lorem.word();
        const item = shallow(<Alert message={word} />);
        // should have a header
        expect(item.find('.Alert__message').text()).toEqual(word);
    });
    it('should render an inline Alert', () => {
        const item = shallow(<Alert display="inline" />);
        // should have default classes .Alert.primary.without-content
        expect(item.hasClass('Alert')).toEqual(true);
        expect(item.hasClass('info')).toEqual(true);
        expect(item.hasClass('inline')).toEqual(true);
        expect(item.hasClass('with-icon')).toEqual(true);
    });
    it('should render a notification Alert', () => {
        const item = shallow(<Alert display="notification" />);
        // should have default classes .Alert.primary.without-content
        expect(item.hasClass('Alert')).toEqual(true);
        expect(item.hasClass('info')).toEqual(true);
        expect(item.hasClass('notification')).toEqual(true);
        expect(item.hasClass('with-icon')).toEqual(true);
    });
    it('should render Alerts of different types (danger, success, info, warning)', () => {
        const itemInfo = shallow(<Alert type={ALERT_TYPE.INFO} />);
        const itemWarning = shallow(<Alert type={ALERT_TYPE.WARNING} />);
        const itemDanger = shallow(<Alert type={ALERT_TYPE.DANGER} />);
        const itemSuccess = shallow(<Alert type={ALERT_TYPE.SUCCESS} />);
        // should have default classes .Alert.primary.without-content
        expect(itemInfo.hasClass(ALERT_TYPE.INFO)).toEqual(true);
        expect(itemWarning.hasClass(ALERT_TYPE.WARNING)).toEqual(true);
        expect(itemDanger.hasClass(ALERT_TYPE.DANGER)).toEqual(true);
        expect(itemSuccess.hasClass(ALERT_TYPE.SUCCESS)).toEqual(true);
    });
});
