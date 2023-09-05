import { useContext, useState } from "react";
import { UserContext } from "src/context/UserContext";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { OperatorServices } from "src/services/OperatorServices";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Buffer } from "buffer";
// import { format } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function CardDetail({data}){
    const { user, setUser } = useContext(UserContext);
    const arr = ["Normal", "Stroke Hemorrhagic", "Stroke Ischemic"];
    let index = Math.floor(Math.random() * (2 - 0 + 1)) + 0;

    const operatorServices = new OperatorServices();

    const [file, setFile] = useState();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        const imagePath = await axios.get("http://34.125.118.59:5000/ct-scan"); 

        const getImage = await axios.get(`http://34.125.118.59:5000/ct-scan/download?file-path=/home/farhanroy120/project/${imagePath.data[17]}`, { responseType: 'blob' })


        //const base64Image = `data:image/jpeg;base64,${Buffer.from(getImage.data).toString('base64')}`;

        const base64Image = await imageToBase64(getImage.data);
        // console.log(`data:image/jpeg;base64,${base64Image}`)

        const generateAi = await axios.post("http://34.125.118.59:5000/prediction", {'image': base64Image}); 

        console.log(generateAi.data);

        var formatedDate = selectedDate.toISOString().split("T");
        operatorServices.uploadCtScan(data.id, imagePath[17], generateAi.data, selectedDoctor, note, `${formatedDate[0]} ${formatedDate[1]}`).then(
            (value) => navigate(-1)
        )
    }

    async function  imageToBase64(image) {
        const reader = new FileReader();
        reader.readAsDataURL(image);
        const data= await new Promise((resolve, reject) => {
       
          reader.onload = () => resolve(reader.result);
       
          reader.onerror = error => reject(error);
       
         });
       return data;
       }

    


    const doctors = data.hospital.doctors;
    const [selectedDoctor, setSelectedDoctor] = useState(doctors[0]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [note, setNote] = useState("");

    return (
        <form action="">
            <div className="w-full p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-200 flex justify-between space-x-10 p-8">
                <div className="w-full">
                    <div className="mb-5">
                        <label  className="block mb-2 text-sm font-semibold">Doctor</label>
                        <select
                            value={selectedDoctor}
                            onChange={(e) => {
                            
                                setSelectedDoctor(e.target.value)
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
                        <label  className="block mb-2 text-sm font-semibold">Time</label>
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
                                style = {{ width: "100%" }}
                            />
                        </div>
                    </div>
                    <div className="mb-5">
                        <label  className="block mb-2 text-sm font-semibold">Email</label>
                        <input type="email" value={data.patient.email} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-2.5"/>
                    </div>
                    <div className="mb-5">
                        <label  className="block mb-2 text-sm font-semibold">Name</label>
                        <input type="text" value={data.patient.fullname} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-2.5"/>
                    </div>
                    <div className="flex space-x-5">
                        <div className="mb-5 w-full">
                            <label  className="block mb-2 text-sm font-semibold">Place of birth</label>
                            <input type="text" value={data.patient.pob} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-2.5"/>
                        </div>
                        <div className="mb-5 w-full">
                            <label  className="block mb-2 text-sm font-semibold">Date of birth</label>
                            <input type="text" value={data.patient.dob} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-2.5"/>
                        </div>
                    </div>
                    <div className="mb-5">
                        <label  className="block mb-2 text-sm font-semibold">NIK</label>
                        <input type="text" value={data.patient.nik} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-2.5"/>
                    </div>
                </div>

                <div className="w-full">
                    <div className="mb-5">
                        <label  className="block mb-2 text-sm font-semibold">Operator Name</label>
                        <input type="text" value={user.fullname} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-2.5"/>
                    </div>
                    <div className="mb-5">
                        <label  className="block mb-2 text-sm font-semibold">Email</label>
                        <input type="email" value={user.email} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-2.5"/>
                    </div>
                    <div className="mb-5">
                        <label  className="block mb-2 text-sm font-semibold">Note</label>
                        <textarea onChange={(e) => {
                            console.log(e.target.value);
                            setNote(e.target.value)
                        }} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-2.5"/>
                    </div>
                
                    
                    <button type="submit" onClick={handleSubmit} className="bg-violet-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-2.5 text-white font-semibold">
                        Send result
                    </button>
                </div>
            </div>
        </form>
    );
}