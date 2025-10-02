import NavBar from './components/Navbar';
import Shop from './components/Shop';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={
            <Shop />
          }></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
