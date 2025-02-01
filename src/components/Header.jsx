// import { useState } from "react";
// import { MdMedication } from "react-icons/md";
// import { FaHome, FaUser, FaCalendarAlt, FaMoneyBillAlt } from 'react-icons/fa';
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/img/logo.png";
// import doctor from "../assets/img/user-1.png";

export default function Header() {
  // const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();  
  const isActive = (path) => location.pathname === path;

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-dvh">
        <nav className="mt-6 flex flex-col align-center gap-8">
       
        <Link to="/" className="text-2xl justify-center font-bold text-green-500 flex items-center">
          <img src={logo} alt="Logo" width={200} />
          {/* TechCare */}
        </Link>
          <div className="px-4 space-y-2">
            <Link
              to="/"
              className={`flex items-center px-4 py-2.5 text-sm font-medium ${isActive("/") ? "bg-indigo-50 font-semibold text-indigo-900" : " hover:bg-gray-50"}  text-gray-600 rounded-lg`}
            >
              <i className="fas fa-chart-line w-5 h-5 mr-3"></i>
              Dashboard
            </Link>
            <Link
              to="/patients"
              className={`flex items-center px-4 py-2.5 text-sm font-medium ${isActive("/patients") ? "bg-indigo-50 font-semibold text-indigo-900" : " hover:bg-gray-50"} text-gray-600 rounded-lg`}
            >
              <i className="fas fa-user-group w-5 h-5 mr-3"></i>
              Patients
            </Link>
            <Link
              to="/appoinments"
              className={`flex items-center px-4 py-2.5 text-sm font-medium ${isActive("/appoinments") ? "bg-indigo-50 font-semibold text-indigo-900" : " hover:bg-gray-50"} text-gray-600 rounded-lg`}
            >
              <i className="fas fa-calendar-alt w-5 h-5 mr-3"></i>
              Appointments
            </Link>
            <Link
              to="#"
              className={`flex items-center px-4 py-2.5 text-sm font-medium ${isActive("/treatments") ? "bg-indigo-50 font-semibold text-indigo-900" : " hover:bg-gray-50"} text-gray-600 rounded-lg`}
            >
              <i className="fas fa-file-invoice-dollar w-5 h-5 mr-3"></i>
              Billing
            </Link>
            <Link
              to="#"
              className={`flex items-center px-4 py-2.5 text-sm font-medium ${isActive("#contact") ? "bg-indigo-50 font-semibold text-indigo-900" : " hover:bg-gray-50"} text-gray-600 rounded-lg`}
            >
              <i className="fas fa-chart-bar w-5 h-5 mr-3"></i>
              Analytics
            </Link>
            <Link
              to="#"
              className={`flex items-center px-4 py-2.5 text-sm font-medium ${isActive("#contact") ? "bg-indigo-50 font-semibold text-indigo-900" : " hover:bg-gray-50"} text-gray-600 rounded-lg`}
            >
              <i className="fas fa-cog w-5 h-5 mr-3"></i>
              Settings
            </Link>
          </div>
        </nav>
      </aside>
  );
}







































 // <nav className="bg-white border-b border-gray-200">
    // <div>
    
    // </div>
    //   <div className="container mx-auto flex items-center justify-between p-4">
    //     {/* Logo */}
    //     <Link to="/" className="text-2xl font-bold text-gray-800 flex items-center">
    //       <img src={logo} alt="Logo" className="h-8 w-auto mr-2" />
    //     </Link>

    //     {/* Menu Items */}
    //     <div className="hidden md:flex space-x-6 menu">
    //       <Link
    //         to="/"
    //         className={`text-gray-700 menu-item ${isActive("/") ? "active" : ""} hover:text-cyan-50 flex items-center`}
    //       >
    //         <FaHome className="mr-2" /> Overview
    //       </Link>
    //       <Link
    //         to="/patients"
    //         className={`text-gray-700 menu-item ${isActive("/patients") ? "active" : ""} hover:text-cyan-50 flex items-center`}
    //       >
    //         <FaUser className="mr-2" /> Patients
    //       </Link>
    //       <Link
    //         to="/appoinments"
    //         className={`text-gray-700 menu-item ${isActive("/appoinments") ? "active" : ""} hover:text-cyan-50 flex items-center`}
    //       >
    //         <FaCalendarAlt className="mr-2" /> Appointments
    //       </Link>
    //       <Link
    //         to="/treatments"
    //         className={`text-gray-700 menu-item ${isActive("/treatments") ? "active" : ""} hover:text-cyan-50 flex items-center`}
    //       >
    //         <MdMedication className="mr-2" /> Treatments
    //       </Link>
    //       <Link
    //         to="#contact"
    //         className={`text-gray-700 menu-item ${isActive("#contact") ? "active" : ""} hover:text-cyan-50 flex items-center`}
    //       >
    //         <FaMoneyBillAlt className="mr-2" /> Transaction
    //       </Link>
    //     </div>

    //     {/* Profile Section */}
    //     <div className="flex items-center gap-4">
    //       <div>
    //         <h4 className="text-sm font-bold text-gray-800">Dr. Jose Simmons</h4>
    //         <p className="text-xs text-gray-500">General Practitioner</p>
    //       </div>
    //       <img
    //         src={doctor}
    //         alt="Dr. Jose Simmons"
    //         className="w-12 h-12 rounded-full object-cover"
    //       />
    //     </div>

    //     {/* Mobile Menu Toggle */}
    //     <div className="md:hidden">
    //       <button
    //         className="text-gray-700 focus:outline-none"
    //         aria-label="Toggle menu"
    //         onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
    //       >
    //         <svg
    //           className="w-6 h-6"
    //           fill="none"
    //           stroke="currentColor"
    //           strokeWidth="2"
    //           viewBox="0 0 24 24"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             d="M4 6h16M4 12h16m-7 6h7"
    //           ></path>
    //         </svg>
    //       </button>
    //     </div>
    //   </div>

    //   {/* Mobile Menu */}
    //   {isMobileMenuOpen && (
    //     <div className="md:hidden bg-gray-50 border-t border-gray-200">
    //     <Link
    //         to="/"
    //         className={`text-gray-700 menu-item ${isActive("/") ? "active" : ""} hover:text-cyan-50 flex items-center`}
    //       >
    //         <FaHome className="mr-2" /> Overview
    //       </Link>
    //       <Link
    //         to="/patients"
    //         className={`text-gray-700 menu-item ${isActive("/patients") ? "active" : ""} hover:text-cyan-50 flex items-center`}
    //       >
    //         <FaUser className="mr-2" /> Patients
    //       </Link>
    //       <Link
    //         to="/appoinments"
    //         className={`text-gray-700 menu-item ${isActive("/appoinments") ? "active" : ""} hover:text-cyan-50 flex items-center`}
    //       >
    //         <FaCalendarAlt className="mr-2" /> Appointments
    //       </Link>
    //       <Link
    //         to="/treatments"
    //         className={`text-gray-700 menu-item ${isActive("/treatments") ? "active" : ""} hover:text-cyan-50 flex items-center`}
    //       >
    //         <MdMedication className="mr-2" /> Treatments
    //       </Link>
    //       <Link
    //         to="#contact"
    //         className={`text-gray-700 menu-item ${isActive("#contact") ? "active" : ""} hover:text-cyan-50 flex items-center`}
    //       >
    //         <FaMoneyBillAlt className="mr-2" /> Transaction
    //       </Link>
    //     </div>
    //   )}
    // </nav>