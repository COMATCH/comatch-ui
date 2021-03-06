import React from 'react';
import Highlight from 'react-highlight';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ModalWindow } from './ModalWindow';

// For the stories of the ModalWindow we need a wrapper with a  button to toggle it open
class ModalWindowWrapper extends React.Component {
    state = { modalOpen: false };

    openModal = () => this.setState({ modalOpen: true });

    closeModal = () => this.setState({ modalOpen: false });

    render() {
        return (
            <div>
                <button type="button" onClick={this.openModal}>
                    Open modal
                </button>
                <ModalWindow
                    title="Test modal"
                    isOpen={this.state.modalOpen}
                    onClose={this.closeModal}
                    onSuccess={() => {
                        this.closeModal();
                        action('ok triggered')();
                    }}
                    closeButtonText="Close"
                    successButtonText="OK"
                    {...this.props}
                >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s
                </ModalWindow>
            </div>
        );
    }
}

const customFooter = (
    <button className="Button full" onClick={action('custom button clicked')}>
        Custom HTML Button
    </button>
);

storiesOf('ModalWindow', module)
    .add('with standard options', () => (
        <>
            <ModalWindowWrapper />
            <Highlight className="html">
                {'<div><button type="button" onClick={this.openModal}>Open modal</button>' +
                    '<ModalWindow title="Test modal" isOpen={this.state.modalOpen} onClose={function() {}}' +
                    'onSuccess={function() {}} closeButtonText="Close" successButtonText="OK"> Lorem Ipsum...' +
                    '</ModalWindow>'}
            </Highlight>
        </>
    ))
    .add('with custom footer', () => (
        <>
            <ModalWindowWrapper footerChildren={customFooter} />
            <Highlight className="html">
                {'<div><button type="button" onClick={this.openModal}>Open modal</button>' +
                    '<ModalWindow title="Test modal" isOpen={this.state.modalOpen} onClose={function() {}}' +
                    'onSuccess={function() {}} closeButtonText="Close" successButtonText="OK"' +
                    'footerChildren={customFooter}> Lorem Ipsum...</ModalWindow></div>'}
            </Highlight>
        </>
    ));
