import React, { useState } from 'react';
import Header from '../components/inbox/Header';
import Sidebar from '../components/layout/Sidebar';
import MainSidebar from '../components/layout/MainSidebar';
import ConversationList from '../components/inbox/ConversationList';
import ConversationView from '../components/inbox/ConversationView';
import DetailPanel from '../components/inbox/DetailPanel';
import { Conversation, MainView } from '../types';

// Types are now imported from '../types'

const InboxPage: React.FC = () => {
  const [activeView, setActiveView] = useState<MainView>('inbox');
  const [sidebarView, setSidebarView] = useState<MainView>('inbox');
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  
  // Sample conversations data with realistic content
  const initialConversations: Conversation[] = [
    {
      id: '1',
      type: 'messenger',
      title: 'Messenger · [Demo]',
      subtitle: 'Install Messenger to chat with website visitors in real-time',
      time: '11:45',
      avatar: 'blue-500',
      unread: true,
      lastActivity: new Date(new Date().setHours(new Date().getHours() - 1))
    },
    {
      id: '2',
      type: 'email',
      title: 'Email · [Demo]',
      subtitle: 'New support request: "How do I integrate with Shopify?"',
      time: '10:32',
      avatar: 'emerald-500',
      unread: true,
      lastActivity: new Date(new Date().setHours(new Date().getHours() - 3))
    },
    {
      id: '3',
      type: 'whatsapp',
      title: 'WhatsApp · [Demo]',
      subtitle: 'Customer asking about order status #WA-1234',
      time: 'Yesterday',
      avatar: 'green-500',
      unread: false,
      lastActivity: new Date(new Date().setDate(new Date().getDate() - 1))
    },
    {
      id: '4',
      type: 'phone',
      title: 'Phone · [Demo]',
      subtitle: 'Missed call from +1 (555) 123-4567',
      time: 'May 20',
      avatar: 'purple-500',
      unread: false,
      lastActivity: new Date(new Date().setDate(new Date().getDate() - 3))
    }
  ];
  
  // State to manage conversations
  const [conversations, setConversations] = useState<Conversation[]>(initialConversations);

  // We're now using the state-managed conversations

  // Handle conversation selection and mark as read
  const handleConversationSelect = (conversation: Conversation) => {
    // If the conversation is unread, mark it as read
    if (conversation.unread) {
      // Find the conversation in the array and update it
      const updatedConversations = conversations.map(conv => {
        if (conv.id === conversation.id) {
          return { ...conv, unread: false };
        }
        return conv;
      });
      
      // Update the conversations array with the read status
      setConversations(updatedConversations);
      
      // Update the selected conversation with read status
      setSelectedConversation({ ...conversation, unread: false });
    } else {
      setSelectedConversation(conversation);
    }
  };

  // Set default selected conversation if none is selected
  React.useEffect(() => {
    if (!selectedConversation && conversations.length > 0) {
      setSelectedConversation(conversations[0]);
    }
  }, [conversations, selectedConversation]);
  
  // Reset sidebar view to inbox when main view changes
  React.useEffect(() => {
    // Only reset if we're not already in inbox view
    if (sidebarView !== 'inbox' && 
        (activeView === 'fin-ai-agent' || 
         activeView === 'knowledge' || 
         activeView === 'reports' || 
         activeView === 'outbound' || 
         activeView === 'contacts' || 
         activeView === 'get-set-up' || 
         activeView === 'search' || 
         activeView === 'settings')) {
      setSidebarView('inbox');
    }
  }, [activeView, sidebarView]);

  // Render content based on the sidebar view, independent of the main sidebar
  const renderContent = () => {
    // Always show the sidebar with the current sidebarView
    const sidebarComponent = <Sidebar activeView={sidebarView} onViewChange={setSidebarView} />;
    
    // Render different content based on the sidebar selection
    switch (sidebarView) {
      case 'inbox':
      case 'all': // 'All' shows the same content as 'Inbox'
        return (
          <>
            {sidebarComponent}
            <ConversationList 
              conversations={conversations}
              selectedConversationId={selectedConversation?.id}
              onSelectConversation={handleConversationSelect}
            />
            <ConversationView conversation={selectedConversation} />
            <DetailPanel />
          </>
        );
      case 'mentions':
        return (
          <>
            {sidebarComponent}
            <div className="w-72 h-full border-r border-[#3A3A3C] bg-[#1C1C1E] text-white flex flex-col">
              {/* Header section */}
              <div className="p-3 border-b border-[#3A3A3C] flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-gray-200 rounded-sm flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-800">@</span>
                  </div>
                  <h2 className="text-sm font-medium text-white">Mentions</h2>
                </div>
                <div className="flex items-center">
                  <button className="w-6 h-6 flex items-center justify-center text-gray-300 hover:text-white transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Activity header */}
              <div className="flex items-center justify-between p-3 border-b border-[#3A3A3C]">
                <span className="text-sm font-medium text-white">0 Mentions</span>
                <div className="flex items-center">
                  <span className="text-sm text-gray-300">Last activity</span>
                  <svg className="w-4 h-4 ml-1 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 10l5 5 5-5" />
                  </svg>
                </div>
              </div>
              
              {/* Empty state */}
              <div className="flex-1 flex flex-col items-center justify-center p-6">
                <div className="text-center">
                  <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-[#2C2C2E] flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 12h.01M12 19h.01M12 5h.01M19 12h.01M5 12h.01" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">No Items</h3>
                  <p className="text-sm text-gray-400 max-w-md">
                    Set up channels to connect with your customers
                  </p>
                  <div className="mt-6 flex justify-center space-x-4">
                    <button className="px-4 py-2 bg-[#2C2C2E] hover:bg-[#3A3A3C] text-white text-sm font-medium rounded-md transition-colors">
                      Set up channels
                    </button>
                    <button className="px-4 py-2 bg-transparent border border-[#3A3A3C] hover:bg-[#2C2C2E] text-white text-sm font-medium rounded-md transition-colors">
                      Channels explained
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Empty area where conversation would be */}
            <div className="flex-1 bg-[#1C1C1E] flex items-center justify-center">
              <div className="text-center p-6">
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-[#2C2C2E] flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-medium text-white mb-2">No Mentions Selected</h3>
                <p className="text-sm text-gray-400 max-w-md">
                  Select a mention from the list or set up channels to get started
                </p>
              </div>
            </div>
          </>
        );
      case 'created-by-you':
        return (
          <>
            {sidebarComponent}
            <div className="w-72 h-full border-r border-[#3A3A3C] bg-[#1C1C1E] text-white flex flex-col">
              {/* Header section */}
              <div className="p-3 border-b border-[#3A3A3C] flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-gray-200 rounded-sm flex items-center justify-center">
                    <svg className="w-3 h-3 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
                    </svg>
                  </div>
                  <h2 className="text-sm font-medium text-white">Created by you</h2>
                </div>
                <div className="flex items-center">
                  <button className="w-6 h-6 flex items-center justify-center text-gray-300 hover:text-white transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Activity header */}
              <div className="flex items-center justify-between p-3 border-b border-[#3A3A3C]">
                <span className="text-sm font-medium text-white">0 Conversations</span>
                <div className="flex items-center">
                  <span className="text-sm text-gray-300">Last activity</span>
                  <svg className="w-4 h-4 ml-1 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 10l5 5 5-5" />
                  </svg>
                </div>
              </div>
              
              {/* Empty state */}
              <div className="flex-1 flex flex-col items-center justify-center p-6">
                <div className="text-center">
                  <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-[#2C2C2E] flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">No Conversations</h3>
                  <p className="text-sm text-gray-400 max-w-md">
                    You haven't created any conversations yet
                  </p>
                  <div className="mt-6 flex justify-center">
                    <button className="px-4 py-2 bg-[#2C2C2E] hover:bg-[#3A3A3C] text-white text-sm font-medium rounded-md transition-colors">
                      Create new conversation
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Empty area where conversation would be */}
            <div className="flex-1 bg-[#1C1C1E] flex items-center justify-center">
              <div className="text-center p-6">
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-[#2C2C2E] flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-medium text-white mb-2">No Conversation Selected</h3>
                <p className="text-sm text-gray-400 max-w-md">
                  Select a conversation from the list or create a new one to get started
                </p>
              </div>
            </div>
          </>
        );
      case 'unassigned':
        return (
          <>
            {sidebarComponent}
            <div className="w-72 h-full border-r border-[#3A3A3C] bg-[#1C1C1E] text-white flex flex-col">
              {/* Header section */}
              <div className="p-3 border-b border-[#3A3A3C] flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-gray-200 rounded-sm flex items-center justify-center">
                    <svg className="w-3 h-3 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <h2 className="text-sm font-medium text-white">Unassigned</h2>
                </div>
                <div className="flex items-center">
                  <button className="w-6 h-6 flex items-center justify-center text-gray-300 hover:text-white transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Activity header */}
              <div className="flex items-center justify-between p-3 border-b border-[#3A3A3C]">
                <span className="text-sm font-medium text-white">0 Unassigned</span>
                <div className="flex items-center">
                  <span className="text-sm text-gray-300">Last activity</span>
                  <svg className="w-4 h-4 ml-1 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 10l5 5 5-5" />
                  </svg>
                </div>
              </div>
              
              {/* Empty state */}
              <div className="flex-1 flex flex-col items-center justify-center p-6">
                <div className="text-center">
                  <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-[#2C2C2E] flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">No Unassigned Conversations</h3>
                  <p className="text-sm text-gray-400 max-w-md">
                    All conversations have been assigned
                  </p>
                </div>
              </div>
            </div>
            {/* Empty area where conversation would be */}
            <div className="flex-1 bg-[#1C1C1E] flex items-center justify-center">
              <div className="text-center p-6">
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-[#2C2C2E] flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-medium text-white mb-2">No Unassigned Conversations</h3>
                <p className="text-sm text-gray-400 max-w-md">
                  All conversations have been assigned to team members
                </p>
              </div>
            </div>
          </>
        );
      case 'dashboard':
        return (
          <>
            {sidebarComponent}
            <div className="w-72 h-full border-r border-[#3A3A3C] bg-[#1C1C1E] text-white flex flex-col">
              {/* Header section */}
              <div className="p-3 border-b border-[#3A3A3C] flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-gray-200 rounded-sm flex items-center justify-center">
                    <svg className="w-3 h-3 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </div>
                  <h2 className="text-sm font-medium text-white">Dashboard</h2>
                </div>
                <div className="flex items-center">
                  <button className="w-6 h-6 flex items-center justify-center text-gray-300 hover:text-white transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Activity header */}
              <div className="flex items-center justify-between p-3 border-b border-[#3A3A3C]">
                <span className="text-sm font-medium text-white">Dashboard</span>
              </div>
              
              {/* Dashboard content */}
              <div className="flex-1 flex flex-col items-center justify-center p-6">
                <div className="text-center">
                  <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-[#2C2C2E] flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <line x1="3" y1="9" x2="21" y2="9" />
                      <line x1="9" y1="21" x2="9" y2="9" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">Dashboard</h3>
                  <p className="text-sm text-gray-400 max-w-md">
                    View your team's performance metrics and analytics
                  </p>
                  <div className="mt-6 flex justify-center">
                    <button className="px-4 py-2 bg-[#2C2C2E] hover:bg-[#3A3A3C] text-white text-sm font-medium rounded-md transition-colors">
                      Set up dashboard
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Empty area where dashboard would be */}
            <div className="flex-1 bg-[#1C1C1E] flex items-center justify-center">
              <div className="text-center p-6">
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-[#2C2C2E] flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="21" x2="9" y2="9" />
                  </svg>
                </div>
                <h3 className="text-2xl font-medium text-white mb-2">Dashboard</h3>
                <p className="text-sm text-gray-400 max-w-md">
                  Set up your dashboard to view team performance metrics and analytics
                </p>
              </div>
            </div>
          </>
        );
      // Main sidebar views
      case 'fin-ai-agent':
      case 'knowledge':
      case 'reports':
      case 'outbound':
      case 'contacts':
      case 'get-set-up':
      case 'search':
      case 'settings':
      default:
        // Sidebar view is handled by the useEffect
        return (
          <>
            {sidebarComponent}
            <div className="flex-1 flex items-center justify-center bg-[#1C1C1E] border-r border-[#3A3A3C]">
              <h1 className="text-xl font-bold text-white">{activeView.charAt(0).toUpperCase() + activeView.slice(1).replace(/-/g, ' ')}</h1>
            </div>
          </>
        );
    }
  };

  return (
    <div className="flex h-screen bg-[#1C1C1E]">
      <MainSidebar onViewChange={setActiveView} activeView={activeView} />
      <div className="flex flex-col flex-1 overflow-hidden ml-12">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default InboxPage;