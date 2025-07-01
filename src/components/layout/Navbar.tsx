import { Link } from "react-router";
import { ModeToggle } from "../mode-toggler";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] bg-white/10 dark:bg-gray-900/20 border border-white/20 dark:border-white/10 backdrop-blur-md shadow-xl rounded-2xl px-6 md:px-10 py-3 flex items-center justify-between transition-all duration-300">
      {/* Logo */}
      <Link
        to="/"
        className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-green-400 to-lime-500 text-transparent bg-clip-text hover:opacity-90 transition-opacity"
      >
        TaskMaster
      </Link>

      {/* Nav Links */}
      <div className="hidden md:flex gap-8 text-sm md:text-base font-medium text-gray-900 dark:text-gray-200">
        <Link
          to="/counter"
          className="hover:text-green-500 transition-colors duration-200"
        >
          Counter
        </Link>
        <Link
          to="/tasks"
          className="hover:text-green-500 transition-colors duration-200"
        >
          Tasks
        </Link>
        <Link
          to="/users"
          className="hover:text-green-500 transition-colors duration-200"
        >
          Users
        </Link>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <ModeToggle />
      </div>
    </nav>
  );
}
