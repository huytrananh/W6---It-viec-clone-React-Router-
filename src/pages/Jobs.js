import React, {useEffect, useState} from 'react'
import {Spinner, Container, Row, Col, InputGroup, Dropdown, FormControl, Button} from 'react-bootstrap'
import JobCard from './../components/JobCard'

export default function Jobs() {

    let [jobs, setJobs] = useState(null)

    const getJobslData = async() => {
        let url = `${process.env.REACT_APP_BACKEND_SERVER_URL}/jobs`
        let data = await fetch(url)
        let result = await data.json()
        console.log("The data result is: ", result)
        setJobs(result)
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
                    <Col xs={7}><InputGroup size="lg"><FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="Keyword skill (Java, iOS...), Job Title, Company..." style={{borderRadius:'0'}}/></InputGroup></Col>
                    <Col xs={2}>
                        <Dropdown style={{textAlign:'center'}}>
                            <Dropdown.Toggle size="lg" id="dropdown-basic" style={{borderRadius:'0', color:'#6D6D6D', backgroundColor:'white'}}>Ho Chi Minh</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">All Cities</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Ho Chi Minh</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Ha Noi</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Da Nang</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Others</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col xs={1}><Button style={{borderRadius:'0'}} variant="danger" size="lg">Search</Button></Col>  
                </Row>
            </div>
            <Container>
                {jobs && jobs.map(item => <JobCard job={item} key={item.id} />)}
            </Container>
        </div>
        
    )
}
