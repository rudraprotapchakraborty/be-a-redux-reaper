import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import type { IUser } from "@/types";
import { useAppDispatch } from "@/redux/hooks";
import { removeUser } from "@/redux/features/user/userSlice";

interface IProps {
  user: IUser;
}

export default function UserCard({ user }: IProps) {
  const dispatch = useAppDispatch();

  return (
    <div className="bg-white/10 dark:bg-gray-800/30 backdrop-blur-md border border-gray-300/30 dark:border-gray-600/40 rounded-xl p-6 shadow-md transition-all hover:shadow-lg">
      <div className="flex justify-between items-start md:items-center flex-col md:flex-row gap-4">
        {/* User Name */}
        <div className="flex gap-3 items-center">
          <h2
            className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {user.name}
          </h2>
        </div>

        {/* Action buttons */}
        <div className="flex gap-4 items-center">
          <Button
            onClick={() => dispatch(removeUser(user.id))}
            variant="ghost"
            className="text-red-500 hover:bg-red-100 dark:hover:bg-red-900/20 p-2 rounded-full transition"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
