import React, { useState, useEffect } from 'react';
import DeleteApplicant from './DeleteApplicant';
import SearchBarApp from '../StudentApplicant/SearchBarApp';
import './StudentApplicant.css'
const StudentApplMgmt = () => {
  const [applicants, setApplicants] = useState([]);
 
 const [sortBy, setSortBy] = useState("Alphabetically")
 const [filterBy, setFilterBy] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:4001/studentApplicants');
      const data = await response.json();
      setApplicants(data);
    };

    fetchData();
  }, [] );

  const deleteApplicant = (applicantId) => {
    // Make a fetch DELETE request to delete the product
    fetch(`http://localhost:4001/studentApplicants/${applicantId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to delete the applicant');
        }
        // Remove the applicant from the local state
        setApplicants((prevApplicants) => prevApplicants.filter((applicant) => applicant.id !== applicantId));
      })
      .catch((error) => {
        console.error('Error deleting the applicant:', error);
        alert('Failed to delete the applicant');
      });
  };

  
 

  const filteredApplicants = applicants.filter(applicant => {
    if (filterBy === "All") {
      return true
    } else {
      return applicant.category === filterBy
    }
  })

return (
  <div className='applicant-management'>
    
    <h2>Student Applicant Management</h2>
  
         <div>
         <h2>Delete Applicants</h2>
         <SearchBarApp 
    sortBy={sortBy} 
    setSortBy={setSortBy} 
    filterBy={filterBy} 
    setFilterBy={setFilterBy}/>
    <ul className='delete'>
      {filteredApplicants.map((applicant) => (
        <li key={applicant.id}>
          {applicant.fullName}{' '}
          <DeleteApplicant applicantId={applicant.id} onDeleteApplicant={deleteApplicant} />
        </li>
        
      ))}
      
    </ul>
    </div>
  </div>
);
};
export default StudentApplMgmt;
