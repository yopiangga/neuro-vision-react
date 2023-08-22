import { useEffect, useState } from "react";
import { OperatorServices } from "src/services/OperatorServices";

export function TableDoctors() {
    const operatorService = new OperatorServices();

    const [data, setData] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  async function fetch() {
    const result = await operatorService.getAllDoctors();
    setData(result);
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark: dark:bg-white">
          <p>List doctor</p>
        </caption>
        <thead className="bg-gray-50 font-normal dark:bg-gray-100 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            
            <th scope="col" className="px-6 py-3">
              Email address
            </th>
           
          </tr>
        </thead>
        <tbody>
            {data.map((item, index) => {
                return <tr className="bg-white border-b dark:bg-white dark:border-gray-300 dark:hover:bg-gray-200">
            
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <div className="flex space-x-2 items-center">
                    <p className="font-semibold">{item.fullname}</p>
                  </div>
                </th>        
                <td className="px-6 py-4">{item.email}</td>
        
              </tr>
            })}
          
        </tbody>
      </table>

    </div>
  );
}
