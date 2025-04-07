import { Compass, Users } from 'lucide-react';

const Vision = () => {
  return (
    <section id="vision" className="py-16 max-w-5xl mx-auto">
      <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-xl p-8 md:p-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Building in Public
          </h2>
          <p className="text-purple-600 font-medium">My Journey to Better Business Apps</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Personal Story */}
          <div className="bg-purple-50 rounded-lg p-6 shadow-sm border border-purple-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
              <Compass className="mr-2 text-purple-600" size={20} /> My Story
            </h3>
            <p className="text-gray-700 leading-relaxed">
              When I started this journey, I was frustrated by how many business tools were clunky and unintuitive. 
              I decided to build what I wished existed — and do it transparently, sharing every win, failure, and lesson.
              Three months in, the community feedback has been transformative.
            </p>
          </div>
          
          {/* Vision & Mission */}
          <div className="bg-amber-50 rounded-lg p-6 shadow-sm border border-amber-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
              <Users className="mr-2 text-amber-600" size={20} /> The Vision
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              I'm building MVP apps in public that I believe will help business leaders be better, faster, and more productive—join me on this journey and help shape the future!
            </p>
            <p className="text-gray-700 leading-relaxed">
              By sharing metrics, roadblocks, and victories in real-time, we create tools that truly solve real problems. Your feedback directly shapes what gets built next.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
