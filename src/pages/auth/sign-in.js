import { useState } from "react";
import { useNavigate } from "react-router-dom";

import bannerLogin from "src/assets/img/banner-login.png";
import { AuthServices } from "src/services/AuthServices";

export function SignInPage() {
  const navigate = useNavigate();
  const authServices = new AuthServices();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    authServices.login(user).then((value) => navigate('/'));
  }

  return (
    <div className="h-screen flex">
      {/*IMAGE*/}
      <div className="flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center">
        <div className="max-w-lg">
          <h1 className="text-6xl font-bold text-white">
            Welcome to <br />
            Neuro Vision
          </h1>
          <p className="font-thin text-white mt-5">
            Clarity gives you the blocks & components you need to create a truly
            professional website.
          </p>
          <img src={bannerLogin} alt="" className="mx-auto" />
        </div>
      </div>

      {/*FORM*/}
      <div className="flex w-1/2 justify-center items-center bg-white">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Welcome back!</h1>
          <p className="font-thin mt-5">
            Clarity gives you the blocks and components you need to create a
            truly professional website.
          </p>
          <form onSubmit={handleSubmit} className="mt-10">
            <div className="mb-3">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-semibold"
              >
                Email address
              </label>
              <input
                onChange={handleChange}
                name="email"
                type="email"
                id="email"
                className="bg-violet-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-semibold"
              >
                Password
              </label>
              <input
                onChange={handleChange}
                name="password"
                type="password"
                id="password"
                className="bg-violet-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4"
              />
            </div>

            <button
              type="submit"
              className="text-white bg-violet-500 hover:bg-violet-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-3 text-center dark:bg-violet-600 dark:hover:bg-violet-600 dark:focus:ring-blue-800"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
