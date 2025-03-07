// components/DashboardLayout.jsx
"use client";

import Link from 'next/link';
import React from 'react';

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <header style={{ backgroundColor: 'blue-400', padding: '10px' }}>
        <nav>
        <Link href="/" style={{ marginRight: '15px' }}>Home</Link> {/* New Student Link */}
          <Link href="/dashboards/teachers/" style={{ marginRight: '15px' }}>Teacher</Link>
          <Link href="/dashboards/government/" style={{ marginRight: '15px' }}>Government</Link>
          <Link href="/dashboards/admin/" style={{ marginRight: '15px' }}>Admin</Link>
          <Link href="/dashboards/students/">Student</Link> {/* New Student Link */}
        </nav>
      </header>
      <main className="bg-gray-100 min-h-screen" style={{ padding: '20px' }}>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
