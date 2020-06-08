import React, {useEffect, useState} from 'react'
import {Spinner, Container} from 'react-bootstrap'
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
            <div className="navbar"></div>
            <Container>
            {jobs && jobs.map(item => <JobCard job={item} key={item.id} />)}
        </Container>
        </div>
        
    )
}
