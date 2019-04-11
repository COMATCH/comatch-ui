import React from 'react';
import renderer from 'react-test-renderer';
import { EmailInput } from './EmailInput';
import '../../../config/tests/setup';

describe('EmailInput', () => {
    it('should render correctly', () => {
        const mockFunction = jest.fn();

        const emailInput = renderer.create(
            <EmailInput name="email-name-sample" onChange={mockFunction}/>
        ).toJSON();

        expect(emailInput).toMatchSnapshot();
    });
});
