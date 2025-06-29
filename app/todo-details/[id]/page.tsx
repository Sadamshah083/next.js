"use client";
import { useParams, useSearchParams } from "next/navigation";
const TodoDetailPage = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const task = searchParams.get("task");
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-green-700">Todo Detail</h1>
      <p>
        <strong>Task:</strong> {task || "No task found"}
      </p>
    </div>
  );
};
export default TodoDetailPage;
