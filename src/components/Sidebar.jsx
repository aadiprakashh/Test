import { HiDotsVertical } from "react-icons/hi";
import { patient as patients } from "../assets/data";
// import { useState } from "react";

const Sidebar = () => {
  // const [user, setUser] = useState("");

  return (
    // <div className="flex h-screen"
    // // style={{
    // //   height:'100dvh',
    // // }}
    // >
    <>
      {/* Sidebar */}
      <div className="bg-white text-gray-800 w-64 p-4 shadow-md h-auto">
        <h3 className="text-xl font-bold pb-4">Patients</h3>
        <ul className="space-y-1">
          {patients.map((patient, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-lg"
              // onClick={() => {
              //   setUser(patient, index);
              // }}
            >
              <div>
                <p className="font-semibold">{patient.patient_name}</p>
                <p className="text-sm text-gray-500">{patient.doctor}</p>
              </div>
              <button>
                <HiDotsVertical className="text-xl text-gray-600" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
    // </div>
  );
};

export default Sidebar;
