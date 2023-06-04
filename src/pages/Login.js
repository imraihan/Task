import React from "react";
import { useState, useEffect } from "react";
import { login } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);
  // console.log("user", user);
  const isAuthenticated = !!user && !!user.userData && !!user.userData.username && !!user.userData.password;

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const { username, password } = formData;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login"); 
    }else {
      navigate("/profile");
    }
  }, [isAuthenticated,navigate]);
  

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
    setFormData({username: "", password: ""});
    // navigate('/profile');
  };
  
  return (
    <>
    <div className="bg-gradient-to-r from-blue-500 bg-cover">  <br />
      <section className="flex flex-col items-center text-gray-700 text-xl font-mono">
        <h1 className="">Login Here</h1>
      </section> <br />
      <div className="flex flex-col justify-center items-center">
        <form onSubmit={onSubmit} className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 "></div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold "
                htmlFor="grid-username"
              >
                User Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-username"
                type="text"
                name="username"
                value={username}
                onChange={onChange}
                placeholder="raihan"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold "
                htmlFor="grid-password"
              >
                Password
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="password"
                name="password"
                value={password}
                onChange={onChange}
                placeholder="******************"
              />
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/2"></div>
            <div className="md:w-2/3">
              <button
                className="shadow bg-gradient-to-r from-blue-400 to-blue-500 hover:from-red-500 hover:to-yellow-500 focus:shadow-outline focus:outline-none text-white font-sans-serif py-2 px-4 rounded"
                type="button"
                onClick={onSubmit}
              >
                Login
              </button>  
            </div>
          </div>
        </form><br />
      </div>
      </div>  
    </>
  );
};

export default Login;
