import { Pencil } from "lucide-react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const [isVisible, setIsVisible] = useState(true);

  const userData = useSelector((state) => state.user);

  return (
    <div
      className={`sidebar-inset ${isVisible ? "with-sidebar" : "full-width"}`}
    >
      <div className="dashboard-content">
        <div className="min-h-screen bg-[#0d1117] text-gray-200 px-6 py-10">
          {/* <h1 className="text-3xl font-bold mb-8 font-[comic-sans]">
              My Profile
            </h1> */}

          {/* Profile Header */}
          <div className="bg-[#1c1f26] rounded-xl p-6 flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-4">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {/* {userData?.userData?.firstName.slice(0, 1) +
                    userData?.userData?.lastName.slice(0, 1)} */}
                <img
                  src={userData?.userData?.image}
                  style={{ borderRadius: "100%" }}
                />
              </div>
              <div style={{ textAlign: "left" }}>
                <h2 className="text-lg font-semibold">Govind Upadhyay</h2>
                <p className="text-gray-400 text-sm">
                  {userData?.userData?.email}
                </p>
              </div>
            </div>
            <Link
              to={"/dashboard/settings"}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded flex items-center gap-2 transition"
            >
              <Pencil size={16} /> Edit
            </Link>
          </div>

          {/* About Section */}
          <div className="bg-[#1c1f26] rounded-xl p-6 mt-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg">About</h3>
              <Link
                to={"/dashboard/settings"}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded flex items-center gap-2 transition"
              >
                <Pencil size={16} /> Edit
              </Link>
            </div>
            <p className="text-gray-500 text-sm">
              Write Something About Yourself
            </p>
          </div>

          {/* Personal Details */}
          <div className="bg-[#1c1f26] rounded-xl p-6 mt-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-lg">Personal Details</h3>
              <Link
                to={"/dashboard/settings"}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded flex items-center gap-2 transition"
              >
                <Pencil size={16} /> Edit
              </Link>
            </div>

            <div
              className="grid sm:grid-cols-2 gap-y-4 text-sm"
              style={{ textAlign: "left", padding: "10px" }}
            >
              <div>
                <p className="text-gray-400">First Name</p>
                <p className="font-medium">{userData?.userData?.firstName}</p>
              </div>
              <div>
                <p className="text-gray-400">Last Name</p>
                <p className="font-medium">{userData?.userData?.lastName}</p>
              </div>
              <div>
                <p className="text-gray-400">Account Type</p>
                <p className="font-medium">{userData?.userData?.accountType}</p>
              </div>
              <div>
                <p className="text-gray-400">Phone Number</p>
                <Link  to={"/dashboard/settings"} className="font-medium text-yellow-400 cursor-pointer">
                  Add Contact Number
                </Link>
              </div>
              <div>
                <p className="text-gray-400">Email</p>
                <p className="font-medium">{userData?.userData?.email}</p>
              </div>
              <div>
                <p className="text-gray-400">Date of Birth</p>
                <p className="font-medium">January 1, 1970</p>
              </div>
              <div>
                <p className="text-gray-400">Gender</p>
                <p className="font-medium text-yellow-400 cursor-pointer">
                  Add Gender
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
