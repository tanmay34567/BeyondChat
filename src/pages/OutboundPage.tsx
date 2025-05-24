import React from 'react';
import Header from '../components/inbox/Header';
import MainSidebar from '../components/layout/MainSidebar';
import { MainView } from '../types';

const OutboundPage: React.FC = () => {
  const [activeView, setActiveView] = React.useState<MainView>('outbound');

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
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-white mb-2">Outbound</h3>
              <p className="text-sm text-gray-400 max-w-md">
                Manage your outbound messaging campaigns and customer outreach
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutboundPage;
