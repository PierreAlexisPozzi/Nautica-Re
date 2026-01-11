
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface SafeLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const SafeLink: React.FC<SafeLinkProps> = ({ to, children, className, onClick }) => {
  const navigate = useNavigate();

  const handleNavigation = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    navigate(to);
    if (onClick) onClick();
    window.scrollTo(0, 0);
  };

  return (
    <span
      role="link"
      tabIndex={0}
      className={`${className} cursor-pointer`}
      onClick={handleNavigation}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') handleNavigation(e);
      }}
    >
      {children}
    </span>
  );
};

export default SafeLink;
