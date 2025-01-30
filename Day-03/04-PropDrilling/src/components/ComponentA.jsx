import ComponentB from "./ComponentB";

const ComponentA = ({ name }) => {
  return (
    <div>
      ComponentA
      <ComponentB name={name} />
    </div>
  );
};

export default ComponentA;
