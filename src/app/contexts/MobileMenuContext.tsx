'use client';

import { createContext, useContext, useState } from 'react';

// Define the type for the context value
interface MobileMenuContextValue {
  isOpen: boolean;
  handleToggleMobMenu: () => void;
}

interface MobileMenuContextProps {
  children: React.ReactNode;
}

// Create the context
const MobileMenuContext = createContext<MobileMenuContextValue | undefined>(
  undefined
);

// Custom hook for using the context
export const useMobileMenu = () => {
  const context = useContext(MobileMenuContext);
  if (!context) {
    throw new Error(
      'useMobileMenu must be used within a MobileMenuContextProvider'
    );
  }
  return context;
};

// Provider component
const MobileMenuContextProvider: React.FC<MobileMenuContextProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMobMenu = () => {
    setIsOpen((open) => !open);
    document.body.classList.toggle('overflow-hidden');
  };

  // Value to be provided by the context
  const value: MobileMenuContextValue = {
    isOpen,
    handleToggleMobMenu,
  };

  return (
    <MobileMenuContext.Provider value={value}>
      {children}
    </MobileMenuContext.Provider>
  );
};

export default MobileMenuContextProvider;
