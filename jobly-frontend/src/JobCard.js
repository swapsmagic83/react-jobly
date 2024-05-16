import React,{useState} from "react"

const JobCard = ({id,title,salary,equity,companyName,handle,applyToJobs}) =>{
    const [isClicked, setIsClicked] = useState(false);
    async function apply(e){
        e.preventDefault()
        if(!isClicked){
            applyToJobs(id)
            setIsClicked(true)
        }
    }
    return (
        <div style={{border: "1px solid black"}}>
            <p>{title}</p>
            <small>{companyName}</small>
            <p>Salary: {salary}</p>
            <p>Equity: {equity}</p>
            <button onClick={apply} disabled={isClicked}>
                {isClicked ? "Applied" : "Apply"}
            </button>
        </div>
        
    )
}
export default JobCard