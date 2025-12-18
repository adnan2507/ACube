import './Login.css'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
function Login(){

    const [username,setUsername] = useState("");
    const [password,setpassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    function loginSubmit(){
    if (username === "admin" && password === "admin123") {
      setError("");
       navigate("/home");
    } else {
      setError("Invalid username or password");
    }
    }
    function usernameChange(event:any){
        setUsername(event.target.value)
    }
    function passwordChange(event:any){
         setpassword(event.target.value)
    }
return (
    <>
    <div className="container">
        <h2 className='title'>A Cube</h2>
        <div className='Card'>
        <label htmlFor="Login"><b>Login</b></label>
            <input className='inputBox'
                type="text" 
                placeholder="username"
                value={username}
                onChange={usernameChange}
            />
             <input type="password" 
                placeholder="Password"
                className='inputBox'
                value={password}
                onChange={passwordChange}
            />
            {error && (
                <div className="">
                  {error}
                </div>
              )}
            <button className='submitBtn' onClick={loginSubmit}>Submit</button>
        </div>
    </div>
</>
)
    
  

}
export default Login