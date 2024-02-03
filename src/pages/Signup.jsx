import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./../../public/assets/logo.png";
import { registerUser } from "../helpers/authHelper";

const Login = () => {
    const navigate = useNavigate()
    const [user,setUser] =useState()
    const [error,setError] = useState('')

    const onInputchange = (e) => {
        setUser({...user,[e.target.name]:e.target.value})
    }

    const onPasswordConfirmchange = (e) => {
        if(e.target.value != user.password){
            setError("Password does not match")
        }
        else setError("")
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log("form submitted")
        const result = registerUser(user)
        if(result){
            navigate('/login')
        }
    }
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100 ">
      <div className="w-[840px] bg-white rounded-lg grid grid-cols-2 overflow-hidden drop-shadow-lg">
        <div className="px-8 py-16">
          <h2 className="text-indigo-500 font-bold text-2xl mb-6">Signup</h2>
          <form onSubmit={e => onFormSubmit(e)} className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-indigo-100  rounded-md group">
                <input onChange={e => onInputchange(e)}
                  name="firstname"
                  className="text-gray-700 px-4 py-2 rounded-md outline-none focus:ring-indigo-500 w-full bg-transparent"
                  type="text"
                  placeholder="Firstname"
                />
              </div>
              <div className="bg-indigo-100  rounded-md group">
                <input onChange={e => onInputchange(e)}
                  name="lastname"
                  className="text-gray-700 px-4 py-2 rounded-md outline-none focus:ring-indigo-500 w-full bg-transparent"
                  type="text"
                  placeholder="Lastname"
                />
              </div>
            </div>

            <div className="bg-indigo-100  rounded-md group">
              <input onChange={e => onInputchange(e)}
                name="email"
                className="text-gray-700 px-4 py-2 rounded-md outline-none focus:ring-indigo-500 w-full bg-transparent"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="bg-indigo-100  rounded-md group">
              <input onChange={e => onInputchange(e)}
                name="password"
                className="text-gray-700 px-4 py-2 rounded-md outline-none focus:ring-indigo-500 w-full bg-transparent"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="bg-indigo-100  rounded-md group">
              <input onChange={e => onPasswordConfirmchange(e)}
                name="confirm-password"
                className="text-gray-700 px-4 py-2 rounded-md outline-none focus:ring-indigo-500 w-full bg-transparent"
                type="password"
                placeholder="Confirm Password"
              />
            </div>
            <div className="bg-indigo-100  rounded-md group">
              <input onChange={e => onInputchange(e)}
                name="mobile"
                className="text-gray-700 px-4 py-2 rounded-md outline-none focus:ring-indigo-500 w-full bg-transparent"
                type="text"
                placeholder="Mobile"
              />
            </div>
            <button type="submit" className="rounded-full bg-indigo-500 px-4 py-2 text-white">
              Signup
            </button>
          </form>
          <p className="text-gray-600 mt-6">
            Already have account?{" "}
            <Link to='login' className="text-indigo-500 font-semibold">Login</Link>
          </p>
          {error && <p className="absolute bottom-8 text-red-500 text-sm">{error}</p>}
        </div>

        <div className="bg-indigo-500 flex justify-center items-center">
          <div className="flex flex-col items-center">
            <img className="w-[160px]" src={Logo} />
            <h2 className="font-Kalam text-xl text-slate-200 mt-2">
              Track your bugs in smart way!
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
