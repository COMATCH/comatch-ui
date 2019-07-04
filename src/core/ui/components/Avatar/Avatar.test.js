import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { Avatar } from './Avatar';
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

    // describe('Avatar_SIZES & Avatar_TYPES mapping', () => {
    //     [null, ...Object.values(TYPES)].forEach((type) => {
    //         [null, ...Object.values(SIZES)].forEach((size) => {
    //             const avatar = mount(
    //                 <Avatar className="Test" id="test" size={size} type={type}>
    //                     Hello world
    //                 </Avatar>,
    //             );

    //             expect(avatar.prop('className')).toEqual('Test');
    //             expect(avatar.prop('id')).toEqual('test');
    //             expect(avatar.prop('size')).toEqual(size);
    //             expect(avatar.prop('type')).toEqual(type);
    //         });
    //     });
    // });
});
