import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './context/ThemeContext';
import LoadingScreen from './components/LoadingScreen';
import AnimatedBackground from './components/AnimatedBackground';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';

const AppContent: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          {/* Glowing blobs & linear grid */}
          <AnimatedBackground />

          {/* React Router page setup */}
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          {/* Toast Notification Container */}
          <Toaster 
            position="bottom-right"
            toastOptions={{
              duration: 4000,
              className: 'glass-effect text-text-theme border-border-theme font-sans text-sm rounded-xl',
              style: {
                background: 'var(--card)',
                color: 'var(--text)',
                border: '1px solid var(--border)',
              },
            }}
          />
        </>
      )}
    </>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
};

export default App;
