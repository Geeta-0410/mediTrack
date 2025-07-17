import { PatientList } from "@/components/patients/patient-list";
import { AddPatientForm } from "@/components/patients/add-patient-form";
import { PlusCircle } from "lucide-react";

export default function PatientsPage() {
  return (
    <main className="flex-1 space-y-4 p-4 sm:p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl">Patients</h1>
        <AddPatientForm />
      </div>
      <PatientList />
    </main>
  );
}
