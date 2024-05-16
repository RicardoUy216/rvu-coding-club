import React, {useState} from 'react'

const ApplicantForm = ({onAddApplicant}) => {
    const [ newApplicant, setNewApplicant] = useState({

        id: '',
        fullName: '',
        username:'',
        email: '',
        address: '', 
        phone: '',
        testScore: '',
        program: '',
        interview: '',
        admissionStatus: '',
        question1: '',
        question2: ''
    });
    const handleInputChange = (e) => {
        setNewApplicant({ ...newApplicant, [e.target.name]: e.target.value });
      };
      const handleAddApplicant = async () => {
       /* if (  !newApplicant.id  || !newApplicant.fullName  
            || !newApplicant.username
            || !newApplicant.email || !newApplicant.address
            || !newApplicant.phone 
            || !newApplicant.program || !newApplicant.question1
            || !newApplicant.question2
        ) {
            alert('Please fill in all fields');
            return;
    }*/
    try {
        const response = await fetch('http://localhost:4001/studentApplicants', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newApplicant),
        });
      
        if (!response.ok) {
          throw new Error('Failed to add the new applicant');
        }
        const addedApplicant = await response.json();

        // Pass the new Student to the parent component
        onAddApplicant(addedApplicant);
    
        // Clear the form
        setNewApplicant({ 
           
            id: '',
            fullName: '',
            username:'',
            email: '',
            address: '', 
            phone: '',
            testScore: '',
            program: '',
            interview: '',
            admissionStatus: '',
            question1: '',
            question2: ''
         })
        } catch (error) {
        console.error('Error adding the new applicant:', error);
          alert('Failed to add the new applicant');
        }
      };
  return (
    <div className= "add-Applicant">
    <h2>Add New Applicant</h2>
    <ul>
    <form> 
    
 
    
    <li>  <label>
      Name:
      <input type="text" name="fullName" value={newApplicant.fullName} onChange={handleInputChange} />
    </label> </li>
    
    <li>  <label>
      username:
      <input type="text" name="username" value={newApplicant.username} onChange={handleInputChange} />
    </label></li>
    
    <li>   <label>
      Email:
      <input type="text" name="email" value={newApplicant.email} onChange={handleInputChange} />
    </label> </li>
   
    <li> <label>
      Address:
      <input type="text" name="address" value={newApplicant.address} onChange={handleInputChange} />
    </label></li>
    <li>  <label>
      phone or Mobile number:
      <input type="text" name="phone" value={newApplicant.phone} onChange={handleInputChange} />
    </label></li>
    <li>   <label>
      testScore:
      <input type="number" name="testScore" value={newApplicant.testScore} onChange={handleInputChange} />
  </label> </li>
    <li>   <label>
      Program applied:
      <input type="text" name="program" value={newApplicant.program} onChange={handleInputChange} />
    </label></li>
    <li> <label>
      interview:
      <input type="text" name="interview" value={newApplicant.interview} onChange={handleInputChange} />
    </label></li>
    <li>  <label>
      admissionStatus:
      <input type="text" name="admissionStatus" value={newApplicant.admissionStatus} onChange={handleInputChange} />
</label></li>
    <li> <label>
        Answer the questions in not more than 250 words,
      Question1: What is your career goal five years from now?
      <input type="text" name="question1" value={newApplicant.question1} onChange={handleInputChange} />
    </label></li>
    <li>  <label>
      Question2: Why did you choose this program?
      <input type="text" name="question2" value={newApplicant.question2} onChange={handleInputChange} />
    </label></li>
    </form>
    </ul>
    <button onClick={handleAddApplicant}>Apply</button>
  </div>
  )
}

export default ApplicantForm