export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Blue pill/bubble header */}
        <div className="flex justify-center mb-12">
          <div className="bg-blue-50 text-blue-600 font-medium px-8 py-4 rounded-full text-xl">
            HOW IT WORKS
          </div>
        </div>
        
        {/* Large headline */}
        <h2 className="text-5xl md:text-6xl font-bold mb-10 text-center">
          Your Co-Founder Operating System
        </h2>
        
        {/* Supporting text with your copy */}
        <p className="text-xl md:text-2xl text-center max-w-4xl mx-auto mb-16 text-gray-700 leading-relaxed">
          Avoiding founder failure comes down to having difficult conversations and understanding each 
          other deeply. We give co-founders a scientifically valid way to recognize differences, have 
          difficult conversations, negotiate your differences, and find common ground to forge the best 
          path forward.
        </p>
        
        {/* Steps section - can be added below */}
        <div className="grid md:grid-cols-3 gap-10 mt-20">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center text-2xl font-bold mb-6">
              1
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Complete the Assessment</h3>
            <p className="text-gray-700 text-center">
              Take our comprehensive assessment designed to identify communication patterns, 
              decision-making styles, and potential conflict areas.
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center text-2xl font-bold mb-6">
              2
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Understand Your Dynamics</h3>
            <p className="text-gray-700 text-center">
              Receive insights about your co-founder relationship and address unresolved tensions 
              with data-backed recommendations.
            </p>
          </div>
          
          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center text-2xl font-bold mb-6">
              3
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Build a Stronger Partnership</h3>
            <p className="text-gray-700 text-center">
              Develop the skills to navigate conflict and have healthy, honest conversations 
              about the biggest sticking points.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}