import { useContext, useState, useEffect } from "react";
import { UserContext } from "src/context/UserContext";
import { format } from "date-fns";
import { OperatorServices } from "src/services/OperatorServices";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Buffer } from "buffer";
// import { format } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function CardDetail({ data }) {
  const { user, setUser } = useContext(UserContext);

  const operatorServices = new OperatorServices();

  const [file, setFile] = useState();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    // const imagePath = await axios.get("https://api.neutron-imager.tech/ct-scan");

    // const getImage = await axios.get(`https://api.neutron-imager.tech/ct-scan/download?file-path=/home/farhanroy120/project/${imagePath.data[17]}`, { responseType: 'blob' })

    //const base64Image = await imageToBase64(getImage.data);

    // const generateAi = await axios.post("https://api.neutron-imager.tech/prediction", {'image': base64Image});

    var formatedDate = selectedDate.toISOString().split("T");
    operatorServices
      .uploadAppointment(
        data.id,
        selectedDoctor,
        note,
        `${formatedDate[0]} ${formatedDate[1]}`
      )
      .then((value) => navigate(-1));
  }

  // async function  imageToBase64(image) {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(image);
  //     const data= await new Promise((resolve, reject) => {

  //       reader.onload = () => resolve(reader.result);

  //       reader.onerror = error => reject(error);

  //      });
  //    return data;
  //    }

  const doctors = data.hospital.doctors;
  const [selectedDoctor, setSelectedDoctor] = useState(doctors[0]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [note, setNote] = useState("");

  return (
    <form action="">
      <div className="w-full p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-200 flex justify-between space-x-10 p-8">
        <div className="w-full">
          <div className="mb-5">
            <label className="block mb-2 text-sm font-semibold">Doctor</label>
            <select
              value={selectedDoctor}
              onChange={(e) => {
                setSelectedDoctor(e.target.value);
              }}
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-2.5"
            >
              {doctors.map((element) => (
                <option key={element} value={element}>
                  {element.fullname}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-semibold">Time</label>
            <div className="flex">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                showTimeSelect
                dateFormat="yyyy-MM-dd HH:mm:ss"
                timeFormat="HH:mm:ss"
                timeIntervals={60}
                timeCaption="Time"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full grow px-2.5 py-2.5"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-semibold">Email</label>
            <input
              type="email"
              value={data.patient.email}
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-2.5"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-semibold">Name</label>
            <input
              type="text"
              value={data.patient.fullname}
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-2.5"
            />
          </div>
          <div className="flex space-x-5">
            <div className="mb-5 w-full">
              <label className="block mb-2 text-sm font-semibold">
                Place of birth
              </label>
              <input
                type="text"
                value={data.patient.pob}
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-2.5"
              />
            </div>
            <div className="mb-5 w-full">
              <label className="block mb-2 text-sm font-semibold">
                Date of birth
              </label>
              <input
                type="text"
                value={data.patient.dob}
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-2.5"
              />
            </div>
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-semibold">NIK</label>
            <input
              type="text"
              value={data.patient.nik}
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-2.5"
            />
          </div>
        </div>

        <div className="w-full">
          <div className="mb-5">
            <label className="block mb-2 text-sm font-semibold">
              Operator Name
            </label>
            <input
              type="text"
              value={user.fullname}
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-2.5"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-semibold">Email</label>
            <input
              type="email"
              value={user.email}
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-2.5"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-semibold">Note</label>
            <textarea
              onChange={(e) => {
                console.log(e.target.value);
                setNote(e.target.value);
              }}
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-2.5"
            />
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-violet-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-2.5 text-white font-semibold"
          >
            Send result
          </button>
        </div>
      </div>
    </form>
  );
}

export function CardSyncronize({ data }) {
  const operatorService = new OperatorServices();
  useEffect(() => {
    fetch();
  }, []);

  const [ctScan, setCtScan] = useState([]);
  const [total, setTotal] = useState(0);

  async function fetch() {
    const result = await operatorService.getCtScan(data.patient.nik);
    const totalCtScan = await operatorService.getTotalPromise(data.patient.nik);
    
    setCtScan(result);
    console.log(ctScan);
    setTotal(totalCtScan);
  }
  return (
    <>
      <div className="w-full p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-200 flex justify-between space-x-10 p-8">
        <div className="w-full">
          <div className="flex mb-5">
            <div className="w-1/2 mr-8">
              <div className="mb-8">
                <label className="block mb-2 text-sm font-semibold">
                  Patient Identity
                </label>
                <input
                  disabled
                  type="text"
                  value={data.patient.nik}
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-2.5"
                />
              </div>

              <div className="mb-8">
                <label className="block mb-2 text-sm font-semibold">
                  Patient Name
                </label>
                <input
                  disabled
                  type="email"
                  value={data.patient.fullname}
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-2.5"
                />
              </div>

              <div className="mb-8">
                <label className="block mb-2 text-sm font-semibold">
                  Internist (Doctor)
                </label>
                <input
                  disabled
                  type="text"
                  value={data.doctor.fullname}
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-2.5"
                />
              </div>

              <div className="mb-8">
                <label className="block mb-2 text-sm font-semibold">
                  Appoinment Date
                </label>
                <input
                  disabled
                  type="text"
                  value={data.time}
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-2.5"
                />
              </div>
            </div>

            <StatusAlert ctScan={ctScan} promise={data} userPromise={total}/>
          </div>
        </div>
      </div>
    </>
  );
}

function StatusAlert({ ctScan, promise, userPromise }) {
    const last = ctScan[ctScan.length-1];
    console.log(ctScan);
    const operatorService = new OperatorServices();
    const navigate = useNavigate();

  async function  imageToBase64(image) {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      const data= await new Promise((resolve, reject) => {

        reader.onload = () => resolve(reader.result);

        reader.onerror = error => reject(error);

       });
     return data;
     }

    async function handleSubmit(e) {
        e.preventDefault();

        const getImage = await axios.get(`https://api.neutron-imager.tech/ct-scan/download?nik=${last.nik}&&time=${last.time}`,{ responseType: 'blob' });

        const base64Image = await imageToBase64(getImage.data);

    const generateAi = await axios.post("https://api.neutron-imager.tech/prediction", {'nik': promise.patient.nik});

    // console.log(generateAi.data);
        
        await operatorService.uploadCtScan(promise.id, last.nik, last.time, `${generateAi.data}`);
        navigate(-1);
    }
  if (ctScan.length == userPromise) {
    return (
      <div className="w-1/2 ">
        <div
          id="alert-additional-content-1"
          className="w-full p-4 mb-4 text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-green-800 dark:text-green-400 dark:border-green-800"
          role="alert"
        >
          <div className="flex items-center">
            <svg
              className="flex-shrink-0 w-4 h-4 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <h3 className="text-lg font-medium">CT scan has been done</h3>
          </div>
          <div className="mt-2 mb-4 text-sm">
            Patient has completed CT scan. You can syncronized the result of ct scan to Neutron Imager system
          </div>
        </div>

        <button
            type="submit"
            onClick={handleSubmit}
            className="bg-violet-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-2.5 text-white font-semibold"
          >
            Syncronize
          </button>
      </div>
    );
  } else {
    return (
      <div className="w-1/2 ">
        <div
          id="alert-additional-content-1"
          className="w-full p-4 mb-4 text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-400 dark:border-yellow-800"
          role="alert"
        >
          <div className="flex items-center">
            <svg
              className="flex-shrink-0 w-4 h-4 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <h3 className="text-lg font-medium">CT-Scan has not been done</h3>
          </div>
          <div className="mt-2 mb-4 text-sm">
          The patient still hasn't done a CT scan, please wait until the CT scan results appear
          </div>
        </div>
      </div>
    );
  }
}
