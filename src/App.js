import './App.css';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Todo from './components/features/Todo/Todo';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/todo' element={<Todo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
