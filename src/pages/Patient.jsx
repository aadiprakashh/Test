import { useEffect, useRef, useState } from "react";
import "https://cdnjs.cloudflare.com/ajax/libs/echarts/5.5.0/echarts.min.js";
import { FaLungs, FaThermometerHalf, FaHeartbeat } from "react-icons/fa";
import jhon from "../assets/img/jhon-doe.png";
import { patients } from "../data";

const Patient = () => {
  const bloodPressureChartRef = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const bloodPressureChart = echarts.init(bloodPressureChartRef.current);

    const option = {
      animation: false,
      tooltip: {
        trigger: "axis",
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: [
          "Oct 2023",
          "Nov 2023",
          "Dec 2023",
          "Jan 2024",
          "Feb 2024",
          "Mar 2024",
        ],
        axisLine: {
          lineStyle: {
            color: "#E5E7EB",
          },
        },
        axisLabel: {
          color: "#6B7280",
        },
      },
      yAxis: {
        type: "value",
        min: 60,
        max: 180,
        interval: 20,
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            color: "#E5E7EB",
          },
        },
        axisLabel: {
          color: "#6B7280",
        },
      },
      // the graph contents
      series: [
        {
          name: "Systolic",
          type: "line",
          smooth: true,
          data: [120, 115, 160, 110, 150, 160],
          itemStyle: {
            color: "#00E5BE",
          },
          lineStyle: {
            width: 3,
          },
          symbolSize: 8,
        },
        {
          name: "Diastolic",
          type: "line",
          smooth: true,
          data: [110, 65, 110, 90, 70, 78],
          itemStyle: {
            color: "#818CF8",
          },
          lineStyle: {
            width: 3,
          },
          symbolSize: 8,
        },
      ],
    };

    bloodPressureChart.setOption(option);

    window.addEventListener("resize", function () {
      bloodPressureChart.resize();
    });

    return () => {
      bloodPressureChart.dispose();
    };
  }, []);

  const [user, setUser] = useState(  {
    patient_id: "P001",
    name: "John Doe",
    patient_img: jhon,
    age: 34,
    gender: "Male",
    phone: "+1234567890",
    email: "johndoe@example.com",
    medical_history: [
      "Tooth sensitivity",
      "Gum disease",
      "Allergic to penicillin",
    ],
    dental_history: [
      {
        treatment: "Gum Disease",
        date: "2023-06-15",
        dentist: "Dr. Smith",
        description: "Inflammation of gum tissue.",
        treatment_status: "Under Observation",
      },
      {
        treatment: "Tooth Decay",
        date: "2023-08-20",
        description: "Breakdown of enamel surface.",
        dentist: "Dr. Clark",
        treatment_status: "Cured",
      },
      {
        treatment: "Cavity",
        date: "2023-08-20",
        dentist: "Dr. Clark",
        description: "Decay causing tooth holes.",
        treatment_status: "Inactive",
      },
    ],
    insurance: {
      provider: "HealthFirst",
      policy_number: "HF1234567890",
    },
    last_dental_visit: "2024-12-10",
    diagnosis: "Cavity in upper right molar",
    treatment_plan: "Filling",
    next_appointment: "2025-01-25",
    notes: "Patient complains of sensitivity to cold.",
    dentist_name: "Dr. Alice Carter",
    current_issue: "Severe tooth pain",
    doctor: "Dr. Smith",
    respiratory_rate:20,
    respiratory_status:'Normal',
    temperature:98.6,
    temperature_status:'Normal',
    heart_rate:78,
    heart_rate_status:'Lower than Average',
  },);

  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <div className="bg-white text-gray-800 w-64 p-4 shadow-md h-auto">
        <h3 className="text-xl font-bold pb-4">Patients</h3>
        <ul className="space-y-1">
          {patients.map((patient, index) => (
            <li
              key={index}
              className="flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
              onClick={() => {
                setUser(patient);
              }}
            >
              <img
                src={patient.patient_img}
                alt={patient.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-3 flex-1">
                <div className="text-sm font-medium text-gray-900">
                  {patient.name}
                </div>
                <div className="text-xs text-gray-500">
                  {patient.dentist_name}
                </div>
              </div>{" "}
              <button className="text-gray-400 hover:text-gray-500">
                <i className="fas fa-ellipsis-v"></i>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <main className="flex-1 p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Medical History
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Blood Pressure</h3>
              <select className="border-0 text-sm text-gray-500 focus:ring-0">
                <option>Last 6 months</option>
                <option>Last year</option>
              </select>
            </div>
            <div ref={bloodPressureChartRef} className="h-64"></div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <FaLungs className="text-blue-600 text-xl" />
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">Respiratory Rate</div>
                <div className="text-2xl font-semibold">{user.respiratory_rate} bpm</div>
                <div className="text-sm text-gray-500">{user.respiratory_status}</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <FaThermometerHalf className="text-red-600 text-xl" />
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">Temperature</div>
                <div className="text-2xl font-semibold">{user.temperature}°F</div>
                <div className="text-sm text-gray-500">{user.temperature_status}</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <FaHeartbeat className="text-pink-600 text-xl" />
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">Heart Rate</div>
                <div className="text-2xl font-semibold">{user.heart_rate} bpm</div>
                <div className="text-sm text-gray-500">{user.heart_rate_status}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg">
          <div className="p-6">
            <h3 className="text-lg font-medium mb-4">Diagnostic List</h3>
            <table className="w-full table-auto">
              <thead>
                <tr className="text-left text-sm text-gray-500">
                  <th className="pb-4">Problem/Diagnosis</th>
                  <th className="pb-4">Description</th>
                  <th className="pb-4">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {user.dental_history.map((reason, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="py-4">{reason.treatment}</td>
                    <td className="py-4 text-gray-500">{reason.description}</td>
                    <td className="py-4">
                    
                      <span
                        className={`badge ${
                          reason.treatment_status === "Cured"
                            ? "badge-cured"
                            : reason.treatment_status === "Under Observation"
                            ? "badge-under-observation"
                            : reason.treatment_status === "Inactive"
                            ? "badge-inactive"
                            : reason.treatment_status === "Planned"
                            ? "badge-planned"
                            : reason.treatment_status === "In Progress"
                            ? "badge-in-progress"
                            : "badge-ongoing"
                        }`}
                      >
                        {reason.treatment_status}
                      </span>
                    </td>
                  </tr>
                ))}
                {/* <tr className="border-t border-gray-200">
                  <td className="py-4">Hypertension</td>
                  <td className="py-4 text-gray-500">
                    Chronic high blood pressure
                  </td>
                  <td className="py-4">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                      Under Observation
                    </span>
                  </td>
                </tr> */}

                {/* <tr className="border-t border-gray-200">
                  <td className="py-4">Type 2 Diabetes</td>
                  <td className="py-4 text-gray-500">
                    Insulin resistance and elevated blood sugar
                  </td>
                  <td className="py-4">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                      Cured
                    </span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="py-4">Asthma</td>
                  <td className="py-4 text-gray-500">
                    Recurrent episodes of bronchial constriction
                  </td>
                  <td className="py-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
                      Inactive
                    </span>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <aside className="w-80 border-l border-gray-200 bg-white">
        <div className="p-6">
          <div className="text-center mb-6">
            <img
              src={user.patient_img}
              alt={user.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold">{user.name}</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center">
              {/* <img src={female} alt='female-icon'/> */}
              <i className="fas fa-calendar-alt w-5 text-gray-400"></i>
              {/* <SlCalender/> */}
              <div className="ml-3">
                <div className="text-sm text-gray-500">Next Appointment</div>
                <div className="text-sm font-medium">
                  {user.next_appointment}
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <i className="fas fa-venus w-5 text-gray-400"></i>
              <div className="ml-3">
                <div className="text-sm text-gray-500">Gender</div>
                <div className="text-sm font-medium">{user.gender}</div>
              </div>
            </div>

            <div className="flex items-center">
              <i className="fas fa-phone w-5 text-gray-400"></i>
              <div className="ml-3">
                <div className="text-sm text-gray-500">Contact Info</div>
                <div className="text-sm font-medium">{user.phone}</div>
              </div>
            </div>

            <div className="flex items-center">
              <i className="fas fa-phone-volume w-5 text-gray-400"></i>
              <div className="ml-3">
                <div className="text-sm text-gray-500">Email</div>
                <div className="text-sm font-medium">{user.email}</div>
              </div>
            </div>

            <div className="flex items-center">
              <i className="fas fa-shield-alt w-5 text-gray-400"></i>
              <div className="ml-3">
                <div className="text-sm text-gray-500">Insurance Provider</div>
                <div className="text-sm font-medium">
                  {user.insurance.provider}
                </div>
              </div>
            </div>
          </div>

          <button className="text-black border border-black rounded-lg w-full mt-6 px-4 py-2 font-medium ">
            Show All Information
          </button>

          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">Lab Results</h3>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg"
              >
                <div className="flex items-center">
                  <i className="fas fa-vial text-gray-400 mr-3"></i>
                  <span className="text-sm">Blood Tests</span>
                </div>
                <i className="fas fa-download text-gray-400"></i>
              </a>
              <a
                href="#"
                className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg"
              >
                <div className="flex items-center">
                  <i className="fas fa-laptop-medical text-gray-400 mr-3"></i>
                  <span className="text-sm">CT Scans</span>
                </div>
                <i className="fas fa-download text-gray-400"></i>
              </a>
              <a
                href="#"
                className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg"
              >
                <div className="flex items-center">
                  <i className="fas fa-x-ray text-gray-400 mr-3"></i>
                  <span className="text-sm">Radiology Reports</span>
                </div>
                <i className="fas fa-download text-gray-400"></i>
              </a>
              <a
                href="#"
                className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg"
              >
                <div className="flex items-center">
                  <i className="fas fa-x-ray text-gray-400 mr-3"></i>
                  <span className="text-sm">X-Rays</span>
                </div>
                <i className="fas fa-download text-gray-400"></i>
              </a>
              <a
                href="#"
                className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg"
              >
                <div className="flex items-center">
                  <i className="fas fa-flask text-gray-400 mr-3"></i>
                  <span className="text-sm">Urine Test</span>
                </div>
                <i className="fas fa-download text-gray-400"></i>
              </a>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Patient;
