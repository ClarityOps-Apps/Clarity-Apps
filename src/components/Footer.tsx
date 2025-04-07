import { Calendar, Coffee, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-gray-400">
              Building innovative apps to help business leaders be more productive and effective.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#apps" className="hover:text-white transition">Apps</a></li>
              <li><a href="#vision" className="hover:text-white transition">Vision</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://www.linkedin.com/in/garrettdelph/" className="text-gray-400 hover:text-white transition" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
            </div>
            <a href="#" className="flex items-center text-gray-400 hover:text-white transition mb-2" target="_blank" rel="noopener noreferrer">
              <Coffee size={18} className="mr-2" /> Buy Me a Coffee
            </a>
            <a href="https://cal.com/clarityops/connect" className="flex items-center text-gray-400 hover:text-white transition" target="_blank" rel="noopener noreferrer">
              <Calendar size={18} className="mr-2" /> Let's Meet
            </a>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest developments</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600 w-full"
              />
              <button className="bg-purple-600 hover:bg-purple-700 rounded-r-lg px-4 py-2 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© 2025 Clarity Apps - A ClarityOps, LLC Subsidiary. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
