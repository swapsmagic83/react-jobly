import React,{useState, useEffect} from "react"
import JoblyApi from "./api"
import JobCard from "./JobCard"
import SearchForm from "./SearchForm"

const JobsList = ({applyToJobs}) =>{
    const [jobs,setJobs] =useState([])
    const [isLoading,setIsLoading] =useState(true)

    async function search(title){
        let jobs = await JoblyApi.searchByJobTitle(title)
        setJobs(jobs)
    }

    useEffect(() =>{
        async function getAllJobs(){
             let jobs = await JoblyApi.getAllJobs()
            setJobs(jobs)
            setIsLoading(false)
        }
        getAllJobs()
    },[])
    
    return (
        <>
        <SearchForm search={search}/>
        {isLoading ? (
            <p>Loading... </p> ):
            (<div>
                {jobs.map(job => (
                    <JobCard key={job.id}
                    id={job.id}
                    title={job.title}
                    salary={job.salary}
                    equity={job.equity}
                    companyName={job.companyName}
                    handle={job.handle}
                    applyToJobs={applyToJobs}/>
                ))}
            </div>)
        }
        </>
    )
}
export default JobsList
