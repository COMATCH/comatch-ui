import React from 'react';
import renderer from 'react-test-renderer';
import { Separator } from './Separator';

describe('Separator', () => {
    it('should render correctly', () => {
        const separator = renderer.create(<Separator />).toJSON();
        expect(separator).toMatchSnapshot();
    });
});
