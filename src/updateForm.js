
export default function UpdateStudent(props){
     const setUpdateName=props.setUpdateName
     const setUpdatePhone=props.setUpdatePhone
     const setUpdateState=props.setUpdateState
     const updateStudent=props.updateStudent
     const student=props.student
    

    return(
        <>
            <form className="form-control mt-1"   >
           <p>Update Student info</p>
                <button onClick={(e)=>updateStudent(e,student.id)} className="btn btn-success btn-sm mb-2 mt-0" placeholder=""> Submit
                </button> <br/>
                <input onChange={(e)=>setUpdateName(e.target.value)} placeholder="Name" /> <br/>
                <input onChange={(e)=>setUpdatePhone(e.target.value)} placeholder="phone"/><br/>
                <input  onChange={(e)=>setUpdateState(e.target.value)} placeholder="State"/><br/> 
             
            </form>
        </>
        
            )

}