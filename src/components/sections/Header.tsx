"use client";

export default function Header() {
  return (
    <section className="pt-36 pb-20 px-4 bg-[#fefbeb]">
      <div className="max-w-6xl mx-auto">
        {/* Banner announcement similar to Granola's "We just raised $20M" */}
        <div className="flex justify-center mb-16">
          <a href="#" className="inline-flex items-center space-x-2 py-2 px-6 rounded-full bg-white hover:bg-gray-50 transition-colors shadow-sm">
            <span className="text-gray-800">🚀 New assessment framework launched</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        {/* Main heading with two-tone style like Granola */}
        <h1 className="text-6xl md:text-7xl font-bold text-center mb-6">
          <span className="text-gray-400">The </span>
          <span className="text-black">Operating System</span>
          <span className="text-gray-400"> for </span>
          <span className="text-black">Cofounders</span>
        </h1>
        
        {/* Subheading like Granola's style */}
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Dyad gives co-founders an assessment that reveals your core essence: strengths, blind spots, and
          values that enhance communication and decision-making.
        </p>
        
        {/* CTA button styled like Granola's download button */}
        <div className="flex justify-center">
          <button className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-red-700 transition-colors flex items-center">
            Take The Assessment
          </button>
        </div>
      </div>
    </section>
  );
}