import Header from '@/components/layout/Header';

const PostsPage = () => {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center p-10">
        <h1 className="text-4xl font-bold">Pagina dei Post</h1>
        <p className="mt-4 text-lg text-gray-600">
          Prossimamente qui verranno visualizzati i post del blog!
        </p>
      </main>
    </div>
  );
};

export default PostsPage;