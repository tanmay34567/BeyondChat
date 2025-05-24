import React, { useState, useEffect } from 'react';
import { 
  Star, MoreHorizontal, ChevronDown, MessageSquare
} from 'lucide-react';
import { MessageBubble } from './MessageBubble';
import { Conversation, ConversationType } from '../../pages/InboxPage';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: string;
}

interface ConversationViewProps {
  conversation: Conversation | null;
}

const ConversationView: React.FC<ConversationViewProps> = ({ conversation }) => {
  // Default messages for each conversation type with more realistic content
  const defaultMessages: Record<ConversationType, Message[]> = {
    messenger: [
      {
        id: 1,
        text: "👋 Hi there! Welcome to Intercom. I'm here to help you get set up with our Messenger.",
        isUser: false,
        timestamp: "11:45"
      },
      {
        id: 2,
        text: "Messenger lets you chat with your website visitors in real-time. Would you like to install it on your website now?",
        isUser: false,
        timestamp: "11:46"
      },
      {
        id: 3,
        text: "You can customize the appearance, add team members, and set up automated responses too.",
        isUser: false,
        timestamp: "11:47"
      }
    ],
    email: [
      {
        id: 1,
        text: "Subject: How do I integrate with Shopify?\n\nHi there,\n\nI'm setting up my new store on Shopify and I'd like to integrate Intercom for customer support. Can you guide me through the process?\n\nThanks,\nAlex",
        isUser: false,
        timestamp: "10:32"
      },
      {
        id: 2,
        text: "Hi Alex,\n\nThanks for reaching out! Integrating Intercom with Shopify is straightforward. Here's how you can do it:\n\n1. Go to your Shopify admin panel\n2. Navigate to Online Store > Themes\n3. Click 'Actions' and then 'Edit code'\n4. Find the theme.liquid file\n5. Paste your Intercom code snippet before the closing </body> tag\n\nLet me know if you need any further assistance!\n\nBest,\nSupport Team",
        isUser: true,
        timestamp: "10:45"
      }
    ],
    whatsapp: [
      {
        id: 1,
        text: "Hello, I placed an order #WA-1234 yesterday but haven't received any shipping confirmation. Could you please check the status?",
        isUser: false,
        timestamp: "Yesterday"
      },
      {
        id: 2,
        text: "Hi there! I'm checking your order status right now. Give me just a moment.",
        isUser: true,
        timestamp: "Yesterday"
      },
      {
        id: 3,
        text: "I can see that your order #WA-1234 has been processed and is scheduled for shipping today. You should receive a tracking number by email within the next few hours.",
        isUser: true,
        timestamp: "Yesterday"
      },
      {
        id: 4,
        text: "Thank you for the quick response! I'll keep an eye out for the tracking information.",
        isUser: false,
        timestamp: "Yesterday"
      }
    ],
    phone: [
      {
        id: 1,
        text: "Missed call from +1 (555) 123-4567 at 2:15 PM on May 20.",
        isUser: false,
        timestamp: "May 20"
      },
      {
        id: 2,
        text: "Voicemail: 'Hello, this is Jamie from Acme Corp. I'm calling about our recent purchase of your enterprise plan. We need some help with user provisioning. Please call me back at your earliest convenience. Thanks!'",
        isUser: false,
        timestamp: "May 20"
      },
      {
        id: 3,
        text: "I tried calling back but couldn't reach the customer. I've sent an email to schedule a proper time for a call.",
        isUser: true,
        timestamp: "May 20"
      }
    ]
  };
  
  // Initialize messages based on conversation type
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  
  // Update messages when conversation changes
  useEffect(() => {
    if (conversation) {
      setMessages(defaultMessages[conversation.type]);
    }
  }, [conversation?.id]);

  // Helper function to get current time for new messages
  const getCurrentTime = () => {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;
    
    const newMsg: Message = {
      id: messages.length + 1,
      text: newMessage,
      isUser: true,
      timestamp: getCurrentTime()
    };
    
    setMessages([...messages, newMsg]);
    setNewMessage("");
  };

  // We don't need the icon function since we're using the background color instead
  
  // Helper function to get the appropriate color based on conversation type
  const getConversationColor = () => {
    if (!conversation) return 'blue-600';
    
    switch (conversation.type) {
      case 'messenger':
        return 'blue-600';
      case 'email':
        return 'emerald-600';
      case 'whatsapp':
        return 'green-600';
      case 'phone':
        return 'purple-600';
      default:
        return 'blue-600';
    }
  };
  
  // Helper function to get the appropriate action button text
  const getActionButtonText = () => {
    if (!conversation) return 'Install Messenger';
    
    switch (conversation.type) {
      case 'messenger':
        return 'Install Messenger';
      case 'email':
        return 'Set up Email';
      case 'whatsapp':
        return 'Set up WhatsApp';
      case 'phone':
        return 'Set up Phone';
      default:
        return 'Install';
    }
  };
  
  return (
    <div className="flex-1 flex flex-col h-full bg-[#1C1C1E] text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-[#3A3A3C]">
        <h2 className="text-lg font-medium text-white">
          {conversation ? conversation.title.split(' · ')[0] : 'Conversation'}
        </h2>
        
        <div className="flex items-center space-x-3">
          <button className="text-gray-300 hover:text-white transition-colors">
            <Star className="w-5 h-5" />
          </button>
          <button className="text-gray-300 hover:text-white transition-colors">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 bg-[#1C1C1E]">
        <div className="mb-4">
          {/* Avatar */}
          <div className="flex items-center mb-4">
            <div className={`w-10 h-10 rounded-full bg-${getConversationColor()} flex items-center justify-center text-white font-medium mr-2`}>
              {conversation ? conversation.title.charAt(0) : 'M'}
            </div>
            <div className="text-lg font-medium">{conversation?.title || 'Conversation'}</div>
          </div>
          
          {/* Install button */}
          <div className="mb-6">
            <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
              {getActionButtonText()}
            </button>
          </div>
          
          {/* Message bubbles */}
          {messages.map((message) => {
            // Determine message type based on conversation type and content
            let messageType: 'text' | 'email' | 'voicemail' = 'text';
            if (conversation?.type === 'email') {
              messageType = 'email';
            } else if (conversation?.type === 'phone' && message.text.includes('Voicemail:')) {
              messageType = 'voicemail';
            }
            
            return (
              <div key={message.id} className="mb-4">
                <MessageBubble 
                  isUser={message.isUser}
                  type={messageType}
                >
                  {message.text}
                </MessageBubble>
                
                <div className="flex items-center mt-1 ml-2">
                  <div className={`w-6 h-6 rounded-full ${message.isUser ? 'bg-gray-600' : `bg-${getConversationColor()}`} flex items-center justify-center text-white text-xs mr-2`}>
                    {message.isUser ? "U" : conversation?.title.charAt(0) || "M"}
                  </div>
                  <span className="text-xs text-gray-400">{message.timestamp}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Reply section */}
      <div className="border-t border-[#3A3A3C] p-4 bg-[#1C1C1E]">
        <form onSubmit={handleSendMessage} className="flex flex-col">
          <div className="flex items-center mb-2">
            <MessageSquare className="w-5 h-5 text-gray-400 mr-2" />
            <span className="text-sm text-gray-300">Reply</span>
            <ChevronDown className="w-4 h-4 ml-1 text-gray-400" />
          </div>
          
          <div className="relative mb-3">
            <textarea
              className="w-full rounded-md p-3 bg-[#2C2C2E] text-white border border-[#3A3A3C] focus:outline-none focus:border-blue-500 resize-none min-h-[60px]"
              placeholder="Use CtrlK for shortcuts"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
          </div>
          
          <div className="flex justify-end">
            <button 
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm flex items-center hover:bg-blue-700 transition-colors shadow-sm"
              disabled={newMessage.trim() === ""}
            >
              <span>Send</span>
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConversationView;