import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';

import { ProgressBar } from './ProgressBar';
import '../../../config/tests/setup';

const props = {
    displayProgressLabel: false,
    greyBackground: true,
    label: 'Label test',
    labelPosition: 'left',
    variant: 'light',
    progress: 20,
    progressiveColoring: true,
    progressLabel: 'Test',
    reverse: true,
};

describe('ProgressBar', () => {
    it('should render correctly', () => {
        const wrapper = create(<ProgressBar />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should render with default props', () => {
        const wrapper = mount(<ProgressBar />);

        expect(wrapper.prop('displayProgressLabel')).toEqual(true);
        expect(wrapper.prop('greyBackground')).toEqual(false);
        expect(wrapper.prop('label')).toEqual('');
        expect(wrapper.prop('labelPosition')).toEqual('right');
        expect(wrapper.prop('variant')).toEqual('standard');
        expect(wrapper.prop('progressiveColoring')).toEqual(false);
        expect(wrapper.prop('progressLabel')).toEqual('');
        expect(wrapper.prop('reverse')).toEqual(false);
    });

    it('should render with custom props', () => {
        const wrapper = mount(<ProgressBar {...props} />);

        expect(wrapper.prop('displayProgressLabel')).toEqual(false);
        expect(wrapper.prop('greyBackground')).toEqual(true);
        expect(wrapper.prop('label')).toEqual('Label test');
        expect(wrapper.prop('labelPosition')).toEqual('left');
        expect(wrapper.prop('variant')).toEqual('light');
        expect(wrapper.prop('progressiveColoring')).toEqual(true);
        expect(wrapper.prop('progressLabel')).toEqual('Test');
        expect(wrapper.prop('reverse')).toEqual(true);
        expect(wrapper.prop('progress')).toEqual(20);
    });
});
