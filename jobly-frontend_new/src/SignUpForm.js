import React,{useState} from "react"
import { Navigate } from "react-router-dom"
import JoblyApi from "./api"


const SignUpForm =({registerUser}) =>{

    const initial_state ={}
    const [formData,setFormData] = useState(initial_state)
    const [isUser,setIsUser] =useState(false)

    const handleChange = (e) =>{
        const {name,value} = e.target
        setFormData(formData =>({
            ...formData,
            [name]:value
        }))
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(registerUser(formData)){
            setIsUser(true)
        }
    }
    if(isUser){
        return <Navigate  username={formData.username} to='/' />
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
            id="username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}></input>
            <br></br>
            <label htmlFor="password" >Password</label>
            <input
            id="password"
            name="password"
            type="text"
            value={formData.password}
            onChange={handleChange}></input>
            <br></br>
            <label htmlFor="firstName" >First name</label>
            <input
            id="firstName"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            ></input>
            <br></br>
            <label htmlFor="lastName" >Last name</label>
            <input
            id="lastName"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}></input>
            <br></br>
            <label htmlFor="email" >Email</label>
            <input
            id="email"
            name="email"
            type="text"
            value={formData.email}
            onChange={handleChange}
            ></input>
            <br></br>
            <button >Submit</button>
        </form>
    )

}
export default SignUpForm