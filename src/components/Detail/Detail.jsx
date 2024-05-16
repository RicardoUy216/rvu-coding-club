import React from 'react'

const Detail = ({student}) => {
  const {
      
      name,
      idNumber,
      imageUrl, 
      username,
      password,
      email,
      schedule,
      address,
      phone,
       status,
      program,
      currentGrade,
      balanceToPay

  } = student
  return (
    <div className='card'>
         
        <h3>Name: {name}</h3>
        <p>Identification Number: {idNumber}</p>
        <img className="image-container" src={imageUrl} alt={name} />
        <p>Username: {username}</p>
        <p>Password: {password}</p>
        <p>email: {email}</p>
        <p>Schedule: {schedule}</p>
        <p>address: {address}</p>
        <p>phone: {phone}</p>
        <p>status: {status}</p>
        <p> program: {program} </p>
        <p> currentGrade: {currentGrade} </p>
        <p> BalanceToPay: {balanceToPay}</p>
    </div>
  )
}

export default Detail

