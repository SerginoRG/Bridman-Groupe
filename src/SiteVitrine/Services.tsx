import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import AffichOne from "../assets/Service/affiche-one.jpeg"
import AiOne from "../assets/Service/amelioration-IA-one.png"
import LogoOne from "../assets/Service/logo-one.png"
import SiteOne from "../assets/Service/site-web-one.png"
import VideoOne from "../assets/Service/video-one.mp4"
import Manger from "../assets/Service/asa-two.jpeg"

interface Service {
  id: number
  title: string
  description: string
  icon: string
  image: string
  color: string
  bgColor: string
  isVideo?: boolean
}

// Composant d'animation texte mot par mot
const AnimatedText = ({ text, className, delay = 0 }: { text: string; className: string; delay?: number }) => {
  const words = text.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay },
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
    <motion.p
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word: string, index: number) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: "inline-block", marginRight: "0.25em" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  )
}

// Composant de carte avec animation au scroll
const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: index * 0.1 },
        },
      }}
      className="group relative bg-white/10 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-white/20"
    >
      {/* Image de fond */}
      <div className="absolute inset-0 z-0">
        {service.isVideo ? (
          <video
            src={service.image}
            className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-300"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-300"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
      </div>

      {/* Dégradé coloré en haut de la carte */}
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} z-10`}></div>

      {/* Contenu de la carte */}
      <div className="relative z-10 p-6">
        {/* Icône avec animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring" }}
          className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
        >
          <span className="text-3xl">{service.icon}</span>
        </motion.div>

        {/* Titre avec animation mot par mot */}
        <AnimatedText
          text={service.title}
          className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300"
          delay={index * 0.1 + 0.3}
        />

        {/* Description avec animation d'apparition */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
          className="text-gray-300 leading-relaxed"
        >
          {service.description}
        </motion.p>
      </div>
    </motion.div>
  )
}

function Services() {
  const services = [
    {
      id: 1,
      title: "Création d'affiches",
      description: "Nous concevons des affiches modernes et attractives adaptées à vos besoins.",
      icon: "🎨",
      image: AffichOne,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10"
    },
    {
      id: 2,
      title: "Montage vidéo",
      description: "Nous réalisons des montages vidéo professionnels pour vos projets personnels ou commerciaux.",
      icon: "🎬",
      image: VideoOne,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
      isVideo: true
    },
    {
      id: 3,
      title: "Publicité professionnelle & Community management",
      description: "Nous gérons votre communication et développons votre visibilité sur les réseaux sociaux.",
      icon: "📱",
      image: Manger,
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-500/10"
    },
    {
      id: 4,
      title: "Amélioration de photos (IA professionnelle)",
      description: "Nous améliorons la qualité de vos images grâce à des outils d'intelligence artificielle avancés.",
      icon: "🤖",
      image: AiOne,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/10"
    },
    {
      id: 5,
      title: "Conception de logo",
      description: "Nous créons des logos uniques et adaptés à votre identité de marque.",
      icon: "⭐",
      image: LogoOne,
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-500/10"
    },
    {
      id: 6,
      title: "Création de sites web",
      description: "Nous développons des sites web modernes, rapides et responsives.",
      icon: "💻",
      image: SiteOne,
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-500/10"
    }
  ]

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, type: "tween" as const },
    },
  }

  return (
    <div className="min-h-screen from-gray-900 via-gray-800 to-gray-900 py-16 mt-11 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* En-tête avec animations */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nos{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
              Services
            </span>
          </h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-blue-300 mx-auto rounded-full mb-6"
          ></motion.div>

          {/* Paragraphe avec animation mot par mot */}
          <AnimatedText
            text="Voici nos services qui vous garantissent des résultats professionnels"
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
            delay={0.5}
          />
        </motion.div>

        {/* Grille de cartes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services