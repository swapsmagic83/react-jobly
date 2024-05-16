import React,{useState,useEffect} from "react";
import JoblyApi from "./api"
import { Link } from "react-router-dom";
import CompanyDetails from "./CompanyDetails";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";

const CompaniesList = () =>{
   let [companies,setCompanies] = useState([])
    const [isLoading,setIsLoading] =useState(true)

     async function search(name){
        let companies = await JoblyApi.searchByCompanyName(name)
        setCompanies(companies)
    }
   
    useEffect(() =>{
        async function getAllCompanies(){
            companies = await JoblyApi.getAllCompanies()
            setCompanies(companies)
            setIsLoading(false)
        }
        getAllCompanies()
    },[])
  
    return (
        <>
        <SearchForm search={search}/>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div >
                    {companies.map(company => (
                        <CompanyCard 
                        key={company.handle}
                        handle={company.handle} 
                        name={company.name}
                        description={company.description}
                        logoUrl={company.logoUrl}
                       
                        />
                     ))}
                </div>
            )}
        </>
    )
}
export default CompaniesList