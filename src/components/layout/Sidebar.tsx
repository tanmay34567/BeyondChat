import React, { useState } from 'react';
import { 
  Inbox, Search, User, 
  MessageSquare, Mail, TicketCheck, Phone,
  MessageCircle, ChevronDown, ChevronRight, Plus, 
  Star, AtSign
} from 'lucide-react';
import clsx from 'clsx';
import { MainView } from '../../types';

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  count?: number;
  isActive?: boolean;
  onClick?: () => void;
  channelType?: 'messenger' | 'email' | 'whatsapp' | 'phone' | 'ticket';
}

const SidebarItem: React.FC<SidebarItemProps> = ({ 
  icon, text, count, isActive = false, onClick, channelType 
}) => {
  // Function to get channel color and letter
  const getChannelInfo = () => {
    switch (channelType) {
      case 'messenger': return { color: 'bg-blue-500', letter: 'B' };
      case 'email': return { color: 'bg-purple-500', letter: 'E' };
      case 'whatsapp': return { color: 'bg-green-500', letter: 'G' };
      case 'phone': return { color: 'bg-yellow-500', letter: 'P' };
      case 'ticket': return { color: 'bg-red-500', letter: 'T' };
      default: return { color: '', letter: '' };
    }
  };

  const channelInfo = getChannelInfo();

  return (
    <div 
      className={clsx(
        "flex items-center px-3 py-2 rounded-md cursor-pointer transition-colors duration-150",
        isActive ? "bg-[#2C2C2E] text-white" : "hover:bg-[#2C2C2E] hover:bg-opacity-70 text-gray-100"
      )}
      onClick={onClick}
    >
      {channelType ? (
        <div className={`w-6 h-6 mr-3 ${channelInfo.color} rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm`}>
          {channelInfo.letter}
        </div>
      ) : (
        <div className={clsx("w-5 h-5 mr-3", isActive ? "text-white" : "text-gray-200")}>
          {icon}
        </div>
      )}
      
      <span className="flex-1 text-sm font-medium text-gray-200">{text}</span>
      
      {count !== undefined && (
        <span className={clsx(
          "text-xs font-medium px-1.5 py-0.5 rounded-full", 
          isActive ? "bg-gray-700 text-white" : count > 0 ? "bg-gray-700 text-white" : "text-gray-300"
        )}>
          {count}
        </span>
      )}
    </div>
  );
};

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  showAddButton?: boolean;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ 
  title, children, showAddButton = false 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-4">
      <div 
        className="flex items-center px-3 py-2 cursor-pointer group hover:bg-[#2C2C2E] hover:bg-opacity-50 rounded-md transition-colors duration-150"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 
          <ChevronDown className="w-4 h-4 mr-2 text-gray-300 group-hover:text-gray-200" /> : 
          <ChevronRight className="w-4 h-4 mr-2 text-gray-300 group-hover:text-gray-200" />
        }
        <span className="text-sm font-semibold text-gray-200 uppercase tracking-wider group-hover:text-white">{title}</span>
        {showAddButton && (
          <Plus className="w-4 h-4 ml-auto text-gray-300 opacity-0 group-hover:opacity-100 group-hover:text-white transition-all" />
        )}
      </div>
      
      {isExpanded && (
        <div className="mt-2 space-y-1">
          {children}
        </div>
      )}
    </div>
  );
};

interface SidebarProps {
  activeView?: MainView;
  onViewChange?: (view: MainView) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView = 'inbox', onViewChange }) => {
  return (
    <div className="w-64 h-full bg-[#1C1C1E] border-r border-[#3A3A3C] flex flex-col text-gray-200">
      <div className="p-4 border-b border-[#3A3A3C] flex items-center justify-between">
        <h1 className="text-xl font-bold">Inbox</h1>
        <div className="flex space-x-3">
          <Search className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white transition-colors" />
          <Plus className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white transition-colors" />
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {/* Primary tabs */}
        <SidebarItem 
          icon={<MessageCircle />} 
          text="Your inbox" 
          count={4} 
          isActive={activeView === 'inbox'} 
          onClick={() => onViewChange && onViewChange('inbox')}
        />
        <SidebarItem 
          icon={<AtSign />} 
          text="Mentions" 
          count={0} 
          isActive={activeView === 'mentions'}
          onClick={() => onViewChange && onViewChange('mentions')}
        />
        <SidebarItem 
          icon={<Star />} 
          text="Created by you" 
          count={0} 
          onClick={() => onViewChange && onViewChange('created-by-you')}
        />
        <SidebarItem 
          icon={<Inbox />} 
          text="All" 
          count={4} 
          isActive={activeView === 'all'}
          onClick={() => onViewChange && onViewChange('all')}
        />
        <SidebarItem 
          icon={<User />} 
          text="Unassigned" 
          count={0} 
          isActive={activeView === 'unassigned'}
          onClick={() => onViewChange && onViewChange('unassigned')}
        />
        <SidebarItem 
          icon={<TicketCheck />} 
          text="Dashboard" 
          count={0} 
          isActive={activeView === 'dashboard'}
          onClick={() => onViewChange && onViewChange('dashboard')}
        />
        
        <div className="h-px bg-[#3A3A3C] my-3"></div>
        
        {/* Collapsible sections */}
        <CollapsibleSection title="Fin AI Agent" showAddButton={true}>
          <div className="text-xs text-gray-300 italic px-3 py-1">Configure your AI agent</div>
        </CollapsibleSection>
        
        <CollapsibleSection title="Teammates" showAddButton={true}>
          <div className="text-xs text-gray-300 italic px-3 py-1">No teammates yet</div>
        </CollapsibleSection>
        
        <CollapsibleSection title="Team inboxes" showAddButton={true}>
          <div className="text-xs text-gray-300 italic px-3 py-1">No team inboxes yet</div>
        </CollapsibleSection>
        
        <div className="h-px bg-[#3A3A3C] my-3"></div>
        
        <CollapsibleSection title="Views">
          <SidebarItem icon={<MessageSquare />} text="Messenger" count={1} channelType="messenger" />
          <SidebarItem icon={<Mail />} text="Email" count={1} channelType="email" />
          <SidebarItem icon={<MessageCircle />} text="WhatsApp & Social" count={1} channelType="whatsapp" />
          <SidebarItem icon={<Phone />} text="Phone & SMS" count={1} channelType="phone" />
          <SidebarItem icon={<TicketCheck />} text="Tickets" count={0} channelType="ticket" />
        </CollapsibleSection>
      </div>
      
      {/* Bottom section */}
      <div className="p-3 border-t border-[#3A3A3C]">
        <div className="mb-3">
          <button className="text-sm font-medium text-gray-200 hover:text-white transition-colors px-3 py-1 rounded hover:bg-[#2C2C2E] hover:bg-opacity-70">
            Manage
          </button>
        </div>
        
        <div className="bg-[#2C2C2E] rounded-lg p-3 flex items-center justify-between cursor-pointer hover:bg-[#3A3A3C] transition-colors shadow-sm group">
          <div>
            <div className="text-sm font-medium text-white">Get set up</div>
            <div className="text-xs text-gray-200">Complete essential tasks</div>
          </div>
          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-300 group-hover:translate-x-0.5 transition-all" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;