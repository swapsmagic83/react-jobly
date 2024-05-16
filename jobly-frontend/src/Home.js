import React from "react"

const Home = ({username}) =>{
    return (
        <>
        <div>
        <h1>Jobly</h1>
        <h4>All the jobs in one, convenient place</h4>
        {username && <h1>Welcome Back {username}!</h1>}
        </div>
        </>
    )
}
export default Home