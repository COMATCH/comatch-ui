import '../../../config/tests/setup';
import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { CharacterCount } from './CharacterCount';

describe('CharacterCount', () => {
    it('should render correctly', () => {
        const component = renderer.create(<CharacterCount currentCount={0} maxLength={2000} />).toJSON();
        expect(component).toMatchSnapshot();
    });

    it('should render with default props', () => {
        const component = mount(<CharacterCount currentCount={0} maxLength={2000} />);

        // Required props:
        expect(component.prop('currentCount')).toEqual(0);
        expect(component.prop('maxLength')).toEqual(2000);

        // Optional props:
        expect(component.prop('className')).toEqual('');
        expect(component.prop('label')).toEqual('Remaining characters:');
    });

    it('should render with passed props', () => {
        const component = mount(
            <CharacterCount className="MyClassName" currentCount={0} label="My Label:" maxLength={2000} />,
        );

        expect(component.prop('className')).toEqual('MyClassName');
        expect(component.prop('currentCount')).toEqual(0);
        expect(component.prop('label')).toEqual('My Label:');
        expect(component.prop('maxLength')).toEqual(2000);
    });

    it('should render with correct label/text', () => {
        const component = mount(
            <CharacterCount className="MyClassName" currentCount={1000} label="My Label:" maxLength={2000} />,
        );

        expect(component.text()).toEqual('My Label: 1000');
    });
});
