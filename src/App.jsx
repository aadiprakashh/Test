import "./App.css";
import Header from "./components/Header";
import { HashRouter as Router, Routes, Route,} from "react-router-dom";
import Admin from "./pages/Admin/Admin";
import Appointment from "./pages/Appointment/Appointment";
import Patient from "./pages/Patient/Patient";
import { PatientContext } from "./components/PatientContext";
import { TreatmentsContext } from "./components/TreatmentsContext";
import { patients } from "./assets/data";
import Billing from "./pages/Billing/Billing";
import NewInvoice from "./pages/Billing/NewInvoice";
import ViewInvoice from "./pages/Billing/ViewInvoice";
import Payment from "./pages/Billing/Payment";
import Doctor from "./pages/Doctor/Doctor";
import Graph from "./components/Graph";

const App = () => {
  const treatments = [
    ...new Set(patients.map((patient) => patient.appointments.procedure)),
  ];
  
  return (
    <Router>
      <div className="flex">
        <Header />
        <div className="flex-1 ml-56">
        <PatientContext.Provider value={patients}>
        <TreatmentsContext.Provider value={treatments}>

        <Routes>
          <Route path="/" element={<Admin />} />
          <Route path="/patients" element={<Patient />} />
          <Route path="/appointments" element={<Appointment />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/doctors" element={<Doctor />} />
          <Route path="/new-invoice" element={<NewInvoice/>}/>
          <Route path="/view-invoice" element={<ViewInvoice/>}/>
          <Route path="/payment" element={<Payment/>}/>
          <Route path="/settings" element={<Graph/>}/>
        </Routes>
        
        </TreatmentsContext.Provider>
        </PatientContext.Provider>
        </div>
      </div>
    </Router>

  );
};
export default App;
