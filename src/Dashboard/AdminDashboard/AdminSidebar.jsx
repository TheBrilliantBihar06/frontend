import React from "react";
import { 
  LayoutDashboard,
  BookOpen,
  Users,
  TrendingUp,
  LogOut,
  X
} from "lucide-react";

const AdminSidebar = ({ sidebarOpen, setSidebarOpen, currentUser, handleLogout }) => {
  return (
    <div
      className={`fixed lg:static inset-y-0 left-0 z-30 w-64 bg-gradient-to-b from-indigo-900 to-purple-900 text-white transform ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 transition-transform duration-300 ease-in-out`}
    >
      <div className="flex items-center justify-between p-6 border-b border-indigo-700">
        <div>
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
            🎓 Brilliant Bihar
          </h2>
          <p className="text-indigo-300 text-sm">Education Hub</p>
        </div>
        <button
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden text-white hover:text-indigo-200"
        >
          <X size={24} />
        </button>
      </div>

      <nav className="mt-8 px-4 space-y-2">
        <a
          href="/admin-dashboard"
          className="flex items-center p-3 bg-indigo-800 text-white rounded-xl shadow-lg"
        >
          <LayoutDashboard className="mr-3" size={20} />
          <span className="font-medium">Dashboard</span>
        </a>
        <a
          href="/add-course"
          className="flex items-center p-3 text-indigo-200 hover:bg-indigo-800 hover:text-white rounded-xl transition-all"
        >
          <BookOpen className="mr-3" size={20} />
          <span>Course Management</span>
        </a>
        <a
          href="/manage-users"
          className="flex items-center p-3 text-indigo-200 hover:bg-indigo-800 hover:text-white rounded-xl transition-all"
        >
          <Users className="mr-3" size={20} />
          <span>User Management</span>
        </a>
        <a
          href="/manage-teachers"
          className="flex items-center p-3 text-indigo-200 hover:bg-indigo-800 hover:text-white rounded-xl transition-all"
        >
          <TrendingUp className="mr-3" size={20} />
          <span>Teacher Management</span>
        </a>
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-indigo-700">
        <div className="mb-4 p-3 bg-indigo-800 rounded-xl">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
              {currentUser?.username?.charAt(0).toUpperCase()}
            </div>
            <div className="ml-3">
              <p className="text-white text-sm font-medium">
                {currentUser?.username}
              </p>
              <p className="text-indigo-300 text-xs">Administrator</p>
            </div>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center w-full p-3 text-indigo-200 hover:bg-red-600 hover:text-white rounded-xl transition-all"
        >
          <LogOut className="mr-3" size={18} />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
