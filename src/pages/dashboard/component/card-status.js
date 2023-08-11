export function CardStatus(){
    return (
        <div className="flex justify-between items-center mt-5 gap-x-5">
            <div className="w-full p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-200">
                <p className="text-gray-500 text-sm">Today’s PATIENTS</p>
                <div className="flex justify-between mt-3 items-center">
                    <p className="font-bold text-2xl">56</p>
                    <p className="text-green-500 text-sm">+ 36% <i className="fa-solid fa-arrow-up"></i></p>
                </div>
            </div>
            <div className="w-full p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-200">
                <p className="text-gray-500 text-sm">Total PATIENTS</p>
                <div className="flex justify-between mt-3 items-center">
                    <p className="font-bold text-2xl">2,986</p>
                    <p className="text-red-500 text-sm">+ 36% <i className="fa-solid fa-arrow-down"></i></p>
                </div>
            </div>
            <div className="w-full p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-200">
                <p className="text-gray-500 text-sm">TODAY’S REQUESTS</p>
                <div className="flex justify-between mt-3 items-center">
                    <p className="font-bold text-2xl">72</p>
                    <p className="text-green-500 text-sm">+ 36% <i className="fa-solid fa-arrow-up"></i></p>
                </div>
            </div>
            <div className="w-full p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-200">
                <p className="text-gray-500 text-sm">Total REQUESTS</p>
                <div className="flex justify-between mt-3 items-center">
                    <p className="font-bold text-2xl">3,218</p>
                    <p className="text-green-500 text-sm">+ 36% <i className="fa-solid fa-arrow-up"></i></p>
                </div>
            </div>
        </div>
    );
}