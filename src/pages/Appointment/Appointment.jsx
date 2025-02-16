import Card from "../../components/Card";
import { usePatients } from "../../components/PatientContext";
import { useState } from "react";
import TodayAppointments from "./TodayAppointments";
import PendingAppointment from "./PendingAppointment";
import { FaPlus } from "react-icons/fa";
import AddAppointment from "./AddAppointment";

const Appointment = () => {
  const patients = usePatients();
  const patientsAppointed = [...new Set(patients.slice(0, 8))];
  const treatment_plans = [...new Set(patients.flatMap(pat=>pat.appointments.procedure))];
  const doctors = [...new Set(patients.flatMap(pat=>pat.appointments.dentist))];
  // const doctors = [...new Set(patients.map(pat=>pat.dentist))];
  const [status, setStatus] = useState("");

  const aStatus = {
    Scheduled: "bg-blue-100 text-blue-800",
    Completed: "bg-green-100 text-green-800",
    Cancelled: "bg-red-100 text-red-800",
  };

  const [addAppoint, setAddAppoint] = useState(false);

  const [appoint, setAppoint] = useState("Today");

  const filterPatient = patientsAppointed.filter((patient) => {
    const matchedStatus = status
      ? patient.appointments.status === status
      : patient;
    return matchedStatus;
  });

  return (
    <div className="flex flex-col bg-gray-100 p-7">
      {/* header */}
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Appointment Management
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Track and manage Appointment details
          </p>
        </div>{" "}
        <button
          type="button"
          onClick={()=>{setAddAppoint(true)}}
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-custom/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom !rounded-button"
        >
          <FaPlus size={15}/>
          Add Appointment
        </button>
      </div>

      {/* card */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <Card
          bgStyle="p-3 rounded-full bg-indigo-100 text-indigo-600"
          icon="fa-solid fa-calendar-check text-xl"
          title="Today's Appointment"
          value="24"
        />

        <Card
          bgStyle="p-3 rounded-full bg-green-100 text-green-600"
          icon="fa-solid fa-user-check text-xl"
          title="Completed"
          value={
            filterPatient.filter(
              (pat) => pat.appointment_status === "Completed"
            ).length
          }
        />
        <Card
          bgStyle="p-3 rounded-full bg-yellow-100 text-yellow-600"
          icon=" fa-clock text-xl"
          title="Upcoming"
          value={
            filterPatient.filter((pat) => pat.appointment_status === "Upcoming")
              .length
          }
        />
        <Card
          bgStyle="p-3 rounded-full bg-red-100 text-red-600"
          icon=" fa-ban text-xl"
          title="Cancelled"
          value={
            filterPatient.filter(
              (pat) => pat.appointment_status === "Cancelled"
            ).length
          }
        />
      </div>

      {/* <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-medium text-gray-900">
                  Today&apos;s Schedule
                </h2>
                <div className="flex space-x-2">
                  {" "}
                  <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium !rounded-button text-gray-700 bg-white hover:bg-gray-50">
                    Day
                  </button>
                  <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium !rounded-button text-gray-700 bg-white hover:bg-gray-50">
                    Week
                  </button>
                  <button className="inline-flex items-center px-3 py-2 border border-custom shadow-sm text-sm font-medium !rounded-button text-custom bg-white hover:bg-gray-50">
                    Month
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0 w-16 text-center">
                    <div className="text-sm font-medium text-gray-900">
                      09:00
                    </div>
                    <div className="text-sm text-gray-500">AM</div>
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">
                          John Smith
                        </h4>
                        <p className="text-sm text-gray-500">
                          Regular Check-up
                        </p>
                      </div>{" "}
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Confirmed
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0 w-16 text-center">
                    <div className="text-sm font-medium text-gray-900">
                      10:30
                    </div>
                    <div className="text-sm text-gray-500">AM</div>
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">
                          Emily Johnson
                        </h4>
                        <p className="text-sm text-gray-500">
                          Root Canal Treatment
                        </p>
                      </div>{" "}
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Pending
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0 w-16 text-center">
                    <div className="text-sm font-medium text-gray-900">
                      02:00
                    </div>
                    <div className="text-sm text-gray-500">PM</div>
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">
                          Michael Brown
                        </h4>
                        <p className="text-sm text-gray-500">Teeth Cleaning</p>
                      </div>{" "}
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Completed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">
                Quick Actions
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <button className="inline-flex items-center justify-center px-4 py-2 border border-custom shadow-sm text-sm font-medium !rounded-button text-custom bg-white hover:bg-gray-50">
                  <i className="fas fa-plus mr-2"></i>
                  New Appointment
                </button>{" "}
                <button className="inline-flex items-center justify-center px-4 py-2 border border-custom shadow-sm text-sm font-medium !rounded-button text-custom bg-white hover:bg-gray-50">
                  <i className="fas fa-user-plus mr-2"></i>
                  Add Patient
                </button>{" "}
                <button className="inline-flex items-center justify-center px-4 py-2 border border-custom shadow-sm text-sm font-medium !rounded-button text-custom bg-white hover:bg-gray-50">
                  <i className="fas fa-bell mr-2"></i>
                  Send Reminder
                </button>{" "}
                <button className="inline-flex items-center justify-center px-4 py-2 border border-custom shadow-sm text-sm font-medium !rounded-button text-custom bg-white hover:bg-gray-50">
                  <i className="fas fa-calendar-alt mr-2"></i>
                  View Calendar
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">
                Recent Patients
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a young woman with a natural smile against a light background&width=40&height=40&orientation=squarish&flag=c2d1138a-428e-4244-a648-96f34eabdd6b"
                    alt=""
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      Sarah Davis
                    </p>
                    <p className="text-sm text-gray-500">
                      Last visit: 2 days ago
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a middle-aged man with glasses against a light background&width=40&height=40&orientation=squarish&flag=1a1a0140-f154-4033-9bfe-1e0a0427f30f"
                    alt=""
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      Robert Wilson
                    </p>
                    <p className="text-sm text-gray-500">
                      Last visit: 1 week ago
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a young man with a friendly smile against a light background&width=40&height=40&orientation=squarish&flag=39a9f577-210b-41cc-9236-dd05e93a1f6d"
                    alt=""
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      James Thompson
                    </p>
                    <p className="text-sm text-gray-500">
                      Last visit: 2 weeks ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* navbar */}
      <div className="mb-6 bg-white rounded-lg p-4 flex items-center justify-between">
        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={() => {
              setAppoint("Today");
            }}
            className={`w-[250px]  text-sm text-left px-3 py-1 rounded-lg ${
              appoint === "Today"
                ? "bg-green-500 text-white hover:bg-green-500/90"
                : " bg-gray-100 hover:bg-gray-200"
            } transition-colors duration-200`}
          >
            <i className="fas fa-calendar-day mr-2"></i>Today&apos;s Appointments
          </button>
          <button
            onClick={() => {
              setAppoint("Pending");
            }}
            
            className={`w-[250px] text-sm text-left px-3 py-2 rounded-lg ${
              appoint === "Pending"
                ? "bg-green-500  text-white hover:bg-green-500/90"
                : " bg-gray-100 hover:bg-gray-200"
            } transition-colors duration-200`}
          >
            <i className="fas fa-clock mr-2"></i>Pending Approvals
          </button>
          <button
            onClick={() => {
              setAppoint("Walkin");
            }}
            
            className={`w-[250px] text-sm text-left px-3 py-2 rounded-lg ${
              appoint === "Walkin"
                ? "bg-green-500  text-white hover:bg-green-500/90"
                : " bg-gray-100 hover:bg-gray-200"
            } transition-colors duration-200`}
          >
            <i className="fas fa-user-plus mr-2"></i>Walk-ins
          </button>
        </div>
        {/* <div className="flex space-x-2">
          <select className="border border-gray-300 rounded-lg py-2 pl-3 pr-8 focus:ring-2 focus:ring-custom focus:border-custom hover:border-custom transition-colors duration-200">
            <option>Select Interval</option>
            <option>Month</option>
            <option>Week</option>
          </select>
        </div> */}

        <select
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
          }}
          className="border text-sm border-gray-300 rounded-lg py-2 pl-3 pr-8 focus:ring-2 focus:ring-custom focus:border-custom hover:border-custom transition-colors duration-200"
        >
          <option value="">All Status</option>
          <option value="Scheduled">Scheduled</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>

      {appoint === "Today" &&  (
    <TodayAppointments filterPatient={filterPatient} aStatus={aStatus} />
  )}

      {appoint === "Pending" &&  (
        <PendingAppointment filterPatient={filterPatient} aStatus={aStatus} />
  )}

  {filterPatient.length == 0 &&
   ( <div className="text-center text-gray-500 text-lg">No Appointments</div>
  )}


{addAppoint && <AddAppointment treatment={treatment_plans} doctors={doctors} closeModal={()=>{setAddAppoint(false)}}/>}

    </div>
  );
};
export default Appointment;
