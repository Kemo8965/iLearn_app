// pages/dashboard/govt.jsx
"use client";

import React from 'react';
import DashboardLayout from '../DashboardLayout';
import { FaChartBar, FaFileAlt, FaUsers, FaRegClock } from 'react-icons/fa';

const GovtDashboard = () => {
  return (
    <DashboardLayout>
      <div className="container mx-auto p-6" style={{ backgroundColor: 'wheat' }}>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Government Dashboard</h1>
        <p className="text-lg text-gray-600 mb-8">Welcome, Government Stakeholder! Here's an overview of your tasks and responsibilities.</p>

        {/* Task Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <FaChartBar className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">National Overview</h3>
            <p className="text-gray-600">National School Performance Overview</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <FaFileAlt className="text-4xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Real-Time Analytics</h3>
            <p className="text-gray-600">Real-Time School Analytics</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <FaUsers className="text-4xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Curriculum Updates</h3>
            <p className="text-gray-600">Centralized Curriculum Updates</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <FaRegClock className="text-4xl text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">AI Insights</h3>
            <p className="text-gray-600">AI-Driven Data Insights</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default GovtDashboard;
