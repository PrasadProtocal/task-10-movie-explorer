import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import type { Movie, Genre } from '../types/Movie';
import { movieApi } from '../services/movieApi';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import MovieGrid from '../components/MovieGrid';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

interface MoviesProps {
    favorites: Movie[];
    onToggleFavorite: (movie: Movie) => void;
}

const Movies: React.FC<MoviesProps> = ({ favorites, onToggleFavorite }) => {
    const location = useLocation();
    const [movies, setMovies] = useState<Movie[]>([]);
    const [filtered, setFiltered] = useState<Movie[]>([]);
    const [genres, setGenres] = useState<Genre[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [search, setSearch] = useState('');
    const [genre, setGenre] = useState('');
    const [sort, setSort] = useState('rating-desc');

    // Load genres
    useEffect(() => {
        const loadGenres = async () => {
            try {
                const data = await movieApi.getGenres();
                setGenres(data);
            } catch (err) {
                console.error('Failed to load genres:', err);
            }
        };
        loadGenres();
    }, []);

    // Get search from navigation state
    useEffect(() => {
        const state = location.state as { searchQuery?: string };
        if (state?.searchQuery) {
            setSearch(state.searchQuery);
        }
    }, [location]);

    // Load movies when search changes
    useEffect(() => {
        const loadMovies = async () => {
            setLoading(true);
            setError(null);
            try {
                let data;
                if (search.trim()) {
                    data = await movieApi.searchMovies({ query: search });
                } else {
                    data = await movieApi.getPopularMovies();
                }
                setMovies(data.results);
            } catch (err) {
                setError('Failed to load movies');
                console.error(err);
            }
            setLoading(false);
        };
        loadMovies();
    }, [search]);

    // Filter and sort movies
    useEffect(() => {
        let result = [...movies];

        // Filter by genre
        if (genre) {
            const genreObj = genres.find(g => g.name === genre);
            if (genreObj) {
                result = result.filter(movie =>
                    movie.genre_ids?.includes(genreObj.id)
                );
            }
        }

        // Sort
        if (sort === 'rating-desc') {
            result.sort((a, b) => b.vote_average - a.vote_average);
        } else if (sort === 'rating-asc') {
            result.sort((a, b) => a.vote_average - b.vote_average);
        } else if (sort === 'popularity') {
            result.sort((a, b) => b.popularity - a.popularity);
        }

        setFiltered(result);
    }, [movies, genre, sort, genres]);

    const handleSearch = (query: string) => {
        setSearch(query);
    };

    const handleRetry = () => {
        setSearch('');
        setGenre('');
        setSort('rating-desc');
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Movies</h1>

            <div className="mb-8 space-y-4">
                <SearchBar
                    onSearch={handleSearch}
                    initialValue={search}
                    placeholder="Search for movies..."
                />
                <Filter
                    onGenreChange={setGenre}
                    onSortChange={setSort}
                    selectedGenre={genre}
                    selectedSort={sort}
                    genres={genres}
                />
            </div>

            {loading && <Loader message="Loading movies..." />}

            {error && <ErrorMessage message={error} onRetry={handleRetry} />}

            {!loading && !error && (
                <MovieGrid
                    movies={filtered}
                    favorites={favorites}
                    onToggleFavorite={onToggleFavorite}
                    emptyMessage={
                        search ? `No results found for "${search}"` : 'No movies available'
                    }
                />
            )}
        </div>
    );
};

export default Movies;