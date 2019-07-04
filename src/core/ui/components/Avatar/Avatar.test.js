import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { Avatar } from './Avatar';
import { badgeBase64 } from './images/badgeBase64';
import { comatchLogoBase64 } from './images/comatchLogoBase64';
import '../../../config/tests/setup';

describe('Avatar', () => {
    it('should render the default Avatar correctly', () => {
        const avatar = renderer.create(<Avatar src={comatchLogoBase64} />).toJSON();
        expect(avatar).toMatchSnapshot();
    });

    it('should have the correct default props', () => {
        const avatar = mount(<Avatar />);
        expect(avatar.prop('badge')).toEqual(null);
        expect(avatar.prop('className')).toEqual(null);
        expect(avatar.prop('diameter')).toEqual(45);
        expect(avatar.prop('id')).toEqual(null);
        expect(avatar.prop('src')).toEqual(null);
        expect(avatar.prop('tooltip')).toEqual(null);
        expect(avatar.prop('tooltipPosition')).toEqual('bottom');
    });

    describe('creates the expected nodes/dom elements', () => {
        it('should create a <img /> with appropriate src', () => {
            const avatar = mount(<Avatar src={comatchLogoBase64} />);

            expect(avatar.prop('src')).toEqual(comatchLogoBase64);
            expect(avatar.find('img')).toBeTruthy();
            expect(avatar.find('img').prop('alt')).toEqual('Avatar');
            expect(avatar.find('img').prop('src')).toEqual(comatchLogoBase64);
        });

        it('should create a <StyledBadgeWrapper /> with appropriate src', () => {
            const badge = <img id="badge" src={badgeBase64} />;
            const avatar = mount(<Avatar badge={badge} src={comatchLogoBase64} />);

            expect(avatar.prop('badge')).toEqual(badge);
            expect(avatar.prop('src')).toEqual(comatchLogoBase64);
            expect(avatar.find('.Avatar__Badge')).toBeTruthy();
            expect(avatar.find('.Avatar__Badge #badge')).toBeTruthy();
        });

        it('should create a <Popover /> (tooltip) with appropriate src', () => {
            const avatar = mount(<Avatar tooltip="Tooltip text" src={comatchLogoBase64} />);

            expect(avatar.prop('tooltip')).toEqual('Tooltip text');
            expect(avatar.prop('src')).toEqual(comatchLogoBase64);
            expect(avatar.find('.Popover')).toBeTruthy();
        });
    });
});
