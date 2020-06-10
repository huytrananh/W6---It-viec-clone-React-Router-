import React from 'react'
import {Row, Col, Badge} from 'react-bootstrap'
import Moment from 'react-moment'
import { useHistory } from "react-router-dom";
import 'moment-timezone'
import {useSelector} from 'react-redux'


export default function JobCard(props) {
    
    let history = useHistory()

    const user = useSelector(state => state.user)

    const jobSelect = () => {
        history.push(`/jobs/${job.id}`)
    }

    let job = props.job

    return (
        <div className="job-content" onClick={() => jobSelect()}>
            <Row className="row">
                <Col xs={2}>
                    <div className="jobcard-logo" style={{textAlign: 'center'}}>
                        <img src={'https://itviec.com/itviec-black-square-facebook.png'} style={{width:'50px'}}/>
                    </div>
                </Col>
                <Col xs={8}>
                    <div className="jobcard-descriptions">
                        <h2 className="jobcard-title">{job.title}</h2>
                        {user.isAuthenticated ? <div>$ {job.salary}</div> : <div>$ Login to see</div>}
                        <div>
                            <ul className="benefit-list">
                                {job.benefits.map(benefit => (
                                <li>{benefit}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            {job.tags.map(tag => (
                                <Badge style={{marginLeft:'5px'}} variant="secondary" className="badge-style">{tag}</Badge>
                            ))}
                        </div>
                    </div>
                </Col>
                <Col xs={2}>
                    <div className="date-location-box">
                        {job.isHotjob ? (<div className="hotjob-label">Hot Job</div>) : (<div></div>)}
                        <div className="jobcard-location">
                            <div>{job.city}</div>
                            <div>District {job.district}</div>
                        </div>
                        <Moment fromNow>{job.time}</Moment> 
                    </div>
                </Col>
            </Row>
        </div>
    )
}
