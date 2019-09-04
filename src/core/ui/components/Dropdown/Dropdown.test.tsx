import { Dropdown } from './Dropdown';
import React from 'react';
import { shallow } from 'enzyme';

describe('Dropdown', () => {
    it('should render without crashing', () => {
        shallow(<Dropdown />);
    });

    it('should have expected default props', () => {
        const component = shallow(<Dropdown />);

        expect(component.props()).toMatchObject({
            className: 'Dropdown',
            generateCss: undefined,
            generateControlCss: undefined,
            generateItemsCss: undefined,
        });
    });

    it('should have expected passed props', () => {
        const cssFunc = () => '';
        const component = shallow(
            <Dropdown
                id="Test"
                className="Test"
                generateCss={cssFunc}
                generateControlCss={cssFunc}
                generateItemsCss={cssFunc}
            />,
        );

        expect(component.props()).toMatchObject({
            id: 'Test',
            className: 'Dropdown Test',
            generateCss: cssFunc,
            generateControlCss: cssFunc,
            generateItemsCss: cssFunc,
        });
    });

    it('should have the expected control', () => {
        const control = <div id="control">The Control</div>;
        const component = shallow(<Dropdown>{control}</Dropdown>);

        expect(component.find('.Dropdown__Control')).toBeDefined();
        expect(component.find('.Dropdown__Control').find('#control')).toBeDefined();
    });

    it('should have the expected items', () => {
        const items = <div id="items">Items</div>;
        const component = shallow(<Dropdown items={items} />);

        expect(component.find('.Dropdown__Items')).toBeDefined();
        expect(component.find('.Dropdown__Items').find('#items')).toBeDefined();
    });
});
