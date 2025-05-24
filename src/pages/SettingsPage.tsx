import React, { useState } from 'react';
import { User, MessageSquare, HelpCircle, Users, Clock, Briefcase, Shield, AlertTriangle, CreditCard, BarChart2, ChevronRight, Mail, Phone, MessageCircle, ArrowUpDown, Slack, List, UserCircle, Ticket, Command, UserCheck, Timer, Bot, Sparkles, Bookmark, Store, Cable, Key, Code, Tag, UserPlus, Target, Building2, MessageSquareText, Package, FileUp, BookOpen, Newspaper, Bell, Eye, Lock, Settings, Inbox } from 'lucide-react';
import MainSidebar from '../components/layout/MainSidebar';
import { useNavigate } from 'react-router-dom';
import { MainView } from '../types';

type SidebarSubItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
  alert?: boolean;
};

// Define the type for the sidebar items
type SidebarItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
  subItems?: SidebarSubItem[];
};

// Type guard to check if an item has subitems
const hasSubItems = (item: SidebarItem | undefined): boolean => {
  return !!item && !!item.subItems && item.subItems.length > 0;
};

// Settings section components
const ChannelsSection: React.FC = () => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 text-white">Channels</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Messenger */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-purple-700 rounded-md flex items-center justify-center mr-3">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Messenger</h3>
              <p className="text-gray-400 text-sm">Install and customize your messenger on web and mobile.</p>
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-blue-700 rounded-md flex items-center justify-center mr-3">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Email</h3>
              <p className="text-gray-400 text-sm">Manage forwarding, domains, and customization.</p>
            </div>
          </div>
        </div>

        {/* Phone */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-green-700 rounded-md flex items-center justify-center mr-3">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Phone</h3>
              <p className="text-gray-400 text-sm">Set up and manage phone and messenger calls.</p>
            </div>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-green-600 rounded-md flex items-center justify-center mr-3">
              <MessageSquareText className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">WhatsApp</h3>
              <p className="text-gray-400 text-sm">Install and configure WhatsApp messages from your inbox.</p>
            </div>
          </div>
        </div>

        {/* Switch */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-indigo-600 rounded-md flex items-center justify-center mr-3">
              <ArrowUpDown className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Switch</h3>
              <p className="text-gray-400 text-sm">Move customers from phone to chat conversations.</p>
            </div>
          </div>
        </div>

        {/* Slack */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-purple-600 rounded-md flex items-center justify-center mr-3">
              <Slack className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Slack</h3>
              <p className="text-gray-400 text-sm">Install and configure Slack messages from your inbox.</p>
            </div>
          </div>
        </div>

        {/* SMS */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center mr-3">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">SMS</h3>
              <p className="text-gray-400 text-sm">Control SMS conversations and set quiet hours by time zone.</p>
            </div>
          </div>
        </div>

        {/* Social channels */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-pink-600 rounded-md flex items-center justify-center mr-3">
              <UserCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Social channels</h3>
              <p className="text-gray-400 text-sm">Manage Instagram or Facebook messages in your inbox.</p>
            </div>
          </div>
        </div>

        {/* All channels */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-gray-600 rounded-md flex items-center justify-center mr-3">
              <List className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">All channels</h3>
              <p className="text-gray-400 text-sm">Manage your messenger, email, social channels, and more.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WorkspaceSection: React.FC = () => {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-semibold mb-4 text-white">Workspace</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* General Settings */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-purple-700 rounded-md flex items-center justify-center mr-3">
              <User className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">General</h3>
              <p className="text-gray-400 text-sm">Set your workspace name, time zone, languages, and more.</p>
            </div>
          </div>
        </div>

        {/* Teammates */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-indigo-700 rounded-md flex items-center justify-center mr-3">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Teammates</h3>
              <p className="text-gray-400 text-sm">Manage or invite teammates and see all activity logs.</p>
            </div>
          </div>
        </div>

        {/* Office hours */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-blue-700 rounded-md flex items-center justify-center mr-3">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Office hours</h3>
              <p className="text-gray-400 text-sm">Choose your office hours to manage customer expectations.</p>
            </div>
          </div>
        </div>

        {/* Brands */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-green-700 rounded-md flex items-center justify-center mr-3">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Brands</h3>
              <p className="text-gray-400 text-sm">Set up and manage your brands.</p>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-red-700 rounded-md flex items-center justify-center mr-3">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Security</h3>
              <p className="text-gray-400 text-sm">Configure all security settings for your workspace and data.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InboxSection: React.FC = () => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 text-white">Inbox</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Team inboxes */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-indigo-700 rounded-md flex items-center justify-center mr-3">
              <Inbox className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Team inboxes</h3>
              <p className="text-gray-400 text-sm">Create inboxes so groups of teammates can work together.</p>
            </div>
          </div>
        </div>

        {/* Assignments */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-blue-700 rounded-md flex items-center justify-center mr-3">
              <UserCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Assignments</h3>
              <p className="text-gray-400 text-sm">Assign conversations to control workloads across team inboxes.</p>
            </div>
          </div>
        </div>

        {/* Macros */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-green-700 rounded-md flex items-center justify-center mr-3">
              <Command className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Macros</h3>
              <p className="text-gray-400 text-sm">View, edit, create, export or delete your macros.</p>
            </div>
          </div>
        </div>

        {/* Tickets */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-orange-700 rounded-md flex items-center justify-center mr-3">
              <Ticket className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Tickets</h3>
              <p className="text-gray-400 text-sm">Create and manage Customer tickets and Tracker tickets.</p>
            </div>
          </div>
        </div>

        {/* SLAs */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-purple-700 rounded-md flex items-center justify-center mr-3">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">SLAs</h3>
              <p className="text-gray-400 text-sm">View information for all Service Level Agreements (SLAs).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AIAutomationSection: React.FC = () => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 text-white">AI & Automation</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Inbox AI */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-purple-700 rounded-md flex items-center justify-center mr-3">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Inbox AI</h3>
              <p className="text-gray-400 text-sm">Switch on AI Autofill, AI Articles or AI Compose & Summarize.</p>
            </div>
          </div>
        </div>

        {/* Automation */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-blue-700 rounded-md flex items-center justify-center mr-3">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Automation</h3>
              <p className="text-gray-400 text-sm">Choose an identity for your bot or turn on the bot inbox.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const IntegrationsSection: React.FC = () => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 text-white">Integrations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* App Store */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-blue-700 rounded-md flex items-center justify-center mr-3">
              <Store className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">App Store</h3>
              <p className="text-gray-400 text-sm">Manage apps and integrations in your workspace.</p>
            </div>
          </div>
        </div>

        {/* Data connectors */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-green-700 rounded-md flex items-center justify-center mr-3">
              <Cable className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Data connectors</h3>
              <p className="text-gray-400 text-sm">Create data connectors to connect your live external data to Intercom.</p>
            </div>
          </div>
        </div>

        {/* Authentication */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-purple-700 rounded-md flex items-center justify-center mr-3">
              <Key className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Authentication</h3>
              <p className="text-gray-400 text-sm">Create new tokens or view info like token names and types.</p>
            </div>
          </div>
        </div>

        {/* Developer Hub */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-indigo-700 rounded-md flex items-center justify-center mr-3">
              <Code className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Developer Hub</h3>
              <p className="text-gray-400 text-sm">Integrate with our platform or build your own apps within it.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DataSection: React.FC = () => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 text-white">Data</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Tags */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-green-700 rounded-md flex items-center justify-center mr-3">
              <Tag className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Tags</h3>
              <p className="text-gray-400 text-sm">Manage your grouped users with live or archived tags.</p>
            </div>
          </div>
        </div>

        {/* People */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-blue-700 rounded-md flex items-center justify-center mr-3">
              <UserPlus className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">People</h3>
              <p className="text-gray-400 text-sm">Set attributes, segments, events, and lead qualification.</p>
            </div>
          </div>
        </div>

        {/* Audiences */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-purple-700 rounded-md flex items-center justify-center mr-3">
              <Target className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Audiences</h3>
              <p className="text-gray-400 text-sm">Manage your audiences for targeted messaging.</p>
            </div>
          </div>
        </div>

        {/* Companies */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-indigo-700 rounded-md flex items-center justify-center mr-3">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Companies</h3>
              <p className="text-gray-400 text-sm">Manage names, IDs or segments across companies.</p>
            </div>
          </div>
        </div>

        {/* Conversations */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-orange-700 rounded-md flex items-center justify-center mr-3">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Conversations</h3>
              <p className="text-gray-400 text-sm">Create or edit all your conversation attributes.</p>
            </div>
          </div>
        </div>

        {/* Custom Objects */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-pink-700 rounded-md flex items-center justify-center mr-3">
              <Package className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Custom Objects</h3>
              <p className="text-gray-400 text-sm">Create new objects or edit your existing objects.</p>
            </div>
          </div>
        </div>

        {/* Imports & exports */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-cyan-700 rounded-md flex items-center justify-center mr-3">
              <FileUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Imports & exports</h3>
              <p className="text-gray-400 text-sm">Import user data from Zendesk or other sources.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HelpCenterSection: React.FC = () => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 text-white">Help Center</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Tujko Help Center */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-blue-700 rounded-md flex items-center justify-center mr-3">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Tujko Help Center</h3>
              <p className="text-gray-400 text-sm">Add to or configure the content in this Help Center.</p>
            </div>
          </div>
        </div>

        {/* All Help Centers */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-purple-700 rounded-md flex items-center justify-center mr-3">
              <HelpCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">All Help Centers</h3>
              <p className="text-gray-400 text-sm">Manage all Help Centers created for this workspace.</p>
            </div>
          </div>
        </div>

        {/* New Help Center */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-green-700 rounded-md flex items-center justify-center mr-3">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">New Help Center</h3>
              <p className="text-gray-400 text-sm"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const OutboundSection: React.FC = () => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 text-white">Outbound</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Subscriptions */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-purple-700 rounded-md flex items-center justify-center mr-3">
              <Bell className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Subscriptions</h3>
              <p className="text-gray-400 text-sm">Let customers choose which communications they receive.</p>
            </div>
          </div>
        </div>

        {/* Newsfeeds */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-blue-700 rounded-md flex items-center justify-center mr-3">
              <Newspaper className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Newsfeeds</h3>
              <p className="text-gray-400 text-sm">Deliver relevant News Items with targeted newsfeeds.</p>
            </div>
          </div>
        </div>

        {/* News Labels */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-green-700 rounded-md flex items-center justify-center mr-3">
              <Tag className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">News Labels</h3>
              <p className="text-gray-400 text-sm">Categorize your News Items with customized labels.</p>
            </div>
          </div>
        </div>

        {/* Customization */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-indigo-700 rounded-md flex items-center justify-center mr-3">
              <Settings className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Customization</h3>
              <p className="text-gray-400 text-sm">Manage your message settings and universal linking.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PersonalSection: React.FC = () => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 text-white">Personal</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Details */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-blue-700 rounded-md flex items-center justify-center mr-3">
              <User className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Details</h3>
              <p className="text-gray-400 text-sm">Set your email, profile picture, language and theme.</p>
            </div>
          </div>
        </div>

        {/* Account security */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-red-700 rounded-md flex items-center justify-center mr-3">
              <Lock className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Account security</h3>
              <p className="text-gray-400 text-sm">Configure security settings for your account.</p>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-purple-700 rounded-md flex items-center justify-center mr-3">
              <Bell className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Notifications</h3>
              <p className="text-gray-400 text-sm">Manage your notification preferences.</p>
            </div>
          </div>
        </div>

        {/* Visible to you */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-green-700 rounded-md flex items-center justify-center mr-3">
              <Eye className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Visible to you</h3>
              <p className="text-gray-400 text-sm">People, company and message tags visible to you.</p>
            </div>
          </div>
        </div>

        {/* Authentication */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-indigo-700 rounded-md flex items-center justify-center mr-3">
              <Key className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Authentication</h3>
              <p className="text-gray-400 text-sm">OAuth tokens that allow apps to access Intercom.</p>
            </div>
          </div>
        </div>

        {/* Account access */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-orange-700 rounded-md flex items-center justify-center mr-3">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Account access</h3>
              <p className="text-gray-400 text-sm">Allow Intercom to access your account for troubleshooting and support.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SubscriptionSection: React.FC = () => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 text-white">Subscription</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Billing */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-green-700 rounded-md flex items-center justify-center mr-3">
              <CreditCard className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Billing</h3>
              <p className="text-gray-400 text-sm">Manage your subscription and payment details.</p>
            </div>
          </div>
        </div>

        {/* Usage */}
        <div className="bg-[#2C2C2E] rounded-lg p-5 hover:bg-[#3A3A3C] transition-colors cursor-pointer">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-blue-700 rounded-md flex items-center justify-center mr-3">
              <BarChart2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Usage</h3>
              <p className="text-gray-400 text-sm">View your billed usage and set usage alerts and limits.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SettingsPage: React.FC = () => {
  const [activeView, setActiveView] = useState<MainView>('settings');
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [selectedItem, setSelectedItem] = useState<string>('home');
  const [selectedSubItem, setSelectedSubItem] = useState<string | null>(null);
  const navigate = useNavigate();
  
  // Handle view changes from MainSidebar
  const handleViewChange = (view: MainView) => {
    setActiveView(view);
    
    // Navigate to the appropriate page based on the view
    switch (view) {
      case 'inbox':
        navigate('/inbox');
        break;
      case 'settings':
        // Already on settings page
        break;
      default:
        // Handle other views if needed
        break;
    }
  };

  // Handle item click in sidebar
  const handleItemClick = (itemId: string) => {
    if (itemId === 'home') {
      setSelectedItem('home');
      setSelectedSubItem(null);
      return;
    }
    
    // Check if the item has subitems
    const item = sidebarItems.find(item => item.id === itemId);
    if (hasSubItems(item)) {
      // Toggle expanded state
      if (expandedItems.includes(itemId)) {
        setExpandedItems([]);
      } else {
        // Close all other expanded items and only open this one
        setExpandedItems([itemId]);
      }
    } else {
      // Select the item
      setSelectedItem(itemId);
      setSelectedSubItem(null);
    }
  };

  // Handle subitem click in sidebar
  const handleSubItemClick = (parentId: string, subItemId: string) => {
    setSelectedItem(parentId);
    setSelectedSubItem(subItemId);
  };

  // Define the sidebar menu items
  const sidebarItems = [
    { id: 'home', label: 'Home', icon: null },
    { 
      id: 'workspace', 
      label: 'Workspace', 
      icon: null, 
      subItems: [
        { id: 'general', label: 'General', icon: <Settings className="w-4 h-4" /> },
        { id: 'teammates', label: 'Teammates', icon: <Users className="w-4 h-4" /> },
        { id: 'office-hours', label: 'Office hours', icon: <Clock className="w-4 h-4" /> },
        { id: 'brands', label: 'Brands', icon: <Building2 className="w-4 h-4" /> },
        { id: 'security', label: 'Security', icon: <Shield className="w-4 h-4" />, alert: true }
      ] 
    },
    { 
      id: 'subscription', 
      label: 'Subscription', 
      icon: null, 
      subItems: [
        { id: 'billing', label: 'Billing', icon: <CreditCard className="w-4 h-4" /> },
        { id: 'usage', label: 'Usage', icon: <BarChart2 className="w-4 h-4" /> }
      ] 
    },
    { 
      id: 'channels', 
      label: 'Channels', 
      icon: null, 
      subItems: [
        { id: 'messenger', label: 'Messenger', icon: <MessageCircle className="w-4 h-4" /> },
        { id: 'email', label: 'Email', icon: <Mail className="w-4 h-4" /> },
        { id: 'phone', label: 'Phone', icon: <Phone className="w-4 h-4" /> },
        { id: 'whatsapp', label: 'WhatsApp', icon: <MessageSquareText className="w-4 h-4" /> },
        { id: 'switch', label: 'Switch', icon: <ArrowUpDown className="w-4 h-4" /> },
        { id: 'slack', label: 'Slack', icon: <Slack className="w-4 h-4" /> },
        { id: 'sms', label: 'SMS', icon: <MessageSquare className="w-4 h-4" /> },
        { id: 'social-channels', label: 'Social channels', icon: <Users className="w-4 h-4" /> },
        { id: 'all-channels', label: 'All channels', icon: <List className="w-4 h-4" /> }
      ] 
    },
    { 
      id: 'inbox', 
      label: 'Inbox', 
      icon: null, 
      subItems: [
        { id: 'team-inboxes', label: 'Team inboxes', icon: <Inbox className="w-4 h-4" /> },
        { id: 'assignments', label: 'Assignments', icon: <UserCheck className="w-4 h-4" /> },
        { id: 'macros', label: 'Macros', icon: <Command className="w-4 h-4" /> },
        { id: 'tickets', label: 'Tickets', icon: <Ticket className="w-4 h-4" /> },
        { id: 'slas', label: 'SLAs', icon: <Timer className="w-4 h-4" /> }
      ] 
    },
    { 
      id: 'ai', 
      label: 'AI & Automation', 
      icon: null, 
      subItems: [
        { id: 'inbox-ai', label: 'Inbox AI', icon: <Bot className="w-4 h-4" /> },
        { id: 'automation', label: 'Automation', icon: <Sparkles className="w-4 h-4" /> }
      ] 
    },
    { 
      id: 'integrations', 
      label: 'Integrations', 
      icon: null, 
      subItems: [
        { id: 'app-store', label: 'App Store', icon: <Store className="w-4 h-4" /> },
        { id: 'data-connectors', label: 'Data connectors', icon: <Cable className="w-4 h-4" /> },
        { id: 'authentication', label: 'Authentication', icon: <Key className="w-4 h-4" /> },
        { id: 'developer-hub', label: 'Developer Hub', icon: <Code className="w-4 h-4" /> }
      ] 
    },
    { 
      id: 'data', 
      label: 'Data', 
      icon: null, 
      subItems: [
        { id: 'tags', label: 'Tags', icon: <Tag className="w-4 h-4" /> },
        { id: 'people', label: 'People', icon: <User className="w-4 h-4" /> },
        { id: 'audiences', label: 'Audiences', icon: <Target className="w-4 h-4" /> },
        { id: 'companies', label: 'Companies', icon: <Building2 className="w-4 h-4" /> },
        { id: 'conversations', label: 'Conversations', icon: <MessageSquareText className="w-4 h-4" /> },
        { id: 'custom-objects', label: 'Custom Objects', icon: <Package className="w-4 h-4" /> },
        { id: 'imports-exports', label: 'Imports & exports', icon: <ArrowUpDown className="w-4 h-4" /> }
      ] 
    },
    { 
      id: 'help', 
      label: 'Help Center', 
      icon: null, 
      subItems: [
        { id: 'tujko-help', label: 'Tujko Help Center', icon: <BookOpen className="w-4 h-4" /> },
        { id: 'all-help-centers', label: 'All Help Centers', icon: <BookOpen className="w-4 h-4" /> },
        { id: 'new-help-center', label: 'New Help Center', icon: <FileUp className="w-4 h-4" /> }
      ] 
    },
    { 
      id: 'outbound', 
      label: 'Outbound', 
      icon: null, 
      subItems: [
        { id: 'subscriptions', label: 'Subscriptions', icon: <Bell className="w-4 h-4" /> },
        { id: 'newsfeeds', label: 'Newsfeeds', icon: <Newspaper className="w-4 h-4" /> },
        { id: 'news-labels', label: 'News Labels', icon: <Tag className="w-4 h-4" /> },
        { id: 'customization', label: 'Customization', icon: <Settings className="w-4 h-4" /> }
      ] 
    },
    { 
      id: 'personal', 
      label: 'Personal', 
      icon: null, 
      subItems: [
        { id: 'details', label: 'Details', icon: <User className="w-4 h-4" /> },
        { id: 'account-security', label: 'Account security', icon: <Lock className="w-4 h-4" /> },
        { id: 'notifications', label: 'Notifications', icon: <Bell className="w-4 h-4" /> },
        { id: 'visible-to-you', label: 'Visible to you', icon: <Eye className="w-4 h-4" /> },
        { id: 'authentication', label: 'Authentication', icon: <Key className="w-4 h-4" /> },
        { id: 'account-access', label: 'Account access', icon: <Shield className="w-4 h-4" /> }
      ] 
    },
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#121214]">
      <div className="flex h-screen">
        {/* Main sidebar - darker black background */}
        <div className="w-12 bg-black border-r border-gray-900">
          <MainSidebar activeView={activeView} onViewChange={handleViewChange} />
        </div>
        
        {/* Settings container */}
        <div className="flex flex-col flex-1 overflow-hidden">
          <div className="flex flex-1 overflow-hidden bg-[#121214] text-white">
            {/* Settings sidebar */}
            <div className="w-56 border-r border-[#2C2C2E] overflow-y-auto bg-[#1C1C1E]">
              <div className="p-4 border-b border-[#2C2C2E]">
                <h2 className="text-xl font-semibold text-white">Settings</h2>
              </div>
              <div className="py-1">
                {sidebarItems.map((item) => (
                  <React.Fragment key={item.id}>
                    <div
                      onClick={() => handleItemClick(item.id)}
                      className={`flex items-center px-4 py-2.5 cursor-pointer ${selectedItem === item.id && !selectedSubItem ? 'bg-[#2C2C2E] text-white' : 'text-gray-300 hover:bg-[#2C2C2E]'} group`}
                    >
                      {item.icon && <span className="mr-3">{item.icon}</span>}
                      <span>{item.label}</span>
                      {item.id !== 'home' && hasSubItems(item) && (
                        <span className="ml-auto">
                          <ChevronRight 
                            className={`w-4 h-4 transform transition-transform duration-300 ${expandedItems.includes(item.id) ? 'rotate-90' : 'rotate-0'}`} 
                          />
                        </span>
                      )}
                    </div>
                    {hasSubItems(item) && (
                      <div 
                        className={`ml-2 overflow-hidden transition-all duration-300 ease-in-out ${expandedItems.includes(item.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                      >
                        {item.subItems?.map((subItem) => (
                          <div
                            key={subItem.id}
                            onClick={() => handleSubItemClick(item.id, subItem.id)}
                            className={`flex items-center px-4 py-2 cursor-pointer ${selectedItem === item.id && selectedSubItem === subItem.id ? 'bg-[#2C2C2E] text-white' : 'text-gray-300 hover:bg-[#2C2C2E]'} group`}
                          >
                            <span className="mr-3">{subItem.icon}</span>
                            <span className="text-sm">{subItem.label}</span>
                            {subItem.alert && (
                              <span className="ml-auto">
                                <AlertTriangle className="w-4 h-4 text-yellow-500" />
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 border-t border-[#2C2C2E] py-3 px-4">
                <div className="text-sm text-gray-400">Get Set Up</div>
              </div>
            </div>

            {/* Settings content - with card style */}
            <div className="flex-1 overflow-y-auto p-6 bg-[#121214]">
              <div className="bg-[#1C1C1E] rounded-xl shadow-lg p-6 mb-6">
                <h2 className="text-xl font-semibold text-white mb-4">
                  {selectedSubItem ? 
                    sidebarItems.find(item => item.id === selectedItem)?.subItems?.find(subItem => subItem.id === selectedSubItem)?.label : 
                    sidebarItems.find(item => item.id === selectedItem)?.label}
                </h2>
              </div>
              
              {/* Home shows all sections - each in a card */}
              {selectedItem === 'home' && (
                <div className="space-y-6">
                  <div className="bg-[#1C1C1E] rounded-xl shadow-lg p-6">
                    <WorkspaceSection />
                  </div>
                  <div className="bg-[#1C1C1E] rounded-xl shadow-lg p-6">
                    <SubscriptionSection />
                  </div>
                  <div className="bg-[#1C1C1E] rounded-xl shadow-lg p-6">
                    <ChannelsSection />
                  </div>
                  <div className="bg-[#1C1C1E] rounded-xl shadow-lg p-6">
                    <InboxSection />
                  </div>
                  <div className="bg-[#1C1C1E] rounded-xl shadow-lg p-6">
                    <AIAutomationSection />
                  </div>
                  <div className="bg-[#1C1C1E] rounded-xl shadow-lg p-6">
                    <IntegrationsSection />
                  </div>
                  <div className="bg-[#1C1C1E] rounded-xl shadow-lg p-6">
                    <DataSection />
                  </div>
                  <div className="bg-[#1C1C1E] rounded-xl shadow-lg p-6">
                    <HelpCenterSection />
                  </div>
                  <div className="bg-[#1C1C1E] rounded-xl shadow-lg p-6">
                    <OutboundSection />
                  </div>
                  <div className="bg-[#1C1C1E] rounded-xl shadow-lg p-6">
                    <PersonalSection />
                  </div>
                </div>
              )}
              
              {/* Individual sections - in card style */}
              {selectedItem === 'workspace' && !selectedSubItem && (
                <div className="bg-[#1C1C1E] rounded-xl shadow-lg p-6">
                  <WorkspaceSection />
                </div>
              )}
              {selectedItem === 'workspace' && selectedSubItem === 'general' && (
                <div className="bg-[#1C1C1E] rounded-xl shadow-lg p-6">
                  <WorkspaceSection />
                </div>
              )}
              {selectedItem === 'subscription' && (
                <div className="bg-[#1C1C1E] rounded-xl shadow-lg p-6">
                  <SubscriptionSection />
                </div>
              )}
              {selectedItem === 'channels' && (
                <div className="bg-[#1C1C1E] rounded-xl shadow-lg p-6">
                  <ChannelsSection />
                </div>
              )}
              {selectedItem === 'inbox' && (
                <div className="bg-[#1C1C1E] rounded-xl shadow-lg p-6">
                  <InboxSection />
                </div>
              )}
              {selectedItem === 'ai' && (
                <div className="bg-[#1C1C1E] rounded-xl shadow-lg p-6">
                  <AIAutomationSection />
                </div>
              )}
              {selectedItem === 'integrations' && (
                <div className="bg-[#1C1C1E] rounded-xl shadow-lg p-6">
                  <IntegrationsSection />
                </div>
              )}
              {selectedItem === 'data' && (
                <div className="bg-[#1C1C1E] rounded-xl shadow-lg p-6">
                  <DataSection />
                </div>
              )}
              {selectedItem === 'help' && (
                <div className="bg-[#1C1C1E] rounded-xl shadow-lg p-6">
                  <HelpCenterSection />
                </div>
              )}
              {selectedItem === 'outbound' && (
                <div className="bg-[#1C1C1E] rounded-xl shadow-lg p-6">
                  <OutboundSection />
                </div>
              )}
              {selectedItem === 'personal' && (
                <div className="bg-[#1C1C1E] rounded-xl shadow-lg p-6">
                  <PersonalSection />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
