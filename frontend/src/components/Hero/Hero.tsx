
import "./Hero.css"
import heroImg from '../../assets/hero.webp';

const Hero = () => {
  return (
    <section 
      className="hero" 
      style={{ 
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, #000000 100%), url(${heroImg})` 
  }}
    >
      <div className="hero-content">
         <h1>Iloé Photographe</h1>
         <h2>Urbex, portrait, sport, architecture</h2>
      </div>
    </section>
  );
};

export default Hero;

// function Hero({
//   // title = "",
//   subtitle = "L'entraînement où vous voulez, quand vous voulez, comme vous voulez !",
// }: HeroProps) {
//   const images = [
//     { name: "étirement", src: etirement },
//     { name: "runner", src: runner },
//     { name: "yoga", src: yoga },
//     { name: "abdos", src: abdos },
//   ];

//   const duplicateImages = [...images, ...images];

//   return (
//     <section className="hero">
//       <div className="hero-slider">
//         {duplicateImages.map((img, i) => (
//           <img
//             key={`slide-${img.name}-${i}`}
//             src={img.src}
//             alt={img.name}
//             className="hero-image"
//           />
//         ))}
//       </div>
//       <div className="hero-overlay" />

//       <div className="hero-content">
//         <h1 className="hero-h1">{subtitle}</h1>
//         {/* <h2 className="hero-h2">{subtitle}</h2> */}
//         <div className="hero-buttons">
//           <Link to="/Pages/Entrainements">
//             <button type="button" className="hero-btn">
//               Découvrir les exercices
//             </button>
//           </Link>
//           <Link to="/Pages/Tarifs">
//             <button type="button" className="hero-btn">
//               Voir nos offres
//             </button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

