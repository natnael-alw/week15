

export default function forms(props){
let createStudent = props.createStudent
let setNewStudentName =props.setNewStudentName
let setNewState= props.setNewState
let setNewStudentPhone = props.setNewStudentPhone
let studentCreationAlert= props.studentCreation
let closeAlert = props.closeAlert
// let stateValue = props.stateValue
    return(
    <form  id="form" onSubmit={createStudent}  >
<div className=" form-group">
    {studentCreationAlert&& <div className='alert alert-success alert-dismissable '>
   <div className="close"> <a onClick={closeAlert} className="close" data-dismiss="alert" aria-label="close">&times;</a></div>
    <strong>Success!</strong> 

</div>}

    <button id="submitButton" className="btn btn-primary mt-2 mb-2 form-control" >
            Submit
        </button><br/>
       fullName <input className="form-control is-invalid" id="validationServer01" onChange={(e)=>setNewStudentName(e.target.value)} required/><br/>
        
      
       phoneNumber <input className="form-control is-valid" onChange={(e)=>setNewStudentPhone(e.target.value)}required/><br/>
       
        State<input className="form-control is-valid" /*value={stateValue}*/ type="dropdown" onChange={(e)=>setNewState(e.target.value)}required/>
      
       
</div>
    </form>

    )
}