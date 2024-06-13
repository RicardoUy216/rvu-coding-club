import React, {useState} from 'react'
import Detail from '../Detail/Detail';
import './StudentDetails.css'
const StudentDetails = ({students}) => {
const [searchTerm, setSearchTerm]=useState('')

const handleSearch = (event) => {
  setSearchTerm(event.target.value);
};
const filteredStudents = students.filter((student) =>
 student.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const studentList = filteredStudents.map((student) => {
   return <Detail key={student.id} student={student}/>
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
    
    
        {studentList}
        
    </div>
    </>

  )
}

export default StudentDetails