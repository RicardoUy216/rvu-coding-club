import React, {useState} from 'react'
import Applicants from '../Applicants/Applicants'


function ApplicantDetails({applicants}) {
  const [searchTerm, setSearchTerm]=useState('')
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredApplicants = applicants.filter((applicant) =>
   applicant.name.toLowerCase().includes(searchTerm.toLowerCase()));
  

   const applicantsList = filteredApplicants.map((applicant) => {
    return <Applicants key={applicant.id} applicant={applicant} />
   })
  return (
    <>
        <div>
      <input
       className="butt"
       type="text"
      
       placeholder="Search by name..."
       value={searchTerm}
       onChange={handleSearch}
     />
     </div>
    <div className='card-container'>
     {applicantsList}
    </div>
    </>
  )
}

export default ApplicantDetails