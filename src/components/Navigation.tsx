export default function Navigation() {
  return (
    <nav className="py-6 px-4 absolute top-0 w-full z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Dyad</div>
        <button className="px-5 py-2 border border-black rounded-md text-sm font-medium hover:bg-black hover:text-white transition-colors">
          Take The Assessment
        </button>
      </div>
    </nav>
  );
}