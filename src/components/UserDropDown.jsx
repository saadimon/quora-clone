import React from 'react'
import { Button } from 'react-bootstrap'
import auth from '../startup/firebase'
function UserDropDown() {

    const logout = async () => {
        try {
            await auth.signOut()
            alert('Logged Out')
        } catch (err) {
            alert(err.message)
        }
    }
    return (
        <Button style={{ float: "right" }} onClick={() => { logout() }}>Logout</Button>
    )
}

export default UserDropDown
