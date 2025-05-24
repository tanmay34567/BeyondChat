import React, { useState } from 'react';
import MainSidebar from '../components/layout/MainSidebar';
import { MainView } from '../types';
import { Book, Folder, HelpCircle, Download, Plus, ChevronDown, Check, AlertCircle, ExternalLink, ChevronRight } from 'lucide-react';

const KnowledgePage: React.FC = () => {
  const [activeView, setActiveView] = useState<MainView>('knowledge');
  const [activeTab, setActiveTab] = useState('all');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    publicArticles: true,
    internalArticles: true,
    conversations: true,
    macros: true,
    websites: true,
    moreContent: true,
    snippets: true,
    documents: true,
    customAnswers: true,
    contentFromConversations: true
  });

  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    publicArticles: true,
    internalArticles: true,
    conversations: false,
    macros: true,
    websites: false,
    snippets: false,
    documents: false,
    customAnswers: false,
    contentFromConversations: false
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleCheckbox = (item: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  const renderSourceItem = (title: string, status: string, icon?: React.ReactNode, hasCheckbox = false, isBeta = false) => (
    <div className="bg-[#2C2C2E] hover:bg-[#3A3A3C] rounded-[4px] p-2.5 flex justify-between items-center transition-colors mb-1">
      <div className="flex items-center min-w-[100px]">
        {icon && <span className="mr-1.5">{icon}</span>}
        <span className="text-[13px] text-gray-100">{title}</span>
      </div>
      <div className="flex items-center justify-center flex-1 min-w-[120px]">
        <span className="text-[13px] text-gray-400">{status}</span>
        {isBeta && (
          <span className="ml-2 text-[11px] bg-blue-900/40 text-blue-300 px-1.5 py-0.5 rounded-[3px]">
            Beta
          </span>
        )}
      </div>
      <button className="text-[13px] text-blue-400 hover:text-blue-300 flex items-center gap-1 min-w-[60px] justify-end">
        {status.includes('Not set up') || status.includes('Import') ? 'Set up' : 'Manage'}
        <ChevronRight className="w-3 h-3" />
      </button>
    </div>
  );

  const isVisible = (section: string) => {
    switch (activeTab) {
      case 'all-sources':
        return true; // Show all sections
      case 'ai-agent':
        return ['internalArticles', 'conversations', 'macros', 'websites', 'moreContent'].includes(section);
      case 'copilot':
        return ['conversations', 'macros', 'websites'].includes(section);
      case 'help-center':
        return ['publicArticles', 'internalArticles'].includes(section);
      default:
        return true;
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#121214]">
      <div className="flex h-screen">
        {/* Main sidebar */}
        <div className="w-12 bg-black border-r border-gray-900">
          <MainSidebar activeView={activeView} onViewChange={setActiveView} />
        </div>
        
        {/* Settings container */}
        <div className="flex flex-col flex-1 overflow-hidden">
          <div className="flex flex-1 overflow-hidden bg-[#121214] text-white">
            {/* Knowledge sidebar */}
            <div className="w-56 border-r border-[#2C2C2E] overflow-y-auto bg-[#1C1C1E]">
              <div className="p-4 border-b border-[#2C2C2E]">
                <h2 className="text-xl font-semibold text-white">Knowledge</h2>
              </div>
              <div className="py-1">
                <div className="flex items-center px-4 py-2.5 cursor-pointer bg-[#2C2C2E] text-white">
                  <Book className="w-4 h-4 mr-3" />
                  <span>Sources</span>
                </div>
                <div className="flex items-center px-4 py-2.5 cursor-pointer text-gray-300 hover:bg-[#2C2C2E]">
                  <Folder className="w-4 h-4 mr-3" />
                  <span>Content</span>
                </div>
                <div className="flex items-center px-4 py-2.5 cursor-pointer text-gray-300 hover:bg-[#2C2C2E]">
                  <HelpCircle className="w-4 h-4 mr-3" />
                  <span>Help Center</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 border-t border-[#2C2C2E] py-3 px-4">
                <div className="text-sm text-gray-400">
                  <div className="flex items-center">
                    <Download className="w-4 h-4 mr-2" />
                    <span>Get set up</span>
                  </div>
                  <p className="text-xs mt-1">Set up channels to connect with your customers</p>
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1 overflow-y-auto p-6">
              {/* Top bar */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Sources</h2>
                <div className="flex space-x-2">
                  <button className="bg-[#2C2C2E] text-white px-3 py-1.5 rounded-md text-sm flex items-center hover:bg-[#3A3A3C]">
                    <span>Learn</span>
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
                  <button className="bg-[#2C2C2E] text-white px-3 py-1.5 rounded-md text-sm flex items-center hover:bg-[#3A3A3C]">
                    <span>Test Fin</span>
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
                  <button className="bg-white text-black px-4 py-1.5 rounded-md text-sm font-medium hover:bg-gray-100">
                    + New content
                  </button>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-[#2C2C2E] mb-6">
                {['All sources', 'AI Agent', 'Copilot', 'Help Center'].map((tab) => (
                  <div 
                    key={tab}
                    className={`pb-2 px-4 cursor-pointer ${activeTab === tab.toLowerCase().replace(/\s+/g, '-') ? 'border-b-2 border-orange-500 text-white' : 'text-gray-400 hover:text-white'}`}
                    onClick={() => setActiveTab(tab.toLowerCase().replace(/\s+/g, '-'))}
                  >
                    {tab}
                  </div>
                ))}
              </div>

              {/* Sections */}
              {isVisible('publicArticles') && (
                <div className="bg-[#1C1E1E] rounded-lg p-4 mb-4">
                  {/* Public Articles Section */}
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-[15px] font-medium text-gray-100">Public articles</h3>
                      <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
                    </div>
                    <button className="bg-[#2C2C2E] text-[13px] text-gray-300 px-3 py-1.5 rounded-[4px] hover:bg-[#3A3A3C]">
                      Add article
                    </button>
                  </div>
                  
                  {expandedSections.publicArticles && (
                    <>
                      <p className="text-[13px] text-gray-400 my-3">
                        Give Copilot internal knowledge only available to you and your team.
                      </p>
                      
                      {renderSourceItem('Intercom', '1 article', <Check className="w-4 h-4 text-green-500" />)}
                      {renderSourceItem('Zendesk', 'Not set up')}
                    </>
                  )}
                </div>
              )}

              {isVisible('internalArticles') && (
                <div className="bg-[#1C1E1E] rounded-lg p-4 mb-4">
                  {/* Internal Articles Section */}
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-[15px] font-medium text-gray-100">Internal articles</h3>
                      <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
                    </div>
                    <button className="bg-[#2C2C2E] text-[13px] text-gray-300 px-3 py-1.5 rounded-[4px] hover:bg-[#3A3A3C]">
                      Add article
                    </button>
                  </div>
                  
                  {expandedSections.internalArticles && (
                    <>
                      <p className="text-[13px] text-gray-400 my-3">
                        Give Copilot internal knowledge only available to you and your team.
                      </p>
                      
                      <div className="space-y-1">
                        {renderSourceItem('Intercom', '1 article', <Check className="w-4 h-4 text-green-400" />)}
                        {renderSourceItem('Guru', 'Not set up', undefined)}
                        {renderSourceItem('Notion', 'Not set up', undefined)}
                        {renderSourceItem('Confluence', 'Not set up', undefined)}
                      </div>
                    </>
                  )}
                </div>
              )}

              {isVisible('conversations') && (
                <div className="bg-[#1C1E1E] rounded-lg p-4 mb-4">
                  {/* Conversations Section */}
                  <div className="flex justify-between items-center cursor-pointer mb-2">
                    <h3 className="text-[15px] font-medium text-gray-100">Conversations</h3>
                    <div className="flex items-center gap-2">
                      <button className="bg-[#2C2C2E] text-[13px] text-gray-300 px-3 py-1.5 rounded-[4px] hover:bg-[#3A3A3C]">
                        Import
                      </button>
                      <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
                    </div>
                  </div>
                  
                  {expandedSections.conversations && (
                    <>
                      <p className="text-[13px] text-gray-400 my-3">
                        Let Copilot use your team's conversations and customer tickets from the past 4 months.
                      </p>
                      
                      {renderSourceItem('Intercom', 'Not enough conversations', <AlertCircle className="w-4 h-4 text-yellow-500" />, false)}
                      {renderSourceItem('Zendesk', 'Import your Zendesk tickets (takes 24-48 hours)', <AlertCircle className="w-4 h-4 text-yellow-500" />, false)}
                    </>
                  )}
                </div>
              )}

              {/* Macros Section */}
              {isVisible('macros') && (
                <div className="bg-[#1C1E1E] rounded-lg p-4 mb-4">
                  <div 
                    className="flex justify-between items-center cursor-pointer mb-2"
                    onClick={() => toggleSection('macros')}
                  >
                    <h3 className="text-[15px] font-medium text-gray-100">Macros</h3>
                    <ChevronDown 
                      className={`w-3.5 h-3.5 text-gray-500 transition-transform ${expandedSections.macros ? 'transform rotate-180' : ''}`} 
                    />
                  </div>
                  
                  {expandedSections.macros && (
                    <>
                      <p className="text-[13px] text-gray-400 my-3">
                        Copilot will recommend macros that are available to your teammates.
                      </p>
                      
                      {renderSourceItem('Intercom', '4 macros', <Check className="w-4 h-4 text-green-500" />, false)}
                    </>
                  )}
                </div>
              )}

              {/* Websites Section */}
              {isVisible('websites') && (
                <div className="bg-[#1C1E1E] rounded-lg p-4 mb-4">
                  {/* Websites Section */}
                  <div className="flex justify-between items-center cursor-pointer mb-2">
                    <h3 className="text-[15px] font-medium text-gray-100">Websites</h3>
                    <div className="flex items-center gap-2">
                      <button className="bg-[#2C2C2E] text-[13px] text-gray-300 px-3 py-1.5 rounded-[4px] hover:bg-[#3A3A3C]">
                        Sync
                      </button>
                      <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
                    </div>
                  </div>
                  
                  {expandedSections.websites && (
                    <p className="text-[13px] text-gray-400 my-3">
                      Let Fin AI Agent and Copilot use any public website.
                    </p>
                  )}
                </div>
              )}

              {/* More Content Sources Section */}
              {isVisible('moreContent') && (
                <div className="bg-[#1C1E1E] rounded-lg p-4 mb-4">
                  {/* More Content Sources Section */}
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-[15px] font-medium text-gray-100">More content sources</h3>
                      <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="bg-[#2C2C2E] text-[13px] text-gray-300 px-3 py-1.5 rounded-[4px] hover:bg-[#3A3A3C]">
                        Add custom answer
                      </button>
                    </div>
                  </div>
                  
                  {expandedSections.moreContent && (
                    <>
                      <p className="text-[13px] text-gray-400 my-3">
                        Give Fin AI Agent and Copilot sources that aren't visible to your customers.
                      </p>
                      <div className="space-y-1">
                        {renderSourceItem('Snippets', 'No snippets')}
                        {renderSourceItem('Documents', 'No documents')}
                        {renderSourceItem('Custom answers', 'No answers')}
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Content from Conversations Section */}
              {isVisible('contentFromConversations') && (
                <div className="bg-[#1C1E1E] rounded-lg p-4">
                  <div 
                    className="flex justify-between items-center cursor-pointer mb-2"
                    onClick={() => toggleSection('contentFromConversations')}
                  >
                    <h3 className="text-[15px] font-medium text-gray-100">Content from conversations</h3>
                    <div className="flex items-center">
                      <span className="text-[11px] bg-blue-900/40 text-blue-300 px-1.5 py-0.5 rounded-[3px] mr-2">
                        Beta
                      </span>
                      <ChevronDown 
                        className={`w-3.5 h-3.5 text-gray-500 transition-transform ${expandedSections.contentFromConversations ? 'transform rotate-180' : ''}`} 
                      />
                    </div>
                  </div>
                  
                  {expandedSections.contentFromConversations && (
                    <>
                      <p className="text-[13px] text-gray-400 my-3">
                        Use AI generated snippets to fill content gaps.
                      </p>
                      {renderSourceItem('Intercom', 'Not set up', <AlertCircle className="w-4 h-4 text-yellow-500" />, false, true)}
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgePage;
