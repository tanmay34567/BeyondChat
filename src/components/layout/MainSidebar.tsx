import React, { useState } from 'react';
import { 
  Inbox, Search, Settings, User, 
  BarChart2, BookOpen, Users, MessageCircle,
  LifeBuoy, Send, ChevronRight, Moon, Globe,
  HelpCircle, MessageSquare, AlertCircle, FileText, LogOut
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { MainView } from '../../types';

// Using the shared MainView type from types directory

interface MainSidebarProps {
  activeView: MainView;
  onViewChange: (view: MainView) => void;
}

interface MainSidebarItemProps {
  icon: React.ReactNode;
  text: string;
  view: MainView;
  count?: number;
  isActive?: boolean;
  onClick?: () => void;
  showLabels?: boolean;
}

const MainSidebarItem: React.FC<MainSidebarItemProps> = ({ 
  icon, text, count, isActive = false, onClick, showLabels = false
  // view is used for type checking but not directly in the component
}) => {
  return (
    <div 
      className={clsx(
        "flex items-center py-3 cursor-pointer relative group",
        isActive ? "bg-[#2C2C2E] text-white rounded-l-md" : "text-gray-200 hover:text-white"
      )}
      onClick={onClick}
    >
      <div className="w-12 flex justify-center">
        <div className={clsx(
          "w-5 h-5 relative",
          isActive && "text-white"
        )}>
          {icon}
          {count !== undefined && count > 0 && (
            <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-medium">
              {count}
            </div>
          )}
        </div>
      </div>
      
      {/* Label with smooth transition */}
      <span className={clsx(
        "text-sm font-medium whitespace-nowrap transition-all duration-500 ease-in-out overflow-hidden",
        showLabels ? "opacity-100 max-w-[120px] ml-1" : "opacity-0 max-w-0 ml-0",
        isActive && "font-semibold"
      )}>
        {text}
      </span>
    </div>
  );
};

const MainSidebar: React.FC<MainSidebarProps> = ({ activeView, onViewChange }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showProfileCard, setShowProfileCard] = useState(false);
  const navigate = useNavigate();

  return (
    <div 
      className={clsx(
        "fixed left-0 top-0 h-full bg-[#1C1C1E]/90 backdrop-blur-sm border-r border-[#3A3A3C] flex flex-col z-10 transition-all duration-500 ease-in-out",
        isHovered ? "w-40" : "w-12"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowProfileCard(false);
      }}
      style={{ willChange: 'width' }}
    >
      {/* Logo */}
      <div className="py-4 px-3">
        <div className="w-6 h-6 bg-gray-700 rounded-md flex items-center justify-center">
          <div className="w-3 h-3 bg-gray-300 rounded-sm"></div>
        </div>
      </div>
      
      {/* Main navigation */}
      <div className="flex-1 w-full overflow-y-auto">
        <MainSidebarItem 
          icon={<Inbox />} 
          text="Inbox" 
          view="inbox"
          count={4} 
          isActive={activeView === 'inbox'} 
          onClick={() => {
            onViewChange('inbox');
            navigate('/inbox');
          }}
          showLabels={isHovered}
        />
        <MainSidebarItem 
          icon={<MessageCircle />} 
          text="Fin AI Agent" 
          view="fin-ai-agent"
          isActive={activeView === 'fin-ai-agent'}
          onClick={() => {
            onViewChange('fin-ai-agent');
            navigate('/fin-ai-agent');
          }}
          showLabels={isHovered}
        />
        <MainSidebarItem 
          icon={<BookOpen />} 
          text="Knowledge" 
          view="knowledge"
          isActive={activeView === 'knowledge'}
          onClick={() => {
            onViewChange('knowledge');
            navigate('/knowledge');
          }}
          showLabels={isHovered}
        />
        <MainSidebarItem 
          icon={<BarChart2 />} 
          text="Reports" 
          view="reports"
          isActive={activeView === 'reports'}
          onClick={() => {
            onViewChange('reports');
            navigate('/reports');
          }}
          showLabels={isHovered}
        />
        <MainSidebarItem 
          icon={<Send />} 
          text="Outbound" 
          view="outbound"
          isActive={activeView === 'outbound'}
          onClick={() => {
            onViewChange('outbound');
            navigate('/outbound');
          }}
          showLabels={isHovered}
        />
        <MainSidebarItem 
          icon={<Users />} 
          text="Contacts" 
          view="contacts"
          isActive={activeView === 'contacts'}
          onClick={() => {
            onViewChange('contacts');
            navigate('/contacts');
          }}
          showLabels={isHovered}
        />
        <MainSidebarItem 
          icon={<LifeBuoy />} 
          text="Get set up" 
          view="get-set-up"
          isActive={activeView === 'get-set-up'}
          onClick={() => {
            onViewChange('get-set-up');
            navigate('/get-set-up');
          }}
          showLabels={isHovered}
        />
        <MainSidebarItem 
          icon={<Search />} 
          text="Search" 
          view="search"
          isActive={activeView === 'search'}
          onClick={() => {
            onViewChange('search');
            navigate('/search');
          }}
          showLabels={isHovered}
        />
        <MainSidebarItem 
          icon={<Settings />} 
          text="Settings" 
          view="settings"
          isActive={activeView === 'settings'}
          onClick={() => {
            onViewChange('settings');
            navigate('/settings');
          }}
          showLabels={isHovered}
        />
      </div>
      
      {/* Profile section */}
      <div className="mt-auto mb-4 px-3 relative">
        <div 
          className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center cursor-pointer"
          onMouseEnter={() => setShowProfileCard(true)}
          onMouseLeave={() => !isHovered && setShowProfileCard(false)}
        >
          <User className="w-4 h-4 text-gray-300" />
        </div>

        {/* Profile card */}
        {showProfileCard && (
          <div className="absolute bottom-0 left-full ml-2 w-56 bg-[#2C2C2E]/95 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out z-20">
            {/* Profile header */}
            <div className="p-3 border-b border-[#3A3A3C] flex items-center">
              <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center mr-2">
                <User className="w-4 h-4 text-gray-300" />
              </div>
              <div>
                <div className="text-white font-medium text-sm">On and On</div>
                <div className="text-xs text-gray-400">Active</div>
              </div>
              <div className="ml-auto text-gray-400">
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            {/* Away mode toggle */}
            <div className="p-3 border-b border-[#3A3A3C] flex items-center justify-between">
              <div className="text-gray-200 text-sm">Away mode</div>
              <div className="w-8 h-4 bg-gray-700 rounded-full relative">
                <div className="absolute left-1 top-0.5 w-3 h-3 bg-gray-400 rounded-full"></div>
              </div>
            </div>

            {/* Theme */}
            <div className="p-3 border-b border-[#3A3A3C] flex items-center justify-between">
              <div className="flex items-center">
                <Moon className="w-4 h-4 text-gray-400 mr-2" />
                <div className="text-gray-200 text-sm">Theme: Match system</div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>

            {/* Language */}
            <div className="p-3 border-b border-[#3A3A3C] flex items-center justify-between">
              <div className="flex items-center">
                <Globe className="w-4 h-4 text-gray-400 mr-2" />
                <div className="text-gray-200 text-sm">Language: English (US)</div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>

            {/* Workspace */}
            <div className="p-3 border-b border-[#3A3A3C] flex items-center justify-between">
              <div className="text-gray-200 text-sm">Workspace: acfg</div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>

            {/* Links */}
            <div className="p-2">
              <div className="p-2 text-gray-300 hover:bg-[#3A3A3C] rounded cursor-pointer flex items-center text-xs">
                <HelpCircle className="w-3 h-3 mr-2" />
                <span>Intercom Help Center</span>
              </div>
              <div className="p-2 text-gray-300 hover:bg-[#3A3A3C] rounded cursor-pointer flex items-center text-xs">
                <MessageSquare className="w-3 h-3 mr-2" />
                <span>Intercom Community Forum</span>
              </div>
              <div className="p-2 text-gray-300 hover:bg-[#3A3A3C] rounded cursor-pointer flex items-center text-xs">
                <AlertCircle className="w-3 h-3 mr-2" />
                <span>Status page</span>
              </div>
              <div className="p-2 text-gray-300 hover:bg-[#3A3A3C] rounded cursor-pointer flex items-center text-xs">
                <FileText className="w-3 h-3 mr-2" />
                <span>Terms & policies</span>
              </div>
            </div>

            {/* Log out */}
            <div className="p-3 border-t border-[#3A3A3C]">
              <div className="text-red-500 flex items-center cursor-pointer text-sm">
                <LogOut className="w-4 h-4 mr-2" />
                <span>Log out</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainSidebar;
