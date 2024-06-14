import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header/Header';
import StudentContainer from './components/StudentContainer/StudentContainer';
import StudentApplicant from './components/StudentApplicant/StudentApplicant';
import QuestionCard from './components/QuestionCard/QuestionCard';
import StudentEdit from './components/StudentEdit/StudentEdit';
import AddStudent from './components/AddStudent/AddStudent';
import ApplicantForm from './components/ApplicantForm/ApplicantForm';
import EditApplicant from './components/EditApplicant/EditApplicant';
import StudentManagement from './components/Student Management/StudentManagement';
import StudentApplMgmt from './components/StudentApplMgmt/StudentApplMgmt';
import About from './components/About/About';

function App() {
  const [students, setstudents] = useState([])

  useEffect(() => {
    fetch("http://localhost:4001/students") 
    .then(r => r.json())
  .then(setstudents)
    
  }, [])

  const [applicants, setApplicants] = useState([])
  useEffect(() => {
      fetch("http://localhost:4001/studentApplicants") 
      .then(r => r.json())
    .then(setApplicants)
  }, [])
  function handleAddStudent(newStudent){
    setstudents([...students, newStudent])
    }
    function handleAddApplicant(newApplicant){
      setApplicants([...applicants, newApplicant])
      }
  return (
    <>
    <div className="App">
     <Header/>
     </div>
     <About/>
     <main className="main-section">
      <p className = "student-details">
     <StudentContainer students={students} setstudents={setstudents}/>
     </p>
     </main>
     <StudentApplicant applicants={applicants} setApplicants={setApplicants}/>
     <QuestionCard/>
    <AddStudent onAddStudent={handleAddStudent}/>
    <ApplicantForm onAddApplicant={handleAddApplicant}/>
     <StudentEdit />
     <EditApplicant />
     <StudentManagement/>
     <StudentApplMgmt/>
     </>
  );
}

export default App;
