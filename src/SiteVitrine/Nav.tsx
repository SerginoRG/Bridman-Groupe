import { useState } from "react"
import { NavLink, Outlet } from "react-router-dom"
import logo from "../assets/bridman-groupe.png"

function Nav() {
    const [isOpen, setIsOpen] = useState(false)

    const linkClass = ({ isActive }: { isActive: boolean }) =>
        isActive
            ? "text-blue-400 font-bold transition duration-300"
            : "text-white hover:text-blue-300 transition duration-300 font-medium"

    const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
        isActive
            ? "text-blue-400 font-bold py-2 px-4"
            : "text-white hover:text-blue-300 transition duration-300 font-medium py-2 px-4 rounded-lg hover:bg-white/20"

    return (
        <>
            <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 w-[95%] min-[1048px]:w-[90%] lg:w-[85%] bg-white/10 backdrop-blur-md shadow-lg z-50 rounded-2xl min-[1048px]:rounded-3xl">
                <div className="container mx-auto px-4 sm:px-6 lg:px-5">
                    <div className="flex items-center justify-between py-3">

                        {/* LOGO */}
                        <div className="flex items-center space-x-3">
                            <img src={logo} alt="Logo" className="h-10 w-auto" />
                            <h1 className="text-xl sm:text-2xl font-bold">
                                <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                                    Bridman{" "}
                                </span>
                                <span className="text-red-500 drop-shadow-lg">
                                    Groupe
                                </span>
                            </h1>
                        </div>

                        {/* MENU DESKTOP */}
                        <div className="hidden min-[1048px]:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
                            <NavLink to="/" className={linkClass}>Accueil</NavLink>
                            <NavLink to="/about" className={linkClass}>Services</NavLink>
                            <NavLink to="/membres" className={linkClass}>Membres</NavLink>
                            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
                        </div>

                        {/* ESPACE DROITE */}
                        <div className="hidden min-[1048px]:block w-32"></div>

                        {/* BURGER */}
                        <div className="min-[1048px]:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-white focus:outline-none"
                            >
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {isOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* MENU MOBILE */}
                    <div className={`min-[1048px]:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                        <div className="flex flex-col items-center space-y-3 pb-4">
                            <NavLink to="/" onClick={() => setIsOpen(false)} className={mobileLinkClass}>Home</NavLink>
                            <NavLink to="/about" onClick={() => setIsOpen(false)} className={mobileLinkClass}>Services</NavLink>
                            <NavLink to="/membres" onClick={() => setIsOpen(false)} className={mobileLinkClass}>Membres</NavLink>
                            <NavLink to="/contact" onClick={() => setIsOpen(false)} className={mobileLinkClass}>Contact</NavLink>
                        </div>
                    </div>
                </div>
            </nav>

            <div>
                <Outlet />
            </div>
        </>
    )
}

export default Nav