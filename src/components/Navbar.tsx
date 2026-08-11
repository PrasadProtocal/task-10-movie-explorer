import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
    favoriteCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ favoriteCount }) => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-blue-400">🎬</span>
                        <span className="text-xl font-semibold hidden sm:block">MovieExplorer</span>
                        <span className="text-xl font-semibold sm:hidden">MovieExplorer</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link
                            to="/movies"
                            className={`hover:text-blue-400 transition-colors ${location.pathname === '/movies' ? 'text-blue-400' : ''
                                }`}
                        >
                            Movies
                        </Link>
                        <Link
                            to="/favorites"
                            className={`hover:text-blue-400 transition-colors relative ${location.pathname === '/favorites' ? 'text-blue-400' : ''
                                }`}
                        >
                            <span>Favorites</span>
                            {favoriteCount > 0 && (
                                <span className="absolute -top-2 -right-6 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    {favoriteCount}
                                </span>
                            )}
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-700 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden py-4 border-t border-gray-700">
                        <div className="flex flex-col space-y-3">
                            <Link
                                to="/movies"
                                onClick={() => setIsOpen(false)}
                                className={`px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors ${location.pathname === '/movies' ? 'bg-gray-700 text-blue-400' : ''
                                    }`}
                            >
                                Movies
                            </Link>
                            <Link
                                to="/favorites"
                                onClick={() => setIsOpen(false)}
                                className={`px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-between ${location.pathname === '/favorites' ? 'bg-gray-700 text-blue-400' : ''
                                    }`}
                            >
                                <span>Favorites</span>
                                {favoriteCount > 0 && (
                                    <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                        {favoriteCount}
                                    </span>
                                )}
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;