import "./App.css";
import "./component/MyStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TheNavbar from "./component/TheNavbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuoteApi from "./pages/QuoteApi";
import TodoMain from "./pages/TodoMain";
import DogApi from "./pages/DogApi";

function App() {
  return (
    <div className="App">
        <Router>
          <TheNavbar />
          <Routes>
            <Route path="/todomain" element={<TodoMain />} />
            <Route path="/quoteApi" element={<QuoteApi />} />
            <Route path="/dogapi" element={<DogApi />} />
            <Route path="/" />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
