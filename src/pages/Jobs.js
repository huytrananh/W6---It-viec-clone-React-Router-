import React, {useEffect, useState, useRef} from 'react'
import {Spinner, Container, Row, Col, InputGroup, Dropdown, FormControl, Button} from 'react-bootstrap'
import JobCard from './../components/JobCard'
import { useHistory, useLocation} from "react-router-dom"
import {useSelector, useDispatch} from 'react-redux'



export default function Jobs() {

    let history = useHistory()
    const dispatch = useDispatch()

    const keywordRef = useRef(null)
    const cityRef = useRef(null)

    const search = (e) => {
        e.preventDefault()
        dispatch({type: 'SEARCH', keyword: keywordRef.current.value})
    }

    const user = useSelector(state => state.user)
    const jobs = useSelector(state => state.jobs)

    
    const getJobslData = async() => {
        let url = `${process.env.REACT_APP_BACKEND_SERVER_URL}/jobs`
        let data = await fetch(url)
        let result = await data.json()
        console.log("The data result is: ", result)
        dispatch({type:'UPLOAD-JOBS', jobs: result})
    }

    useEffect(() => {
        getJobslData()
    }, [])
    
    if(jobs === null){
        return(<div><Spinner animation="border" /></div>)
    }
    return (
        <div>
            <div className="navbar">
                <Row style={{alignItems:'center'}}>
                    <Col xs={2}><img src={'https://itviec.com/itviec-black-square-facebook.png'} style={{width:'150px'}, {height:'150px'}}/></Col>
                    <Col xs={7}><InputGroup size="lg"><FormControl  ref={keywordRef} aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="Keyword skill (Java, iOS...), Job Title, Company..." style={{borderRadius:'0'}}/></InputGroup></Col>
                    <Col xs={2}>
                        <Dropdown style={{textAlign:'center'}}>
                            <Dropdown.Toggle size="lg" id="dropdown-basic" style={{borderRadius:'0', color:'#6D6D6D', backgroundColor:'white'}}>Ho Chi Minh</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item  href="#/action-1">All Cities</Dropdown.Item>
                                <Dropdown.Item  href="#/action-2">Ho Chi Minh</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Ha Noi</Dropdown.Item>
                                <Dropdown.Item  href="#/action-3">Da Nang</Dropdown.Item>
                                <Dropdown.Item  href="#/action-3">Others</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col xs={1}><Button onClick={search} style={{borderRadius:'0'}} variant="danger" size="lg">Search</Button></Col>  
                </Row>
                <Row>
                    <Col style={{textAlign:'right'}}>{user.isAuthenticated ? <div style={{color: 'white'}}>Welcome, {user.name}</div> 
                    : <div style={{color: 'red'}}>Login</div>}</Col>
                </Row>
            </div>
            <Container>
                {jobs && jobs.map(item => <JobCard job={item} key={item.id} />)}
            </Container>
        </div>
    )
}
