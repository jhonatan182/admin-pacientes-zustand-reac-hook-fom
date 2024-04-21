import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { DraftPatient, Patient } from "./types";
import { v4 as uuidv4 } from "uuid";

type PatientState = {
  patients: Patient[];
  activeId: Patient["id"];
  addPatient: (data: DraftPatient) => void;
  deletePatient: (id: Patient["id"]) => void;
  getPatientById: (id: Patient["id"]) => void;
  updatePatient: (patient: Patient) => void;
};
export const usePatientStore = create<PatientState>()(
  devtools(
    persist(
      (set) => ({
        patients: [],
        activeId: "",
        addPatient: (data) => {
          set((state) => ({
            patients: [...state.patients, { ...data, id: uuidv4() }],
          }));
        },
        deletePatient(id) {
          set((state) => ({
            patients: state.patients.filter((patient) => patient.id !== id),
          }));
        },
        getPatientById(id) {
          set(() => ({
            activeId: id,
          }));
        },
        updatePatient(patient) {
          set((state) => ({
            patients: state.patients.map((patientState) =>
              patientState.id === patient.id ? patient : patientState
            ),
            activeId: "",
          }));
        },
      }),
      {
        name: "patient-storage",
      }
    )
  )
);
