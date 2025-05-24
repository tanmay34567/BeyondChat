import React from 'react';
import Header from '../components/inbox/Header';
import MainSidebar from '../components/layout/MainSidebar';
import { MainView } from '../types';

const ContactsPage: React.FC = () => {
  const [activeView, setActiveView] = React.useState<MainView>('contacts');

  return (
    <div className="flex h-screen bg-[#1C1C1E]">
      <MainSidebar onViewChange={setActiveView} activeView={activeView} />
      <div className="flex flex-col flex-1 overflow-hidden ml-12">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 flex items-center justify-center bg-[#1C1C1E]">
            <div className="text-center p-6">
              <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-[#2C2C2E] flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-white mb-2">Contacts</h3>
              <p className="text-sm text-gray-400 max-w-md">
                Manage your customer contacts and user database
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
