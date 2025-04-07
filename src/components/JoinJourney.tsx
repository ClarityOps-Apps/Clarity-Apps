import { MessageCircle, Timer } from 'lucide-react';

const JoinJourney = () => {
  return (
    <section className="py-2 max-w-3xl mx-auto">
      <div className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg p-8 text-white text-center shadow-xl">
        <h2 className="text-2xl font-bold mb-3">Join the Journey</h2>
        <p className="mb-6 opacity-90 mx-auto">
          Be part of the process—your ideas and feedback will directly influence what these apps become.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-purple-700 hover:bg-purple-50 hover:scale-105 hover:shadow-lg font-medium py-2 px-6 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center shadow-md hover:ring-2 hover:ring-white hover:ring-opacity-50">
            <Timer size={18} className="mr-2" /> Weekly Updates
          </button>
          <button className="bg-transparent hover:bg-white/30 border-2 border-white font-medium py-2 px-6 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-white hover:ring-opacity-50">
            <MessageCircle size={18} className="mr-2" /> Share Your Ideas
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinJourney;
