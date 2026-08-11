import React from 'react';
import { Link } from 'react-router-dom';
import type { Movie } from '../types/Movie';
import { movieApi } from '../services/movieApi';
import FavoriteButton from './FavoriteButton';

interface MovieCardProps {
    movie: Movie;
    isFavorite: boolean;
    onToggleFavorite: (movie: Movie) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, isFavorite, onToggleFavorite }) => {
    const posterUrl = movieApi.getImageUrl(movie.poster_path);
    const year = movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A';
    const ratingColor = movie.vote_average >= 7 ? 'text-green-400' :
        movie.vote_average >= 5 ? 'text-yellow-400' : 'text-red-400';

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative">
                <img src={posterUrl} alt={movie.title} className="w-full h-64 object-cover" loading="lazy" />
                <div className="absolute top-2 right-2">
                    <FavoriteButton isFavorite={isFavorite} onToggle={() => onToggleFavorite(movie)} />
                </div>
            </div>
            <div className="p-4">
                <h3 className="font-semibold text-lg mb-1 truncate">{movie.title}</h3>
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">{year}</span>
                    <span className={`font-medium ${ratingColor}`}>★ {movieApi.formatRating(movie.vote_average)}</span>
                </div>
                <Link to={`/movies/${movie.id}`} className="block w-full text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default MovieCard;