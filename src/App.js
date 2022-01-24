import './App.css';
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard';
import AllStudents from './components/AllStudents';
import AddStudents from './components/AddStudents';
import Hooks from './components/Hooks';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import EditStudent from './components/EditStudent'
import React,{useState} from 'react'

export const StudentContext = React.createContext();
// const url = "https://61ee1f7ed593d20017dbac50.mockapi.io/students/"

function App() {
  let data = {
    earning:"40,000",
    annual:"2,40,000",
    task:20,
    pending:26

  }

  let [students,setStudents] = useState([])


  return <>
    <BrowserRouter>
      
        <div style={{display:"grid",gridTemplateColumns:"15% 85%"}}>
            <div >
                <Sidebar/>
            </div>
            <div>
            <StudentContext.Provider value={{students,setStudents}}>
                <Routes>
                      <Route path='/dashboard' element={<Dashboard data={data}/>}/>
                      <Route path ='/all-students' element={<AllStudents/>}/>
                      <Route path = '/add-student' element={<AddStudents/>}/>
                      <Route path ='/edit-student/:id' element={<EditStudent/>}/>
                      <Route path ='/hooks' element={<Hooks/>}/>
                      <Route path = '/' element={<Dashboard data={data}/>}/>
                </Routes>
              </StudentContext.Provider>
            </div>
        </div>
    </BrowserRouter>
  </>
}

export default App;
