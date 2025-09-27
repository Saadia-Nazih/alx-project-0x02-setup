import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { type PostProps } from '@/interfaces';

// Questa è un'interfaccia specifica per i dati che riceviamo dall'API
// L'API usa "body" e "id", quindi creiamo un tipo che corrisponda
interface ApiPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostsPage = () => {
  // Stato per conservare la lista dei post
  const [posts, setPosts] = useState<ApiPost[]>([]);
  // Stato per sapere se stiamo ancora caricando i dati
  const [isLoading, setIsLoading] = useState(true);

  // useEffect si attiva una sola volta, appena il componente viene caricato
  useEffect(() => {
    // Funzione asincrona per recuperare i dati
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
        const data = await response.json();
        setPosts(data); // Salviamo i dati nello stato
      } catch (error) {
        console.error("Errore nel recupero dei post:", error);
      } finally {
        setIsLoading(false); // In ogni caso, smettiamo di caricare
      }
    };

    fetchPosts(); // Chiamiamo la funzione
  }, []); // L'array vuoto [] significa "esegui solo una volta"

  return (
    <div>
      <Header />
      <main className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Ultimi Post dal Web</h1>

        {/* Mostriamo un messaggio di caricamento o i post */}
        {isLoading ? (
          <p className="text-center text-gray-500">Caricamento dei post in corso...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                userId={post.userId}
                title={post.title}
                content={post.body} // Passiamo "body" come "content"
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default PostsPage;