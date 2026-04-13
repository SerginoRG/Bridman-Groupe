import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

// image background
import imag1 from "../assets/image-one.jpg"
import imag2 from "../assets/image-two.jpg"
import imag3 from "../assets/image-three.jpg"
import imag4 from "../assets/image-four.jpg"

function Home() {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [imag1, imag2, imag3, imag4]

  // Changement automatique des images toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length])

  // Fonction pour changer d'image manuellement
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-12 overflow-hidden">
      {/* Carrousel d'images en arrière-plan */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0  ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${img})` }}
            />
            {/* Overlay sombre pour améliorer la lisibilité du texte */}
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </div>

      {/* Bouton Précédent < */}
      <button
        onClick={prevImage}
        className="absolute left-4 md:left-8 z-20 bg-black/50 hover:bg-black/70 text-white w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110 shadow-lg"
        aria-label="Image précédente"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Bouton Suivant > */}
      <button
        onClick={nextImage}
        className="absolute right-4 md:right-8 z-20 bg-black/50 hover:bg-black/70 text-white w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110 shadow-lg"
        aria-label="Image suivante"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicateurs du carrousel */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentImage 
                ? "w-10 h-2 bg-white" 
                : "w-2 h-2 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Badge ou petite icône */}
        <div className="mb-6">
          <span className="inline-block mt-11 px-4 py-1 bg-blue-500/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold border border-white/30">
            ✨ Créativité & Innovation
          </span>
        </div>

        {/*  Rouge avec dégradé */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Bienvenue sur le site{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                Bridman{" "}
            </span>
            <span className="text-red-500 drop-shadow-lg">
                Groupe
            </span>
            </h1>

        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
          Découvrez nos services de design professionnel pour booster votre image
          de marque et attirer plus de clients.
        </p>

        <Link 
          to="/about"
          className="group inline-flex items-center gap-2 mt-5 px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <span>En savoir plus sur nos services</span>
          <svg 
            className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>

        {/* Cartes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-3xl mb-2">🎨</div>
            <h3 className="font-semibold text-white">Design Moderne</h3>
            <p className="text-white/80 text-sm mt-1">Créations uniques et tendance</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-3xl mb-2">🚀</div>
            <h3 className="font-semibold text-white">Résultats Rapides</h3>
            <p className="text-white/80 text-sm mt-1">Livraison dans les délais</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-3xl mb-2">💼</div>
            <h3 className="font-semibold text-white">Support Pro</h3>
            <p className="text-white/80 text-sm mt-1">Accompagnement personnalisé</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home