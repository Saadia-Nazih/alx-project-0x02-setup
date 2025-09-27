import Header from '@/components/layout/Header';
import Card from '@/components/common/Card'; // <-- 1. IMPORTIAMO LA NOSTRA CARD!

const HomePage = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-8">
        <h1 className="mb-8 text-center text-4xl font-bold">
          Scopri i Componenti Riutilizzabili
        </h1>

        {/* 2. USIAMO LE CARD, OGNUNA CON LE SUE "PROPS" */}
        <div className="flex flex-wrap justify-center gap-8">
          <Card 
            title="Card #1: React" 
            content="Questa card mostra informazioni su React. Le props ci permettono di riutilizzare lo stile e la struttura." 
          />
          <Card 
            title="Card #2: Next.js" 
            content="Lo stesso componente Card, ma con props diverse per parlare di Next.js. Massima efficienza!" 
          />
          <Card 
            title="Card #3: TypeScript" 
            content="Grazie all'interfaccia che abbiamo creato, TypeScript si assicura che passiamo sempre un title e un content." 
          />
        </div>
      </main>
    </div>
  );
};

export default HomePage;