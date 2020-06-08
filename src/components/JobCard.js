import React from 'react'
import {Row, Col, Badge} from 'react-bootstrap'
import Moment from 'react-moment'
import { useHistory } from "react-router-dom";
import 'moment-timezone'



export default function JobCard(props) {
    let history = useHistory()
    
    const jobSelect = () => {
        history.push(`/job/${job.id}`)
    }

    let job = props.job

    return (
        <div className="job-content" onClick={() => jobSelect()}>
            <Row className="row">
                <Col xs={2}>
                    <div className="jobcard-logo">
                        <img src={job.img} />
                    </div>
                </Col>
                <Col xs={8}>
                    <div className="jobcard-descriptions">
                        <h2 className="jobcard-title">{job.title}</h2>
                        <div>$ {job.salary}</div>
                        <div>
                            <ul className="benefit-list">
                                {job.benefits.map(benefit => (
                                <li>{benefit}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            {job.tags.map(tag => (
                                <Badge variant="secondary" className="badge-style">
                                {tag}
                                </Badge>
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
