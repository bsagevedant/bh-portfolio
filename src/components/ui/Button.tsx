import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  onClick
}) => {
  const baseClasses = "inline-flex items-center gap-2 font-medium rounded-full transition-all duration-300 text-base";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1",
    secondary: "bg-transparent border border-white/20 text-gray-100 hover:bg-white/10"
  };
  
  const sizeClasses = "px-6 py-2.5";
  const widthClass = fullWidth ? "w-full justify-center" : "";
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses} ${widthClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;