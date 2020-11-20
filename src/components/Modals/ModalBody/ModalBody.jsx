import React, { useState } from 'react'
import { Modal, Button, Form, Alert } from 'react-bootstrap'
import auth from '../../../startup/firebase'

function ModalBody(props) {
    const {
        ssut,
        sut,
        handleClose
    } = props

    //LoginStateHooks
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState('')
    const [signupError, setSignupError] = useState('')

    //AuthenticationMethods
    const clearErrors = () => {
        setSignupError('')
        setLoginError('')
    }
    const login = async () => {
        try {
            await auth.signInWithEmailAndPassword(email, password)
            alert('Logged in')
            handleClose()
        } catch (err) {
            setLoginError(err.message)
        }
    }
    const signup = async () => {
        try {
            await auth.createUserWithEmailAndPassword(email, password)
            alert('Account Created')
            handleClose()
        } catch (err) {
            setSignupError(err.message)
        }
    }

    return (
        <Modal.Body>
            <Form>
                {sut && <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>}
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Enter email"
                    />
                    {sut &&
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                    }
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                    />
                    <Form.Text className="text-muted">
                        {sut ? 'Already' : 'Don\'t'} have an account? { }
                        <p
                            style={{ textDecoration: 'underline', color: 'blue', cursor: 'pointer', display: 'inline' }}
                            onClick={() => {
                                ssut()
                                clearErrors()
                            }}
                        >
                            {sut ? 'Login' : 'Signup'}
                        </p> Instead.
                        </Form.Text>
                    {signupError &&
                        <Alert variant={'danger'}>{signupError}</Alert>
                    }
                    {loginError &&
                        <Alert variant={'danger'}>{loginError}</Alert>
                    }
                </Form.Group>

                <Button
                    variant={sut ? "success" : "primary"}
                    type="submit"
                    style={{ width: '100%' }}
                    onClick={e => {
                        e.preventDefault();
                        clearErrors();
                        if (sut)
                            signup();
                        else
                            login();
                    }}
                >
                    {sut ? 'Signup' : 'Login'}
                </Button>
            </Form>
        </Modal.Body>
    )


}

export default ModalBody
