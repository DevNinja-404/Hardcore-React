import { createContext, ReactNode, useState } from "react";

export interface MyContextState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const MyContext = createContext<MyContextState>({
  count: 0,
  increment: () => {},
  decrement: () => {},
});

const MyContextProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <MyContext.Provider value={{ count, increment, decrement }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
