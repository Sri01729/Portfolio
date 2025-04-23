'use client';

import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    // console.log('clicked');
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <button onClick={handleClick}>
        {isOpen ? 'Close' : 'Open'}
      </button>
    </nav>
  );
};

export default Navbar;