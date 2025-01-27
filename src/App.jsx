
import './App.css'
// import PatientDashboard from './PatientDashboard';
import Header from './components/Header';
// import Home from './components/Home';
import {
    HashRouter as Router,
    Routes,
    Route,
    // Navigate,
  } from "react-router-dom";
import Patient from './pages/Patient';
import Admin from './pages/Admin';
const App = () => {
return(
    <Router basename='/Test'>
        <Header/>
        <Routes>
            <Route path="/" element={<Admin/>}/>
            <Route path="/patients" element={<Patient/>}/>
        </Routes>
    </Router>
   
   
)
}
export default App; 