import React from 'react'

function Applicants({applicant}) {
    const {
        id,
        name,
        password,
        email,
        address,
        phone,
        testScore,
        program,
        interview,
        admissionStatus,
        question1,
        question2
    } = applicant


  return (
    <div className='card'>
        <h3>Student Applicant</h3>
        <p>Identification number: {id}</p>
        <h4>Name: {name}</h4>
        <p>Password: {password}</p>
        <p>email: {email}</p>
        <p>address: {address}</p>
        <p>phone: {phone}</p>
        <p>testScore: {testScore}</p>
        <p> program: {program} </p>
        <p> interview: {interview} </p>
        <p> Admission status: {admissionStatus}</p>
        <p>question1: {question1}</p>
        <p>question2: {question2}</p>
    </div>
        
  )
}

export default Applicants