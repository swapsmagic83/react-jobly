import React from "react"
import JobCard from "./JobCard"

const CompanyJobList = ({jobs,applyToJobs}) =>{
    
    return (
        <div>
            {jobs.map(job => (
                <JobCard 
                key={job.id}
                id={job.id} 
                title={job.title}
                handle={job.handle}
                salary={job.salary}
                equity={job.equity}
                companyName={job.companyName}   
                applyToJobs={applyToJobs}
                />

            ))}
        </div>
    )

}
export default CompanyJobList