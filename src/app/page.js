import Link from 'next/link';

const HomePage = () => {
  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen text-gray-800 bg-cover bg-center relative"
      style={{ backgroundImage: 'url("/educate2.jpg")' }} // Replace with your image name
    >
      {/* Dimmed Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="text-center mb-8 px-6">
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome to iLearn Digital Learning Platform
          </h1>
          <p className="text-lg text-white">
            Revolutionizing Zimbabwe's education with interactive, scalable, and hybrid digital learning solutions.
          </p>
        </header>

        {/* Dashboard Links */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl">
          <DashboardCard className="bg-amber-400" href="/dashboards/teachers/" title="Teacher Dashboard" />
          <DashboardCard className="bg-pink-300" href="/dashboards/students/" title="Student Dashboard" />
          <DashboardCard className="bg-blue-400" href="/dashboards/government/" title="Government Dashboard" />
          <DashboardCard className="bg-emerald-500" href="/dashboards/admin/" title="Admin Dashboard" />
        </section>

        {/* Footer */}
        <footer className="mt-10 text-white text-sm">
          &copy; {new Date().getFullYear()} iLearn Digital Learning Platform
        </footer>
      </div>
    </div>
  );
};

// Dashboard Card Component
const DashboardCard = ({ href, title, className }) => {
  return (
    <Link
      href={href}
      className={`text-white font-semibold text-center py-6 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:opacity-90 ${className}`}
    >
      {title}
    </Link>
  );
};

export default HomePage;
