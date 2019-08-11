import React, { Component } from 'react';
import { debounce } from 'lodash';
import Highlight from 'react-highlight';
import { storiesOf } from '@storybook/react';
import { Autocomplete } from './Autocomplete';

const options = [
    { value: 'John Doe', label: 'John Doe' },
    { value: 'John Wick', label: 'John Wick' },
    { value: 'Dwayne Johnson', label: 'Dwayne Johnson' },
];
const optionsToString = optionsArr => optionsArr.reduce((acc, { value, label }, index) => {
    let res = acc;

    if (index) {
        res += ',\n';
    }

    res += `{ value: ${value}, label: ${label} }`;

    if (index === optionsArr.length - 1) {
        res += ']';
    }

    return res;
}, '[\n');

class AutocompleteWrapper extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            // eslint-disable-next-line react/prop-types
            inputValue: props.inputValue || '',
        };
    }

    onInputChange = (event) => {
        this.setState({
            inputValue: event.target.value,
        });
    };

    get autocompleteAdditionalProps() {
        return Object.keys(this.props).reduce((selectProps, propKey) => {
            const isPropForUnderlyingSelect = propKey !== 'inputValue' && propKey !== 'onInputChange';

            if (isPropForUnderlyingSelect) {
                // eslint-disable-next-line no-param-reassign
                selectProps[propKey] = this.props[propKey];
            }

            return selectProps;
        }, {});
    }

    render() {
        const { inputValue } = this.state;
        const { autocompleteAdditionalProps, onInputChange } = this;

        return (
            <Autocomplete
                name="person-name"
                options={options}
                inputValue={inputValue}
                onInputChange={onInputChange}
                {...autocompleteAdditionalProps}
            />
        );
    }
}

class AutocompleteWrapperWithFakeCall extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            // eslint-disable-next-line react/prop-types
            inputValue: props.inputValue || '',
            loading: false,
        };
    }

    onLoadingFinish = debounce(() => {
        this.setState({
            loading: false,
        });
    }, 1000);

    onInputChange = (event) => {
        this.setState({
            inputValue: event.target.value,
            loading: true,
        }, this.onLoadingFinish);
    };

    get autocompleteAdditionalProps() {
        return Object.keys(this.props).reduce((selectProps, propKey) => {
            const isPropForUnderlyingSelect = propKey !== 'inputValue' && propKey !== 'onInputChange';

            if (isPropForUnderlyingSelect) {
                // eslint-disable-next-line no-param-reassign
                selectProps[propKey] = this.props[propKey];
            }

            return selectProps;
        }, {});
    }

    render() {
        const { inputValue, loading } = this.state;
        const { autocompleteAdditionalProps, onInputChange } = this;

        return (
            <Autocomplete
                name="person-name"
                options={loading ? [] : options}
                inputValue={inputValue}
                isLoading={loading}
                onInputChange={onInputChange}
                {...autocompleteAdditionalProps}
            />
        );
    }
}

storiesOf('Autocomplete', module)
    .add('With name and options', () => (
        <>
            <AutocompleteWrapper />
            <Highlight className="html">
                {`<Autocomplete name="person-name" options={${optionsToString(options)}} />`}
            </Highlight>
        </>
    ))
    .add('With label', () => (
        <>
            <AutocompleteWrapper label="Person's name" />
            <Highlight className="html">
                {`<Autocomplete label="Person's name" name="person-name" options={${optionsToString(options)}} />`}
            </Highlight>
        </>
    ))
    .add('With more than 10 options', () => {
        const optionsArr = [
            ...options,
            ...options.map(({ label, value }) => ({
                label: `${label} 2`,
                value: `${value} 2`,
            })),
            ...options.map(({ label, value }) => ({
                label: `${label} 3`,
                value: `${value} 3`,
            })),
            ...options.map(({ label, value }) => ({
                label: `${label} 4`,
                value: `${value} 4`,
            })),
        ];

        return (
            <>
                <AutocompleteWrapper label="Person's name" options={optionsArr} />
                <Highlight className="html">
                    {'<Autocomplete'
                        + '\nlabel="Person\'s name"'
                        + '\nname="person-name"'
                        + `\noptions={${optionsToString(optionsArr)}} />`}
                </Highlight>
            </>
        );
    })
    .add('With initial value', () => (
        <>
            <AutocompleteWrapper label="Person's name" inputValue="Dwayne Johnson" />
            <Highlight className="html">
                {'<Autocomplete'
                    + '\nlabel="Person\'s name"'
                    + '\nname="person-name"'
                    + '\ninputValue="Dwayne Johnson"'
                    + `\noptions={${optionsToString(options)}} />`}
            </Highlight>
        </>
    ))
    .add('With an onChange listener', () => (
        <>
            <AutocompleteWrapper
                label="Person's name"
                inputValue="Dwayne Johnson"
                onChange={(event) => {
                    // eslint-disable-next-line no-console
                    console.log(event);
                }}
            />
            <Highlight className="html">
                {'<Autocomplete'
                    + '\nlabel="Person\'s name"'
                    + '\nname="person-name"'
                    + '\ninputValue="Dwayne Johnson"'
                    + `\nonChange={(event) => { console.log(event); }}`
                    + `\noptions={${optionsToString(options)}} />`}
            </Highlight>
        </>
    ))
    .add('With custom noOptionsMessage', () => (
        <>
            <AutocompleteWrapper
                label="Person's name"
                noOptionsMessage={({ inputValue }) => `Nothing found for "${inputValue}"`}
                options={[]}
            />
            <Highlight className="html">
                {'<Autocomplete'
                    + '\nlabel="Person\'s name"'
                    + '\nname="person-name"'
                    + `\nnoOptionsMessage={({ inputValue }) => \`Nothing found for "\${inputValue}"\`}`
                    + '\noptions={[]} />'}
            </Highlight>
        </>
    ))
    .add('With a "fake" API call', () => (
        <>
            <AutocompleteWrapperWithFakeCall label="Person's name" />
            <Highlight className="html">
                {'<Autocomplete'
                    + '\nlabel="Person\'s name"'
                    + '\nname="person-name"'
                    + `\noptions={${optionsToString(options)}} />`}
            </Highlight>
        </>
    ))
    .add('With a "fake" API call and custom loading message', () => (
        <>
            <AutocompleteWrapperWithFakeCall
                label="Person's name"
                loadingMessage={({ inputValue }) => `Server is searching for "${inputValue}"`}
            />
            <Highlight className="html">
                {'<Autocomplete'
                    + '\nlabel="Person\'s name"'
                    + `loadingMessage={({ inputValue }) => \`Server is searching for "\${inputValue}"\`}`
                    + '\nname="person-name"'
                    + `\noptions={${optionsToString(options)}} />`}
            </Highlight>
        </>
    ));
