import "./App.css";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

function App() {
  return (
    // <section id="section">
    //   <h1>My website</h1>
    //   <article>
    //     <h2>Welcome to React</h2>
    //     <p className="text">This is React</p>
    //   </article>
    // </section>

    // The corresponding plain js of above code would look like :
    _jsxs("section", {
      id: "section",
      children: [
        _jsx("h1", {
          children: "My website",
        }),
        _jsxs("article", {
          children: [
            _jsx("h2", {
              children: "Welcome to React",
            }),
            _jsx("p", {
              className: "text",
              children: "This is React",
            }),
          ],
        }),
      ],
    })
  );

  // SO jsx allows us to write HTML like code within javascript in react in easier way.If we had to use plain js then we can see how hard it would have been.
  // React uses Babel as a compiler (or more accurately, a transpiler)
  // Browsers do not understand JSX, so Babel converts JSX into standard JavaScript code.
  // When we create a new React project using tools like create-react-app or Vite, Babel is configured under the hood.
}

//JSX means javascript XML. We are writing jsx within our react components.The above App component is a jsx.Behind the  scences ,the react.js compiler compiles our code into plain javascript

export default App;
