import React, { useState, useEffect } from 'react';
import './AdminLogin.css'
function AdminLogin({ setLoggedIn2})  {
  const [userName, setuserName] = useState('')
  const [password, setPassword] = useState('')
  const [admins, setAdmins] = useState([])
     
      const [loginError, setLoginError] = useState('');
      const [logIn, setLogIn] = useState(false)
      
      useEffect(() => {
        fetch("http://localhost:4001/admins")
            .then(r => r.json())
            .then(setAdmins) 
            
      }, []);
   
   const handleFormSubmit = (e) => {
        e.preventDefault();
       
        const user = admins.find(user => user.userName === userName && user.password === password);
        if (user) {
          // Successful login
          setLoggedIn2(true);
          
          setLogIn(!logIn)
          setLoginError(loginError)
          } else {
           
      setLoginError('Invalid userName or password');
    }
      }
    return (
      <div>
        <div className='login'>
          <div className='login-container'>
        <h3>Administrator Login</h3>
        <div className='login-fields'>
        <form onSubmit={handleFormSubmit}>
        <div>
          
          <input
            type="text"
            placeholder='Your userName'
            userName="userName"
            value={userName}
            onChange={(e) => setuserName(e.target.value)}
          />
        </div>
        <div>
         
          <input
            type="password"
            placeholder='password'
            userName="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        <button type="submit">{logIn ? "Log out" : "Log in"}
       </button>
         </form>
      </div>
      </div>  
      </div>
      </div>
    );
  };
  export default AdminLogin