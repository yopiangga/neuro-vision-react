export function CardDetail(){
    return (
        <form action="">
            <div className="w-full p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-200 flex justify-between space-x-10 p-8">
                <div className="w-full">
                    <div className="mb-5">
                        <label  className="block mb-2 text-sm font-semibold">Doctor</label>
                        <input type="text" value="dr. Slamet Sukma Djaja, Sp.PD" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-2.5"/>
                    </div>
                    <div className="mb-5">
                        <label  className="block mb-2 text-sm font-semibold">Time</label>
                        <input type="text" value="April 27, 2023 | 06.00 PM" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-2.5"/>
                    </div>
                    <div className="mb-5">
                        <label  className="block mb-2 text-sm font-semibold">Email</label>
                        <input type="email" value="yopiangga@it.student.pens.ac.id" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-2.5"/>
                    </div>
                    <div className="mb-5">
                        <label  className="block mb-2 text-sm font-semibold">Name</label>
                        <input type="text" value="Alfian Prisma Yopiangga" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-2.5"/>
                    </div>
                    <div className="flex space-x-5">
                        <div className="mb-5 w-full">
                            <label  className="block mb-2 text-sm font-semibold">Place of birth</label>
                            <input type="text" value="Kediri" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-2.5"/>
                        </div>
                        <div className="mb-5 w-full">
                            <label  className="block mb-2 text-sm font-semibold">Date of birth</label>
                            <input type="text" value="June 18, 2002" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-2.5"/>
                        </div>
                    </div>
                    <div className="mb-5">
                        <label  className="block mb-2 text-sm font-semibold">NIK</label>
                        <input type="text" value="3506131806020001" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-2.5"/>
                    </div>
                </div>

                <div className="w-full">
                    <div className="mb-5">
                        <label  className="block mb-2 text-sm font-semibold">Operator Name</label>
                        <input type="text" value="Adi Sucipto S.Tr. Rad" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-2.5"/>
                    </div>
                    <div className="mb-5">
                        <label  className="block mb-2 text-sm font-semibold">Email</label>
                        <input type="email" value="adisucipto@ekahospital.com" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-2.5"/>
                    </div>
                    <div className="mb-5">
                        <label  className="block mb-2 text-sm font-semibold">Result CT Scan (DICOM)</label>
                        <div className="flex justify-center items-center bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full px-2.5 py-2.5">
                            <div className="text-center py-10">
                                <i className="fa-regular fa-file fa-xl text-gray-400"></i>
                                <p className="mt-2 font-semibold text-xs">Upload File</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center h-5 mb-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"/>
                        <label className="ml-2 text-sm">You agree to our friendly <a className="font-semibold cursor-pointer">privacy policy.</a></label>
                    </div>
                    <button type="submit" className="bg-violet-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-2.5 text-white font-semibold">
                        Send result
                    </button>
                </div>
            </div>
        </form>
    );
}