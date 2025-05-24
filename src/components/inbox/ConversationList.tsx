import React from 'react';
import { MoreHorizontal, Search, Plus } from 'lucide-react';
import clsx from 'clsx';
import { Conversation } from '../../types';

interface ConversationItemProps {
  conversation: Conversation;
  isActive: boolean;
  onClick: (conversation: Conversation) => void;
}

const ConversationItem: React.FC<ConversationItemProps> = ({ 
  conversation, isActive, onClick
}) => {
  const { avatar, title, subtitle, time, unread } = conversation;
  
  return (
    <div 
      className={clsx(
        "px-3 py-3 border-b border-[#3A3A3C] cursor-pointer",
        isActive ? "bg-[#2C2C2E]" : "hover:bg-[#2C2C2E] hover:bg-opacity-70"
      )}
      onClick={() => onClick(conversation)}
    >
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-3 relative">
          <div className={`w-8 h-8 rounded-full bg-${avatar} flex items-center justify-center text-white shadow-sm`}>
            {avatar.split('-')[0].charAt(0).toUpperCase()}
          </div>
          {unread && (
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border border-[#1C1C1E]"></div>
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex justify-between">
            <p className={clsx(
              "text-sm truncate",
              unread ? "font-semibold text-white" : "font-medium text-gray-100"
            )}>
              {title}
            </p>
            <div className="flex items-center">
              <span className={clsx(
                "text-xs", 
                unread ? "text-white" : "text-gray-300"
              )}>
                {time}
              </span>
              <MoreHorizontal className="w-4 h-4 ml-2 text-gray-300" />
            </div>
          </div>
          <p className={clsx(
            "text-xs truncate", 
            unread ? "text-gray-200" : "text-gray-300"
          )}>
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

interface ConversationListProps {
  conversations: Conversation[];
  selectedConversationId?: string;
  onSelectConversation: (conversation: Conversation) => void;
}

const ConversationList: React.FC<ConversationListProps> = ({ 
  conversations, 
  selectedConversationId, 
  onSelectConversation 
}) => {
  return (
    <div className="w-72 h-full border-r border-[#3A3A3C] bg-[#1C1C1E] text-white flex flex-col">
      <div className="p-3 border-b border-[#3A3A3C] flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 bg-gray-200 rounded-sm"></div>
          <h2 className="text-sm font-medium text-white">On and On</h2>
        </div>
        <div className="flex items-center">
          <Search className="w-4 h-4 text-gray-300 mr-2" />
          <Plus className="w-4 h-4 text-gray-300" />
        </div>
      </div>
      
      <div className="flex items-center justify-between p-3 border-b border-[#3A3A3C]">
        <span className="text-sm font-medium text-white">{conversations.length} Open</span>
        <div className="flex items-center">
          <span className="text-sm text-gray-300">Last activity</span>
          <svg className="w-4 h-4 ml-1 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 10l5 5 5-5" />
          </svg>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        {conversations.map(conversation => (
          <ConversationItem 
            key={conversation.id}
            conversation={conversation}
            isActive={conversation.id === selectedConversationId}
            onClick={onSelectConversation}
          />
        ))}
      </div>
    </div>
  );
};

export default ConversationList;