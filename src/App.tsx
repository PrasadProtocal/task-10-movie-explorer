import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import type { Movie } from './types/Movie';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';
import Favorites from './pages/Favorites';

const App: React.FC = () => {
    const [favorites, setFavorites] = useState<Movie[]>(() => {
        const saved = localStorage.getItem('favorites');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (movie: Movie): void => {
        setFavorites(prev => {
            const exists = prev.some(f => f.id === movie.id);
            if (exists) {
                return prev.filter(f => f.id !== movie.id);
            }
            return [...prev, movie];
        });
    };

    return (
        <Router>
            <div className="min-h-screen bg-gray-50">
                <Navbar favoriteCount={favorites.length} />
                <Routes>
                    <Route path="/" element={<Home favorites={favorites} onToggleFavorite={toggleFavorite} />} />
                    <Route path="/movies" element={<Movies favorites={favorites} onToggleFavorite={toggleFavorite} />} />
                    <Route path="/movies/:id" element={<MovieDetails />} />
                    <Route path="/favorites" element={<Favorites favorites={favorites} onToggleFavorite={toggleFavorite} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;