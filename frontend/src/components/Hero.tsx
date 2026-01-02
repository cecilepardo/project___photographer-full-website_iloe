
const Hero: React.FC = () => {
  return (
    // La balise <section> définit la zone principale du Hero
    <section className="hero-container">
      
      {/* 1. Le conteneur de l'image */}
      <div className="hero-visual">
        {/* Nous ajouterons l'image ici au prochain tour */}
      </div>

      {/* 2. Le contenu textuel (Titre, Sous-titre) */}
      <div className="hero-content">
        {/* C'est ici que ton identité visuelle s'exprime */}
      </div>

    </section>
  );
};

export default Hero;