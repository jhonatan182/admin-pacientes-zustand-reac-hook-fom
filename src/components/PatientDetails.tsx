import { toast } from "sonner";
import { usePatientStore } from "../store";
import type { Patient } from "../types";
import { formartDate } from "../utils";
import PatientDetailItem from "./PatientDetailItem";

type PatientDetailsProps = {
  patient: Patient;
};

export default function PatientDetails({ patient }: PatientDetailsProps) {
  const deletePatinet = usePatientStore((state) => state.deletePatient);
  const getPatientById = usePatientStore((state) => state.getPatientById);

  const handleDeletePatient = () => {
    deletePatinet(patient.id);
    toast.error("Paciente eliminado correctamente");
  };

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatientDetailItem label="ID" data={patient.id} />
      <PatientDetailItem label="Nombre" data={patient.name} />
      <PatientDetailItem label="Propietario" data={patient.caretaker} />
      <PatientDetailItem label="Email" data={patient.email} />
      <PatientDetailItem label="Fecha Alta" data={formartDate(patient.date)} />
      <PatientDetailItem label="Sintomas" data={patient.symptoms} />

      <div className="flex flex-col lg:flex-row gap-3 justify-between  mt-10">
        <button
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => getPatientById(patient.id)}
        >
          Editar
        </button>
        <button
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={handleDeletePatient}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
