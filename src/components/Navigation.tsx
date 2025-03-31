import CTAButton from './CTAButton';

export default function Navigation() {
  return (
    <nav className="py-6 px-4 w-full z-10 bg-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Dyad</div>
        <div className="flex space-x-8 items-center">
          <a href="#how-it-works" className="text-gray-800 hover:text-red-600">How It Works</a>
          <a href="#benefits" className="text-gray-800 hover:text-red-600">Benefits</a>
          <a href="#team" className="text-gray-800 hover:text-red-600">Team</a>
          <CTAButton className="px-5 py-2 text-sm" />
        </div>
      </div>
    </nav>
  );
}