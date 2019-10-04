import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { StepProgressBar } from './StepProgressBar';
import '../../../config/tests/setup';

describe('StepProgressBar tests', () => {
    const REQUIRED_PROPS = {
        steps: [
            'this is the first step',
            'this is the second step',
            'this is the third step',
            'this is the fourth and last step',
        ],
        currentStepIndex: 4,
    };

    it('should render and matched values in snapshot', () => {
        const stepProgressBarComponent = renderer.create(<StepProgressBar {...REQUIRED_PROPS} />).toJSON();
        expect(stepProgressBarComponent).toMatchSnapshot();
    });

    it('should render correctly with required props', () => {
        const props = {
            ...REQUIRED_PROPS,
        };
        const stepProgressBarComponent = mount(<StepProgressBar {...props} />);
        expect(stepProgressBarComponent.prop('steps')).toEqual(props.steps);
        expect(stepProgressBarComponent.prop('currentStepIndex')).toEqual(props.currentStepIndex);
    });

    describe('verifying the HTML structure', () => {
        it('should render correctly right numbers of nodes/dom elements', () => {
            const props = {
                ...REQUIRED_PROPS,
            };
            const stepProgressBarComponent = mount(<StepProgressBar {...props} />);
            expect(stepProgressBarComponent).toHaveLength(1);
            expect(stepProgressBarComponent.find('div').at(0)
                .hasClass('StepProgressBar__nb-steps-4 StepProgressBar__step-active-4')).toBe(true);
            expect(stepProgressBarComponent.find('div').at(1).hasClass('StepProgressBar__line')).toBe(true);
            expect(stepProgressBarComponent.find('div').at(2).hasClass('StepProgressBar__progress')).toBe(true);
            expect(stepProgressBarComponent.find('div').at(3)
                .hasClass('StepProgressBar__step StepProgressBar__step1')).toBe(true);
            expect(stepProgressBarComponent.find('div').at(4).hasClass('StepProgressBar__circle')).toBe(true);
            expect(stepProgressBarComponent.find('div').at(5).hasClass('StepProgressBar__step-text')).toBe(true);
            expect(stepProgressBarComponent.find('div').at(6)
                .hasClass('StepProgressBar__step StepProgressBar__step2')).toBe(true);
            expect(stepProgressBarComponent.find('div').at(7).hasClass('StepProgressBar__circle')).toBe(true);
            expect(stepProgressBarComponent.find('div').at(8).hasClass('StepProgressBar__step-text')).toBe(true);
            expect(stepProgressBarComponent.find('div').at(9)
                .hasClass('StepProgressBar__step StepProgressBar__step3')).toBe(true);
            expect(stepProgressBarComponent.find('div').at(10).hasClass('StepProgressBar__circle')).toBe(true);
            expect(stepProgressBarComponent.find('div').at(11).hasClass('StepProgressBar__step-text')).toBe(true);
            expect(stepProgressBarComponent.find('div').at(12)
                .hasClass('StepProgressBar__step StepProgressBar__step4 active')).toBe(true);
            expect(stepProgressBarComponent.find('div').at(13).hasClass('StepProgressBar__circle')).toBe(true);
            expect(stepProgressBarComponent.find('div').at(14).hasClass('StepProgressBar__step-text')).toBe(true);
        });

        it('should render correctly with 2 steps, first one active', () => {
            const props = {
                steps: ['this is the first step', 'this is the second step'],
                currentStepIndex: 1,
            };
            const stepProgressBarComponent = mount(<StepProgressBar {...props} />);
            expect(
                stepProgressBarComponent.find('.StepProgressBar__nb-steps-2').at(0)
                    .hasClass('StepProgressBar__step-active-1')).toBe(true);
            expect(stepProgressBarComponent.find('.StepProgressBar__step-text').at(6)
                .text()).toEqual('this is the second step');
        });

        it('should render correctly with 2 steps, second one active', () => {
            const props = {
                steps: ['this is the first step', 'this is the second step'],
                currentStepIndex: 2,
            };
            const stepProgressBarComponent = mount(<StepProgressBar {...props} />);
            expect(stepProgressBarComponent.find('.StepProgressBar__nb-steps-2').at(0)
                .hasClass('StepProgressBar__step-active-2')).toBe(true);
            expect(stepProgressBarComponent.find('.StepProgressBar__step-text').at(6)
                .text()).toEqual('this is the second step');
        });

        it('should render correctly with 3 steps, first one active', () => {
            const props = {
                steps: ['this is the first step', 'this is the second step', 'this is the third step'],
                currentStepIndex: 1,
            };
            const stepProgressBarComponent = mount(<StepProgressBar {...props} />);
            expect(stepProgressBarComponent.find('.StepProgressBar__nb-steps-3').at(0)
                .hasClass('StepProgressBar__step-active-1')).toBe(true);
            expect(stepProgressBarComponent.find('.StepProgressBar__step-text').at(9)
                .text()).toEqual('this is the third step');
        });

        it('should render correctly with 3 steps, second one active', () => {
            const props = {
                steps: ['this is the first step', 'this is the second step', 'this is the third step'],
                currentStepIndex: 2,
            };
            const stepProgressBarComponent = mount(<StepProgressBar {...props} />);
            expect(stepProgressBarComponent.find('.StepProgressBar__nb-steps-3').at(0)
                .hasClass('StepProgressBar__step-active-2')).toBe(true);
            expect(stepProgressBarComponent.find('.StepProgressBar__step-text').at(9)
                .text()).toEqual('this is the third step');
        });

        it('should render correctly with 3 steps, third one active', () => {
            const props = {
                steps: ['this is the first step', 'this is the second step', 'this is the third step'],
                currentStepIndex: 3,
            };
            const stepProgressBarComponent = mount(<StepProgressBar {...props} />);
            expect(stepProgressBarComponent.find('.StepProgressBar__nb-steps-3').at(0)
                .hasClass('StepProgressBar__step-active-3')).toBe(true);
            expect(stepProgressBarComponent.find('.StepProgressBar__step-text').at(9)
                .text()).toEqual('this is the third step');
        });

        it('should render correctly with 4 steps, first one active', () => {
            const props = {
                steps: [
                    'this is the first step',
                    'this is the second step',
                    'this is the third step',
                    'this is the fourth and last step',
                ],
                currentStepIndex: 1,
            };
            const stepProgressBarComponent = mount(<StepProgressBar {...props} />);
            expect(stepProgressBarComponent.find('.StepProgressBar__nb-steps-4').at(0)
                .hasClass('StepProgressBar__step-active-1')).toBe(true);
            expect(stepProgressBarComponent.find('.StepProgressBar__step-text').at(12)
                .text()).toEqual('this is the fourth and last step');
        });

        it('should render correctly with 4 steps, second one active', () => {
            const props = {
                steps: [
                    'this is the first step',
                    'this is the second step',
                    'this is the third step',
                    'this is the fourth and last step',
                ],
                currentStepIndex: 2,
            };
            const stepProgressBarComponent = mount(<StepProgressBar {...props} />);
            expect(stepProgressBarComponent.find('.StepProgressBar__nb-steps-4').at(0)
                .hasClass('StepProgressBar__step-active-2')).toBe(true);
            expect(stepProgressBarComponent.find('.StepProgressBar__step-text').at(12)
                .text()).toEqual('this is the fourth and last step');
        });

        it('should render correctly with 4 steps, third one active', () => {
            const props = {
                steps: [
                    'this is the first step',
                    'this is the second step',
                    'this is the third step',
                    'this is the fourth and last step',
                ],
                currentStepIndex: 3,
            };
            const stepProgressBarComponent = mount(<StepProgressBar {...props} />);
            expect(stepProgressBarComponent.find('.StepProgressBar__nb-steps-4').at(0)
                .hasClass('StepProgressBar__step-active-3')).toBe(true);
            expect(stepProgressBarComponent.find('.StepProgressBar__step-text').at(12)
                .text()).toEqual('this is the fourth and last step');
        });

        it('should render correctly with 4 steps, last one active', () => {
            const props = {
                steps: [
                    'this is the first step',
                    'this is the second step',
                    'this is the third step',
                    'this is the fourth and last step',
                ],
                currentStepIndex: 4,
            };
            const stepProgressBarComponent = mount(<StepProgressBar {...props} />);
            expect(stepProgressBarComponent.find('.StepProgressBar__nb-steps-4').at(0)
                .hasClass('StepProgressBar__step-active-4')).toBe(true);
            expect(stepProgressBarComponent.find('.StepProgressBar__step-text').at(12)
                .text()).toEqual('this is the fourth and last step');
        });
    });
});
