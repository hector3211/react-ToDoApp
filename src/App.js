import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Nav from "./Components/Nav";
import Form from "./Components/Form";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Form />
        <Routes>
          <Route path="/about" element={About} />
          <Route path="/" element={Home} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
