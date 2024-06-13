import React, { useState, useEffect } from 'react';
import DeleteStudent from './DeleteStudent';
import SearchBar from '../SearchBar/SearchBar';
import './StudentManagement.css'
const StudentManagement = () => {
  const [students, setStudents] = useState([]);
 
 const [sortBy, setSortBy] = useState("Alphabetically")
 const [filterBy, setFilterBy] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:4001/students');
      const data = await response.json();
      setStudents(data);
    };

    fetchData();
  }, [] );

  const deleteStudent = (studentId) => {
    // Make a fetch DELETE request to delete the product
    fetch(`http://localhost:4001/students/${studentId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to delete the student');
        }
        // Remove the student from the local state
        setStudents((prevStudents) => prevStudents.filter((student) => student.id !== studentId));
      })
      .catch((error) => {
        console.error('Error deleting the student:', error);
        alert('Failed to delete the student');
      });
  };

  
 

  const filteredStudents = students.filter(student => {
    if (filterBy === "All") {
      return true
    } else {
      return student.category === filterBy
    }
  })

return (
  <div className='student-management'>
    
    <h2>Student Management</h2>
  
         <div>
         <h2>Delete Students</h2>
         <SearchBar 
    sortBy={sortBy} 
    setSortBy={setSortBy} 
    filterBy={filterBy} 
    setFilterBy={setFilterBy}/>
    <ul className='delete'>
      {filteredStudents.map((student) => (
        <li key={student.id}>
          {student.name}{' '}
          <DeleteStudent studentId={student.id} onDeleteStudent={deleteStudent} />
        </li>
        
      ))}
      
    </ul>
    </div>
  </div>
);
};
export default StudentManagement;
