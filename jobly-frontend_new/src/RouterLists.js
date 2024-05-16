import React from "react";
import { Routes,Route} from "react-router-dom";
import Home from "./Home";
import CompaniesList from "./CompaniesList";
import CompanyDetails from "./CompanyDetails";
import JobsList from "./JobsList";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import LogoutForm from "./LogoutForm";
import UpdateUserForm from "./UpdateUserForm";

const RouterLists = ({registerUser,loginUser,username,logoutUser,currentUser,updateUser,applyToJobs}) =>{
    return (
        <div>
            <main>
            <Routes>
                <Route path="/" element={<Home username={username}/>} ></Route>
                {username && <Route path="/companies" element={<CompaniesList />} ></Route>}
                {username && <Route path="/companies/:handle" element={<CompanyDetails applyToJobs={applyToJobs}  />}  ></Route>}
                {username && <Route path="/jobs" element={<JobsList applyToJobs={applyToJobs}/>}></Route>}
                {username && <Route path="/logout"  element={<LogoutForm logoutUser={logoutUser}/>}></Route>}
                {username && <Route path="/profile" element={<UpdateUserForm username={username} currentUser={currentUser} updateUser={updateUser}/>}></Route>}
                <Route path="/login" element={<LoginForm loginUser={loginUser} user/>}></Route>
                <Route path="/register" element={<SignUpForm registerUser={registerUser}/>}></Route>
            </Routes>
            </main>
        </div>

    )

}
export default RouterLists