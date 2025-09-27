import { type ButtonProps } from '@/interfaces';

const Button = ({ 
  children, 
  size = 'medium', 
  shape = 'rounded-md', 
  onClick 
}: ButtonProps) => {

  // Stili di base che tutti i pulsanti avranno
  const baseStyles = 'font-bold text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

  // "Traduttore" per le dimensioni: associa la prop alla classe Tailwind
  const sizeStyles = {
    small: 'py-1 px-3 text-sm',
    medium: 'py-2 px-4 text-base',
    large: 'py-3 px-6 text-lg',
  };
  
  // Combiniamo dinamicamente tutte le classi
  const className = `
    ${baseStyles}
    ${sizeStyles[size]}
    ${shape}
    bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500
  `;

  return (
    <button className={className.trim()} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;