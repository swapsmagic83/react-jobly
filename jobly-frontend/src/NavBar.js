import React from "react";
import { NavLink } from "react-router-dom";
import {Navbar} from "reactstrap"

function NavBar({currentUser}) {
 
    return(
        <div>
            <Navbar>
                <NavLink to='/'>
                    Jobly
                </NavLink>

                {currentUser && <NavLink to='/companies'>
                    Companies
                </NavLink>}

                {currentUser && <NavLink to='/jobs'>
                    Jobs
                </NavLink>}

                {currentUser && <NavLink to='/profile'>
                    Profile
                </NavLink>}
            
                {!currentUser && <NavLink to='/login'>
                    Login
                </NavLink>}
                {!currentUser &&<NavLink to='/register'>
                    SignUp
                </NavLink>}
                
                {currentUser &&
                <NavLink to='/logout'>
                    Logout
                </NavLink>}
            </Navbar>
        </div>
    )
}
export default NavBar