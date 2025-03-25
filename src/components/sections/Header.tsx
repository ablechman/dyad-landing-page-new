export default function Header() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-20 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Scale Your Co-Founder Relationship</h1>
        <p className="text-xl md:text-2xl mb-10 text-gray-700 max-w-2xl mx-auto">
          Dyad is an analytical assessment built by PhDs to help co-founders uncover biases, strengths,
          and desires to exponentially increase your company's odds of success.
        </p>
        <button className="bg-black text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-800 transition-colors">
          Take The Assessment
        </button>
      </div>
    </section>
  );
}