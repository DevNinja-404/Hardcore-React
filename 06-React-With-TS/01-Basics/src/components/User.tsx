// const User = ( { name: string; age: number; isHappy: boolean }) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h1>{props.age}</h1>
//       <h1>{props.isHappy}</h1>
//     </div>
//   );
// };

// To  Provide Annotation when destructing the props:
// const User = ({
//   name,
//   age,
//   isHappy,
// }: {
//   name: string;
//   age: number;
//   isHappy: boolean;
// }) => {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <h1>{age}</h1>
//       <h1>{isHappy}</h1>
//     </div>
//   );
// };

// Or we can make a type for our prop as:
// type UserShape = {
//   name: string;
//   age: number;
//   isHappy: boolean;
// };

// Or we can make an interface for our props:
// interface UserShape {
//   name: string;
//   age: number;
//   isHappy: boolean;
// }

// const User = ({ name, age, isHappy }: UserShape) => {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <h1>{age}</h1>
//       <h1>{isHappy}</h1>
//     </div>
//   );
// };

// Another Way of Providing  the shape for our prop using the functional components.(Older way)
import { FC } from "react";

type UserShape = {
  name: string;
  age: number;
  isHappy: boolean;
};

const User: FC<UserShape> = ({ name, age, isHappy }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{isHappy}</h1>
    </div>
  );
};

export default User;
