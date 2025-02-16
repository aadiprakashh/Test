import { useContext, createContext } from "react";

export const TreatmentsContext = createContext()


export const useTreatments = () => {
    return useContext(TreatmentsContext);
}