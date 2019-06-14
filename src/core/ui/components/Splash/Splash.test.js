import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { Splash } from './Splash';
import '../../../config/tests/setup';

describe('Splash', () => {
    it('should render the default Splash correctly', () => {
        const splash = renderer.create(<Splash />).toJSON();
        expect(splash).toMatchSnapshot();
    });

    it('should render a Splash (with Title) correctly', () => {
        const splash = renderer.create(<Splash title="Title" />).toJSON();
        expect(splash).toMatchSnapshot();
    });

    it('should render a Splash (with Subtitle) correctly', () => {
        const splash = renderer.create(<Splash subtitle="Subtitle" />).toJSON();
        expect(splash).toMatchSnapshot();
    });

    it('should have the correct default props', () => {
        const splash = mount(<Splash />);
        expect(splash.prop('className')).toEqual(null);
        expect(splash.prop('id')).toEqual(null);
        expect(splash.prop('inline')).toEqual(false);
        expect(splash.prop('primary')).toEqual(false);
        expect(splash.prop('secondary')).toEqual(false);
        expect(splash.prop('subtitle')).toEqual(null);
        expect(splash.prop('title')).toEqual(null);
    });

    it('should have the correct passed props', () => {
        const splash = mount((
            <Splash
                className="className"
                id="id"
                inline
                primary
                secondary
                subtitle={<h2>Subtitle</h2>}
                title={<h1>Title</h1>}
            />
        ));

        expect(splash.prop('className')).toEqual('className');
        expect(splash.prop('id')).toEqual('id');
        expect(splash.prop('inline')).toEqual(true);
        expect(splash.prop('primary')).toEqual(true);
        expect(splash.prop('secondary')).toEqual(true);
        expect(splash.prop('subtitle')).toEqual(<h2>Subtitle</h2>);
        expect(splash.prop('title')).toEqual(<h1>Title</h1>);
    });
});
