import "./App.css";
import Accordion from "./components/Accordion";

function App() {
  const data = [
    {
      question: "What is HTML?",
      answer:
        "HTML (HyperText Markup Language) is the standard language used to create and structure web pages. It defines the content and layout of a webpage using a system of elements enclosed in tags (e.g., <div>, <p>, <h1>).",
    },
    {
      question: "What is React?",
      answer:
        "React is an open-source JavaScript library developed by Facebook (now Meta) for building fast, interactive, and reusable user interfaces (UIs). It is primarily used for single-page applications (SPAs) and allows developers to create components that update efficiently when data changes",
    },
    {
      question: "What is Node.js?",
      answer:
        "Node.js is an open-source, cross-platform runtime environment that allows JavaScript to run outside of a web browser, primarily for server-side development. It is built on Chrome's V8 JavaScript engine and provides a non-blocking, event-driven architecture, making it highly efficient for building scalable applications.",
    },
    {
      question: "What is GoLang?",
      answer:
        "Golang (Go) is an open-source, statically typed, compiled programming language designed by Google. It is known for its simplicity, speed, and concurrency support, making it an excellent choice for building high-performance applications.",
    },
  ];

  return (
    <div className="bg-slate-700 flex justify-center items-center w-[100vw] min-h-[100vh]">
      <div className="flex flex-col gap-y-6 bg-slate-950 p-10 rounded-3xl">
        {data.map((eachData) => (
          <Accordion key={Math.random()} data={eachData} />
        ))}
      </div>
    </div>
  );
}

export default App;
