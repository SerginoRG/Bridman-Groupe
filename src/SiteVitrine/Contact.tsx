import { useState, useEffect, useRef } from "react"
import type { ChangeEvent, FormEvent } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import Image from "../assets/Contact/one.jpg"
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaCommentDots } from "react-icons/fa"

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

// Composant pour le champ de formulaire animé
const AnimatedInput = ({ label, icon: Icon, name, type = "text", value, onChange, placeholder, required = false, isTextarea = false, delay = 0 }: { label: string; icon: React.ComponentType<any>; name: string; type?: string; value: string; onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void; placeholder?: string; required?: boolean; isTextarea?: boolean; delay?: number }) => {
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
        hidden: { opacity: 0, x: -50 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, delay },
        },
      }}
    >
      <label className="block text-gray-300 mb-2 font-medium">
        <Icon className="inline-block mr-2 text-blue-400" /> {label}
      </label>
      {isTextarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          rows={5}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 text-white transition-all duration-300 resize-none"
          placeholder={placeholder}
          required={required}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 text-white transition-all duration-300"
          placeholder={placeholder}
          required={required}
        />
      )}
    </motion.div>
  )
}

// Composant pour les cartes d'information
const InfoCard = ({ icon: Icon, label, value, delay = 0 }: { icon: React.ComponentType<any>; label: string; value: string; delay?: number }) => {
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
        hidden: { opacity: 0, y: 30, scale: 0.9 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.5, delay, type: "spring" },
        },
      }}
      className="text-center p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
    >
      <motion.div
        initial={{ rotate: -180, scale: 0 }}
        animate={isInView ? { rotate: 0, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
        className="text-2xl mb-1 flex justify-center"
      >
        <Icon className="text-blue-400" />
      </motion.div>
      <p className="text-gray-400 text-xs">{label}</p>
      <AnimatedText
        text={value}
        className="text-white text-xs font-semibold"
        delay={delay + 0.3}
      />
    </motion.div>
  )
}

function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    telephone: "",
    adresse: "",
    message: ""
  })

  // Animations pour l'en-tête
  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, type: "tween" as const },
    },
  }

  // Animation pour l'image
  const imageControls = useAnimation()
  const imageRef = useRef(null)
  const isImageInView = useInView(imageRef, { once: true, amount: 0.3 })

  useEffect(() => {
    if (isImageInView) {
      imageControls.start("visible")
    }
  }, [imageControls, isImageInView])

  // Animation pour le bouton
  const buttonControls = useAnimation()
  const buttonRef = useRef(null)
  const isButtonInView = useInView(buttonRef, { once: true, amount: 0.3 })

  useEffect(() => {
    if (isButtonInView) {
      buttonControls.start("visible")
    }
  }, [buttonControls, isButtonInView])

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
    alert("Message envoyé avec succès !")
    setFormData({ email: "", telephone: "", adresse: "", message: "" })
  }

  return (
    <div className="min-h-screen from-gray-900 via-purple-900 to-gray-900 mt-10 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Titre principal avec animations */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={headerVariants}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contactez-
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              nous
            </span>
          </h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"
          />
          
          {/* Paragraphe avec animation lettre par lettre */}
          <AnimatedText
            text="N'hésitez pas à nous contacter pour toute information ou demande de service."
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            delay={0.5}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Partie gauche - Image avec animations */}
          <motion.div
            ref={imageRef}
            initial="hidden"
            animate={imageControls}
            variants={{
              hidden: { opacity: 0, x: -100, scale: 0.8 },
              visible: {
                opacity: 1,
                x: 0,
                scale: 1,
                transition: { duration: 0.7, type: "spring" },
              },
            }}
            className="relative group"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isImageInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500"
            />
            <div className="relative bg-black/50 rounded-2xl overflow-hidden">
              <motion.img
                src={Image}
                alt="Contact"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7 }}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" />
              
              {/* Texte superposé sur l'image */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isImageInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute bottom-8 left-8 right-8"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <p className="text-white text-center font-semibold">
                    ✨ Une question ? Un projet ? ✨
                  </p>
                  <p className="text-gray-300 text-sm text-center mt-1">
                    Notre équipe vous répond dans les 24h
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Partie droite - Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <AnimatedInput
                label="Email"
                icon={FaEnvelope}
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="votre@email.com"
                required={true}
                delay={0.1}
              />

              {/* Téléphone */}
              <AnimatedInput
                label="Téléphone"
                icon={FaPhone}
                name="telephone"
                type="tel"
                value={formData.telephone}
                onChange={handleChange}
                placeholder="+33 6 12 34 56 78"
                required={true}
                delay={0.2}
              />

              {/* Adresse */}
              <AnimatedInput
                label="Adresse"
                icon={FaMapMarkerAlt}
                name="adresse"
                type="text"
                value={formData.adresse}
                onChange={handleChange}
                placeholder="Votre adresse"
                required={false}
                delay={0.3}
              />

              {/* Message */}
              <AnimatedInput
                label="Message"
                icon={FaCommentDots}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Votre message..."
                required={true}
                isTextarea={true}
                delay={0.4}
              />

              {/* Bouton d'envoi */}
              <motion.div
                ref={buttonRef}
                initial="hidden"
                animate={buttonControls}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: 0.5, type: "spring" },
                  },
                }}
              >
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                >
                  <span>Envoyer le message</span>
                  <motion.svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </motion.button>
              </motion.div>
            </form>

            {/* Cartes d'informations */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <InfoCard
                icon={FaEnvelope}
                label="Email"
                value="bridmangroupe@gmail.com"
                delay={0.1}
              />
              <InfoCard
                icon={FaPhone}
                label="WhatsApp"
                value="+261 34 08 631 95"
                delay={0.2}
              />
              <InfoCard
                icon={FaClock}
                label="Horaires"
                value="Lun - Sam / 9h-18h"
                delay={0.3}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact