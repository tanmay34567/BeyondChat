import React from 'react';
import clsx from 'clsx';

interface MessageBubbleProps {
  children: React.ReactNode;
  isUser?: boolean;
  type?: 'text' | 'email' | 'voicemail';
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ 
  children, isUser = false, type = 'text'
}) => {
  // Function to format text content with line breaks
  const formatContent = (content: React.ReactNode) => {
    if (typeof content !== 'string') return content;
    
    // Handle email format
    if (type === 'email' || content.includes('Subject:')) {
      const lines = content.split('\n');
      return lines.map((line, index) => {
        // Style the subject line
        if (line.startsWith('Subject:')) {
          return (
            <div key={index} className="font-medium mb-2">
              {line}
            </div>
          );
        }
        // Add spacing between paragraphs
        if (line === '') {
          return <div key={index} className="h-2" />;
        }
        return <div key={index}>{line}</div>;
      });
    }
    
    // Handle voicemail format
    if (type === 'voicemail' || content.includes('Voicemail:')) {
      return (
        <div>
          {content.split('Voicemail:').map((part, index) => {
            if (index === 0 && !content.startsWith('Voicemail:')) return <div key="pre">{part}</div>;
            return index > 0 ? (
              <div key={index} className="italic bg-opacity-50 p-2 rounded my-1 bg-gray-700">
                {part}
              </div>
            ) : null;
          })}
        </div>
      );
    }
    
    // Regular text with line breaks
    return content.split('\n').map((line, index) => (
      <div key={index}>{line}</div>
    ));
  };
  
  return (
    <div className={clsx(
      "max-w-[85%] mb-3 p-3 rounded-lg",
      isUser 
        ? "bg-blue-600 text-white ml-auto" 
        : "bg-gray-700 text-gray-100"
    )}>
      <div className="text-sm whitespace-pre-line">
        {formatContent(children)}
      </div>
    </div>
  );
};