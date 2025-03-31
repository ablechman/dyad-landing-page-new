export default function Benefits() {
    const benefits = [
      {
        icon: "🔑",
        color: "bg-yellow-500",
        title: "Scientific Assessment",
        description: "Our assessment is based on validated psychological frameworks and research by PhDs."
      },
      {
        icon: "🔒",
        color: "bg-pink-600",
        title: "Conflict Prevention",
        description: "Identify potential friction points before they escalate into serious issues."
      },
      {
        icon: "🛡️",
        color: "bg-purple-600",
        title: "Improved Communication",
        description: "Develop a shared language to discuss sensitive topics more effectively."
      },
      {
        icon: "📊",
        color: "bg-orange-500",
        title: "Higher Success Rates",
        description: "Aligned founding teams are 3x more likely to reach sustainable growth."
      }
    ];
  
    return (
      <section id="benefits" className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Dyad Security.</h2>
          
          <h3 className="text-5xl font-bold mb-8 text-center">Own your co-founder relationship end-to-end.</h3>
          
          <p className="text-lg text-center max-w-3xl mx-auto mb-16">
            Dyad provides end-to-end analysis so your co-founder relationship is never reliant on 
            subjective opinions. That means faster resolution of conflicts, better understanding, 
            and fewer communication breakdowns.
          </p>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-900 text-white p-8 rounded-lg">
                <div className={`${benefit.color} w-6 h-6 mb-4 flex items-center justify-center rounded-sm`}>
                  <span>{benefit.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }