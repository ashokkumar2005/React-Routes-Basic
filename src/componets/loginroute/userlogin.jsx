import { useNavigate } from "react-router-dom"
export default function Userpage(){

    const navigate = useNavigate()
    const handleroute = ()=>{
        navigate("/userlist")
    }
    return(
        <>
        <label>Email-Id</label>
        <input type="text" placeholder="enter mail id"></input>
        <label>Password</label>
        <input type="text" placeholder="enter pass"></input>
        <button onClick={handleroute}>Submit</button>
        </>
    )
}