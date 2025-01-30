import ComponentC from "./ComponentC";

const ComponentB = ({ name }) => {
  return (
    <div>
      ComponentB
      <ComponentC name={name} />
    </div>
  );
};

export default ComponentB;
