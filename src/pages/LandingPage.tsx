import React from 'react';
import { Link } from 'react-router-dom';
import { IntercomLogo } from '../components/icons/IntercomLogo';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-intercom-darker text-white">
      <header className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <IntercomLogo className="w-8 h-8" />
        </div>
        
        <nav className="flex items-center space-x-6">
          <a href="#" className="text-white/80 hover:text-white transition">Contact sales</a>
          <a href="#" className="text-white/80 hover:text-white transition">Sign in</a>
          <a href="#" className="text-white/80 hover:text-white transition">View demo</a>
          <Link to="/inbox" className="bg-white text-intercom-darker px-4 py-2 rounded-md hover:bg-gray-100 transition">
            Start free trial
          </Link>
        </nav>
      </header>
      
      <main className="container mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-center mb-16">
          Intercom is the AI customer service company
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-8">
          <div className="bg-intercom-darker rounded-xl p-8 relative">
            <div className="mb-4">
              <h2 className="text-3xl font-bold">Fin</h2>
              <p className="text-white/70 mt-1">Fin on your existing helpdesk</p>
            </div>
            
            <p className="text-white/80 mb-8">
              Fin works with any support help desk to automatically answer complex questions, take actions, and resolve customer issues.
            </p>
            
            <button className="bg-intercom-dark border border-white/20 text-white px-4 py-2 rounded-md hover:bg-intercom-dark/80 transition">
              Explore Fin
            </button>
            
            <div className="mt-10 bg-gray-200 rounded-lg p-4 shadow-lg max-w-md">
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 rounded-full bg-gray-400 flex items-center justify-center text-xs text-white mr-2">F</div>
                <div className="text-xs text-gray-600">Fin • AI Agent</div>
              </div>
              
              <div className="bg-purple-500 text-white p-3 rounded-lg mb-3 max-w-xs">
                <p className="text-sm">Hi, I lost my debit card and I need a replacement.</p>
              </div>
              
              <div className="bg-white p-3 rounded-lg max-w-xs">
                <div className="flex items-center mb-1">
                  <div className="w-5 h-5 rounded-full bg-gray-400 flex items-center justify-center text-xs text-white mr-1">F</div>
                  <div className="text-xs text-gray-600">Fin • AI Agent</div>
                </div>
                <p className="text-sm text-gray-800">
                  Hi Alex, I'm sorry to hear that. I can deactivate the old card and order you a new one. For security, I'll need to send you an email to confirm your identity.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-xl p-8">
            <div className="mb-4">
              <h2 className="text-3xl font-bold">Intercom Suite</h2>
              <p className="text-white/70 mt-1">Fin + Helpdesk</p>
            </div>
            
            <p className="text-white/80 mb-8">
              One seamless customer service suite that delivers faster response times, more efficient agents, and a single consolidated view of customer service.
            </p>
            
            <button className="bg-white text-intercom-darker px-4 py-2 rounded-md hover:bg-gray-100 transition">
              Explore Intercom Suite
            </button>
            
            <div className="mt-10 relative">
              <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg')] bg-cover bg-center rounded-lg opacity-50"></div>
              
              <div className="relative p-4">
                <div className="bg-white text-gray-800 p-3 rounded-lg mb-3 w-48 ml-auto mr-4">
                  <div className="flex items-center mb-1">
                    <div className="w-5 h-5 rounded-full bg-gray-400 flex items-center justify-center text-xs text-white mr-1">T</div>
                    <div className="text-xs text-gray-600">1m</div>
                  </div>
                  <div className="bg-gray-100 p-1 rounded">
                    <img 
                      src="https://images.pexels.com/photos/45239/white-blood-cell-cell-blood-cell-blood-45239.jpeg" 
                      alt="Product image" 
                      className="w-full h-20 object-cover rounded"
                    />
                  </div>
                </div>
                
                <div className="bg-white text-gray-800 p-3 rounded-lg w-64 mr-auto">
                  <div className="text-sm">
                    Sorry about that! I see your order #58789 is a merino sweater. This needs a team member's approval, so I'll transfer you now.
                  </div>
                  <div className="text-xs text-right mt-1 text-gray-500">Seen</div>
                  <div className="w-5 h-5 rounded-full bg-gray-400 flex items-center justify-center text-xs text-white ml-auto mt-1">F</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="border-t border-white/10 mt-16 py-4 px-6">
        <div className="flex items-center space-x-6 text-sm text-white/60">
          <a href="#" className="hover:text-white/80">Terms</a>
          <a href="#" className="hover:text-white/80">Privacy</a>
          <a href="#" className="hover:text-white/80">Security</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;