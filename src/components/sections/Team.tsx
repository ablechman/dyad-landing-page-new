export default function Team() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">The Team</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Ross Blankenship Bio */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex flex-col items-center mb-6">
              <div className="w-32 h-32 rounded-full bg-gray-200 mb-4 overflow-hidden">
                {/* Replace with actual image */}
                <img src="/api/placeholder/128/128" alt="Ross Blankenship" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold">Ross Blankenship, PhD</h3>
              <p className="text-gray-600">Organizational Psychologist, Author, and Entrepreneur</p>
            </div>
            <div className="text-gray-700 space-y-4">
              <p>
                Ross is uniquely gifted at helping leaders navigate their toughest work challenges and most
                vexing career questions. As the founder and principal of Tuesday Advisors, he partners with
                organizations to conduct in depth succession coaching and planning, and leadership
                development initiatives.
              </p>
              <p>
                He coaches a wide array of leaders and leadership teams to improve performance,
                communication, and decision-making, and advises founders and investors on leadership,
                assessment, and talent strategy. 
              </p>
              <p>
                He is the author of "Everyday Leadership: A Guide to Developing Your Mindset as a Leader"
                (Routledge, 2024) and "Assessing CEOs and Senior Leaders: A Primer for Consultants"
                (American Psychological Association, 2021).
              </p>
            </div>
          </div>
          
          {/* Andy Blechman Bio */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex flex-col items-center mb-6">
              <div className="w-32 h-32 rounded-full bg-gray-200 mb-4 overflow-hidden">
                {/* Replace with actual image */}
                <img src="/api/placeholder/128/128" alt="Andy Blechman" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold">Andy Blechman, MBA</h3>
              <p className="text-gray-600">Scaling Ventures, Unlocking Potential</p>
            </div>
            <div className="text-gray-700 space-y-4">
              <p>
                Andy Blechman holds an MBA from Columbia University and is a seasoned entrepreneur
                and business leader. He is the Co-founder and President of Bottle.com, a software platform
                that supports local food entrepreneurs.
              </p>
              <p>
                With experience as both a Founder and an early employee, he has played pivotal roles in driving two businesses to successful exits. Andy
                leverages his deep experience as a Founder and CEO to help clients scale ventures and
                navigate the startup ecosystem.
              </p>
              <p>
                Andy is deeply committed to leadership development and performance. To his coaching
                practice he brings a diligent focus on process improvement, performance metrics, and
                developing a competitive mindset.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}