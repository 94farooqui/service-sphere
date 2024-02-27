import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./../../public/assets/logo.png";
import { loginUser } from "../helpers/authHelper";
import { useDispatch } from "react-redux";
import { login } from "../redux/auth/authSlice";


const Login = () => {

    const navigate = useNavigate();
    const [user,setUser] = useState()
    const [error,setError] = useState('')
    const dispatch = useDispatch()

    const onInputchange = (e) => {
        setUser({...user, [e.target.name]:e.target.value})
    }

    const onLogin = async (e) => {
        e.preventDefault();
        const result = await loginUser(user)
        if(result.status){
        dispatch(login())
            navigate('/')
        }
    }
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100 ">
      <div className="w-[840px] bg-white rounded-lg grid grid-cols-2 overflow-hidden drop-shadow-lg">
        <div className="px-8 py-16">
          <h2 className="text-indigo-500 font-bold text-2xl mb-6">Login</h2>
          <form onSubmit={(e)=>onLogin(e)} className="flex flex-col gap-4">
          <div className="bg-indigo-100  rounded-md group">
              <input
                className="text-gray-700 px-4 py-2 rounded-md outline-none focus:ring-indigo-500 w-full bg-transparent"
                name='email'
                onChange={e => onInputchange(e)}
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="bg-indigo-100  rounded-md group">
              <input
                className="text-gray-700 px-4 py-2 rounded-md outline-none focus:ring-indigo-500 w-full bg-transparent"
                name='password'
                type="password"
                onChange={e => onInputchange(e)}
                placeholder="Password"
              />
            </div>
            <button type="submit" className="rounded-md bg-indigo-500 px-4 py-2 text-white">
              Login
            </button>
          </form>
          <p className="text-gray-600 mt-6">
            Don't have account?{" "}
            <Link to='/signup' className="text-indigo-500 font-semibold">Singup</Link>
          </p>

          {error && <p className="absolute bottom-8 text-red-500 text-sm">{error}</p>}
        </div>

        <div className="bg-indigo-500 flex justify-center items-center">
          <img className="w-[160px]" src={Logo} />
        </div>
      </div>
    </div>
  );
};

export default Login;
