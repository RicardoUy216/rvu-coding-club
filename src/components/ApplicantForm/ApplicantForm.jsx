import React, {useState} from 'react'
import './ApplicantForm.css'
import QuestionCard from '../QuestionCard/QuestionCard';

const ApplicantForm = ({onAddApplicant}) => {
    const [ newApplicant, setNewApplicant] = useState({

        id: '',
        name: '',
        imageUrl: '',
      password:'',
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
        if (  !newApplicant.id  || !newApplicant.fullName  
            || !newApplicant.imageUrl|| !newApplicant.username
            || !newApplicant.email || !newApplicant.address
            || !newApplicant.phone 
            || !newApplicant.program || !newApplicant.question1
            || !newApplicant.question2
        ) {
            alert('Please fill in all fields');
            return;
    }
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
            name: '',
            imageUrl: '',
            password:'',
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
    <>
    <div className= "card1">
    <h2>Welcome Applicant!</h2>
    <h3>Please fill up all the required boxes below:</h3>
    <form> 
    <p>  <label>
      Name:
      <input type="text" name="name" value={newApplicant.name} onChange={handleInputChange} />
    </label> </p>
    <p>  <label>
        Image:
      <input type="text" name="imageUrl" value={newApplicant.imageUrl}placeholder="Image URL" onChange={handleInputChange}/>
      </label></p>
   <p>  <label>
      username:
      <input type="text" name="password" value={newApplicant.password} onChange={handleInputChange} />
    </label></p>
    
   <p>   <label>
      Email:
      <input type="text" name="email" value={newApplicant.email} onChange={handleInputChange} />
    </label> </p>
   
   <p> <label>
      Address:
      <input type="text" name="address" value={newApplicant.address} onChange={handleInputChange} />
    </label></p>
   <p>  <label>
      phone or Mobile number:
      <input type="text" name="phone" value={newApplicant.phone} onChange={handleInputChange} />
    </label></p>
   <p>   <label>
    <p>Please put 0 on this box</p>
      testScore:
      <input type="number" name="testScore" value={newApplicant.testScore} onChange={handleInputChange} />
  </label> </p>
   <p>   <label>
      Program applied:
      <input type="text" name="program" value={newApplicant.program} onChange={handleInputChange} />
    </label></p>
   <p> <label>
      Interview(Please schedule the date and time you are available for interview):
      <input type="text" name="interview" value={newApplicant.interview} onChange={handleInputChange} />
    </label></p>
   <p>  <label>
      admissionStatus((Please put "in-process" in the box)):
      <input type="text" name="admissionStatus" value={newApplicant.admissionStatus} onChange={handleInputChange} />
</label></p>
   <p> <label>
        <h4>Answer the questions 1 and 2 in not more than 250 words,</h4>
      Question1: What is your career goal five years from now?
      <input type="text" name="question1" value={newApplicant.question1} onChange={handleInputChange} />
    </label></p>
   <p>  <label>
      Question2: Why did you choose this program?
      <input type="text" name="question2" value={newApplicant.question2} onChange={handleInputChange} />
    </label></p>
    </form>
    <h4>Please review all the information you type in the boxes before clicking Apply.</h4>
    <button className='apply-button' onClick={handleAddApplicant}>Apply</button>
  </div>
      <QuestionCard/>
  </> 
)
}

export default ApplicantForm