
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { GradientButton } from '@/components/ui/gradient-button';

const navItems = [
  { path: '/about', label: 'About Me' },
  { path: '/projects', label: 'Projects' },
  { path: '/articles', label: 'Articles' },
  { path: '/contact', label: 'Contact Me' },
];

const Navbar = () => {
  const location = useLocation();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-40 flex justify-center py-6 px-6"
    >
      <div className="glass-morphism rounded-full py-4 px-8 flex items-center justify-between w-full max-w-4xl">
        <div className="flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
            >
              <GradientButton variant={location.pathname === item.path ? "variant" : "default"} className="text-sm py-2 px-4">
                {item.label}
              </GradientButton>
            </Link>
          ))}
        </div>
        <div className="ml-4">
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
