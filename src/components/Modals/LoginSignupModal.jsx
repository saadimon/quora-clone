import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import ModalBody from './ModalBody/ModalBody'

function LoginSignupModal(props) {
    const {
        handleClose,
        show,

    } = props



    const [signupToggle, setSignupToggle] = useState(false)
    return (
        <Modal show={show} onHide={handleClose} size={'lg'} >
            <Modal.Header closeButton >
                <Modal.Title>{signupToggle ? 'Signup' : 'Login'}</Modal.Title>
            </Modal.Header>
            <ModalBody
                sut={signupToggle}
                ssut={() => setSignupToggle(!signupToggle)}
                handleClose={handleClose}
            />
        </Modal>
    )
}

export default LoginSignupModal
