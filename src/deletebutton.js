function Button(props){
let studentDelete = props.task
    return(
        <button className="btn btn-danger" onClick={studentDelete}>Delete</button>
    )
}
export default Button