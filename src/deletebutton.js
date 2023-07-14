function Button(props){
let studentDelete = props.task
    return(
        <button className="btn btn-danger btn-sm" onClick={studentDelete}>Delete</button>
    )
}
export default Button