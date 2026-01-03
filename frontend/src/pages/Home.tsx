import Hero from '../components/Hero/Hero';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      {/* Ta section Grille viendra juste ici plus tard */}
      <section style={{ height: '100vh', backgroundColor: '#000' }}>
        {/* Espace temporaire pour tester le scroll et le fondu du Hero */}
      </section>
    </main>
  );
};

export default Home;