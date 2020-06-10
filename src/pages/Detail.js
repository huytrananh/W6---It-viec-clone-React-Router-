import React, {useEffect, useState} from 'react'
import { useParams} from "react-router-dom"
import {Badge, Button, Row, Col,Container, Spinner} from 'react-bootstrap'
import Moment from 'react-moment'
import 'moment-timezone'
import Login from './Login'
import { useHistory } from "react-router-dom";
import {useSelector} from 'react-redux'



export default function Detail(props) {
    let history = useHistory()
    const loginPage = () => {
        history.push(`/login`)
    }
    const { id } = useParams()
    const user = useSelector(state => state.user)
    let [detailItem, setDetailItem] = useState(null)

    const getDetailData = async() => {
        let url = `${process.env.REACT_APP_BACKEND_SERVER_URL}/jobs/${id}`
        let data = await fetch(url)
        let result = await data.json()
        console.log("The data detail result is: ", result)
        setDetailItem(result)
    }

    useEffect(() => {
        getDetailData()
    }, [])

    if(detailItem === null){
        return(<div><Spinner animation="border" /></div>)
    }
    return (
        <div className="body-detail">
            <div className="navbar-detail">
                <img src={'https://itviec.com/itviec-black-square-facebook.png'} style={{width:'150px'}, {height:'100px'}}/>
                    <Col style={{textAlign:'right'}}>{user.isAuthenticated ? <div style={{color: 'white'}}>Welcome, {user.name}</div> 
                    : <div style={{color: 'red'}}>Login</div>}</Col>
            </div>
            <Container className="main-section">
                <Row>
                    <Col xs={2} className="logo-detail">
                        <img src={'https://itviec.com/itviec-black-square-facebook.png'} style={{width:'50px'}}/>
                    </Col>
                    <Col xs={10}>
                        <h2>{detailItem.title}</h2>
                        <h5>{detailItem.tags.map(tag => (<Badge style={{marginLeft:'10px'}} variant="secondary" className="badge-style">{tag}</Badge>))}</h5>
                        <div className="box1">
                            <div>${detailItem.salary}</div>
                            <div>{detailItem.city} District {detailItem.district}</div>
                            <div><Moment fromNow>{detailItem.time}</Moment></div>
                        </div>
                        <div className="box2">
                            <h2>Benefits</h2>
                            <div >{detailItem.benefits.map(benefits => (<li>{benefits}</li>))}</div>
                        </div>
                        <div className="box3">
                            <h2>Description</h2>
                            <p>{detailItem.description}</p>
                        </div>
                        <Button onClick={loginPage} variant="danger" style={{width:'100%'}} >Apply Now</Button>
                    </Col>
                </Row> 
            
        </Container>
    </div>
    )
}
