// pages/index.jsx
import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Welcome to iLearn Digital Learning Platform</h1>
        <p>
          Revolutionizing Zimbabwe's education with interactive, scalable, and hybrid digital learning solutions.
        </p>
      </header>
      <section style={styles.cardContainer}>
        <Link href="/dashboard/teacher">
          <a style={styles.card}>Teacher Dashboard</a>
        </Link>
        <Link href="/dashboard/student">
          <a style={styles.card}>Student Dashboard</a>
        </Link>
        <Link href="/dashboard/govt">
          <a style={styles.card}>Government Dashboard</a>
        </Link>
        <Link href="/dashboard/admin">
          <a style={styles.card}>Admin Dashboard</a>
        </Link>
      </section>
      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} iLearn Digital Learning Platform</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
  },
  header: {
    marginBottom: '2rem',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1.5rem',
    marginBottom: '2rem',
  },
  card: {
    display: 'block',
    padding: '1.5rem',
    backgroundColor: '#0070f3',
    color: '#fff',
    borderRadius: '8px',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    transition: 'background-color 0.2s ease',
  },
  footer: {
    marginTop: '2rem',
    fontSize: '0.9rem',
    color: '#666',
  },
};

export default HomePage;
