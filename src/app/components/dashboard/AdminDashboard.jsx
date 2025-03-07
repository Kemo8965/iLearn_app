// pages/dashboard/admin.jsx
"use client";

import React from 'react';
import DashboardLayout from '../DashboardLayout';
import { FaUser, FaChartBar, FaClipboardList, FaRegFileAlt } from 'react-icons/fa';

const AdminDashboard = () => {
  return (
    <DashboardLayout>
      <div className="container mx-auto p-6" style={{ backgroundColor: 'wheat' }}>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Admin Dashboard</h1>
        <p className="text-lg text-gray-600 mb-8">Welcome, Administrator! Here's an overview of your tasks and responsibilities.</p>

        {/* Task Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <FaUser className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Manage Profiles</h3>
            <p className="text-gray-600">Manage Teacher & Student Profiles</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <FaChartBar className="text-4xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Track Attendance</h3>
            <p className="text-gray-600">Track Student Attendance & Progress</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <FaClipboardList className="text-4xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Monitor Performance</h3>
            <p className="text-gray-600">Monitor Teacher & Subject Performance</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <FaRegFileAlt className="text-4xl text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Generate Reports</h3>
            <p className="text-gray-600">Generate School-Wide Reports</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
