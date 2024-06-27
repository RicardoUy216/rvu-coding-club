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
import StudentLogin from './components/StudentLogin/StudentLogin';
import StudentApplicantLogin from './components/StudentApplicantLogin/StudentApplicantLogin';
import NavBar from './components/NavBar/NavBar';
import AdminLogin from './components/AdminLogIn/AdminLogIn';
import { Route, Switch, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
function App() {
  const [students, setstudents] = useState([])
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isLoggedIn1, setLoggedIn1] = useState(false);
  const [isLoggedIn2, setLoggedIn2] = useState(false);
  useEffect(() => {
    fetch("http://localhost:4001/students") 
    .then(r => r.json())
  .then(setstudents)
    
  }, [])
console.log(students)
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
     <div>
    <NavBar />
      <Switch>
        <Route path="/About">
        <About/>
        </Route>
        
      <Route path="/StudentLogin">
          <StudentLogin students={students} setstudents={setstudents} isLoggedIn1={isLoggedIn1} setLoggedIn1={setLoggedIn1}/>
        </Route>
        <Route path="/StudentApplicantLogin">
          <StudentApplicantLogin applicants={applicants} setApplicants={setApplicants} isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/>
        </Route>
        <Route  path="/ApplicantForm"> 
         {isLoggedIn ? <ApplicantForm onAddApplicant={handleAddApplicant}/> : <Redirect to="/StudentApplicantLogin" />}
        </Route>
        <Route  path="/QuestionCard">
        {isLoggedIn ? <QuestionCard /> : <Redirect to="/StudentApplicantLogin" />}
        </Route>
        <Route path="/AdminLogin">
        <AdminLogin isLoggedIn2={isLoggedIn2} setLoggedIn2={setLoggedIn2} />
      </Route>
        <Route  path="/StudentContainer"> 
         {isLoggedIn2 ? <StudentContainer students={students} setstudents={setstudents}/> : <Redirect to="/AdminLogin" />}
        </Route>

      <Route path="/StudentApplicant">
        {isLoggedIn2 ? <StudentApplicant applicants={applicants} setApplicants={setApplicants}/> : <Redirect to="/AdminLogin" />}
      </Route>
      <Route path="/AddStudent">
        {isLoggedIn2 ? <AddStudent onAddStudent={handleAddStudent}/> : <Redirect to="/AdminLogin" />}
      </Route>
        <Route path="/StudentEdit">
        {isLoggedIn2 ? <StudentEdit /> : <Redirect to="/AdminLogin" />}
      </Route>

      <Route  path="/EditApplicant"> 
         {isLoggedIn2 ? <EditApplicant /> : <Redirect to="/AdminLogin" />}
        </Route>

      <Route path="/StudentManagement">
        {isLoggedIn2 ? <StudentManagement /> : <Redirect to="/AdminLogin" />}
      </Route>
      
        <Route path="/StudentApplMgmt">
        {isLoggedIn2 ? <StudentApplMgmt /> : <Redirect to="/AdminLogin" />}
      </Route>
        <Route exact path="/">
          <Header />
        </Route>
      </Switch>
    </div>
     </>
  );
}

export default App;
