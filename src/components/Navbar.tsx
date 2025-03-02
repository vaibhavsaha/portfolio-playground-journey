
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { GradientButton } from '@/components/ui/gradient-button';
import { Menu, X, Home } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Home', icon: <Home className="w-4 h-4" /> },
  { path: '/about', label: 'About Me' },
  { path: '/projects', label: 'Projects' },
  { path: '/articles', label: 'Articles' },
  { path: '/contact', label: 'Contact Me' },
];

const Navbar = () => {
  const location = useLocation();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);
  
  if (!mounted) return null;
  
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-40 flex justify-center py-6 px-6"
    >
      <div className="glass-morphism rounded-full py-4 px-8 flex items-center justify-between w-full max-w-4xl">
        {/* Mobile menu button */}
        <div className="block md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-foreground/10 dark:bg-foreground/5 text-foreground"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
            >
              <GradientButton 
                variant={location.pathname === item.path ? "variant" : "default"} 
                className="text-sm py-2 px-4 flex items-center gap-2"
              >
                {item.icon && item.icon}
                {item.label}
              </GradientButton>
            </Link>
          ))}
        </div>
        
        {/* Theme toggle */}
        <div className="ml-4">
          <ThemeToggle />
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="fixed top-24 left-0 right-0 mx-auto w-[90%] max-w-md glass-morphism rounded-xl p-4 flex flex-col gap-3 z-50"
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="w-full"
            >
              <GradientButton 
                variant={location.pathname === item.path ? "variant" : "default"} 
                className="text-sm py-3 w-full flex items-center justify-center gap-2"
              >
                {item.icon && item.icon}
                {item.label}
              </GradientButton>
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
