import './App.css';
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard';
import AllStudents from './components/AllStudents';
import AddStudents from './components/AddStudents';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import EditStudent from './components/EditStudent'
import {useState} from 'react'
function App() {
  let data = {
    earning:"40,000",
    annual:"2,40,000",
    task:20,
    pending:26

  }

  let [students,setStudents] = useState([
      {
        name:"Kiran",
        email:"kiran@gmail.com",
        mobile:"12345678",
        class:"B30WD"
      },
      {
        name:"Raj",
        email:"Raj@gmail.com",
        mobile:"45678123",
        class:"B20WE"
      },
      {
        name:"Hemant",
        email:"hemant@gmail.com",
        mobile:"12345678",
        class:"B30WD"
      }
  ]);

  return <>
    <BrowserRouter>
        <div style={{display:"grid",gridTemplateColumns:"15% 85%"}}>
            <div >
                <Sidebar/>
            </div>
            <div>
                <Routes>
                      <Route path='/dashboard' element={<Dashboard data={data}/>}/>
                      <Route path ='/all-students' element={<AllStudents data={{students,setStudents}}/>}/>
                      <Route path = '/add-student' element={<AddStudents data={{students,setStudents}}/>}/>
                      <Route path ='/edit-student/:id' element={<EditStudent data={{students,setStudents}}/>}/>
                      <Route path = '/' element={<Dashboard data={data}/>}/>
                </Routes>
            </div>
        </div>
    </BrowserRouter>
  </>
}

export default App;
