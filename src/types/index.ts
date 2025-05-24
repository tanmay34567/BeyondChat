// Define conversation types
export type ConversationType = 'messenger' | 'email' | 'whatsapp' | 'phone';

// Define conversation interface
export interface Conversation {
  id: string;
  type: ConversationType;
  title: string;
  subtitle: string;
  time: string;
  avatar: string;
  unread?: boolean;
  lastActivity?: Date;
}

// Define the possible views
export type MainView = 
  | 'inbox' 
  | 'mentions' 
  | 'created-by-you' 
  | 'all' 
  | 'unassigned' 
  | 'dashboard' 
  | 'fin-ai-agent' 
  | 'knowledge' 
  | 'reports' 
  | 'outbound' 
  | 'contacts' 
  | 'get-set-up' 
  | 'search' 
  | 'settings'
  | 'home';
