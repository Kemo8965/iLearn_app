// pages/dashboard/student.jsx
"use client";

import React from 'react';
import DashboardLayout from '../DashboardLayout';
import { FaBook, FaChalkboardTeacher, FaClipboardList, FaRegCalendarCheck, FaFileAlt } from 'react-icons/fa';

const StudentDashboard = () => {
  return (
    <DashboardLayout>
      <div className="container mx-auto p-6" style={{ backgroundColor: 'wheat' }}>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Student Dashboard</h1>
        <p className="text-lg text-gray-600 mb-8">Welcome, Student! Here's your learning portal.</p>

        {/* Task Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <FaBook className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Lessons</h3>
            <p className="text-gray-600">View & Access Lessons</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <FaChalkboardTeacher className="text-4xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Live Classes</h3>
            <p className="text-gray-600">Join Live Classes with Teachers</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <FaClipboardList className="text-4xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Digital Whiteboard</h3>
            <p className="text-gray-600">Interactive Digital Whiteboard</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <FaRegCalendarCheck className="text-4xl text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Attendance</h3>
            <p className="text-gray-600">Track Attendance & Performance</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <FaFileAlt className="text-4xl text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Course Materials</h3>
            <p className="text-gray-600">Access Course Materials & Assignments</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
