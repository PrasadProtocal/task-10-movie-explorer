export interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string | null;
    release_date: string;
    vote_average: number;
    popularity: number;
    genre_ids?: number[];
}

export interface MovieDetails extends Movie {
    genres: Genre[];
    runtime: number;
    status: string;
    tagline: string;
    budget: number;
    revenue: number;
    vote_count: number;
}

export interface Genre {
    id: number;
    name: string;
}

export interface ApiResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

export interface SearchParams {
    query: string;
    page?: number;
}