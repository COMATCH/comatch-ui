import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'lodash/noop';
import isNil from 'lodash/isNil';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { Button } from '../Button';
import './ModalWindow.scss';

const propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    closeButtonText: PropTypes.string,
    hideHeader: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
    onSuccess: PropTypes.func,
    footerChildren: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    isOpen: PropTypes.bool.isRequired,
    successButtonText: PropTypes.string,
    title: PropTypes.string,
};

const defaultProps = {
    className: '',
    children: null,
    closeButtonText: '',
    hideHeader: false,
    footerChildren: null,
    onSuccess: noop,
    successButtonText: '',
    title: '',
};

/**
 * Handles rendering either the custom defined children in the footer
 * or a set of standard buttons.
 *
 * @param {object[] | object} footerChildren - array of HTML nodes or an HTML node
 * @param {object} callbacks - an object containing the close and success callbacks for the footer buttons
 * @param {object} buttonTexts - an object containing the close and success button label text
 * @returns {object} HTML content of footer
 */
function renderFooter(footerChildren, { onClose, onSuccess }, { closeButtonText, successButtonText }) {
    return !isNil(footerChildren) ? (
        footerChildren
    ) : (
        <div>
            <Button text={closeButtonText} onClick={onClose} ghost />
            <Button text={successButtonText} onClick={onSuccess} />
        </div>
    );
}

export const ModalWindow = ({
    className,
    children,
    closeButtonText,
    footerChildren,
    hideHeader,
    isOpen,
    onClose,
    onSuccess,
    successButtonText,
    title,
    ...props
}) => {
    const classes = classNames('ModalWindow', className);
    const footerButtonCallbacks = { onClose, onSuccess };
    const footerButtonTexts = { closeButtonText, successButtonText };

    return (
        <Modal
            ariaHideApp={false}
            className={classes}
            isOpen={isOpen}
            overlayClassName="ModalWindow__overlay"
            onRequestClose={onClose}
            closeTimeoutMS={500}
            {...props}
        >
            {!hideHeader && (
                <header className="ModalWindow__header">
                    <h1 className="ModalWindow__header-title">{title}</h1>
                    <FontAwesomeIcon
                        className="ModalWindow__close-button"
                        icon={faTimes}
                        onClick={onClose}
                        role="button"
                    />
                </header>
            )}
            <section className="ModalWindow__body">{children}</section>
            <footer className="ModalWindow__footer">
                {renderFooter(footerChildren, footerButtonCallbacks, footerButtonTexts)}
            </footer>
        </Modal>
    );
};

ModalWindow.propTypes = propTypes;

ModalWindow.defaultProps = defaultProps;
