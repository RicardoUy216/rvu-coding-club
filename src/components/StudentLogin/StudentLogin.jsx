import React, { useState} from 'react';
import './StudentLogin.css'
function StudentLogin({  setLoggedIn1, students}) {
 
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
 
  const [studentData, setstudentData] = useState(null);
  const [loginError, setLoginError] = useState('');
  const [logIn, setLogIn] = useState(false)
  
console.log(students)
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const user = students.find(user => user.name === name && user.password === password);

    if (user) {
      // Successful login
      setLoggedIn1(true);
      fetchstudentData(name);
      setLogIn(!logIn)
      setLoginError(loginError)
      } else {
       
  setLoginError('Invalid name or password');
     }};
  
  const fetchstudentData = (name) => {
    // Fetch student data based on the provided name
    
    fetch(`/students?name=${name}`)
      .then((resp) => resp.json())
      .then((data) => {
        // Assuming data is an array with one student object
        console.log(data)
        if (data.length === 1) {
          setstudentData(data[0]);
        } else {
          setstudentData(null);
          setLoginError('student not found');
        }
      })
      .catch((error) => {
        console.error('Error fetching student data:', error);
      });
  };

  return (
    <div>
      <div className='login'>
        <div className='login-container'>
      <h2>student Login</h2>
      <div className='login-fields'>
      <form onSubmit={handleFormSubmit}>
        <div>
         
          <input
            type="text"
            placeholder='Your name'
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
         
          <input
            type="password"
            placeholder='password'
            name="password"
            value={password}
           onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">{logIn ? "Log out" : "Log in"}</button>
      </form>
      </div>
      {loginError && <p>{loginError}</p>}
      </div>
      </div>
      {studentData && (
        <div className='student-login'>
          <h2>student Data</h2>
          <p>Name: {studentData.name}</p>
          <img src={studentData.imageUrl} alt={studentData.name}/>
          <p>Username:{studentData.username}</p>
          <p>email: {studentData.email}</p>
          <p>address:{studentData.address}</p>
          <p>phone:{studentData.phone}</p>
          <p>enrolled:${studentData.enrolled}</p>
          <p>Program:{studentData.program}</p>
          <p>Current Grade:{studentData.currentGrade}</p>
          <p>Balance to Pay: ${studentData.balanceToPay}</p>
           
         </div>
           )}
        
    </div>
  );
}

export default StudentLogin;

