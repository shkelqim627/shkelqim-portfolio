import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <BrowserRouter>
        <Navbar />
        
        <main>
          <Routes>
            <Route 
              path="/" 
              element={
                <Suspense fallback={
                  <div className="flex items-center justify-center min-h-screen">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
                  </div>
                }>
                  <Home />
                </Suspense>
              } 
            />
            <Route 
              path="/projects" 
              element={
                <Suspense fallback={
                  <div className="flex items-center justify-center min-h-screen">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
                  </div>
                }>
                  <ProjectsPage />
                </Suspense>
              } 
            />
            <Route 
              path="/projects/:id" 
              element={
                <Suspense fallback={
                  <div className="flex items-center justify-center min-h-screen">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
                  </div>
                }>
                  <ProjectDetail />
                </Suspense>
              } 
            />
          </Routes>
        </main>
        
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;