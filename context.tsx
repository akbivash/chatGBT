import { createContext, ReactNode, useContext, useState } from "react";

type contextType = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export const context = createContext<contextType>({
  isSidebarOpen: false,
  setIsSidebarOpen: () => {},
});

export const ContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const value: contextType = {
    isSidebarOpen,
    setIsSidebarOpen,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
};

export const useGlobalContext = ():contextType => {
return useContext(context)
}
