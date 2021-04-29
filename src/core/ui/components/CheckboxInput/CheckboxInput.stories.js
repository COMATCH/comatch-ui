import React, { Component } from 'react';
import Highlight from 'react-highlight';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { CheckboxInput } from './CheckboxInput';

storiesOf('CheckboxInput', module)
    .add('single with toggle switch and no label', () => (
        <>
            <CheckboxInput name="isFoo" />
            <CheckboxInput name="isFoo" isToggleSwitch />
            <Highlight className="html">{'<CheckboxInput name="isFoo" />'}</Highlight>
            <Highlight className="html">{'<CheckboxInput name="isFoo" isToggleSwitch />'}</Highlight>
        </>
    ))
    .add('single with toggle switch and label', () => (
        <>
            <CheckboxInput label="Foo" name="isFoo" />
            <CheckboxInput label="Foo" name="isFoo" isToggleSwitch />
            <Highlight className="html">{'<CheckboxInput label="Foo" name="isFoo" />'}</Highlight>
            <Highlight className="html">{'<CheckboxInput label="Foo" name="isFoo" isToggleSwitch />'}</Highlight>
        </>
    ))
    .add('single with toggle switch and multi line label', () => (
        <>
            <CheckboxInput
                label={
                    <div>
                        Foo <br /> Bar
                    </div>
                }
                name="isFoo"
            />
            <CheckboxInput
                label={
                    <div>
                        Foo <br /> Bar
                    </div>
                }
                name="isFoo"
                isToggleSwitch
            />
            <Highlight className="html">{'<CheckboxInput label={<div>Foo <br /> Bar</div>} name="isFoo" />'}</Highlight>
            <Highlight className="html">
                {'<CheckboxInput label={<div>Foo <br /> Bar</div>} name="isFoo" isToggleSwitch />'}
            </Highlight>
        </>
    ))
    .add('multiple with label and with toggle switch', () => (
        <>
            <div>
                <CheckboxInput label="Foo" name="isFoo" value="1" />
                <CheckboxInput label="Bar" name="isBar" value="2" />
                <CheckboxInput
                    label={
                        <div>
                            Foo <br /> Bar
                        </div>
                    }
                    name="isFoo"
                />
            </div>
            <div>
                <CheckboxInput label="Foo" name="isFoo" value="1" isToggleSwitch />
                <CheckboxInput label="Bar" name="isBar" value="2" isToggleSwitch />
                <CheckboxInput
                    label={
                        <div>
                            Foo <br /> Bar
                        </div>
                    }
                    name="isFoo"
                    isToggleSwitch
                />
            </div>
        </>
    ))
    .add('multiple with label, display inline and with toggle switch', () => (
        <>
            <div>
                <CheckboxInput label="Foo" name="isFoo" display="inline" />
                <CheckboxInput label="Bar" name="isBar" value="2" display="inline" />
                <CheckboxInput
                    label={
                        <div>
                            Foo <br /> Bar
                        </div>
                    }
                    name="isFoo"
                    display="inline"
                />
            </div>
            <div>
                <CheckboxInput label="Foo" name="isFoo" display="inline" isToggleSwitch />
                <CheckboxInput label="Bar" name="isBar" value="2" display="inline" isToggleSwitch />
                <CheckboxInput
                    label={
                        <div>
                            Foo <br /> Bar
                        </div>
                    }
                    name="isFoo"
                    display="inline"
                    isToggleSwitch
                />
            </div>
        </>
    ))
    .add('multiple with label, display inline, display block and toggle switch', () => (
        <>
            <div>
                <CheckboxInput label="Foo" name="isFoo" />
                <CheckboxInput label="Bar" name="isBar" />
                <CheckboxInput label="Atomic" name="isAtomic" value="3" display="inline" />
                <CheckboxInput label="Radioactive" name="isRadioactive" value="4" display="inline" />
                <CheckboxInput label="Supersonic" name="isSupersonic" value="5" display="inline" />
                <CheckboxInput
                    label={
                        <div>
                            Foo <br /> Bar
                        </div>
                    }
                    name="isFoo"
                    display="inline"
                />
                <CheckboxInput label="Hey!" name="isHey" value="6" />
                <CheckboxInput label="Ho!" name="isHo" value="7" />
            </div>
            <div>
                <CheckboxInput label="Foo" name="isFoo" isToggleSwitch />
                <CheckboxInput label="Bar" name="isBar" isToggleSwitch />
                <CheckboxInput label="Atomic" name="isAtomic" value="3" display="inline" isToggleSwitch />
                <CheckboxInput label="Radioactive" name="isRadioactive" value="4" display="inline" isToggleSwitch />
                <CheckboxInput label="Supersonic" name="isSupersonic" value="5" display="inline" isToggleSwitch />
                <CheckboxInput
                    label={
                        <div>
                            Foo <br /> Bar
                        </div>
                    }
                    name="isFoo"
                    display="inline"
                    isToggleSwitch
                />
                <CheckboxInput label="Hey!" name="isHey" value="6" isToggleSwitch />
                <CheckboxInput label="Ho!" name="isHo" value="7" isToggleSwitch />
            </div>
        </>
    ))
    .add('single with label, inputError and with toggle switch', () => (
        <>
            <CheckboxInput label="Foo" name="isFoo" inputError="Alarm! Meltdown Imminent!" />
            <CheckboxInput label="Foo" name="isFoo" inputError="Alarm! Meltdown Imminent!" isToggleSwitch />
            <Highlight className="html">
                {'<CheckboxInput label="Foo" name="isFoo" inputError="Alarm! Meltdown Imminent!" />'}
            </Highlight>
            <Highlight className="html">
                {'<CheckboxInput label="Foo" name="isFoo" inputError="Alarm! Meltdown Imminent!" isToggleSwitch />'}
            </Highlight>
        </>
    ))
    .add('multiple with more labels, inputError and with toggle switch', () => (
        <>
            <div>
                <CheckboxInput label="Foo" name="isFoo" inputError="Alarm! Meltdown Imminent!" />
                <CheckboxInput label="Bar" name="isBar" inputError="Alarm! Meltdown Imminent!" />
                <CheckboxInput label="Atomic" name="isAtomic" inputError="Alarm! Meltdown Imminent!" />
                <CheckboxInput label="Radioactive" name="isRadioactive" />
                <CheckboxInput label="Supersonic" name="isSupersonic" />
            </div>
            <div>
                <CheckboxInput label="Foo" name="isFoo" inputError="Alarm! Meltdown Imminent!" isToggleSwitch />
                <CheckboxInput label="Bar" name="isBar" inputError="Alarm! Meltdown Imminent!" isToggleSwitch />
                <CheckboxInput label="Atomic" name="isAtomic" inputError="Alarm! Meltdown Imminent!" isToggleSwitch />
                <CheckboxInput label="Radioactive" name="isRadioactive" isToggleSwitch />
                <CheckboxInput label="Supersonic" name="isSupersonic" isToggleSwitch />
            </div>
        </>
    ))
    .add('multiple with label, name, value, onChange and with toggle switch', () => {
        const handleChange = (event) => action('changed')(event.target.name, event.target.checked);
        return (
            <>
                <div>
                    <CheckboxInput label="Foo" name="isFoo" value="1" onChange={handleChange} />
                    <CheckboxInput label="Bar" name="isBar" value="2" onChange={handleChange} />
                    <CheckboxInput label="Atomic" name="isAtomic" value="3" onChange={handleChange} />
                </div>
                <div>
                    <CheckboxInput label="Foo" name="isFoo" value="1" onChange={handleChange} isToggleSwitch />
                    <CheckboxInput label="Bar" name="isBar" value="2" onChange={handleChange} isToggleSwitch />
                    <CheckboxInput label="Atomic" name="isAtomic" value="3" onChange={handleChange} isToggleSwitch />
                </div>
            </>
        );
    })
    .add('in a container', () => <CheckboxInputContainer />);

class CheckboxInputContainer extends Component {
    state = { available: false };

    handleChange = (event) => {
        this.setState({ available: event.target.checked });
        action('changed in container with toggle switch')(event.target.name, event.target.checked);
    };

    render() {
        return (
            <>
                <CheckboxInput label="Available" name="available" onChange={this.handleChange} />
                <CheckboxInput label="Available" name="available" onChange={this.handleChange} isToggleSwitch />
                <Highlight className="html">
                    {'<CheckboxInput label="Available" name="available" onChange={function() {}} />'}
                </Highlight>
                <Highlight className="html">
                    {'<CheckboxInput label="Available" name="available" onChange={function() {}} isToggleSwitch />'}
                </Highlight>
            </>
        );
    }
}
