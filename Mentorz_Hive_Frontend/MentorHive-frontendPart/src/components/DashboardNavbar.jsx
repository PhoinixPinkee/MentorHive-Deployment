import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { removeToken } from "../helper";
import useUserStore from "../store/user";
import { FiLogOut } from "react-icons/fi";

const DashboardNavbar = () => {
  const navigate = useNavigate();
  const { setUser } = useUserStore();
  
  const onButtonClick = () => {
    removeToken();
    setUser(null);
    navigate("/");
  };

  return (
    <div>
      <div className="border-b bg-white shadow-md">
        <div className="container py-2 mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div>
              <div className="p-2">
                <NavLink to="/">
                  <p className="px-4 py-1 text-3xl font-bold tracking-wider text-gray-800 cursor-pointer hover:text-orange-500 transition-colors duration-300">
                    MentorzHive
                  </p>
                </NavLink>
              </div>
            </div>

            {/* Logout Button Section */}
            <div>
              <button
                onClick={onButtonClick}
                className="flex items-center w-full px-6 py-3 text-white transition-colors duration-300 transform bg-orange-color border rounded-lg hover:bg-orange-color hover:text-white focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
              >
                <span className="mx-2 font-medium">Log Out</span>
                <FiLogOut className="text-xl text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
