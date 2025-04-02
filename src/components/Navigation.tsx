"use client";

export default function Navigation() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-6">
      <nav className="px-8 py-3 bg-white/90 backdrop-blur-md rounded-full shadow-md">
        <ul className="flex items-center space-x-8">
          <li><a href="#why" className="text-gray-700 hover:text-gray-900 transition-colors">Why Dyad</a></li>
          <li><a href="#how-it-works" className="text-gray-700 hover:text-gray-900 transition-colors">How It Works</a></li>
          <li><a href="#coaching" className="text-gray-700 hover:text-gray-900 transition-colors">Coaching</a></li>
          <li><a href="#team" className="text-gray-700 hover:text-gray-900 transition-colors">Team</a></li>
          <li><a href="#" className="text-red-600 hover:text-red-700 font-medium transition-colors">Try Now</a></li>
        </ul>
      </nav>
    </div>
  );
}