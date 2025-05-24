import React from 'react';
import { ChevronDown, PlusCircle, Search } from 'lucide-react';
import clsx from 'clsx';

interface DetailSectionProps {
  title: string;
  children: React.ReactNode;
  isCollapsible?: boolean;
}

const DetailSection: React.FC<DetailSectionProps> = ({ 
  title, children, isCollapsible = true 
}) => {
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  
  return (
    <div className="border-b border-[#3A3A3C] py-3">
      <div 
        className={clsx(
          "flex items-center justify-between",
          isCollapsible && "cursor-pointer"
        )}
        onClick={() => isCollapsible && setIsCollapsed(!isCollapsed)}
      >
        <h3 className="text-sm font-medium text-gray-200">{title}</h3>
        {isCollapsible && (
          <ChevronDown 
            className={clsx(
              "w-4 h-4 text-gray-300 transition-transform",
              isCollapsed && "transform rotate-180"
            )} 
          />
        )}
      </div>
      
      {!isCollapsed && (
        <div className="mt-2">
          {children}
        </div>
      )}
    </div>
  );
};

interface DetailItemProps {
  label: string;
  value: React.ReactNode;
}

const DetailItem: React.FC<DetailItemProps> = ({ label, value }) => {
  return (
    <div className="flex items-center justify-between py-1">
      <span className="text-sm text-gray-300">{label}</span>
      <span className="text-sm text-white">{value}</span>
    </div>
  );
};

interface AddButtonProps {
  label: string;
}

const AddButton: React.FC<AddButtonProps> = ({ label }) => {
  return (
    <div className="flex items-center text-blue-400 hover:text-blue-300 cursor-pointer py-1 transition-colors">
      <PlusCircle className="w-4 h-4 mr-1" />
      <span className="text-sm">Add {label}</span>
    </div>
  );
};

