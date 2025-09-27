import { useState, type FormEvent } from 'react';

// Aggiungiamo una nuova prop: la funzione "postino" onAddPost
interface PostModalProps {
  onClose: () => void;
  onAddPost: (post: { title: string; content: string }) => void;
}

const PostModal = ({ onClose, onAddPost }: PostModalProps) => {
  // Stato interno alla modale per gestire gli input
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault(); // Impedisce alla pagina di ricaricarsi
    onAddPost({ title, content }); // Invia i dati alla pagina Home
    onClose(); // Chiude la modale dopo aver salvato
  };

  return (
    <div className="fixed inset-0 z-10 bg-black bg-opacity-60 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Crea un Nuovo Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
              Titolo
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">
              Contenuto
            </label>
            <textarea
              id="content"
              rows={4}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex items-center justify-end gap-4">
            <button type="button" onClick={onClose} className="font-bold text-gray-600 hover:text-gray-800">
              Annulla
            </button>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
              Salva Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;