import { useEffect, useState } from "react";
import { FaCheckCircle, FaEye, FaTrash, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { OperatorServices } from "src/services/OperatorServices";

export function TableRequest() {
  const operatorService = new OperatorServices();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  async function fetch() {
    const result = await operatorService.getAllPromises();
    setData(result);
  }

  function handleAccept(id) {
    operatorService.acceptPromise(id)
        .then((value) => fetch())
        .catch((e) => alert(e));
  }

  function handleReject(id) {
    operatorService.rejectPromise(id)
        .then((value) => fetch())
        .catch((e) => alert(e));
  }

  return (
    <div className="flex-grow">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left">
          <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark: dark:bg-white">
            <p>Request promise</p>
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
              The promise request will be in this table
            </p>
          </caption>
          <tbody>
            {data.map((item, index) => {
              const words = item.time.split(" ");
              const date = new Date(words[0]);

              return (
                <tr className="bg-white border-b dark:bg-white dark:border-gray-300 hover:bg-gray-200">
                  <th scope="row" className="px-6 py-4">
                    <div
                      className={`py-1 ${
                        item.state == "Completed"
                          ? "bg-green-200"
                          : item.state == "Rejected"
                          ? "bg-red-200"
                          : "bg-yellow-200"
                      } w-full text-center rounded-full flex space-x-2 items-center justify-center`}
                    >
                      <div
                        className={`p-1 ${
                          item.state == "Completed"
                            ? "bg-green-800"
                            : item.state == "Rejected"
                            ? "bg-red-800"
                            : "bg-yellow-800"
                        } rounded-full`}
                      ></div>
                      <span
                        className={`${
                          item.state == "Completed"
                            ? "text-green-800"
                            : item.state == "Rejected"
                            ? "text-red-800"
                            : "text-yellow-800"
                        } font-normal`}
                      >
                        {item.state}
                      </span>
                    </div>
                  </th>
                  <td className="px-6 py-4">
                    <p className="font-bold">{item.patient.fullname}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-bold">{words[1].substring(0, 5)}</p>
                    <p className="font-normal text-gray-400">
                      {date.toDateString()}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-normal text-gray-400">
                      {item.hospital.name}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-normal text-gray-400">
                      {item.doctor.fullname}
                    </p>
                  </td>
                  <td className="px-6 py-4 text-right text-gray-500">
                    <div className="flex gap-x-2">
                      {item.state == "Pending" ?<>
                      <button className="px-4 py-1 bg-green-700 rounded-full text-white font-semibold" onClick={(e)=>handleAccept(item.id)}>
                        <FaCheckCircle />
                      </button>
                      <button className="px-4 py-1 bg-red-500 rounded-full text-white"  onClick={(e)=>handleReject(item.id)}>
                        <FaTrashAlt />
                      </button></> : <></>}
                      <Link to={`/detail/${item.id}`} className="px-4 py-1 bg-violet-500 rounded-full text-white font-semibold">
                        <FaEye />
                      </Link>
                    </div>
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
