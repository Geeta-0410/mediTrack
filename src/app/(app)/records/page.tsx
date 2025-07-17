import { RecordsTable } from "@/components/records/records-table";

export default function RecordsPage() {
  return (
    <main className="flex-1 space-y-4 p-4 sm:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Medical Records</h1>
      </div>
      <RecordsTable />
    </main>
  );
}
