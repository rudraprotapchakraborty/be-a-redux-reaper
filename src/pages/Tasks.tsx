import { AddTaskModal } from "@/components/module/AddTaskModal";
import TaskCard from "@/components/module/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { selectTasks, updateFilter } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function Tasks() {
  const tasks = useAppSelector(selectTasks);
  const dispatch = useAppDispatch();

  return (
    <div className="mx-auto max-w-7xl px-5">
      {/* Header Section */}
      <div className="flex gap-5 justify-end items-center mb-8 border-b border-gray-300 dark:border-gray-700 pb-4">
        <h1 className="mr-auto text-3xl font-bold text-gray-800 dark:text-white">
          Your Tasks
        </h1>
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger onClick={()=>dispatch(updateFilter("all"))} value="all">All</TabsTrigger>
            <TabsTrigger onClick={()=>dispatch(updateFilter("low"))} value="low">Low</TabsTrigger>
            <TabsTrigger onClick={()=>dispatch(updateFilter("medium"))} value="medium">Medium</TabsTrigger>
            <TabsTrigger onClick={()=>dispatch(updateFilter("high"))} value="high">High</TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal />
      </div>

      {/* Task List */}
      {tasks.length > 0 ? (
        <div className="space-y-6">
          {tasks.map((task) => (
            <TaskCard task={task} key={task.id} />
          ))}
        </div>
      ) : (
        <div className="mt-20 text-center text-gray-600 dark:text-gray-400 text-sm">
          No tasks yet. Start by adding one!
        </div>
      )}
    </div>
  );
}
