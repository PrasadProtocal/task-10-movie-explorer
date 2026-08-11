import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Movie } from '../types/Movie';
import { movieApi } from '../services/movieApi';
import MovieGrid from '../components/MovieGrid';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

interface HomeProps {
    favorites: Movie[];
    onToggleFavorite: (movie: Movie) => void;
}

const Home: React.FC<HomeProps> = ({ favorites, onToggleFavorite }) => {
    const navigate = useNavigate();
    const [featured, setFeatured] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFeatured = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await movieApi.getPopularMovies();
                setFeatured(data.results.slice(0, 6));
            } catch {
                setError('Failed to load featured movies');
            }
            setLoading(false);
        };
        fetchFeatured();
    }, []);

    return (
        <div>
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">🎬 MovieExplorer</h1>
                    <p className="text-xl md:text-2xl mb-8">Discover, explore, and save your favorite movies</p>
                    <button
                        onClick={() => navigate('/movies')}
                        className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                    >
                        Explore Movies →
                    </button>
                </div>
            </section>

            <section className="py-12 px-4 max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">Featured Movies</h2>
                {loading && <Loader message="Loading featured movies..." />}
                {error && <ErrorMessage message={error} onRetry={() => window.location.reload()} />}
                {!loading && !error && (
                    <MovieGrid
                        movies={featured}
                        favorites={favorites}
                        onToggleFavorite={onToggleFavorite}
                        emptyMessage="No featured movies available"
                    />
                )}
            </section>
        </div>
    );
};

export default Home;