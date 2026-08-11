import type { MovieDetails, ApiResponse, SearchParams, Genre } from '../types/Movie';
import { dummyMovies, dummyGenres, getMovieDetails, searchMovies } from '../data/dummyData';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const delay = (ms: number = 500) => new Promise(resolve => setTimeout(resolve, ms));

export const movieApi = {
    getPopularMovies: async (page: number = 1): Promise<ApiResponse> => {
        await delay(600);
        return {
            page,
            results: dummyMovies,
            total_pages: 1,
            total_results: dummyMovies.length
        };
    },

    searchMovies: async ({ query, page = 1 }: SearchParams): Promise<ApiResponse> => {
        await delay(500);
        const results = searchMovies(query);
        return {
            page,
            results,
            total_pages: 1,
            total_results: results.length
        };
    },

    getMovieDetails: async (movieId: number): Promise<MovieDetails> => {
        await delay(400);
        const movie = getMovieDetails(movieId);
        if (!movie) throw new Error('Movie not found');
        return movie;
    },

    getGenres: async (): Promise<Genre[]> => {
        await delay(300);
        return dummyGenres;
    },

    getImageUrl: (path: string | null): string => {
        return path ? `${IMAGE_BASE_URL}${path}` : '/placeholder-image.jpg';
    },

    formatRating: (rating: number): string => {
        return rating.toFixed(1);
    },

    formatDate: (dateString: string): string => {
        if (!dateString) return 'N/A';
        try {
            return new Date(dateString).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        } catch {
            return 'N/A';
        }
    }
};