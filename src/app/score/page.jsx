import ProtectedRoute from "@/components/ProtectedRoute";
import ScoreTable from "../../components/ScoreTable";

export default function page() {
  return (
    <ProtectedRoute>
      <ScoreTable />
    </ProtectedRoute>
  );
}
