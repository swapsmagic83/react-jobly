import React, {useState} from "react"

const SearchForm = ({search}) =>{
    const initial_state ={}
    const [formData,setFormData] = useState(initial_state)
    const handleChange = (e) =>{
        const {name,value} = e.target
        setFormData(formData =>({
            ...formData,
            [name]:value
    }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        search(formData.name)
        setFormData(initial_state)
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                
                <label htmlFor="name"></label>
                <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter search term..."
                value={formData.name}
                onChange={handleChange}
                ></input>
                <button >Submit</button>
                
            </form>
        </div>
    )
}
export default SearchForm