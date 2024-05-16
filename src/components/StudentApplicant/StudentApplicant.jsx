import React, {useEffect, useState} from 'react'
import ApplicantDetails from '../ApplicantDetails/ApplicantDetails'

function StudentApplicant() {
  const [applicants, setApplicants] = useState([])
  useEffect(() => {
      fetch("http://localhost:4001/studentApplicants") 
      .then(r => r.json())
    .then(setApplicants)
  }, [])


  return (
    <div>
        <ApplicantDetails applicants={applicants}/>
    </div>
  )
}

export default StudentApplicant