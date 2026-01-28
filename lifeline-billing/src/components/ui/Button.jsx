import { Link } from 'react-router-dom';

export default function Button({ 
  children, 
  variant = 'primary', 
  href, 
  to,
  className = "",
  ...props 
}) {
  const baseStyles = "px-8 py-4 rounded-lg font-medium transition-all duration-200 ease-out inline-block text-center";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark hover:shadow-lg hover:scale-[1.02]",
    secondary: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary",
    outline: "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white",
    white: "bg-white text-primary hover:shadow-xl hover:scale-[1.02]",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClassName} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClassName} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
