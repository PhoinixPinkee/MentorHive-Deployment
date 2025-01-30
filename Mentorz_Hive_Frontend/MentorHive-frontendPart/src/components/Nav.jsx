import { NavLink, useNavigate } from "react-router-dom";
import { FaUser, FaBars } from "react-icons/fa"; // Import the user and hamburger icons
import { Dropdown, Menu } from "antd"; // Import Ant Design components
import { AiOutlineDashboard } from "react-icons/ai"; // Import Dashboard icon
import { FiLogOut } from "react-icons/fi"; // Import Logout icon

import logos from "../assets/logo.png";
import useUserStore from "../store/user";
import { removeToken } from "../helper";
import { useState } from "react"; // Import useState to manage the mobile menu state

export const Nav = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUserStore(); // Destructure setUser from store
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to handle mobile menu

  const signInBtnClick = () => {
    navigate("/signin");
  };

  const signUpStudentBtnClick = () => {
    navigate("/signup/student");
  };

  const signUpMentorBtnClick = () => {
    navigate("/signup/mentor");
  };

  const onButtonClick = () => {
    removeToken(); // Assuming you have this function to remove the token
    setUser(null);
    navigate("/");
  };

  const menu = (
    <Menu
      className="border border-gray-200 rounded-lg shadow-md"
      style={{
        backgroundColor: "white", // White background for visibility
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
      }}
    >
      <Menu.Item
        key="1"
        icon={<AiOutlineDashboard className="text-orange-500" />}
        className="text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition duration-200"
      >
        <NavLink
          className="text-base font-medium"
          to="/dashboard/profile"
          style={{ color: "inherit" }} // Inherits hover text color
        >
          Dashboard
        </NavLink>
      </Menu.Item>
      <Menu.Item
        key="2"
        icon={<FiLogOut className="text-orange-500" />}
        className="text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition duration-200"
      >
        <button
          onClick={onButtonClick}
          className="w-full text-base text-left font-medium"
          style={{ color: "inherit" }} // Inherits hover text color
        >
          Logout
        </button>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="bg-white">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <NavLink to="/" className="inline-flex items-center mr-8">
              <img className="w-24" src={logos} alt="logo" />
            </NavLink>
          </div>

          {/* Hamburger Icon for Mobile, Only visible when not logged in */}
          {!user && (
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Toggle mobile menu
                className="text-gray-600 focus:outline-none"
              >
                <FaBars className="text-2xl" />
              </button>
            </div>
          )}

          {/* Desktop Menu */}
          {!user ? (
            <ul className="items-center hidden space-x-8 lg:flex">
              <li>
                <button
                  onClick={signUpMentorBtnClick}
                  className="h-12 px-6 font-medium tracking-wide text-gray  border-4 vibrant-green  rounded-md hover:bg-vibrant-green transition-all  duration-300 hover:text-black"
                >
                  Become a Mentor with Us
                </button>
              </li>
              <li>
                <button
                  onClick={signInBtnClick}
                  className="font-medium tracking-wide text-orange-500 hover:text-orange-700 transition-all duration-300"
                >
                  Sign in
                </button>
              </li>
              <li>
                <button
                  onClick={signUpStudentBtnClick}
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white bg-orange-color rounded-md hover:bg-orange-600 transition-all duration-300"
                >
                  Sign up
                </button>
              </li>
            </ul>
          ) : (
            <Dropdown overlay={menu} trigger={["hover"]}>
              <button className="flex items-center justify-center font-medium tracking-wide text-white bg-orange-500 transition-all duration-300 border-2 border-orange-500 rounded-full w-10 h-10 hover:bg-orange-600 hover:shadow-lg">
                <FaUser className="text-white text-lg" /> {/* User Icon */}
              </button>
            </Dropdown>
          )}

          {/* Mobile Menu for logged-in users */}
          {user && (
            <div className="absolute top-16 left-0 w-full bg-white shadow-lg p-4 space-y-4 lg:hidden z-10">
              <button
                onClick={() => navigate("/dashboard/profile")}
                className="block w-full text-center py-2 font-medium tracking-wide text-gray-800 border-b border-gray-200 hover:bg-orange-100"
              >
                Dashboard
              </button>
              <button
                onClick={onButtonClick}
                className="block w-full text-center py-2 font-medium tracking-wide text-gray-800 hover:bg-orange-100"
              >
                Logout
              </button>
            </div>
          )}

          {/* Mobile Menu for users not logged in */}
          {!user && isMobileMenuOpen && (
            <div className="absolute top-16 left-0 w-full bg-white shadow-lg p-4 space-y-4 lg:hidden z-10">
              <button
                onClick={signUpMentorBtnClick}
                className="block w-full text-center py-2 font-medium tracking-wide text-gray-800 border-4 vibrant-green rounded-md hover:bg-vibrant-green transition-all duration-300"
              >
                Become a Mentor with Us
              </button>
              <button
                onClick={signInBtnClick}
                className="block w-full text-center py-2 font-medium tracking-wide text-orange-500 hover:text-orange-700 transition-all duration-300"
              >
                Sign in
              </button>
              <button
                onClick={signUpStudentBtnClick}
                className="block w-full text-center py-2 font-medium tracking-wide text-white bg-orange-color rounded-md hover:bg-orange-600 transition-all duration-300"
              >
                Sign up
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
