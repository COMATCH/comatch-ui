import React from 'react';
import renderer from 'react-test-renderer';
import { ThumbnailImage } from './ThumbnailImage';
import '../../../config/tests/setup';

describe('ThumbnailImage', () => {
    it('should render with default profile picture with alt correctly', () => {
        const table = renderer.create(
            <ThumbnailImage alt="picture description" />).toJSON();

        expect(table).toMatchSnapshot();
    });

    it('should render with src picture correctly', () => {
        const table = renderer.create(
            <ThumbnailImage src="sample-picture.jpg" alt="picture description" />).toJSON();

        expect(table).toMatchSnapshot();
    });

    it('should render with no placeholder correctly', () => {
        const table = renderer.create(
            <ThumbnailImage placeholder="" alt="picture description" />).toJSON();

        expect(table).toMatchSnapshot();
    });
});
