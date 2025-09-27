import { useState } from 'react';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import { type CardProps } from '@/interfaces';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<CardProps[]>([
    { title: "Card #1: React", content: "Questa card mostra informazioni su React." },
    { title: "Card #2: Next.js", content: "Lo stesso componente Card, ma con props diverse." },
  ]);

  // Questa è la funzione che la modale userà per inviarci i dati
  const handleAddPost = (newPost: CardProps) => {
    // Aggiorniamo lo stato dei post aggiungendo quello nuovo in cima
    setPosts([newPost, ...posts]);
    setIsModalOpen(false); // Chiudiamo la modale
  };

  return (
    <div>
      <Header />
      <main className="container mx-auto p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Post Recenti</h1>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Crea Nuovo Post
          </button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          {posts.map((post, index) => (
            <Card 
              key={index}
              title={post.title} 
              content={post.content} 
            />
          ))}
        </div>
      </main>

      {isModalOpen && (
        <PostModal 
          onClose={() => setIsModalOpen(false)} 
          onAddPost={handleAddPost} // <-- Passiamo la nostra funzione "postino" alla modale
        />
      )}
    </div>
  );
};

export default HomePage;