import React,{useState}  from "react";
const UpdateUserForm = ({username,currentUser,updateUser}) =>{
    const [formData,setFormData] = useState({username:currentUser.username,
                                            firstName:currentUser.firstName,
                                            lastName:currentUser.lastName,
                                            email:currentUser.email})

    const handleChange = (e) =>{
        const {name,value} = e.target
        setFormData(formData =>({
            ...formData,
            [name]:value
        }))
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        updateUser(formData.username,formData)
    }
return(
    <form onSubmit={handleSubmit}>
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
export default UpdateUserForm