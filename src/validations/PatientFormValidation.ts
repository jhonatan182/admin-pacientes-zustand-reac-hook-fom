import { z } from "zod";

export const PatientSchema = z.object({
  name: z.string().min(3, { message: "Nombre del paciente es obligatorio" }),
  caretaker: z
    .string()
    .min(3, { message: "Nombre del propietario es obligatorio" }),
  email: z
    .string()
    .min(1, { message: "El correo es obligatorio" })
    .email({ message: "Ese no es un correo valido" }),

  date: z
    .string()
    .refine((value) => new Date(value).toString() !== "Invalid Date", {
      message: "Fecha de alta es obligatoria",
    }),
  symptoms: z.string().min(5, { message: "Esta descripcion es muy corta" }),
});
