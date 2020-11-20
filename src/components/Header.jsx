import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import UserDropDown from './UserDropDown'


function Header(props) {

    const {
        setShowLogin,
        user,
    } = props;
    return (
        <header style={headerStyle}>
            <Container fluid >
                <Row style={{ paddingTop: '10px' }}>
                    <Col>
                        <Button variant={'secondary'} style={{ float: "left", backgroundColor: "#3c1b47", border: 'none' }}  >Ask a Question</Button>
                    </Col>
                    <Col xs={6}>
                        <h1 style={{ color: "white" }}>Quora</h1>
                    </Col>
                    <Col >
                        {user ? <UserDropDown /> :
                            <Button style={{ float: "right" }} onClick={setShowLogin} >Login / Signup</Button>
                        }
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

const headerStyle = {
    display: "flex",
    background: '#453c4a',
    position: 'fixed',
    width: "100%",
    padding: '10px',
    zIndex: '1',
    opacity: '0.98'
}

export default Header
