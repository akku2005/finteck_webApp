import { useState, useEffect } from 'react';

const useMenuState = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Your client-side logic using useState can go here
  }, [isMenuOpen]);

  return { isMenuOpen, toggleMenu };
};

export default useMenuState;
