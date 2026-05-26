import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
