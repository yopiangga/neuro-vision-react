import IconApp from "src/assets/img/icon-app.png";

export function TopBar() {
  return (
    <nav className="flex dark:bg-white items-center relative justify-between bg-white px-8 py-3 w-full border border-gray-300">
      <div className="flex items-center space-x-2">
        <img src={IconApp} alt="" width="30" />
        <p className="font-semibold text-xl">
          Neutron{" "}
          <span className="text-violet-500 text-xl font-semibold">Imager</span>
        </p>
      </div>
      <form className="flex-grow px-20">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block border border-gray-300 dark:focus:border-blue-500 dark:focus:ring-blue-500 dark:placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 p-4 pl-10 pr-20 rounded-xl text-gray-900 text-sm w-full"
            placeholder="Type to search"
          />
        </div>
      </form>
      <div className="flex space-x-8 items-center">
        <i className="fa-regular fa-bell fa-xl "></i>
        <div className="h-10 w-10 hover:ring-4 user cursor-pointer relative ring-blue-700/30 rounded-full bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')]"></div>
      </div>
    </nav>
  );
}
