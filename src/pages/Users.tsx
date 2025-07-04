import { AddUserModal } from "@/components/module/AddUserModal";
import UserCard from "@/components/module/UserCard";
import { selectUsers } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hooks";

export default function User() {
  const users = useAppSelector(selectUsers);

  return (
    <div className="mx-auto max-w-7xl px-5">
      {/* Header Section */}
      <div className="flex gap-5 justify-end items-center mb-8 border-b border-gray-300 dark:border-gray-700 pb-4">
        <h1 className="mr-auto text-3xl font-bold text-gray-800 dark:text-white">
          Users
        </h1>
        <AddUserModal />
      </div>

      {/* User List */}
      {users.length > 0 ? (
        <div className="space-y-6">
          {users.map((user) => (
            <UserCard user={user} key={user.id} />
          ))}
        </div>
      ) : (
        <div className="mt-20 text-center text-gray-600 dark:text-gray-400 text-sm">
          No users yet.
        </div>
      )}
    </div>
  );
}
