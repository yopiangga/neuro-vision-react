import { FiUsers, FiDownload } from "react-icons/fi";
import { useState, useEffect } from "react";
// import getVisitCount from "src/service/visit/getVisitCount";
// import getDownloadCount from "src/service/download/getDownloadCount";

export function CounterComponent() {
  const [visits, setVisits] = useState();
  const [downloads, setDownloads] = useState();

  // useEffect(() => {
  //   getVisitCount()
  //     .then((res) => {
  //       setVisits({
  //         ...visits,
  //         all: res.all,
  //         daily: res.daily,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  //   getDownloadCount()
  //     .then((res) => {
  //       setDownloads({
  //         ...visits,
  //         all: res.all,
  //         daily: res.daily,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div className="bg-gray-100 px-20 py-20 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-12 box-border text-slate-900">
      <div className="items flex flex-col items-center">
        <FiUsers size={48} />
        {/* <h2 className="text-4xl font-medium mt-4">{visits?.all ?? 0}</h2> */}
        <h4 className="text-lg mt-2">Total Pengunjung</h4>
      </div>
      <div className="items flex flex-col items-center">
        <FiUsers size={48} />
        {/* <h2 className="text-4xl font-medium mt-4">{visits?.daily ?? 0}</h2> */}
        <h4 className="text-lg mt-2">Pengunjung Harian</h4>
      </div>
      <div className="items flex flex-col items-center">
        <FiDownload size={48} />
        {/* <h2 className="text-4xl font-medium mt-4">{downloads?.all ?? 0}</h2> */}
        <h4 className="text-lg mt-2">Total Unduhan</h4>
      </div>
      <div className="items flex flex-col items-center">
        <FiDownload size={48} />
        {/* <h2 className="text-4xl font-medium mt-4">{downloads?.daily ?? 0}</h2> */}
        <h4 className="text-lg mt-2">Unduhan Harian</h4>
      </div>
    </div>
  );
}
