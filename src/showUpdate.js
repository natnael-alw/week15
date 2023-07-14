import UpdateForm from './updateForm'
import { useState } from 'react'
const ShowUpdate =(props)=>{
    const setUpdateName=props.setUpdateName
     const setUpdatePhone=props.setUpdatePhone
     const setUpdateState=props.setUpdateState
     const updateStudent=props.updateStudent
     const student=props.student
    const [showUpdate, setShowUpdate]= useState(false)
    const showUpdatePanel=()=>{
     setShowUpdate(!showUpdate)
    }

    return(
        <div>
            <button className='btn btn-primary' onClick={showUpdatePanel}>update</button>
            {showUpdate&& <UpdateForm 
            setUpdateName={(e)=>setUpdateName(e)}
             setUpdatePhone={(e)=>setUpdatePhone(e)}
             setUpdateState={(e)=>setUpdateState(e)}
             updateStudent={(e)=>updateStudent(e)}
             student={student}

             />}
        </div>
    )
}


export default ShowUpdate