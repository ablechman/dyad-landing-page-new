export default function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">How It Works</h2>
        
        <p className="text-lg mb-12 text-gray-700">
          Avoiding founder failure comes down to having difficult conversations and understanding each
          other deeply. We give co-founders a scientifically valid way to recognize differences, have
          difficult conversations, negotiate your differences, and find common ground to forge the best
          path forward.
        </p>
        
        <div className="space-y-10">
          <div className="flex items-start">
            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shrink-0 mt-1">
              1
            </div>
            <div className="ml-6">
              <h3 className="text-xl font-semibold mb-2">Take the assessment</h3>
              <p className="text-gray-700">[details about the assessment from Ross]</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shrink-0 mt-1">
              2
            </div>
            <div className="ml-6">
              <h3 className="text-xl font-semibold mb-2">Understand your co-founder more deeply</h3>
              <p className="text-gray-700">Address unresolved tensions within cofounder relationships</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shrink-0 mt-1">
              3
            </div>
            <div className="ml-6">
              <h3 className="text-xl font-semibold mb-2">Avoid startup death</h3>
              <p className="text-gray-700">Build the skills to navigate conflict and have healthy, honest conversations about the biggest sticking points.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}