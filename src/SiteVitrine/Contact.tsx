import { useState } from "react"
import Image from "../assets/Contact/one.jpg"
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaCommentDots } from "react-icons/fa"

function Contact(){
    const [formData, setFormData] = useState({
        email: "",
        telephone: "",
        adresse: "",
        message: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(formData)
        alert("Message envoyé avec succès !")
        setFormData({ email: "", telephone: "", adresse: "", message: "" })
    }

    return(
        <div className="min-h-screen  from-gray-900 via-purple-900 to-gray-900 mt-10 py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Titre principal */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Contactez-<span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">nous</span>
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        N'hésitez pas à nous contacter pour toute information ou demande de service.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    
                    {/* Partie gauche - Image avec effets */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500"></div>
                        <div className="relative bg-black/50 rounded-2xl overflow-hidden">
                            <img 
                                src={Image} 
                                alt="Contact" 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent"></div>
                            
                            {/* Texte superposé sur l'image */}
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                                    <p className="text-white text-center font-semibold">
                                        ✨ Une question ? Un projet ? ✨
                                    </p>
                                    <p className="text-gray-300 text-sm text-center mt-1">
                                        Notre équipe vous répond dans les 24h
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Partie droite - Formulaire */}
                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Email */}
                            <div>
                                <label className="block text-gray-300 mb-2 font-medium">
                                    <FaEnvelope className="inline-block mr-2 text-blue-400" /> Email
                                </label>
                                <input 
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 text-white transition-all duration-300"
                                    placeholder="votre@email.com"
                                    required
                                />
                            </div>

                            {/* Téléphone */}
                            <div>
                                <label className="block text-gray-300 mb-2 font-medium">
                                    <FaPhone className="inline-block mr-2 text-blue-400" /> Téléphone
                                </label>
                                <input 
                                    type="tel"
                                    name="telephone"
                                    value={formData.telephone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 text-white transition-all duration-300"
                                    placeholder="+33 6 12 34 56 78"
                                    required
                                />
                            </div>

                            {/* Adresse */}
                            <div>
                                <label className="block text-gray-300 mb-2 font-medium">
                                    <FaMapMarkerAlt className="inline-block mr-2 text-blue-400" /> Adresse
                                </label>
                                <input 
                                    type="text"
                                    name="adresse"
                                    value={formData.adresse}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 text-white transition-all duration-300"
                                    placeholder="Votre adresse"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-gray-300 mb-2 font-medium">
                                    <FaCommentDots className="inline-block mr-2 text-blue-400" /> Message
                                </label>
                                <textarea 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 text-white transition-all duration-300 resize-none"
                                    placeholder="Votre message..."
                                    required
                                ></textarea>
                            </div>

                            {/* Bouton */}
                            <button 
                                type="submit" 
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                            >
                                <span>Envoyer le message</span>
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </form>

                        {/* Cartes d'informations */}
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="text-center p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                                <div className="text-2xl mb-1 flex justify-center">
                                    <FaEnvelope className="text-blue-400" />
                                </div>
                                <p className="text-gray-400 text-xs">Email</p>
                                <p className="text-white text-xs font-semibold">bridmangroupe@gmail.com</p>
                            </div>
                            <div className="text-center p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                                <div className="text-2xl mb-1 flex justify-center">
                                    <FaPhone className="text-blue-400" />
                                </div>
                                <p className="text-gray-400 text-xs">WhatsApp</p>
                                <p className="text-white text-xs font-semibold">+261 34 08 631 95</p>
                            </div>
                            <div className="text-center p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                                <div className="text-2xl mb-1 flex justify-center">
                                    <FaClock className="text-blue-400" />
                                </div>
                                <p className="text-gray-400 text-xs">Horaires</p>
                                <p className="text-white text-xs font-semibold">Lun - Sam / 9h-18h</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}   

export default Contact