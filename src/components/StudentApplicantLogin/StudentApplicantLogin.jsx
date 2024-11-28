import React, { useState } from 'react';
import './StudentApplicantLogin.css'
function StudentApplicantLogin({ setLoggedIn, applicants })  {
  const [name, setname] = useState('')
  const [password, setpassword] = useState('')
  const [studentApplicantData, setstudentApplicantData] = useState(null);
      const [loginError, setLoginError] = useState('');
      const [logIn, setLogIn] = useState(false)
      
      const handleFormSubmit = (e) => {
        e.preventDefault();
    
        const user = applicants.find(user => user.name === name && user.password === password);
    
        if (user) {
          // Successful login
          setLoggedIn(true);
          fetchstudentApplicantData(name);
          setLogIn(!logIn)
          setLoginError(loginError)
          } else {
           
      setLoginError('Invalid name or password');
         }};
      
      const fetchstudentApplicantData = (name) => {
        // Fetch applicants data based on the provided name
        
        fetch(`/studentApplicants?name=${name}`)
          .then((resp) => resp.json())
          .then((data) => {
            // Assuming data is an array with one applicants object
            console.log(data)
            if (data.length === 1) {
              setstudentApplicantData(data[0]);
            } else {
              setstudentApplicantData(null);
              setLoginError('applicants not found');
            }
          })
          .catch((error) => {
            console.error('Error fetching applicants data:', error);
          });
      };
    
      return (
        <div>
          <div className='login'>
            <div className='login-container'>
          <h2>applicants Login</h2>
          <div className='login-fields'>
          <form onSubmit={handleFormSubmit}>
            <div>
             
              <input
                type="text"
                placeholder='Your name'
                name="name"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </div>
            <div>
             
              <input
                type="password"
                placeholder='password'
                name="password"
                value={password}
               onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            <button type="submit">{logIn ? "Log out" : "Log in"}</button>
          </form>
          </div>
          {loginError && <p>{loginError}</p>}
          </div>
          </div>
          {studentApplicantData && (
            <div className='student-applicantLogin'>
              <h2>applicants Data</h2>
              <p>ID number: {studentApplicantData.id}</p>
              <p>name: {studentApplicantData.name}</p>
              <img src={studentApplicantData.imageUrl} alt={studentApplicantData.name}/>
              <p>password:{studentApplicantData.password}</p>
              <p>Email:{studentApplicantData.email}</p>
              <p>Address: {studentApplicantData.address}</p>
              <p>phone:{studentApplicantData.phone}</p>
              <p>testScore:{studentApplicantData.testScore}</p>
              <p>program:${studentApplicantData.program}</p>
              <p>Interview:{studentApplicantData.interview}</p>
              <p>Admission Status:{studentApplicantData.admissionStatus}</p>

               
             
           
               </div>
               )}
            
        </div>
      );
  };
  export default StudentApplicantLogin

  