import { useState } from "react";
import bannerLogin from "src/assets/img/banner-login.png";

export function SignInPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(user);
  }

  return (
      <div className="h-screen flex">
        {/*IMAGE*/}
        <div className="flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center">
          <div className="max-w-lg">
            <h1 className="text-6xl font-bold text-white">
              Welcome to <br />Neutron Imager
            </h1>
            <p className="font-thin text-white mt-5">Clarity gives you the blocks & components you need to create a truly professional website.</p>
            <img src={bannerLogin} alt="" className="mx-auto"/>
          </div>
        </div>

        {/*FORM*/}
        <div className="flex w-1/2 justify-center items-center bg-white">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Welcome back!</h1>
            <p className="font-thin mt-5">Clarity gives you the blocks and components you need to create a truly professional website.</p>
            <form onSubmit={handleSubmit} className="mt-10">
                <div className="mb-3">
                  <label htmlFor="email" className="block mb-2 text-sm font-semibold">Email address</label>
                  <input onChange={handleChange} name="email" type="email" id="email" className="bg-violet-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4"/>
                </div><div className="mb-6">
                  <label htmlFor="password" className="block mb-2 text-sm font-semibold">Password</label>
                  <input onChange={handleChange} name="password" type="password" id="password" className="bg-violet-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4"/>
                </div>
                <div className="flex justify-between mb-12">
                  <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"/>
                    <label htmlFor="remember" className="ml-2 text-sm">Remember me</label>
                  </div>
                  <p className="text-violet-500">Forgot password?</p>
                </div>
                <button type="submit" className="text-white bg-violet-500 hover:bg-violet-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-3 text-center dark:bg-violet-600 dark:hover:bg-violet-600 dark:focus:ring-blue-800">Sign in</button>
                <p className="text-gray-400 mt-5">Don't have an account? <span className="text-violet-500 font-semibold">Create free account</span></p>
            </form>
          </div>
        </div>
      </div>
  );
}
