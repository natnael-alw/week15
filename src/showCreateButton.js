import { useState } from 'react'
import Form from './form'
export default function ShowUpdateButton(){
const [click, setClick]= useState(false)
const createButtonDisplay= ()=>{
    setClick(!click)
}

return(


    <div>
     { click? <  Form/>:null}
     <button onClick={createButtonDisplay}></button>
    </div>
)

}

// function Show (){
//     const  [show, setShow]= useState(false)
//     const click =()=>{
//         setShow(!show)
//     }


//     return(
//         <div>
//             {show? <ReviewList/>: null}
//             <button onClick={click}>show Reviews</button>
//         </div>
//     )
// }
// export default Show