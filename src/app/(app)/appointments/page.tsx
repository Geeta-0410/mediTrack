import { AppointmentCalendar } from "@/components/appointments/appointment-calendar";

export default function AppointmentsPage() {
  return (
    <main className="flex-1 space-y-4 p-4 sm:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Appointments</h1>
      </div>
      <AppointmentCalendar />
    </main>
  );
}
