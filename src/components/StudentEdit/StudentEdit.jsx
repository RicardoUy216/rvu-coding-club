import React, { useState } from 'react';

function StudentEdit() {
  const [studentId, setStudentId] = useState('');
  const [studentData, setStudentData] = useState(null);
  

  const handleStudentIdChange = (e) => {
    setStudentId(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Fetch employee data based on the entered ID
    fetch(`http://localhost:4001/students/${studentId}`)
      .then((resp) => {
        if (resp.status === 404) {
          throw new Error('student not found');
        }
        return resp.json();
      })
      .then((data) => {
        setStudentData(data);
        console.log(data)
      })
      .catch((error) => {
        console.error('Error fetching employee data:', error);
      });
  };

  const handleUpdateStudent = (updatedData) => {
    // Send a PATCH request to update the employee using updatedData
    fetch(`http://localhost:4001/students/${studentId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        // Handle the response from the server, if needed
        console.log('Student updated:', data);
      })
      .catch((error) => {
        console.error('Error updating student:', error);
      });
  };
       
  return (
    <div className='card1'>
      <h2>Update Student</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Enter Student ID:</label>
          <input
            type="text"
            value={studentId}
            onChange={handleStudentIdChange}
          />
        </div>
        <button type="submit">Fetch Student</button>
      </form>

      {studentData && (
        <StudentUpdateForm
          studentData={studentData}
          onUpdateStudent={handleUpdateStudent}
        />
      )}
    </div>
  );
}

function StudentUpdateForm({ studentData, onUpdateStudent }) {
  // Create state variables for the fields  to update
  //const [id, setId] = useState(studentData.id);
  const [name, setName] = useState(studentData.name);
  const [imageUrl, setImage] = useState(studentData.imageUrl);
  const [userName, setUserName] = useState(studentData.userName);
  const [password, setPassword] = useState(studentData.password);
  const [email, setEmail] = useState(studentData.email);
  const [schedule, setSchedule] = useState(studentData.schedule);
  const [address, setAddress] = useState(studentData.address);
  const [phone, setPhone] = useState(studentData.phone);
  const [status, setStatus] = useState(studentData.status);
  const [program, setProgram] = useState(studentData.program);
  const [currentGrade, setCurrentGrade] = useState(studentData.currentGrade);
  const [balanceToPay, setBalancetoPay] = useState(studentData.balanceToPay)
  

  const handleUpdateClick = () => {
    // Construct updatedData object with the fields  to update
    const updatedData = {
      name,
      imageUrl,
      userName,
    password,
    email,
    schedule,
    address,
    phone,
    status,
    program,
    currentGrade,
    balanceToPay
      
    } ;

    onUpdateStudent(updatedData);
  };
 
  return (
    <div >
      <h3>Student Details</h3>
      <p>ID: {studentData.id}</p>
      <div>
        <label>Name:</label>
        <input type="text" value={name} 
        onChange={(e) => setName(e.target.value)} />
        
      </div>
      <div>
        <label>Image:</label>
        <input type="text" value={imageUrl} onChange={(e) => setImage(e.target.value)} />
      </div>
      <div>
        <label>userName:</label>
        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
      </div>
      <div>
        <label>password:</label>
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <label>email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>schedule:</label>
        <input type="text" value={schedule} onChange={(e) => setSchedule(e.target.value)} />
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
        <label>Status:</label>
        <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
      </div>
      <div>
        <label>Program:</label>
        <input type="text" value={program} onChange={(e) => setProgram(e.target.value)} />
      </div>
      <div>
        <label>Current Grade:</label>
        <input type="text" value={currentGrade} onChange={(e) => setCurrentGrade(e.target.value)} />
      </div>
      <div>
        <label>Balance to Pay:</label>
        <input type="text" value={balanceToPay} onChange={(e) => setBalancetoPay(e.target.value)} />
      </div>
      
      <button onClick={handleUpdateClick}>Update Student</button>
      
    </div>
  );
}

export default StudentEdit;
