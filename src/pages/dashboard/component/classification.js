export function Classification(){
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow p-3">
            <div className="flex justify-between items-center mb-8">
                <p className="font-semibold">Classification</p>
                <p className="text-sm">Last 7 Days <i className="fa-solid fa-chevron-down fa-2xs ms-2"></i></p>
            </div>

            <div className="mb-5">
                <div className="flex justify-between text-sm">
                    <p>Total</p>
                    <p>1,382</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-violet-600 h-2.5 rounded-full mt-2"></div>
                </div>
            </div>
            <div className="mb-5">
                <div className="flex justify-between text-sm">
                    <p>Normal</p>
                    <p>974</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-violet-600 h-2.5 rounded-full mt-2" style={{width: 250}}></div>
                </div>
            </div>
            <div className="mb-5">
                <div className="flex justify-between text-sm">
                    <p>Stroke Ischemic</p>
                    <p>211</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-violet-600 h-2.5 rounded-full mt-2" style={{width: 130}}></div>
                </div>
            </div>
            <div className="mb-5">
                <div className="flex justify-between text-sm">
                    <p>Stroke Hemorrhagic</p>
                    <p>93</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-violet-600 h-2.5 rounded-full mt-2" style={{width: 80}}></div>
                </div>
            </div>
        </div>
    );
}