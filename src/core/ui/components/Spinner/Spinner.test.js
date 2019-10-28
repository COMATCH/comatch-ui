import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { Spinner } from './Spinner';
import '../../../config/tests/setup';
import { comatchLogoBase64 } from './images/comatchLogoBase64';

describe('Spinner tests', () => {
    const DEFAULT_PROPS = {
        imgSrc: comatchLogoBase64,
        size: 'page',
    };

    const OPTIONAL_PROPS = {
        className: 'Spinner',
        onChange: jest.fn(),
        alt: 'spinner icon',
    };

    it('should render and matched values in snapshot', () => {
        const spinnerComponent = renderer.create(<Spinner/>).toJSON();
        expect(spinnerComponent).toMatchSnapshot();
    });

    it('should render correctly with optional props', () => {
        const props = {
            ...OPTIONAL_PROPS,
            ...DEFAULT_PROPS,
        };
        const spinnerComponent = mount(<Spinner {...props} src={comatchLogoBase64}/>);
        expect(spinnerComponent.prop('className')).toEqual(props.className);
        expect(spinnerComponent.prop('onChange')).toEqual(props.onChange);
        expect(spinnerComponent.prop('src')).toEqual(comatchLogoBase64);
        expect(spinnerComponent.prop('alt')).toEqual(props.alt);
        expect(spinnerComponent.prop('imgSrc')).toEqual(comatchLogoBase64);
        expect(spinnerComponent.prop('size')).toEqual(props.size);
    });

    describe('verifying the HTML structure', () => {
        const props = {
            ...OPTIONAL_PROPS,
            ...DEFAULT_PROPS,
        };
        it('should render certain nodes/dom elements', () => {
            const spinnerComponent = mount(<Spinner {...props} />);
            expect(spinnerComponent).toHaveLength(1);

            expect(spinnerComponent.find('div')).toHaveLength(1);
            expect(spinnerComponent.find('div').hasClass('Spinner')).toBe(true);
            expect(spinnerComponent.find('div').props().style).toEqual({ height: 500 });

            expect(spinnerComponent.find('div').find('img')).toHaveLength(1);
            expect(spinnerComponent.find('div').find('img').props().alt).toEqual(props.alt);
        });

        it('should render with `filling a panel`', () => {
            const spinnerComponent = mount(<Spinner {...props} size={'panel'}/>);
            expect(spinnerComponent).toHaveLength(1);
            expect(spinnerComponent.find('div').props().style).toEqual({ 'height': 200 });
        });

        it('should render with `a small size`', () => {
            const spinnerComponent = mount(<Spinner {...props} size={80}/>);
            expect(spinnerComponent).toHaveLength(1);
            expect(spinnerComponent.find('div').props().style).toEqual({ 'height': 80 });
        });
    });
});
