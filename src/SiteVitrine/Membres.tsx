import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import Fondateur from "../assets/Membres/brido.jpeg"
import Dev from "../assets/Membres/developppeur.png"
import Naf from "../assets/Membres/naf.jpeg"

interface Member {
  name: string
  role: string
  description: string
  image: string
  icon: string
  borderColor: string
  roleColor: string
  blurColor: string
  iconBg: string
  tagBg?: string
  tagColor?: string
  tags?: string[] | null
}

// Composant d'animation texte lettre par lettre
const AnimatedText = ({ text, className, delay = 0 }: { text: string; className: string; delay?: number }) => {
  const characters = text.split("")

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay },
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

// Composant pour les cartes membres avec animation au scroll
const MemberCard = ({ member, index, isFounder: _isFounder = false }: { member: Member; index: number; isFounder?: boolean }) => {
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
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.6, delay: index * 0.2, type: "spring" },
        },
      }}
      className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 text-center border border-white/20 transform hover:scale-105 transition-transform duration-300"
    >
      {/* Image avec animation */}
      <div className="relative inline-block">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.2, type: "spring" }}
          className={`absolute inset-0 rounded-full ${member.blurColor} blur-2xl opacity-50`}
        ></motion.div>
        
        <motion.img 
          src={member.image} 
          alt={member.name} 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
          className={`relative w-64 h-64 md:w-72 md:h-72 rounded-full object-cover border-4 ${member.borderColor} mx-auto mb-6 shadow-2xl`}
        />
        
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.2 + 0.5, type: "spring" }}
          className={`absolute bottom-4 right-4 ${member.iconBg} rounded-full p-3 border-2 border-white`}
        >
          <span className="text-white text-xl">{member.icon}</span>
        </motion.div>
      </div>
      
      {/* Titre avec animation lettre par lettre */}
      <AnimatedText
        text={member.name}
        className="text-3xl font-bold text-white mb-2"
        delay={index * 0.2 + 0.6}
      />
      
      {/* Poste avec animation */}
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.4, delay: index * 0.2 + 0.8 }}
        className={`${member.roleColor} font-semibold text-lg mb-3`}
      >
        {member.role}
      </motion.p>
      
      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.2 + 1 }}
        className="text-gray-300 text-base"
      >
        {member.description}
      </motion.p>
      
      {/* Tags avec animation en cascade */}
      {member.tags && (
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: index * 0.2 + 1.2 },
            },
          }}
          className="mt-6 flex justify-center gap-3 flex-wrap"
        >
          {member.tags.map((tag: string, tagIndex: number) => (
            <motion.span
              key={tagIndex}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
              }}
              className={`px-3 py-1 ${member.tagBg} rounded-full text-xs ${member.tagColor}`}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      )}
    </motion.div>
  )
}

function Membres() {
  // Configuration des membres
  const founder = {
    name: "Brido",
    role: "Fondateur",
    description: "Visionnaire et créateur de Bridman Groupe",
    image: Fondateur,
    icon: "👑",
    borderColor: "border-blue-500",
    roleColor: "text-blue-400",
    blurColor: "bg-blue-500",
    iconBg: "bg-blue-600",
    tags: null
  }

  const members = [
    {
      name: "Sergino",
      role: "Développeur Full Stack",
      description: "Expert en développement web et applications",
      image: Dev,
      icon: "💻",
      borderColor: "border-purple-500",
      roleColor: "text-purple-400",
      blurColor: "bg-purple-500",
      iconBg: "bg-purple-600",
      tagBg: "bg-purple-500/20",
      tagColor: "text-purple-300",
      tags: ["JavaScript", "Python", "Java"]
    },
    {
      name: "Nafissa",
      role: "Communicatrice",
      description: "Spécialiste en communication et community management",
      image: Naf,
      icon: "📢",
      borderColor: "border-pink-500",
      roleColor: "text-pink-400",
      blurColor: "bg-pink-500",
      iconBg: "bg-pink-600",
      tagBg: "bg-pink-500/20",
      tagColor: "text-pink-300",
      tags: ["Social Media", "Marketing", "Branding"]
    }
  ]

  // Animations pour l'en-tête
  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, type: "tween" as const },
    },
  }

  return (
    <div className="min-h-screen from-gray-900 to-gray-800 mt-11 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* En-tête avec animations */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={headerVariants}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Les{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
              Membres
            </span>
          </h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"
          ></motion.div>
          
          <p className="text-xl text-gray-300">
            Voici les membres de{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent font-semibold">
              Bridman{" "}
            </span>
            <span className="text-red-500 font-semibold">
              Groupe
            </span>
          </p>
        </motion.div>

        {/* Fondateur - Centré avec très grande image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
          className="flex justify-center mb-20"
        >
          <MemberCard member={founder} index={0} isFounder={true} />
        </motion.div>

        {/* Deux autres membres côte à côte */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {members.map((member, index) => (
            <MemberCard key={member.name} member={member} index={index + 1} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Membres