import { Fragment } from 'react';
import classes from './Modal.module.css';

import ReactDOM from "react-dom";

const BackDrop = props => {
    return <div className={classes.backdrop} onClick={props.onModalShow}></div>
}

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const Modal = props => {

    const portalEl = document.getElementById('overlays');
    return <Fragment>
        {ReactDOM.createPortal(<BackDrop onModalShow={props.onModalShow} />, portalEl)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalEl)}
    </Fragment>
}

export default Modal;