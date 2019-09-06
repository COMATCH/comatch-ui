import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { Card } from './Card';
import { Button } from '../Button';
import { BACKGROUND_COLOR } from './config';
import '../../../config/tests/setup';

describe('Card', () => {
    it('should render the default Card correctly', () => {
        const card = renderer.create(<Card>card</Card>).toJSON();
        expect(card).toMatchSnapshot();
    });

    it('should render a customized Card correctly', () => {
        const card = renderer
            .create(
                <Card backgroundColor={BACKGROUND_COLOR.PRIMARY} bordered className="ACard" id="a-card" inline>
                    <Card.Header title="Header" subtitle="Header subtitle" controls={<Button>BTN</Button>} />
                    <Card.Body>
                        <p>This is the Card&apos;s Body (Content)</p>
                    </Card.Body>
                    <div>some content...</div>
                </Card>,
            )
            .toJSON();
        expect(card).toMatchSnapshot();
    });

    it('should have the correct default props', () => {
        const card = mount(<Card />);
        expect(card.prop('backgroundColor')).toEqual('white');
        expect(card.prop('bordered')).toEqual(false);
        expect(card.prop('className')).toEqual(null);
        expect(card.prop('id')).toEqual(null);
        expect(card.prop('inline')).toEqual(false);
    });
});
