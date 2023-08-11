export function TableDoctors(){
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark: dark:bg-white">
                    <p>List doctor</p>
                </caption>
                <thead className="bg-gray-50 font-normal dark:bg-gray-100 dark:text-gray-400">
                <tr>
                    <th scope="col" className="p-4">
                        <div className="flex items-center">
                            <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                        </div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Hospital
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Email address
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Phone
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr className="bg-white border-b dark:bg-white dark:border-gray-300 dark:hover:bg-gray-200">
                    <td className="w-4 p-4">
                        <div className="flex items-center">
                            <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                        </div>
                    </td>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                        <div className="flex space-x-2 items-center">
                            <div className="h-10 w-10 hover:ring-4 user cursor-pointer relative ring-blue-700/30 rounded-full bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')]"></div>
                            <div className="text-sm">
                                <p className="font-semibold">Jenny Wilson</p>
                                <p className="font-normal text-gray-400">3506131806020001</p>
                            </div>
                        </div>
                    </th>
                    <td className="px-6 py-4">
                        <div className="px-3 py-1 bg-green-200 w-full text-center rounded-full flex space-x-2 items-center justify-center">
                            <div className="p-1 bg-green-500 rounded-full"></div>
                            <span className="text-green-800 font-semibold">Active</span>
                        </div>
                    </td>
                    <td className="px-6 py-4">
                        Eka Hospital Bogor
                    </td>
                    <td className="px-6 py-4">
                        olivia@untitledui.com
                    </td>
                    <td className="px-6 py-4">
                        082330410865
                    </td>
                    <td className="px-6 py-4">
                        <div className="flex justify-around">
                            <button><i className="fa-solid fa-trash fa-lg"></i></button>
                            <button><i className="fa-solid fa-pen fa-lg"></i></button>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
            <nav className="flex items-center justify-between p-4" aria-label="Table navigation">
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Showing <span className="font-semibold text-gray-900">1-10</span> of <span className="font-semibold text-gray-900">1000</span></span>
                <ul className="inline-flex -space-x-px text-sm h-8">
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-white dark:border-gray-200 dark:text-gray-400 dark:bg-white ">Previous</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-white dark:border-gray-200 dark:text-gray-400 dark:bg-white ">1</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-white dark:border-gray-200 dark:text-gray-400 dark:bg-white ">2</a>
                    </li>
                    <li>
                        <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-200 dark:bg-gray-200">3</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-white dark:border-gray-200 dark:text-gray-400 dark:bg-white ">4</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-white dark:border-gray-200 dark:text-gray-400 dark:bg-white ">5</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-white dark:border-gray-200 dark:text-gray-400 dark:bg-white ">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}