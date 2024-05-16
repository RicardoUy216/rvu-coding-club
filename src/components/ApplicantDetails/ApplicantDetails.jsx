import React from 'react'
import Applicants from '../Applicants/Applicants'


function ApplicantDetails({applicants}) {
   const applicantsList = applicants.map((applicant) => {
    return <Applicants key={applicant.id} applicant={applicant} />
   })
  return (
    <div className='card-container'>
     {applicantsList}
    </div>
  )
}

export default ApplicantDetails