import { createContext,useContext } from "react";

export const PatientContext = createContext();;

export const usePatients = () => {
    return useContext(PatientContext);
}