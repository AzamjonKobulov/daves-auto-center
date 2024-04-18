'use client';

import {
  createContext,
  useContext,
  useState,
  useRef,
  FC,
  ChangeEvent,
} from 'react';

interface AccountContextValue {
  image: string | null;
  inputRef: React.RefObject<HTMLInputElement>;
  handleUploadImageClick: () => void;
  handleUploadImage: (e: ChangeEvent<HTMLInputElement>) => void;
  isNavMobileOpen: boolean;
  handleToggleNavMobile: () => void;
}

interface AccountContextProps {
  children: React.ReactNode;
}

const AccountContext = createContext<AccountContextValue | undefined>(
  undefined
);

export const useAccount = (): AccountContextValue => {
  const context = useContext(AccountContext);
  if (!context) {
    throw new Error('useAccount must be used within an AccountContextProvider');
  }
  return context;
};

const AccountContextProvider: FC<AccountContextProps> = ({ children }) => {
  const [image, setImage] = useState<string | null>('');
  const [isNavMobileOpen, setIsNavMobileOpen] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleUploadImageClick = () => {
    inputRef.current?.click();
  };

  const handleUploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleToggleNavMobile = () => {
    setIsNavMobileOpen((open) => !open);
    document.body.classList.toggle('overflow-hidden');
  };

  const value: AccountContextValue = {
    image,
    inputRef,
    handleUploadImageClick,
    handleUploadImage,
    isNavMobileOpen,
    handleToggleNavMobile,
  };

  return (
    <AccountContext.Provider value={value}>{children}</AccountContext.Provider>
  );
};

export default AccountContextProvider;
