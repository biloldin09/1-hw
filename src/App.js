import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Detail from "./pages/Detail";
import './header.css'
function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <header>
          <Link className="bold" to={'/'}>Logo</Link>
          <Link to={'/page1'}>page1</Link>
          <Link to={'/page2'}>page2</Link>
        </header>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/user/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


