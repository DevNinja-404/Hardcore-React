import { ReactNode } from "react";

// const Fruit = ({ children }: { children: ReactNode }) => {
//   return <div>{children}</div>;
// };

interface FruitShape {
  children: ReactNode;
}

const Fruit = ({ children }: FruitShape) => {
  return <div>{children}</div>;
};





export default Fruit;
