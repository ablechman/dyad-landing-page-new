import CTAButton from '../CTAButton';

export default function Header() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-28 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-6">
          <span className="inline-block text-gray-800 font-medium text-lg">Meet Dyad.</span>
        </div>
        <h1 className="text-5xl md:text-[64px] font-bold mb-8 leading-tight tracking-tight">
          Your platform for building<br />
          <span className="text-red-600">stronger co-founder</span> relationships
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-700 max-w-3xl mx-auto">
          Dyad is an analytical assessment built by PhDs to help co-founders uncover biases, strengths,
          and align visions to exponentially increase your company's odds of success.
        </p>
        <div className="flex justify-center space-x-6">
          <CTAButton />
          <a href="#how-it-works" className="text-gray-800 flex items-center font-medium hover:text-red-600">
            Learn more
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L10 14.586l5.293-5.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}