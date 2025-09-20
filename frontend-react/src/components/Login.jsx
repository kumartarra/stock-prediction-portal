import React, { useContext } from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../AuthProvider'

const Login = () => {
  const [username,SetUsername] = useState('')
  const [password,SetPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [error, setError] = useState("")
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)


  const handleLogin = async (e)=>{
    e.preventDefault();
    setLoading(true);

    const userData = {username, password}
    console.log("userData =>", userData)

    try{
      const response = await axios.post("http://127.0.0.1:8000/api/v1/token/", userData)
      localStorage.setItem("accessToken", response.data.access)
      localStorage.setItem("refreshToken", response.data.refresh)
      console.log("login done")
      setIsLoggedIn(true)
      navigate("/")
    }catch(error){
      setError("invalid details")
      console.error("Invalid details")
    }finally{
      setLoading(false)
    }
  }
  return (
    <>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6 p-5 bg-light-dark rounded'>
            <h3 className='text-light text-center mb-4'>Login into our Portal</h3>
            <form onSubmit={handleLogin}>
              <div className='mb-3'>
                <input type='text' className='form-control' placeholder='Enter Username' value={username} onChange={(e)=> SetUsername(e.target.value)}/>
              </div>
              <div className='mb-3'>
                <input type='password' className='form-control mb-3' placeholder='Set password' value={password} onChange={(e)=> SetPassword(e.target.value)}/>
              </div>

              {error && <div className='text-danger'>{error}</div>}

              {loading ? (
                <button type='submit'  className='btn btn-info d-block mx-auto' disabled><FontAwesomeIcon icon={faSpinner} spin/>Login... wait</button>
              ) : (
                <button type='submit'  className='btn btn-info d-block mx-auto'>Login</button>
              )} 
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
