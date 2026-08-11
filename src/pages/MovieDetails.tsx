import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { MovieDetails as MovieDetailsType } from '../types/Movie';
import { movieApi } from '../services/movieApi';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

const MovieDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [movie, setMovie] = useState<MovieDetailsType | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;
        const fetchMovie = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await movieApi.getMovieDetails(parseInt(id));
                setMovie(data);
            } catch {
                setError('Failed to load movie details');
            }
            setLoading(false);
        };
        fetchMovie();
    }, [id]);

    if (loading) return <Loader message="Loading movie details..." />;
    if (error) return <ErrorMessage message={error} onRetry={() => window.location.reload()} />;
    if (!movie) return <ErrorMessage message="Movie not found" />;

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <button onClick={() => navigate('/movies')} className="mb-6 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors">
                ← Back to Movies
            </button>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                    <div className="md:w-1/3">
                        <img src={movieApi.getImageUrl(movie.poster_path)} alt={movie.title} className="w-full h-auto object-cover" />
                    </div>
                    <div className="md:w-2/3 p-6">
                        <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
                        {movie.tagline && <p className="text-gray-600 italic mb-4">"{movie.tagline}"</p>}

                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <p className="text-sm text-gray-500">Release Date</p>
                                <p className="font-medium">{movieApi.formatDate(movie.release_date)}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Rating</p>
                                <p className="font-medium text-yellow-400">★ {movieApi.formatRating(movie.vote_average)}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Runtime</p>
                                <p className="font-medium">{movie.runtime} minutes</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Popularity</p>
                                <p className="font-medium">{movie.popularity.toFixed(1)}</p>
                            </div>
                        </div>

                        <div className="mb-4">
                            <p className="text-sm text-gray-500">Genres</p>
                            <div className="flex flex-wrap gap-2 mt-1">
                                {movie.genres.map((g) => (
                                    <span key={g.id} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                                        {g.name}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">Overview</p>
                            <p className="mt-1 leading-relaxed">{movie.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;