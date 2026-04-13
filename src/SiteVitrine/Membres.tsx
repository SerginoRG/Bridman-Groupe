import Fondateur from "../assets/Membres/brido.jpeg"
import Dev from "../assets/Membres/developppeur.png"
import Naf from "../assets/Membres/naf.jpeg"

function Membres() {
    return (
        <div className="min-h-screen  from-gray-900 to-gray-800 mt-11 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* En-tête */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Les <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">Membres</span>
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-xl text-gray-300">
                        Voici les membres de{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent font-semibold">
                            Bridman{" "}
                        </span>
                        <span className="text-red-500 font-semibold">
                            Groupe
                        </span>
                    </p>
                </div>

                {/* Fondateur - Centré avec très grande image */}
                <div className="flex justify-center mb-20">
                    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 text-center border border-white/20 max-w-lg w-full transform hover:scale-105 transition-transform duration-300">
                        <div className="relative inline-block">
                            <div className="absolute inset-0 rounded-full bg-blue-500 blur-2xl opacity-50"></div>
                            <img 
                                src={Fondateur} 
                                alt="Fondateur" 
                                className="relative w-64 h-64 md:w-72 md:h-72 rounded-full object-cover border-4 border-blue-500 mx-auto mb-6 shadow-2xl"
                            />
                            <div className="absolute bottom-4 right-4 bg-blue-600 rounded-full p-3 border-2 border-white">
                                <span className="text-white text-xl">👑</span>
                            </div>
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-2">Brido</h2>
                        <p className="text-blue-400 font-semibold text-lg mb-3">Fondateur</p>
                        <p className="text-gray-300 text-base">Visionnaire et créateur de Bridman Groupe</p>
                    </div>
                </div>

                {/* Deux autres membres côte à côte */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    {/* Développeur */}
                    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 text-center border border-white/20 transform hover:scale-105 transition-transform duration-300">
                        <div className="relative inline-block">
                            <div className="absolute inset-0 rounded-full bg-purple-500 blur-2xl opacity-50"></div>
                            <img 
                                src={Dev} 
                                alt="Développeur" 
                                className="relative w-64 h-64 md:w-72 md:h-72 rounded-full object-cover border-4 border-purple-500 mx-auto mb-6 shadow-2xl"
                            />
                            <div className="absolute bottom-4 right-4 bg-purple-600 rounded-full p-3 border-2 border-white">
                                <span className="text-white text-xl">💻</span>
                            </div>
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-2">Sergino</h2>
                        <p className="text-purple-400 font-semibold text-lg mb-3">Développeur Full Stack</p>
                        <p className="text-gray-300 text-base">Expert en développement web et applications</p>
                        <div className="mt-6 flex justify-center gap-3 flex-wrap">
                            <span className="px-3 py-1 bg-purple-500/20 rounded-full text-xs text-purple-300">JavaScript</span>
                            <span className="px-3 py-1 bg-purple-500/20 rounded-full text-xs text-purple-300">Python</span>
                            <span className="px-3 py-1 bg-purple-500/20 rounded-full text-xs text-purple-300">Tailwind</span>
                        </div>
                    </div>

                    {/* Communicatrice */}
                    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 text-center border border-white/20 transform hover:scale-105 transition-transform duration-300">
                        <div className="relative inline-block">
                            <div className="absolute inset-0 rounded-full bg-pink-500 blur-2xl opacity-50"></div>
                            <img 
                                src={Naf} 
                                alt="Communicatrice" 
                                className="relative w-64 h-64 md:w-72 md:h-72 rounded-full object-cover border-4 border-pink-500 mx-auto mb-6 shadow-2xl"
                            />
                            <div className="absolute bottom-4 right-4 bg-pink-600 rounded-full p-3 border-2 border-white">
                                <span className="text-white text-xl">📢</span>
                            </div>
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-2">Nafissa</h2>
                        <p className="text-pink-400 font-semibold text-lg mb-3">Communicatrice</p>
                        <p className="text-gray-300 text-base">Spécialiste en communication et community management</p>
                        <div className="mt-6 flex justify-center gap-3 flex-wrap">
                            <span className="px-3 py-1 bg-pink-500/20 rounded-full text-xs text-pink-300">Social Media</span>
                            <span className="px-3 py-1 bg-pink-500/20 rounded-full text-xs text-pink-300">Marketing</span>
                            <span className="px-3 py-1 bg-pink-500/20 rounded-full text-xs text-pink-300">Branding</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Membres