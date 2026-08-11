import React from 'react';
import type { Movie } from '../types/Movie';
import MovieGrid from '../components/MovieGrid';

interface FavoritesProps {
    favorites: Movie[];
    onToggleFavorite: (movie: Movie) => void;
}

const Favorites: React.FC<FavoritesProps> = ({ favorites, onToggleFavorite }) => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Your Favorite Movies</h1>

            {favorites.length === 0 ? (
                <div className="text-center py-12">
                    <div className="text-6xl mb-4">❤️</div>
                    <p className="text-gray-500 text-lg">No favorite movies added.</p>
                    <p className="text-gray-400">Start exploring and save your favorite movies!</p>
                </div>
            ) : (
                <MovieGrid
                    movies={favorites}
                    favorites={favorites}
                    onToggleFavorite={onToggleFavorite}
                    emptyMessage="No favorite movies"
                />
            )}
        </div>
    );
};

export default Favorites;