import React, {useState} from "react";

function AddStudent ({onAddStudent}) {
    const [ newStudent, setNewStudent] = useState({
       
      name: '',
      idnumber: '',
      imageUrl: '', 
      username: '',
      password: '',
      email: '',
      schedule: '',
      address: '',
      phone: '',
       status:'',
      program: '',
      currentGrade: '',
      balanceToPay: 0
    });
    const handleInputChange = (e) => {
        setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
      };


const handleAddStudent = async () => {
    if (  !newStudent.name || !newStudent.idnumber
        || !newStudent.imageUrl || !newStudent.username
        || !newStudent.password || !newStudent.status
        || !newStudent.program || !newStudent.currentGrade
        || !newStudent.balanceToPay || !newStudent.status
        || !newStudent.program || !newStudent.currentGrade
        || !newStudent.balanceToPay
    ) {
        alert('Please fill in all fields');
        return;
}
try {
    const response = await fetch('http://localhost:4001/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newStudent),
    });
  
    if (!response.ok) {
      throw new Error('Failed to add the new student');
    }
    const addedStudent = await response.json();

    // Pass the new Student to the parent component
    onAddStudent(addedStudent);

    // Clear the form
    setNewStudent({ 
       
        name: '',
        idnumber: '',
        imageUrl: '', 
        username: '',
        password: '',
        email: '',
        schedule: '',
        address: '',
        phone: '',
         status:'',
        program: '',
        currentGrade: '',
        balanceToPay: 0
     })
    } catch (error) {
    console.error('Error adding the new Student:', error);
      alert('Failed to add the new Student');
    }
  };

  return (
    <div className= "add-Student">
      <h2>Add New Student</h2>
      <ul>
      <form> 
      
    <li>  <label>
        Name:
        <input type="text" name="name" value={newStudent.id} onChange={handleInputChange} />
      </label> </li>
      <li>  <label>
        Identification Number:
        <input type="text" name="idnumber" value={newStudent.idnumber} onChange={handleInputChange} />
      </label> </li>
      <li>  <label>
        Image:
      <input type="text" name="imageUrl" value={newStudent.imageUrl}placeholder="Image URL" onChange={handleInputChange}/>
      </label> </li>
      <li>  <label>
        username:
        <input type="text" name="username" value={newStudent.username} onChange={handleInputChange} />
      </label></li>
      <li>   <label>
        Password:
        <input type="text" name="password" value={newStudent.password} onChange={handleInputChange} />
      </label></li>
      <li>   <label>
        Email:
        <input type="text" name="email" value={newStudent.email} onChange={handleInputChange} />
      </label> </li>
      <li>   <label>
        Schedule:
        <input type="text" name="schedule" value={newStudent.schedule} onChange={handleInputChange} />
      </label></li>
      <li> <label>
        Address:
        <input type="text" name="address" value={newStudent.address} onChange={handleInputChange} />
      </label></li>
      <li>  <label>
        phone or Mobile number:
        <input type="text" name="phone" value={newStudent.phone} onChange={handleInputChange} />
      </label></li>
      <li>   <label>
        status:
        <input type="text" name="status" value={newStudent.status} onChange={handleInputChange} />
      </label> </li>
      <li>   <label>
        program:
        <input type="text" name="program" value={newStudent.program} onChange={handleInputChange} />
      </label></li>
      <li> <label>
        currentGrade:
        <input type="text" name="currentGrade" value={newStudent.currentGrade} onChange={handleInputChange} />
      </label></li>
      <li>  <label>
        balanceToPay:
        <input type="number" name="balanceToPay" value={newStudent.balanceToPay} onChange={handleInputChange} />
      </label></li>
      </form>
      </ul>
      <button onClick={handleAddStudent}>Add Student</button>
    </div>
  );
};

export default AddStudent;
