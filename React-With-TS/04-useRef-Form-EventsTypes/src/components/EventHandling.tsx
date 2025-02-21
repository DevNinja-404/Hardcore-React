import { MouseEvent } from "react";

const EventHandling = () => {
  const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    console.log("Mouse Entered in div", e.currentTarget);
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("Button is Clicked.", e.currentTarget);
  };

  return (
    <div onMouseEnter={handleMouseEnter}>
      <h2>Event Handling Example : </h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default EventHandling;
