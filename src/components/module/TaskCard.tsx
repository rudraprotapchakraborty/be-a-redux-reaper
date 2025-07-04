import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import type { ITask } from "@/types";
import { cn } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  deleteTask,
  toggleCompleteState,
} from "@/redux/features/task/taskSlice";
import { selectUsers } from "@/redux/features/user/userSlice";

interface IProps {
  task: ITask;
}

export default function TaskCard({ task }: IProps) {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);
  const assignedUser = users.find((user) => user.id === task.assignedTo);

  return (
    <div className="bg-white/10 dark:bg-gray-800/30 backdrop-blur-md border border-gray-300/30 dark:border-gray-600/40 rounded-xl p-6 shadow-md transition-all hover:shadow-lg">
      <div className="flex justify-between items-start md:items-center flex-col md:flex-row gap-4">
        {/* Task title */}
        <div className="flex gap-3 items-center">
          <div
            className={cn("h-3 w-3 rounded-full  animate-pulse", {
              "bg-green-500": task.priority === "low",
              "bg-yellow-500": task.priority === "medium",
              "bg-red-500": task.priority === "high",
            })}
          ></div>
          <h2
            className={cn(
              "text-lg font-semibold text-gray-900 dark:text-gray-100",
              { "line-through": task.isCompleted }
            )}
          >
            {task.title}
          </h2>
        </div>

        {/* Action buttons */}
        <div className="flex gap-4 items-center">
          <Button
            onClick={() => dispatch(deleteTask(task.id))}
            variant="ghost"
            className="text-red-500 hover:bg-red-100 dark:hover:bg-red-900/20 p-2 rounded-full transition"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
          <Checkbox
            checked={task.isCompleted}
            onClick={() => dispatch(toggleCompleteState(task.id))}
          />
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
        {task.description}
      </p>
      {/* User  */}
      <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
        Assigned to {assignedUser ? assignedUser.name : "None"}
      </p>
    </div>
  );
}
