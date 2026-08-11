import React from 'react';
import type { Movie } from '../types/Movie';
import MovieCard from './MovieCard';

interface MovieGridProps {
    movies: Movie[];
    favorites: Movie[];
    onToggleFavorite: (movie: Movie) => void;
    emptyMessage?: string;
}

const MovieGrid: React.FC<MovieGridProps> = ({
    movies,
    favorites,
    onToggleFavorite,
    emptyMessage = 'No movies found'
}) => {
    if (movies.length === 0) {
        return <div className="text-center py-12 text-gray-500 text-lg">{emptyMessage}</div>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    isFavorite={favorites.some(f => f.id === movie.id)}
                    onToggleFavorite={onToggleFavorite}
                />
            ))}
        </div>
    );
};

export default MovieGrid;