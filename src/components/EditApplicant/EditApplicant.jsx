import React, { useState } from 'react';

function EditApplicant() {
  const [applicantId, setapplicantId] = useState('');
  const [applicantData, setapplicantData] = useState(null);
  

  const handleapplicantIdChange = (e) => {
    setapplicantId(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Fetch employee data based on the entered ID
    fetch(`http://localhost:4001/studentApplicants/${applicantId}`)
      .then((resp) => {
        if (resp.testScore === 404) {
          throw new Error('applicant not found');
        }
        return resp.json();
      })
      .then((data) => {
        setapplicantData(data)
        console.log(data)
      })
      .catch((error) => {
        console.error('Error fetching employee data:', error);
      });
  };

  const handleUpdateapplicant = (updatedData) => {
    // Send a PATCH request to update the employee using updatedData
    fetch(`http://localhost:4001/studentApplicants/${applicantId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        // Handle the response from the server, if needed
        console.log('applicant updated:', data);
      })
      .catch((error) => {
        console.error('Error updating applicant:', error);
      });
  };
       
  return (
    <div className='card1'>
      <h2>Update applicant</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Enter applicant ID:</label>
          <input
            type="text"
            value={applicantId}
            onChange={handleapplicantIdChange}
          />
        </div>
        <button type="submit">Fetch applicant</button>
      </form>

      {applicantData && (
        <ApplicantUpdateForm
          applicantData={applicantData}
          onUpdateapplicant={handleUpdateapplicant}
        />
      )}
    </div>
  );
}

function ApplicantUpdateForm({ applicantData, onUpdateapplicant }) {
  // Create state variables for the fields  to update
  //const [id, setId] = useState(applicantData.id);
  //const [id, setid] = useState(applicantData.id)
  const [fullName, setFullName] = useState(applicantData.fullName);
   const [userName, setUserName] = useState(applicantData.userName);
  const [email, setEmail] = useState(applicantData.email);
  const [address, setAddress] = useState(applicantData.address);
  const [phone, setPhone] = useState(applicantData.phone);
  const [testScore, settestScore] = useState(applicantData.testScore);
  const [program, setProgram] = useState(applicantData.program);
  const [interview, setinterview] = useState(applicantData.interview);
  const [admissionStatus, setadmissionStatus] = useState(applicantData.admissionStatus);
  const [question1, setquestion1] = useState(applicantData.question1);
  const [question2, setquestion2] = useState(applicantData.question2);
  const handleUpdateClick = () => {
    // Construct updatedData object with the fields  to update
    const updatedData = {
       
        fullName,
        userName,
        email,
        address,
        phone,
        testScore,
        program,
        interview,
        admissionStatus,
        question1,
        question2
      
    } ;

    onUpdateapplicant(updatedData);
  };
 
  return (
    <div className='card1'>
      <h3>applicant update</h3>
      <p>ID: {applicantData.id}</p>
      
      <div>
        <label>Full Name:</label>
        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      </div>
      <div>
        <label>userName:</label>
        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
      </div>
      
      <div>
        <label>email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      
      <div>
        <label>Address:</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <div>
        <label>Phone:</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div>
        <label>testScore:</label>
        <input type="text" value={testScore} onChange={(e) => settestScore(e.target.value)} />
      </div>
      <div>
        <label>Program:</label>
        <input type="text" value={program} onChange={(e) => setProgram(e.target.value)} />
      </div>
      <div>
        <label>interview:</label>
        <input type="text" value={interview} onChange={(e) => setinterview(e.target.value)} />
      </div>
      <div>
        <label>Admission Status:</label>
        <input type="text" value={admissionStatus} onChange={(e) => setadmissionStatus(e.target.value)} />
      </div>
      <div>
        <label>question1:</label>
        <input type="text" value={question1} onChange={(e) => setquestion1(e.target.value)} />
      </div>
      <div>
        <label>question2:</label>
        <input type="text" value={question2} onChange={(e) => setquestion2(e.target.value)} />
      </div>
      <button onClick={handleUpdateClick}>Update applicant</button>
      
    </div>
  );
}

export default EditApplicant;
