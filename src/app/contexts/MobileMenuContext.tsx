'use client';

import { createContext, useContext, useState } from 'react';

interface MobileMenuContextValue {
  isOpen: boolean;
  handleToggleMobMenu: () => void;
}

interface MobileMenuContextProps {
  children: React.ReactNode;
}

const MobileMenuContext = createContext<MobileMenuContextValue | undefined>(
  undefined
);

export const useMobileMenu = () => {
  const context = useContext(MobileMenuContext);
  if (!context) {
    throw new Error(
      'useMobileMenu must be used within a MobileMenuContextProvider'
    );
  }
  return context;
};

const MobileMenuContextProvider: React.FC<MobileMenuContextProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMobMenu = () => {
    setIsOpen((open) => !open);
    document.body.classList.toggle('overflow-hidden');
  };

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
