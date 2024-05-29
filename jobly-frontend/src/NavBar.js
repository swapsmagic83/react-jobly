import React from "react";
import { NavLink } from "react-router-dom";
import {Navbar} from "reactstrap"
import "./Home.css"

function NavBar({currentUser}) {
 
    return(
        <div className="NavBar">
            <Navbar>
                <NavLink className="NavBar-NavLink"  to='/'>
                    Jobly
                </NavLink>

                {currentUser && <NavLink className="NavBar-NavLink"  to='/companies'>
                    Companies
                </NavLink>}

                {currentUser && <NavLink className="NavBar-NavLink"  to='/jobs'>
                    Jobs
                </NavLink>}

                {currentUser && <NavLink className="NavBar-NavLink"  to='/profile'>
                    Profile
                </NavLink>}
            
                {!currentUser && <NavLink className="NavBar-NavLink"  to='/login'>
                    Login
                </NavLink>}
                {!currentUser &&<NavLink className="NavBar-NavLink"  to='/register'>
                    SignUp
                </NavLink>}
                
                {currentUser &&
                <NavLink className="NavBar-NavLink"  to='/logout'>
                    Logout
                </NavLink>}
            </Navbar>
        </div>
    )
}
export default NavBar