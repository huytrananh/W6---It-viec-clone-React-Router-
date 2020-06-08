import React, {useEffect, useState} from 'react'
import {Spinner, Container} from 'react-bootstrap'
import JobCard from './../components/JobCard'

export default function Jobs() {

    let [jobs, setJobs] = useState(null)

    const getJobslData = async() => {
        let url = `http://localhost:3001/jobs/`
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
        <Container>
            {jobs && jobs.map(item => <JobCard job={item} key={item.id} />)}
        </Container>
        // <div>
        //     <h1>{jobs.map(item => {
        //         return (
        //             <div>{item.img}</div>
        //         )
        //     })}</h1>
        // </div>
    )
}
