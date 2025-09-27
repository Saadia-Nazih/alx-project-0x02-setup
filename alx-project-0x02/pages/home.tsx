import Header from '../components/layout/Header';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main className="flex justify-center p-10">
        <h1 className="text-4xl font-bold">Benvenuto nella Home Page!</h1>
      </main>
    </div>
  );
};

export default HomePage;