import { createPortal } from "react-dom";

const PopUpContent = ({ copied }) => {
  // So This component is being rendered inside App and App is being rendered inside the root.Sometimes we need to render our components at the level same or higher than our parentNode.In that case, we can use createPortal whose first parameter is the element that u want to render and the second is where u want to render that component.

  return createPortal(
    <section>
      {copied && (
        <div style={{ position: "absolute", bottom: "3rem" }}>
          Copied to Clipboard
        </div>
      )}
    </section>,
    document.querySelector("#popup-content")
  );
};

export default PopUpContent;
