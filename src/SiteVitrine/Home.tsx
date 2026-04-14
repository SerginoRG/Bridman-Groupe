import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

// image background
import imag1 from "../assets/image-one.jpg"
import imag2 from "../assets/image-two.jpg"
import imag3 from "../assets/image-three.jpg"
import imag4 from "../assets/image-four.jpg"

// Composant d'animation texte lettre par lettre
const AnimatedText = ({ text, className }: { text: string; className: string }) => {
  const characters = text.split("")

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.2 },
    },
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, damping: 12, stiffness: 100 },
    },
    hidden: { opacity: 0, y: 20 },
  }

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {characters.map((char: string, index: number) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  )
}

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

  // Animation d'apparition pour le titre
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, type: "tween" as const },
    },
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-12 overflow-hidden">
      {/* Carrousel d'images en arrière-plan */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
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
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-block mt-11 px-4 py-1 bg-blue-500/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold border border-white/30">
            ✨ Créativité & Innovation
          </span>
        </motion.div>

        {/* Titre avec animation */}
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
        >
          Bienvenue sur le site{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
            Bridman{" "}
          </span>
          <span className="text-red-500 drop-shadow-lg">
            Groupe
          </span>
        </motion.h1>

        {/* PARAGRAPHE AVEC ANIMATION LETTRE PAR LETTRE */}
        <AnimatedText
          text="Découvrez nos services de design professionnel pour booster votre image de marque et attirer plus de clients."
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed"
        />

        {/* Bouton avec animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
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
        </motion.div>

        {/* Cartes avec animation en cascade */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 1,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto"
        >
          {[
            { emoji: "🎨", title: "Design Moderne", desc: "Créations uniques et tendance" },
            { emoji: "🚀", title: "Résultats Rapides", desc: "Livraison dans les délais" },
            { emoji: "💼", title: "Support Pro", desc: "Accompagnement personnalisé" },
          ].map((card, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-3xl mb-2">{card.emoji}</div>
              <h3 className="font-semibold text-white">{card.title}</h3>
              <p className="text-white/80 text-sm mt-1">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Home