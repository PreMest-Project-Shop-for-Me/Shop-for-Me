import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

function Login() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <Image
          className="w-full h-full grid object-cover"
          src="/assets/shopforme4.jpg"
          alt="Me"
          width="1000px"
          height="1000"
        />
      </div>

      <div className="bg-gray-800/30 flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg boder">
          <h2 className="text-2xl text-white font-semibold text-center">
            SIGN IN
          </h2>
          <div className="flex flex-col text-gray-400 py-2">
            <label>User Name</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Password</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="password"
            />
          </div>
          <div className="flex justify-between text-gray-400  py-2">
            <p className="flex items-center">
              <input className="mr-2 mt-2" type="checkbox" /> Remember Me
            </p>
            <p>Forgot Password</p>
          </div>
          <Link href="/">
            <a className="text-yellow-900 w-full  px-[8.8rem] py-2 bg-[#2b6e70] shadow-lg  font-semibold rounded-lg">
              Sign In
            </a>
          </Link>

          <p className=" text-gray-400 m-5 flex  gap-5">
            Not having an account?
            <Link href="/signup">
              <a className=" text-yellow-900 shadow-lg  font-semibold rounded-lg">
                Sign up
              </a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
