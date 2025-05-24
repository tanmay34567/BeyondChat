import React from 'react';
import { Bell, HelpCircle, Search } from 'lucide-react';
import { IntercomLogo } from '../icons/IntercomLogo';

const Header: React.FC = () => {
  return (
    <div className="h-14 bg-intercom-dark text-white flex items-center px-4 border-b border-intercom-border">
      <div className="flex items-center">
        <IntercomLogo className="w-8 h-8 mr-4" />
        
      </div>
      
      
    </div>
  );
};

export default Header;