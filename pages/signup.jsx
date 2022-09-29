import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

function Signup() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <Image
          className="w-full h-full object-cover"
          src="/assets/shopforme4.jpg"
          alt="Me"
          width="1000px"
          height="1000"
        />
      </div>

      <div className="bg-gray-800/30 flex flex-col justify-center">
        <form className="max-w-[600px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg boder">
          <h2 className="text-2xl text-white font-semibold text-center">
            SIGN UP
          </h2>

          <div className="flex flex-col text-gray-400 py-2">
            {/* <label>UserName</label> */}
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
              placeholder="Username"
            />
          </div>

          <div className="flex flex-col text-gray-400 py-2">
            {/* <label>First Name</label> */}
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
              placeholder="First Name"
            />
          </div>

          <div className="flex flex-col text-gray-400 py-2">
            {/* <label>Middle Name</label> */}
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
              placeholder="Middle Name"
            />
          </div>

          <div className="flex flex-col text-gray-400 py-2">
            {/* <label>Last Name</label> */}
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
              placeholder="Last Name"
            />
          </div>

          <div className="flex flex-col text-gray-400 py-2">
            {/* <label>Email</label> */}
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
              placeholder="Email"
            />
          </div>

          <div className="flex flex-col text-gray-400 py-2">
            {/* <label>Location</label> */}
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
              placeholder="Location"
            />
          </div>

          <div className="flex flex-col text-gray-400 py-2">
            {/* <label>Telephone</label> */}
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
              placeholder="Telephone"
            />
          </div>

          <div className="flex flex-col text-gray-400 py-2">
            {/* <label>Password</label> */}
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex justify-between text-gray-400 py-2">
            <p className="flex items-center mt-2">
              <input className="mr-2" type="checkbox" /> Remember Me
            </p>
            {/* <p>Forgot Password</p> */}
          </div>
          <Link href="login">
            <a className="text-yellow-900 w-full my-5 px-20 py-3 mt-5 flex justify-center  bg-[#2b6e70] shadow-lg  font-semibold rounded-lg">
              Sign up
            </a>
          </Link>

          <p className=" text-gray-400 m-5 flex  gap-5">
            Already having an account?
            <Link href="/login">
              <a className=" text-yellow-900 shadow-lg  font-semibold rounded-lg">
                Sign in
              </a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
