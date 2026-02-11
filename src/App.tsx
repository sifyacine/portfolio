import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { Timeline } from './sections/Timeline';
import { Footer } from './sections/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';
import { AppProvider } from './context/AppContext';

function AppContent() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 font-sans text-gray-900 dark:text-gray-100 transition-colors duration-300 selection:bg-blue-100 dark:selection:bg-blue-900 selection:text-blue-900 dark:selection:text-blue-100">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Skills />
        <Timeline />
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;