const DetailPanel: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'details' | 'copilot'>('details');
  const [inputValue, setInputValue] = React.useState('');
  const [chatMessages, setChatMessages] = React.useState<Array<{type: 'user' | 'bot', content: string}>>([]);
  const chatContainerRef = React.useRef<HTMLDivElement>(null);
  
  // Function to handle sending a message
  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    
    // Add user message to chat
    setChatMessages([...chatMessages, { type: 'user', content: inputValue }]);
    
    // Clear input
    setInputValue('');
    
    // Simulate bot response after a short delay
    setTimeout(() => {
      setChatMessages(prev => [...prev, { 
        type: 'bot', 
        content: 'I\'m sorry, I don\'t have enough information to answer that question. Could you provide more details?'
      }]);
    }, 1000);
  };
  
  // Scroll to bottom when messages change
  React.useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);
  
  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
  return (
    <div className="w-72 h-full border-l border-[#3A3A3C] bg-[#1C1C1E] text-white flex flex-col">
      <div className="flex mb-4 border-b border-[#3A3A3C] pb-2">
        <button 
          className={clsx(
            "flex-1 text-center py-2 transition-colors",
            activeTab === 'details' 
              ? "border-b-2 border-blue-600 text-blue-500" 
              : "text-gray-300 hover:text-white"
          )}
          onClick={() => setActiveTab('details')}
        >
          Details
        </button>
        <button 
          className={clsx(
            "flex-1 text-center py-2 transition-colors",
            activeTab === 'copilot' 
              ? "border-b-2 border-blue-600 text-blue-500" 
              : "text-gray-300 hover:text-white"
          )}
          onClick={() => setActiveTab('copilot')}
        >
          Copilot
        </button>
      </div>
      
      <div className="p-4 overflow-y-auto flex-grow">
        {activeTab === 'details' && (
          <>
            <DetailSection title="Assignee">
            <DetailItem 
              label="Assignee" 
              value={
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gray-600 mr-1"></div>
                  <span>On and On</span>
                </div>
              } 
            />
            <DetailItem 
              label="Team Inbox" 
              value={
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gray-600 mr-1"></div>
                  <span>Unassigned</span>
                </div>
              } 
            />
          </DetailSection>
          
          <DetailSection title="Links">
            <AddButton label="ticket" />
            <AddButton label="back-office tickets" />
            <AddButton label="side conversations" />
          </DetailSection>
          
          <DetailSection title="Conversation attributes">
            <DetailItem label="ID" value="215469095362912" />
            <DetailItem label="Brand" value="acfg" />
            <DetailItem label="Subject" value={<AddButton label="" />} />
            <DetailItem label="Language" value="English" />
            <DetailItem label="External ID" value={<AddButton label="" />} />
            <DetailItem label="Workspace phone number" value="—" />
            <DetailItem label="Copilot used" value="True" />
          </DetailSection>
          
          <DetailSection title="Topics">
            <AddButton label="topic" />
          </DetailSection>
          
          <DetailSection title="User data">
            <DetailItem label="Name" value="Messenger" />
            <DetailItem label="Company" value="[Demo]" />
            <DetailItem label="Type" value="User" />
            <DetailItem label="Location" value="—" />
            <DetailItem label="Owner" value="—" />
            <DetailItem label="Email" value="messenger@projectmap.com" />
            <DetailItem label="User id" value="7cef5202-9ceb-48d7-84f6-d404e8cc6d37" />
            <div className="mt-1">
              <AddButton label="See all" />
            </div>
          </DetailSection>
          
          <DetailSection title="Recent conversations">
            <div className="text-xs text-gray-300 italic py-1">No recent conversations</div>
          </DetailSection>
          
          <DetailSection title="User notes">
            <AddButton label="a note" />
          </DetailSection>
          
          <DetailSection title="User tags">
            <div className="text-xs text-gray-300 italic py-1">No user tags</div>
          </DetailSection>
          
          <DetailSection title="User segments">
            <div className="flex space-x-2 py-1">
              <span className="px-2 py-1 bg-[#2C2C2E] text-gray-200 text-xs rounded">Active</span>
              <span className="px-2 py-1 bg-[#2C2C2E] text-gray-200 text-xs rounded">New</span>
            </div>
          </DetailSection>
          
          <DetailSection title="Recent page views">
            <div className="text-xs text-gray-300 italic py-1">No page views</div>
          </DetailSection>
          
          <DetailSection title="Similar conversations">
            <div className="flex items-center mt-1">
              <Search className="w-4 h-4 text-gray-300 mr-2" />
              <span className="text-sm text-gray-300">Search</span>
            </div>
          </DetailSection>
          
          <DetailSection title="Edit apps">
            <div className="text-xs text-gray-300 italic py-1">No apps available</div>
          </DetailSection>
          </>
        )}
        
        {activeTab === 'copilot' && (
          <div className="flex flex-col h-full">
            {/* Chat messages */}
            <div ref={chatContainerRef} className="flex-grow overflow-y-auto space-y-4 pr-1">
              {/* Welcome message */}
              <div className="bg-[#2C2C2E] rounded-lg p-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Welcome to Copilot</h3>
                    <p className="text-sm text-gray-300">
                      I'm your AI assistant. I can help answer questions about your customers, products, and services.
                      What would you like to know today?
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Example questions */}
              {chatMessages.length === 0 && (
                <div className="px-4">
                  <h4 className="text-sm text-gray-400 mb-2">Try asking:</h4>
                  <div className="space-y-2">
                    <div 
                      className="bg-[#2C2C2E] rounded-lg p-2 px-3 text-sm text-white cursor-pointer hover:bg-[#3A3A3C] transition-colors"
                      onClick={() => {
                        setInputValue("What's the status of this customer's order?");
                        setTimeout(() => handleSendMessage(), 100);
                      }}
                    >
                      What's the status of this customer's order?
                    </div>
                    <div 
                      className="bg-[#2C2C2E] rounded-lg p-2 px-3 text-sm text-white cursor-pointer hover:bg-[#3A3A3C] transition-colors"
                      onClick={() => {
                        setInputValue("Summarize this conversation");
                        setTimeout(() => handleSendMessage(), 100);
                      }}
                    >
                      Summarize this conversation
                    </div>
                    <div 
                      className="bg-[#2C2C2E] rounded-lg p-2 px-3 text-sm text-white cursor-pointer hover:bg-[#3A3A3C] transition-colors"
                      onClick={() => {
                        setInputValue("What's our refund policy?");
                        setTimeout(() => handleSendMessage(), 100);
                      }}
                    >
                      What's our refund policy?
                    </div>
                  </div>
                </div>
              )}
              
              {/* User and bot messages */}
              {chatMessages.map((message, index) => (
                <div key={index} className={`${message.type === 'user' ? 'ml-auto max-w-[85%]' : 'max-w-[85%]'}`}>
                  <div className={`rounded-lg p-3 ${message.type === 'user' ? 'bg-blue-600 text-white' : 'bg-[#2C2C2E] text-white'}`}>
                    {message.type === 'bot' && (
                      <div className="flex items-center mb-2">
                        <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mr-2">
                          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="text-xs font-medium">Copilot</span>
                      </div>
                    )}
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Fixed input area for Copilot */}
      {activeTab === 'copilot' && (
        <div className="p-4 border-t border-[#3A3A3C]">
          <div className="border border-gray-600 rounded-full p-2 px-4 flex items-center bg-[#2C2C2E] relative">
            <input 
              type="text" 
              placeholder="Ask a question..." 
              className="bg-transparent text-sm w-full outline-none text-white"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <div className="flex items-center space-x-2 text-gray-400">
              <button className="hover:text-gray-200 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button 
                className="hover:text-gray-200 transition-colors"
                onClick={handleSendMessage}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 5l7 7-7 7M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPanel;