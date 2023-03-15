import AdminContent from "@/components/admin/admin-manage";
import DashCard from "@/components/admin/dash-card";
import SalesReportTable from "@/components/admin/sales-report";

export default function AdminPage() {
  return (
    <>
      <DashCard />
      <AdminContent />
      <SalesReportTable />
    </>
  );
}
