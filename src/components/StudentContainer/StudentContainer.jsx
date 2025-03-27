import React, {useState} from 'react'
import StudentDetails from '../StudentDetails/StudentDetails'
import SearchBar from '../SearchBar/SearchBar'
import SearchById from '../SearchById/SearchById'
import './StudentContainer.css'

function StudentContainer({students, setStudents}) {
  const [sortBy, setSortBy] = useState("Alphabetically")
  const [filterBy, setFilterBy] = useState("")
  const [searchedStudent, setSearchedStudent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const sortedStudents = [...students].sort((studentA, studentB) => {
    if (sortBy === "Alphabetically") {
      return studentA.name.localeCompare(studentB.name)
    } else {
      return studentA.currentGrade - studentB.currentGrade
    }
  })
  const filteredStudents = sortedStudents.filter(student => {
    if (filterBy === "All") {
      return true
    } else {
      return student.program === filterBy
    }
  })
  const handleSearchStudentById = () => {
    // Filter students based on the entered student ID
    const foundStudent = students.find(student => (student.id) === (searchTerm));

    if (foundStudent) {
      setSearchedStudent(foundStudent);
    } else {
      alert('Student not found');
    }
  };

  return (
    <div className='student-cont'>
      <div> <h2>STUDENTS</h2> </div>
      <div>
      {searchedStudent && (
        <div >
         
          <h3>Searched Student</h3>
          <div className='inventory'>
          <h4>Name: {searchedStudent.name}</h4>
          <p>currentGrade: {searchedStudent.currentGrade}</p>
          <img className='image-container' src={searchedStudent.imageUrl} alt={searchedStudent.name} />
           <p>{searchedStudent.program}</p>
           <p>Balance To Pay: {searchedStudent.balanceToPay}</p>
          </div>
        </div>
      )} 
      <SearchById onSearchStudent={handleSearchStudentById} 
      searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <SearchBar 
      sortBy={sortBy} 
      setSortBy={setSortBy} 
      filterBy={filterBy} 
  setFilterBy={setFilterBy}/>
  
        <h1>Student Info</h1>
        <StudentDetails students={filteredStudents} setStudents={setStudents}/>
        </div>
        </div> 
  )
}
export default StudentContainer