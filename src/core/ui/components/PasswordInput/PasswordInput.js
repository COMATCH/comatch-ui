import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons/faEyeSlash';
import { TextInput } from '../TextInput';

import './PasswordInput.scss';

export class PasswordInput extends Component {
    state = {
        show: false,
    };

    handleIconClick = () => {
        this.setState((oldState) => ({ show: !oldState.show }));
    };

    render() {
        const type = this.state.show ? 'text' : 'password';
        const icon = (
            <span onClick={this.handleIconClick} className="TextInput__icon clickable">
                <FontAwesomeIcon icon={this.state.show ? faEyeSlash : faEye} />
            </span>
        );

        return (
            <TextInput
                {...this.props}
                className="PasswordInput"
                // Overwrite icon and type here with our values.
                icon={icon}
                type={type}
            />
        );
    }
}
