import React, {useEffect, useState, useRef} from 'react'
import {Tabs, Tab, Nav, Card, Button, Container, Form} from 'react-bootstrap'
import { useDispatch } from "react-redux"
import { useHistory } from 'react-router-dom'

export default function Login() {
    const dispatch = useDispatch()
    const history = useHistory()


    //use REF
    const userNameRef = useRef(null)
    const userEmailRef = useRef(null)
    const userPasswordRef = useRef(null)


    const login = (e) => {
        e.preventDefault()
        let user = {
            name: userNameRef.current.value, // get value from current
            email: userEmailRef.current.value,
            password: userPasswordRef.current.value,
        }
        dispatch({type: 'LOGIN', payload: user}) //define an action
        history.goBack()
    }

    return (
        <div>
            <div className="navbar-detail">
                    <img src={'https://itviec.com/itviec-black-square-facebook.png'} style={{width:'150px'}, {height:'100px'}}/>
            </div>
            <Container style={{padding: '70px 350px 50px 350px'}}>
                <Card style={{width:'400px'}}>
                    <Card.Header>
                        <Nav variant="tabs" defaultActiveKey="#first">
                            <Nav.Item>
                                <Nav.Link href="#first">Create Account</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#second">Sign In</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                    <Card.Body className="body-login">
                        <Card.Title style={{textAlign:'center'}}>Sign up to apply faster</Card.Title>                
                        <Button className='button-signup'>
                            <div><img style={{width:'50px'}} src="https://images.vexels.com/media/users/3/137283/isolated/preview/8ca486faebd822ddf4baf00321b16df1-google-icon-logo-by-vexels.png"/></div>
                            <div>Sign up to Google</div>
                        </Button>
                        <hr></hr>
                        <Form.Group>
                            <Form.Control ref={userNameRef} style={{marginBottom:'10px'}}type="email" placeholder="Name" />
                            <Form.Control ref={userEmailRef} style={{marginBottom:'10px'}} type="email" placeholder="Email" />
                            <Form.Control ref={userPasswordRef} style={{marginBottom:'10px'}} type="email" placeholder="Password" />
                        </Form.Group>
                        <Button onClick={login} className='button-signup'>                        
                            Sign up to Google
                        </Button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}
