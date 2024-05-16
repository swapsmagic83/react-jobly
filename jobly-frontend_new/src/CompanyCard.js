import React from "react"
import { Link } from "react-router-dom"

const CompanyCard = ({handle,name,description,logoUrl}) =>{
    return(
        <Link to={`/companies/${handle}`}>
            <div style={{border: "1px solid black"}}>
                <h6>{name}</h6>
                <small>{description}</small>
                <img src={logoUrl}></img>
               
            </div>
        </Link>
    )
}
export default CompanyCard  