import React, { useState} from 'react'
import ApplicantDetails from '../ApplicantDetails/ApplicantDetails'
import SearchBarApp from './SearchBarApp'
import SearchByIdApp from './SearchByIdApp'

function StudentApplicant({applicants, setApplicants}) {

  const [sortBy, setSortBy] = useState("Alphabetically")
  const [filterBy, setFilterBy] = useState("")
  const [searchedApplicant, setSearchedApplicant] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const sortedApplicants = [...applicants].sort((applicantA, applicantB) => {
    if (sortBy === "Alphabetically") {
      return applicantA.name.localeCompare(applicantB.name)
    } else {
      return applicantA.testScore - applicantB.testScore
    }
  })
  const filteredApplicants = sortedApplicants.filter(applicant=> {
    if (filterBy === "All") {
      return true
    } else {
      return applicant.program === filterBy
    }
  })
  const handleSearchApplicantById = () => {
    // Filter students based on the entered student ID
    const foundApplicant = applicants.find(applicant => (applicant.id) === parseInt(searchTerm));

    if (foundApplicant) {
      setSearchedApplicant(foundApplicant);
    } else {
      alert('Applicant not found');
    }
  };
  return (
    <>
        <div className='applicant-container'>
      <div> <h2>STUDENT APPLICANTS</h2> </div>
      <div>
      {searchedApplicant && (
        <div >
         
          <h3>Searched Student Applicant</h3>
          <div className='inventory'>
          <h4>Name: {searchedApplicant.name}</h4>
          <p>currentGrade: {searchedApplicant.testScore}</p>
          {/*<img className='image-container' src={searchedApplicant.imageUrl} alt={searchedStudent.name} />*/}
           <p>{searchedApplicant.program}</p>
           <p>Balance To Pay: {searchedApplicant.email}</p>
          </div>
        </div>
      )} 
      <SearchByIdApp onSearchApplicant={handleSearchApplicantById} 
      searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <SearchBarApp 
      sortBy={sortBy} 
      setSortBy={setSortBy} 
      filterBy={filterBy} 
  setFilterBy={setFilterBy}/>
          </div>
        </div>
    <div>
        <ApplicantDetails applicants={filteredApplicants} setApplicants={setApplicants}/>
    </div>
    </>
  )
}

export default StudentApplicant