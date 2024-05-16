import logo from './logo.svg';
import './App.css';
import React, {useEffect,useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterLists from './RouterLists';
import NavBar from './NavBar';
import JoblyApi from './api';

function App() {
  const [token,setToken]=useState(localStorage.getItem('token') || '')
  const [currentUser,setCurrentUser] =useState(localStorage.getItem('username') || '')
  const [currentUserProfile, setCurrentUserProfile] = useState({})
  const [jobApplicationIds, setJobApplicationIds]=useState([])
  const [err,setErr]=useState(null)

  useEffect(()=>{
    async function getCurrentUser(username){
      JoblyApi.setToken(token)
      if (!token) {
        return;
      }
      let userProfile = await JoblyApi.getCurrentUser(username)
      setCurrentUserProfile(userProfile)
      setJobApplicationIds(userProfile.applications)
      setErr(null)
    }
    getCurrentUser(currentUser)

  },[token])

  async function updateUser(username,data){
    let user = await JoblyApi.updateUser(data)
    setCurrentUserProfile(user)
  }

  async function loginUser(data){
    try{
      let token = await JoblyApi.login(data)
      setToken(token)
      localStorage.setItem('token',token)
      localStorage.setItem('username', data.username)
      setCurrentUser(data.username)
      setErr(null)
      return true
    } catch(err){
      console.error('Invalid username/password',err)
      setErr(err)
    }
   
  }

  async function registerUser(data){
    try{
      let token = await JoblyApi.register(data)
      localStorage.setItem('token',token)
      localStorage.setItem('username', data.username)
      setCurrentUser(data.username)
      setErr(null)
      }catch(err){
        console.error('sign up failed',err)
        setErr(err)
      } 
  }

  function logoutUser(){
    setToken('')
    setCurrentUser('')
    localStorage.setItem('token','')
    localStorage.setItem('username','')
  }
  
  function applyToJobs(id){
    if(jobApplicationIds.includes(id)){
      return
      } else{
        JoblyApi.applyToJobs(currentUser,id)
        setJobApplicationIds([...jobApplicationIds,id])
      }
  }

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar currentUser={currentUser}/>
      
      <RouterLists  registerUser={registerUser} 
                  loginUser={loginUser} 
                  username={currentUser} 
                  logoutUser={logoutUser}
                  currentUser={currentUserProfile}
                  updateUser={updateUser}
                  applyToJobs={applyToJobs}
                  />
                  <p style={{color:'red'}}>{err}</p>
      </BrowserRouter> 

    </div>
  );
}

export default App;
