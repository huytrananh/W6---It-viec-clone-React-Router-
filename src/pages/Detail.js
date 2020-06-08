import React, {useEffect, useState} from 'react'
import { useParams} from "react-router-dom"
import {Badge, Button, Row, Col,Container} from 'react-bootstrap'
import Moment from 'react-moment'
import 'moment-timezone'



export default function Detail(props) {
    const { id } = useParams()

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
        return(
            <div>Loading</div>
        )
    }
    return (
        <Container>
            <Row>
                <Col xs={2}></Col>
                <Col xs={10}>
                    <h1>{detailItem.title}</h1>
                    <h6>{detailItem.tags.map(tag => (<Badge style={{marginLeft:'10px'}} variant="secondary" className="badge-style">{tag}</Badge>))}</h6>
                    <div>
                        <h4>${detailItem.salary}</h4>
                        <h4>{detailItem.city} District {detailItem.district}</h4>
                        <h4><Moment fromNow>{detailItem.time}</Moment></h4>
                    </div>
                    <div>
                        <h1>Benefits</h1>
                        <h4 >{detailItem.benefits.map(benefits => (<li>{benefits}</li>))}</h4>
                    </div>
                    <div>
                        <h1>Description</h1>
                        <h4>{detailItem.description}</h4>
                    </div>
                    <Button variant="danger" style={{width:'100%'}}>Apply Now</Button>
                </Col>
            </Row>
            
            
        </Container>
    )
}
