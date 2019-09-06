import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { Header } from './Header';
import { Button } from '../Button';
import { BACKGROUND_COLOR } from './config';
import '../../../config/tests/setup';

describe('Card.Header', () => {
    it('should render the default Header correctly', () => {
        const header = renderer.create(<Header>header</Header>).toJSON();
        expect(header).toMatchSnapshot();
    });

    it('should render a customized Header correctly', () => {
        const header = renderer
            .create(
                <Header
                    backgroundColor={BACKGROUND_COLOR.SECONDARY}
                    title="Header"
                    subtitle="Header subtitle"
                    controls={<Button>BTN</Button>}
                >
                    header
                </Header>,
            )
            .toJSON();
        expect(header).toMatchSnapshot();
    });

    it('should have the correct default props', () => {
        const header = mount(<Header />);
        expect(header.prop('backgroundColor')).toEqual('transparent');
        expect(header.prop('className')).toEqual(null);
        expect(header.prop('controls')).toEqual(null);
        expect(header.prop('id')).toEqual(null);
        expect(header.prop('title')).toEqual(null);
        expect(header.prop('titleOrientation')).toEqual('vertical');
        expect(header.prop('subtitle')).toEqual(null);
        expect(header.prop('wrap')).toEqual(false);
    });

    it('should have the correct nodes (corresponding to props)', () => {
        const emptyHeader = mount(<Header />);
        const defaultHeader = mount(<Header>header</Header>);
        const header = mount(
            <Header
                backgroundColor={BACKGROUND_COLOR.SECONDARY}
                title="Header"
                subtitle="Header subtitle"
                controls={<Button>BTN</Button>}
            >
                header
            </Header>,
        );

        // 1. Validate the props:
        expect(header.prop('backgroundColor')).toEqual('secondary');
        expect(header.prop('title')).toEqual('Header');
        expect(header.prop('subtitle')).toEqual('Header subtitle');
        expect(header.prop('controls')).toEqual(<Button>BTN</Button>);

        // 2. Validate the DOM elements:
        expect(header.find('.Splash.TitleAndSubtitle')).toBeTruthy();
        expect(header.find('.Children')).toBeTruthy();
        expect(header.find('.Controls')).toBeTruthy();

        expect(defaultHeader.find('.Splash.TitleAndSubtitle')).toBeTruthy();
        expect(defaultHeader.find('.Children')).toBeTruthy();
        expect(defaultHeader.find('.Controls')).toHaveLength(0);

        expect(emptyHeader.find('.Splash.TitleAndSubtitle')).toHaveLength(0);
        expect(emptyHeader.find('.Children')).toHaveLength(0);
        expect(emptyHeader.find('.Controls')).toHaveLength(0);
    });
});
