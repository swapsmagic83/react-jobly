import React, {useState,useEffect} from "react"
import { useParams } from "react-router-dom"
import JoblyApi from "./api"
import CompanyJobList from "./CompanyJobList"

const CompanyDetails = ({applyToJobs}) =>{
    let {handle} = useParams()
    const [company,setCompany] = useState(null)
    const [isLoading,setIsLoading] =useState(true)
    useEffect(() =>{
        async function getCompany(){
           let comp = await JoblyApi.getCompany(handle)
            setCompany(comp)
            setIsLoading(false)
        }
        getCompany()
    },[handle])
    return (
        <>
       {isLoading ? (
         <p>Loading...</p>
       ) :
       (
        <div>
            <h4>{company.name}</h4>
            <p>{company.description}</p>
            <CompanyJobList jobs={company.jobs} applyToJobs={applyToJobs}/>
        </div>
       )}
        </>
    )
    
}
export default CompanyDetails