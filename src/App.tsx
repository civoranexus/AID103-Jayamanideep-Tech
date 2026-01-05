import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import ScanCrop from './pages/ScanCrop';
import Analysis from './pages/Analysis';
import Dashboard from './pages/Dashboard';
import FarmProfile from './pages/FarmProfile';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 container py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scan" element={<ScanCrop />} />
            <Route path="/analysis/:id" element={<Analysis />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<FarmProfile />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
