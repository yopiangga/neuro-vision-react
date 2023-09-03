import { Link } from "react-router-dom";
import { StatusView } from "./table-request";

export  function Table({promise}){
    return (
        <div className="flex-grow">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left">
                    <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark: dark:bg-white">
                        <div className="flex justify-between items-center">
                            <p>Request promise</p>
                            <Link to="/request" className="font-normal text-violet-500 text-sm">See All Promise <i className="fa-solid fa-chevron-right fa-2xs ms-2"></i></Link>
                        </div>
                        <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">The promise request will be in this table</p>
                    </caption>
                    <tbody>
                        
                    {promise.map((item, index) => {
              const words = item.time != "" ? item.time.split(" ") : "-";
              const date = new Date();

              return (
                <tr className="bg-white border-b dark:bg-white dark:border-gray-300 hover:bg-gray-200">
                  <StatusView status={item.status}/>
                  <td className="px-6 py-4">
                    <p className="font-bold">{item.patient.fullname}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-bold">{words != "-" ? words[1].substring(0, 5) : "-"}</p>
                    <p className="font-normal text-gray-400">
                      {date.toDateString()}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-normal text-gray-400">
                      {item.hospital.name}
                    </p>
                  </td>
                
                  
                </tr>
              );
            })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}