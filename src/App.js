import './App.css';
import Button from './deletebutton'
import { useEffect, useState } from 'react';
import Form from './form'
import ShowUpdate from './showUpdate';
import {Route, Routes, Link} from 'react-router-dom'
function App() {
const API_URL=  'https://648e2ea82de8d0ea11e89bb7.mockapi.io/studentRoster'


const [student, setStudent]= useState(null)
// const [updateStudent, setUpdateStudent]=useState('')



const getStudent=()=>{
  fetch(API_URL).then((get)=>
  {return get.json()}).then((resp)=>
  {setStudent(resp)}).catch((err)=>{console.log(err)})
}
useEffect(()=>getStudent(),[])

const deleteStudent=(id)=>{
 fetch(`${API_URL}/${id}`,{
   method:'DELETE',}).then(()=>getStudent()) 
  }
  const [newStudentName, setNewStudentName]=useState('')
  const [newStudentPhone, setNewStudentPhone]=useState('')
  const [newState, setNewState]= useState('')

  // creating studentt----------------------------------------
  const [studentCreation, setStudentCreation]= useState(false)
  const createStudent=(e)=>{
    e.preventDefault()
    let newStudentObject = {
      fullName:newStudentName,
      state:newState,
      phoneNumber:newStudentPhone
    }
    console.log(newStudentName)
    fetch(API_URL,{
      method:'POST',
      body: JSON.stringify(newStudentObject),
      headers:{ 'content-Type': 'application/json'}
    }).then(()=>getStudent(),[])
    setStudentCreation(true)
  }
  const closeAlert=()=>{
    setStudentCreation(!studentCreation)
  }
  const [click, setClick]= useState(false)
  const createButtonDisplay= ()=>{
    setClick(!click)

  }
  
  // updating student------------------------
  const [updateName, setUpdateName]=useState('')
  const [updateState,setUpdateState]=useState('')
  const [updatePhone,setUpdatePhone]=useState('')
  const [updateId, setUpdateId]= useState('')
  const updateStudent = (e, student)=>{
    e.preventDefault()
    console.log(updatePhone)
   let studentUpdateObject = {...student,
     fullName:updateName,
     state: updateState,
     phoneNumber: updatePhone,
     id:updateId
   }
  fetch(`${API_URL}/${student.id}`,{
    method:'PUT',
    body: JSON.stringify({...student, fullName:updateName,
      state: updateState,
      phoneNumber: updatePhone}),
    headers: {'content-type': 'application/json'}
  }).then(()=>getStudent()).catch((err)=>{console.log(err)})
  setUpdateName()
 }
//  const [showUpdate, setShowUpdate]= useState(false)
//  const showUpdatePanel=(id)=>{
//   setShowUpdate(!showUpdate)
//  }
  
  return (
    // <div className="table">
<>
          {/* <ShowCreateButton /> */}
          {studentCreation&& <div className='alert alert-success fade in'></div>}
  <nav>
    <Link to={'/form'}> 
    <button  className='btn btn-primary btn-sm mt-2 mb-2' onClick={()=>createButtonDisplay()}>Create New Student</button>
<br/>
    </Link>
    <Link to={'/'}> 
  <button className='btn btn-success btn-sm mt-2 mb-2'>Student List</button>
    </Link>
    
    </nav>        
<Routes>
  <Route path='/form' element={ <Form
  closeAlert={()=>closeAlert()}
  studentCreation={studentCreation}
  setNewStudentName={(e)=>setNewStudentName(e)} 
  createStudent={(e)=>createStudent(e)} 
  setNewStudentPhone={(e)=>setNewStudentPhone(e)}
  setNewState={(e)=>setNewState(e)} 
  // stateValue={student.state}
  />}/>


          {/* <button  className='btn btn-primary mt-5 mb-4' onClick={createButtonDisplay}>Create New Student</button>

          {click && <Form 
          setNewStudentName={(e)=>setNewStudentName(e)} 
          createStudent={(e)=>createStudent(e)} 
          setNewStudentPhone={(e)=>setNewStudentPhone(e)}
          setNewState={(e)=>setNewState(e)} 
          stateValue={student.state}
            />} */}
          {/* <button  className='btn btn-primary mt-5 mb-4' onClick={showUpdatePanel}>Update Student</button> */}
  
     <Route path='/'     element={
      <table className='table table-striped table-dark table-bordered'>
        <thead className="thead-dark">
          <tr>
            <th>student ID</th>
            <th>Fullname</th>
            <th> Pohne</th>
            <th>State</th>
            <th>Action</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
      {student&& student.map((student)=>
          <tr key={student.id}>
          <td>{student.id}</td>
          <td>{student.fullName}</td>
          <td>{student.phoneNumber}</td>
          <td>{student.state}</td>
          {/* <td><button key={student.id} className='btn btn-primary ' 
          onClick={()=>showUpdatePanel(student.id)}>Update Student</button>
          </td> */}
          <td><Button task={()=>deleteStudent(student.id)}/></td> 
     <td>
            <div>

            {<ShowUpdate
          setUpdateName={(e)=>setUpdateName(e)}
          setUpdatePhone={(e)=>setUpdatePhone(e)}
          setUpdateState={(e)=>setUpdateState(e)}
          updateStudent={(e)=>updateStudent(e, student)}
          student={student}
          studentId ={student.id}
          
          />}      
            </div>
     </td>
          </tr>
       
        )}
        </tbody>
        
        
      </table> }
      />
      </Routes>
      
    </>
  );
}

export default App;
