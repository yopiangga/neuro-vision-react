export  function Table(){
    return (
        <div className="flex-grow">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left">
                    <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark: dark:bg-white">
                        <div className="flex justify-between items-center">
                            <p>Request promise</p>
                            <p className="font-normal text-violet-500 text-sm">See All Promise <i className="fa-solid fa-chevron-right fa-2xs ms-2"></i></p>
                        </div>
                        <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">The promise request will be in this table</p>
                    </caption>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-white dark:border-gray-300 hover:bg-gray-200">
                            <th scope="row" className="px-6 py-4">
                                <div className="px-3 py-1 bg-green-200 w-full text-center rounded-full flex space-x-2 items-center justify-center">
                                    <div className="p-1 bg-green-500 rounded-full"></div>
                                    <span className="text-green-800 font-normal">Completed</span>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                <p className="font-bold">Jason Allen</p>
                                <p className="font-normal text-gray-400">Man</p>
                            </td>
                            <td className="px-6 py-4">
                                <p className="font-bold">08.00 am</p>
                                <p className="font-normal text-gray-400">Apr 24, 2023</p>
                            </td>
                            <td className="px-6 py-4">
                                <p className="font-normal text-gray-400">Siloam Hospitals Bogor</p>
                            </td>
                            <td className="px-6 py-4 text-right text-gray-500">
                                <i className="fa-solid fa-ellipsis"></i>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-white dark:border-gray-300 hover:bg-gray-200">
                            <th scope="row" className="px-6 py-4">
                                <div className="px-3 py-1 bg-red-200 w-full text-center rounded-full flex space-x-2 items-center justify-center">
                                    <div className="p-1 bg-red-500 rounded-full"></div>
                                    <span className="text-red-800 font-normal">Canceled</span>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                <p className="font-bold">Jason Allen</p>
                                <p className="font-normal text-gray-400">Man</p>
                            </td>
                            <td className="px-6 py-4">
                                <p className="font-bold">08.00 am</p>
                                <p className="font-normal text-gray-400">Apr 24, 2023</p>
                            </td>
                            <td className="px-6 py-4">
                                <p className="font-normal text-gray-400">Siloam Hospitals Bogor</p>
                            </td>
                            <td className="px-6 py-4 text-right text-gray-500">
                                <i className="fa-solid fa-ellipsis"></i>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-white dark:border-gray-300 hover:bg-gray-200">
                            <th scope="row" className="px-6 py-4">
                                <div className="px-3 py-1 bg-yellow-200 w-full text-center rounded-full flex space-x-2 items-center justify-center">
                                    <div className="p-1 bg-yellow-500 rounded-full"></div>
                                    <span className="text-yellow-800 font-normal">Pending</span>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                <p className="font-bold">Jason Allen</p>
                                <p className="font-normal text-gray-400">Man</p>
                            </td>
                            <td className="px-6 py-4">
                                <p className="font-bold">08.00 am</p>
                                <p className="font-normal text-gray-400">Apr 24, 2023</p>
                            </td>
                            <td className="px-6 py-4">
                                <p className="font-normal text-gray-400">Siloam Hospitals Bogor</p>
                            </td>
                            <td className="px-6 py-4 text-right text-gray-500">
                                <i className="fa-solid fa-ellipsis"></i>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-white dark:border-gray-300 hover:bg-gray-200">
                            <th scope="row" className="px-6 py-4">
                                <div className="px-3 py-1 bg-yellow-200 w-full text-center rounded-full flex space-x-2 items-center justify-center">
                                    <div className="p-1 bg-yellow-500 rounded-full"></div>
                                    <span className="text-yellow-800 font-normal">Pending</span>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                <p className="font-bold">Jason Allen</p>
                                <p className="font-normal text-gray-400">Man</p>
                            </td>
                            <td className="px-6 py-4">
                                <p className="font-bold">08.00 am</p>
                                <p className="font-normal text-gray-400">Apr 24, 2023</p>
                            </td>
                            <td className="px-6 py-4">
                                <p className="font-normal text-gray-400">Siloam Hospitals Bogor</p>
                            </td>
                            <td className="px-6 py-4 text-right text-gray-500">
                                <i className="fa-solid fa-ellipsis"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}