import React from 'react';
import Highlight from 'react-highlight';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { SelectInput } from './SelectInput';

storiesOf('SelectInput', module)
    .add('single with name and options', () => (
        <>
            <SelectInput
                name="fruits"
                options={[
                    { value: 'apple', label: 'Apple' },
                    { value: 'banana', label: 'Banana' },
                    { value: 'peach', label: 'Peach' },
                ]}
            />
            <Highlight className="html">
                {'<SelectInput' +
                    '\n\tname="fruits"' +
                    '\n\toptions={[' +
                    `\n\t\t{ value: 'apple', label: 'Apple' },` +
                    `\n\t\t{ value: 'banana', label: 'Banana' },` +
                    `\n\t\t{ value: 'peach', label: 'Peach' },` +
                    '\n\t]}' +
                    '\n/>'}
            </Highlight>
        </>
    ))
    .add('multiple with name options, display inline and display block', () => (
        <div>
            <SelectInput
                name="fruits"
                options={[
                    { value: 'apple', label: 'Apple' },
                    { value: 'banana', label: 'Banana' },
                    { value: 'peach', label: 'Peach' },
                ]}
            />
            <SelectInput
                display="inline"
                name="fruits"
                options={[
                    { value: 'apple', label: 'Apple' },
                    { value: 'banana', label: 'Banana' },
                    { value: 'peach', label: 'Peach' },
                ]}
            />
            <Highlight className="html">
                {'<SelectInput' +
                    '\n\tname="fruits"' +
                    '\n\toptions={[' +
                    `\n\t\t{ value: 'apple', label: 'Apple' },` +
                    `\n\t\t{ value: 'banana', label: 'Banana' },` +
                    `\n\t\t{ value: 'peach', label: 'Peach' },` +
                    '\n\t]}' +
                    '\n/>\n\n'}
                {'<SelectInput' +
                    '\n\tdisplay="inline"' +
                    '\n\tname="fruits"' +
                    '\n\toptions={[' +
                    `\n\t\t{ value: 'apple', label: 'Apple' },` +
                    `\n\t\t{ value: 'banana', label: 'Banana' },` +
                    `\n\t\t{ value: 'peach', label: 'Peach' },` +
                    '\n\t]}' +
                    '\n/>'}
            </Highlight>
        </div>
    ))
    .add('single with label', () => (
        <div>
            <SelectInput
                label="Select your fruit"
                name="fruits"
                options={[
                    { value: 'apple', label: 'Apple' },
                    { value: 'banana', label: 'Banana' },
                    { value: 'peach', label: 'Peach' },
                ]}
            />
            <Highlight className="html">
                {'<SelectInput' +
                    '\n\tlabel="Select your fruit"' +
                    '\n\tname="fruits"' +
                    '\n\toptions={[' +
                    `\n\t\t{ value: 'apple', label: 'Apple' },` +
                    `\n\t\t{ value: 'banana', label: 'Banana' },` +
                    `\n\t\t{ value: 'peach', label: 'Peach' },` +
                    '\n\t]}' +
                    '\n/>'}
            </Highlight>
        </div>
    ))
    .add('single with label and required', () => (
        <div>
            <SelectInput
                label="Select your fruit"
                name="fruits"
                options={[
                    { value: 'apple', label: 'Apple' },
                    { value: 'banana', label: 'Banana' },
                    { value: 'peach', label: 'Peach' },
                ]}
                required
            />
            <Highlight className="html">
                {'<SelectInput' +
                    '\n\trequired' +
                    '\n\tlabel="Select your fruit"' +
                    '\n\tname="fruits"' +
                    '\n\toptions={[' +
                    `\n\t\t{ value: 'apple', label: 'Apple' },` +
                    `\n\t\t{ value: 'banana', label: 'Banana' },` +
                    `\n\t\t{ value: 'peach', label: 'Peach' },` +
                    '\n\t]}' +
                    '\n/>'}
            </Highlight>
        </div>
    ))
    .add('single with error', () => (
        <div>
            <SelectInput
                inputError="Alarm! Meltdown Imminent!"
                label="Select your fruit"
                name="fruits"
                options={[
                    { value: 'apple', label: 'Apple' },
                    { value: 'banana', label: 'Banana' },
                    { value: 'peach', label: 'Peach' },
                ]}
                required
            />
            <Highlight className="html">
                {'<SelectInput' +
                    '\n\tinputError="Alarm! Meltdown Imminent!"' +
                    '\n\trequired' +
                    '\n\tlabel="Select your fruit"' +
                    '\n\tname="fruits"' +
                    '\n\toptions={[' +
                    `\n\t\t{ value: 'apple', label: 'Apple' },` +
                    `\n\t\t{ value: 'banana', label: 'Banana' },` +
                    `\n\t\t{ value: 'peach', label: 'Peach' },` +
                    '\n\t]}' +
                    '\n/>'}
            </Highlight>
        </div>
    ))
    .add('single with onChange', () => {
        const handleChange = (event) => action('changed')(event.target.name, event.target.value);
        return (
            <>
                <SelectInput
                    name="fruits"
                    onChange={handleChange}
                    options={[
                        { value: 'apple', label: 'Apple' },
                        { value: 'banana', label: 'Banana' },
                        { value: 'peach', label: 'Peach' },
                    ]}
                    required
                />
                <Highlight className="html">
                    {'<SelectInput' +
                        '\n\tonChange={function() {}}' +
                        '\n\trequired' +
                        '\n\tname="fruits"' +
                        '\n\toptions={[' +
                        `\n\t\t{ value: 'apple', label: 'Apple' },` +
                        `\n\t\t{ value: 'banana', label: 'Banana' },` +
                        `\n\t\t{ value: 'peach', label: 'Peach' },` +
                        '\n\t]}' +
                        '\n/>'}
                </Highlight>
            </>
        );
    })
    .add('single with onBlur', () => (
        <div>
            <SelectInput
                name="fruits"
                onBlur={action('blur')}
                options={[
                    { value: 'apple', label: 'Apple' },
                    { value: 'banana', label: 'Banana' },
                    { value: 'peach', label: 'Peach' },
                ]}
                required
            />
            <Highlight className="html">
                {'<SelectInput' +
                    `\n\tonBlur={action('blur')}` +
                    '\n\trequired' +
                    '\n\tname="fruits"' +
                    '\n\toptions={[' +
                    `\n\t\t{ value: 'apple', label: 'Apple' },` +
                    `\n\t\t{ value: 'banana', label: 'Banana' },` +
                    `\n\t\t{ value: 'peach', label: 'Peach' },` +
                    '\n\t]}' +
                    '\n/>'}
            </Highlight>
        </div>
    ))
    .add('with defaultValue and onChange (uncontrolled)', () => {
        const handleChange = (event) => action('changed')(event.target.name, event.target.value);
        return (
            <div>
                <SelectInput
                    name="fruit"
                    onChange={handleChange}
                    options={[
                        { value: 'apple', label: 'Apple' },
                        { value: 'banana', label: 'Banana' },
                        { value: 'peach', label: 'Peach' },
                    ]}
                    defaultValue={'peach'}
                />
                <Highlight className="html">
                    {'<SelectInput' +
                        `\n\tdefaultValue={'peach'}` +
                        '\n\tname="fruits"' +
                        '\n\toptions={[' +
                        `\n\t\t{ value: 'apple', label: 'Apple' },` +
                        `\n\t\t{ value: 'banana', label: 'Banana' },` +
                        `\n\t\t{ value: 'peach', label: 'Peach' },` +
                        '\n\t]}' +
                        '\n/>'}
                </Highlight>
            </div>
        );
    })
    .add('disabled', () => (
        <>
            <SelectInput
                name="fruits"
                disabled
                options={[
                    { value: 'apple', label: 'Apple' },
                    { value: 'banana', label: 'Banana' },
                    { value: 'peach', label: 'Peach' },
                ]}
            />
            <Highlight className="html">
                {'<SelectInput' +
                    '\n\tdisabled' +
                    '\n\tname="fruits"' +
                    '\n\toptions={[' +
                    `\n\t\t{ value: 'apple', label: 'Apple' },` +
                    `\n\t\t{ value: 'banana', label: 'Banana' },` +
                    `\n\t\t{ value: 'peach', label: 'Peach' },` +
                    '\n\t]}' +
                    '\n/>'}
            </Highlight>
        </>
    ))
    .add('as a controlled input', () => (
        <>
            <SelectInputContainer />
            <Highlight className="javascript">
                {`class SelectInputContainer extends React.Component {
    state = { fruit: 'banana' };

    handleChange = (event) => {
        this.setState({ fruit: event.target.value });
        action('changed in container')(event.target.name, event.target.value);
    };

    render() {
        return (
            <SelectInput
                name="fruit"
                options={[
                    { value: 'apple', label: 'Apple' },
                    { value: 'banana', label: 'Banana' },
                    { value: 'peach', label: 'Peach' },
                ]}
                onChange={this.handleChange}
                value={this.state.fruit}
            />
        );
    }
}`}
            </Highlight>
        </>
    ))
    .add('with placeholder', () => (
        <>
            <SelectInput
                name="fruits"
                placeholder="My placeholder"
                options={[
                    { value: 'apple', label: 'Apple' },
                    { value: 'banana', label: 'Banana' },
                    { value: 'peach', label: 'Peach' },
                ]}
            />
            <Highlight className="html">
                {'<SelectInput' +
                    '\n\tplaceholder="My placeholder"' +
                    '\n\tname="fruits"' +
                    '\n\toptions={[' +
                    `\n\t\t{ value: 'apple', label: 'Apple' },` +
                    `\n\t\t{ value: 'banana', label: 'Banana' },` +
                    `\n\t\t{ value: 'peach', label: 'Peach' },` +
                    '\n\t]}' +
                    '\n/>'}
            </Highlight>
        </>
    ));

class SelectInputContainer extends React.Component {
    state = { fruit: 'banana' };

    handleChange = (event) => {
        this.setState({ fruit: event.target.value });
        action('changed in container')(event.target.name, event.target.value);
    };

    render() {
        return (
            <SelectInput
                name="fruit"
                options={[
                    { value: 'apple', label: 'Apple' },
                    { value: 'banana', label: 'Banana' },
                    { value: 'peach', label: 'Peach' },
                ]}
                onChange={this.handleChange}
                value={this.state.fruit}
            />
        );
    }
}
