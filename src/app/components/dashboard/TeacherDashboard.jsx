// pages/dashboard/teacher.jsx
"use client";

import React from 'react';
import DashboardLayout from '../DashboardLayout';
import { FaCalendarAlt, FaChartLine, FaRegCheckCircle, FaRegFileAlt } from 'react-icons/fa';

const TeacherDashboard = () => {
  return (
    <DashboardLayout>
      <div className="container mx-auto p-6" style={{ backgroundColor: 'wheat' }}>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Teacher Dashboard</h1>
        <p className="text-lg text-gray-600 mb-8">Welcome, Teacher! Manage your classes and track your students' progress.</p>

        {/* Task Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <FaCalendarAlt className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Class Scheduling</h3>
            <p className="text-gray-600">Class Scheduling & Lesson Planning Tools</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <FaChartLine className="text-4xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Performance Analytics</h3>
            <p className="text-gray-600">Student Performance Analytics & Real-Time Feedback</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <FaRegCheckCircle className="text-4xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Automated Attendance</h3>
            <p className="text-gray-600">Automated Attendance Tracking</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <FaRegFileAlt className="text-4xl text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Report Generation</h3>
            <p className="text-gray-600">Report Generation & Student Progress Tracking</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TeacherDashboard;
