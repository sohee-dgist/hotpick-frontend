import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Search from './pages/Search';
import HotDeals from './pages/HotDeals';
import AuthenticatedPage from './pages/AuthenticatedPage';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/search" element={<Search />} />
            <Route path="/login/authenticated" element={<AuthenticatedPage />} />
            <Route path="/deal" element={<HotDeals />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
