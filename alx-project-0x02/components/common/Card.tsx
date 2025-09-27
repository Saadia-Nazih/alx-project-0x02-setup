import { type CardProps } from '@/interfaces'; // Importiamo il nostro "contratto"

// Qui diciamo al componente che deve accettare "props"
// che rispettano le regole della nostra interfaccia CardProps.
// Usiamo { title, content } per estrarre subito i valori che ci servono.
const Card = ({ title, content }: CardProps) => {
  return (
    <div className="max-w-sm rounded-xl border border-gray-200 bg-white p-6 shadow-md">
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        {title}
      </h2>
      <p className="font-normal text-gray-700">
        {content}
      </p>
    </div>
  );
};

export default Card;