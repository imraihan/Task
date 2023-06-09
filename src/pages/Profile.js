import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
 
  const { username, email, contact_number, address, user_details} = user.userData;
  return (
   <div className="flex flex-col items-center pt-12 justify-center">
     <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-end px-4 pt-4">
          <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            <span className="sr-only">Open dropdown</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" /></svg>
          </button>
          {/* Dropdown menu */}
          <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2" aria-labelledby="dropdownButton">
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
              </li>
             </ul>
          </div>
        </div>
        <div className="flex flex-col items-center pb-10">
          <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="" alt="" />
          <label>User Name</label>
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{username}</h5>
            <h6 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{email}</h6>
            <h6 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{address}</h6>
            <h6 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{contact_number}</h6>
            <h6 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user_details}</h6>
        </div>
      </div>
   </div>
  )
}

export default Profile