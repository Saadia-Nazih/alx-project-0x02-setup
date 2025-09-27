import Header from '@/components/layout/Header';
import Button from '@/components/common/Button'; // <-- 1. IMPORTIAMO IL NUOVO BOTTONE

const AboutPage = () => {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold mb-6">Questa è la Pagina About</h1>
        <p className="text-lg mb-10">
          Qui testiamo il nostro nuovo componente Button versatile!
        </p>

        {/* 2. USIAMO I PULSANTI PASSANDO PROPS DIVERSE */}
        <div className="flex items-center justify-center gap-6">
          <Button
            size="small"
            shape="rounded-full"
            onClick={() => alert('Pulsante piccolo cliccato!')}
          >
            Scopri di più
          </Button>

          <Button
            size="medium" // Potremmo ometterlo, userebbe il default
            shape="rounded-md"
            onClick={() => alert('Pulsante medio cliccato!')}
          >
            Aggiungi al Carrello
          </Button>

          <Button
            size="large"
            shape="rounded-sm"
            onClick={() => alert('Pulsante grande cliccato!')}
          >
            Contattaci
          </Button>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;