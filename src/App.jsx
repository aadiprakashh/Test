import "./App.css";
import Header from "./components/Header";
import {
  HashRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";
// import PatientManagement from './pages/Patient/PatientManagement';
import Admin from "./pages/Admin/Admin";
import Appointment from "./pages/Appointment/Appointment";
import Patient from "./pages/Patient/Patient";
import Graph from "./components/Graph";
const App = () => {
  return (
    <Router>
      <div className="flex">
        <Header />
        <Routes>
          <Route path="/" element={<Admin />} />
          <Route path="/patients" element={<Patient />} />

          {/* <Route path="/patients" element={<PatientManagement/>}/> */}
          <Route path="/appoinments" element={<Appointment />} />
        </Routes>
      </div>
    </Router>

  );
};
export default App;
