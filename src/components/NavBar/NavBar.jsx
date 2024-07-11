import React from 'react';
import { Link } from 'react-router-dom';
import'./NavBar.css'
function Navbar() {
  return (
    <>
    <div className='home'>
    <nav>
      <div className="top-links">
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
          <li><Link to="/StudentLogin">Student login</Link></li>
          <li><Link to="/StudentApplicantLogin">Applicant Login</Link></li>
          <li><Link to="/ApplicantForm">Apply Here!</Link></li>
          <li><Link to="/QuestionCard">Assessment</Link></li>
       </ul>

      
      <footer>
        
        <ul>
          <li><Link to="/AdminLogin">Administration Login</Link></li>
          <li><Link to="/StudentContainer">All Students</Link></li>
          <li><Link to="/StudentApplicant">All Applicants</Link></li>
          <li><Link to="/AddStudent">Add Student</Link></li>
          <li><Link to="/StudentEdit">Update Students</Link></li>
          <li><Link to="/EditApplicant">Update Applicant</Link></li>
          <li><Link to="/StudentManagement">Manage Students</Link></li>
          <li><Link to="/StudentApplMgmt">Manage  Applicant</Link></li>
        </ul>
        </footer>
        </div>
      </nav>
      </div>
      </>
  );
}

export default Navbar;