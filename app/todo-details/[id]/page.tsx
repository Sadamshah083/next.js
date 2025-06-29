"use client";
import { useSearchParams } from "next/navigation";

interface PageProps {
  params: { id: string };
}

const TodoDetailPage = ({ params }: PageProps) => {
  const searchParams = useSearchParams();
  const task = searchParams.get("task");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-green-700">Todo Detail</h1>
      <p>
        <strong>ID:</strong> {params.id}
      </p>
      <p>
        <strong>Task:</strong> {task || "No task found"}
      </p>
    </div>
  );
};

export default TodoDetailPage;
