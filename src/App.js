import NavBar from './components/Navbar';
import Shop from './components/Shop';
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={
            <Shop />
          }></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
