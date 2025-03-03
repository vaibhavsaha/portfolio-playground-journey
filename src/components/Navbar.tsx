
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { StarBorder } from '@/components/ui/star-border';
import { Menu, X, Home } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Home', icon: <Home className="w-4 h-4" /> },
  { path: '/about', label: 'About Me' },
  { path: '/projects', label: 'Projects' },
  { path: '/articles', label: 'Articles' },
  { path: '/contact', label: 'Connect' },
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
              <StarBorder 
                className={`px-2 py-1 ${location.pathname === item.path ? "ring-1 ring-white/20" : ""}`}
                color={location.pathname === item.path ? "hsl(var(--primary))" : undefined}
              >
                <div className="flex items-center justify-center gap-1 text-sm py-1 px-2">
                  {item.icon && item.icon} {item.label}
                </div>
              </StarBorder>
            </Link>
          ))}
        </div>
        
        {/* Theme toggle has been removed */}
        <div className="ml-4">
          {/* Intentionally left empty */}
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
              <StarBorder 
                className={`w-full ${location.pathname === item.path ? "ring-1 ring-white/20" : ""}`}
                color={location.pathname === item.path ? "hsl(var(--primary))" : undefined}
              >
                <div className="flex items-center justify-center gap-1 py-1">
                  {item.icon && item.icon} {item.label}
                </div>
              </StarBorder>
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
