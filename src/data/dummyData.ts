import type { Movie, MovieDetails, Genre } from '../types/Movie';

export const dummyGenres: Genre[] = [
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 80, name: 'Crime' },
    { id: 18, name: 'Drama' },
    { id: 10751, name: 'Family' },
    { id: 14, name: 'Fantasy' },
    { id: 36, name: 'History' },
    { id: 27, name: 'Horror' },
    { id: 10402, name: 'Music' },
    { id: 9648, name: 'Mystery' },
    { id: 10749, name: 'Romance' },
    { id: 878, name: 'Science Fiction' },
    { id: 53, name: 'Thriller' },
    { id: 10752, name: 'War' },
    { id: 37, name: 'Western' }
];

export const dummyMovies: Movie[] = [
    {
        id: 1,
        title: 'The Dark Knight',
        overview: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        poster_path: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
        release_date: '2008-07-18',
        vote_average: 9.0,
        popularity: 85.7,
        genre_ids: [28, 80, 18]
    },
    {
        id: 2,
        title: 'Inception',
        overview: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
        poster_path: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
        release_date: '2010-07-16',
        vote_average: 8.8,
        popularity: 72.3,
        genre_ids: [28, 12, 878]
    },
    {
        id: 3,
        title: 'Interstellar',
        overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        poster_path: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
        release_date: '2014-11-07',
        vote_average: 8.6,
        popularity: 68.9,
        genre_ids: [12, 18, 878]
    },
    {
        id: 4,
        title: 'The Matrix',
        overview: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
        poster_path: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
        release_date: '1999-03-31',
        vote_average: 8.7,
        popularity: 65.4,
        genre_ids: [28, 878]
    },
    {
        id: 5,
        title: 'The Godfather',
        overview: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
        poster_path: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
        release_date: '1972-03-24',
        vote_average: 9.2,
        popularity: 55.8,
        genre_ids: [18, 80]
    },
    {
        id: 6,
        title: 'Pulp Fiction',
        overview: 'The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in a tale of violence and redemption.',
        poster_path: 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
        release_date: '1994-10-14',
        vote_average: 8.9,
        popularity: 52.1,
        genre_ids: [18, 53, 80]
    },
    {
        id: 7,
        title: 'The Shawshank Redemption',
        overview: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        poster_path: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
        release_date: '1994-09-23',
        vote_average: 9.3,
        popularity: 48.7,
        genre_ids: [18]
    },
    {
        id: 8,
        title: 'Fight Club',
        overview: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.',
        poster_path: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
        release_date: '1999-10-15',
        vote_average: 8.8,
        popularity: 45.3,
        genre_ids: [18, 53]
    },
    {
        id: 9,
        title: 'Forrest Gump',
        overview: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.',
        poster_path: 'https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg',
        release_date: '1994-07-06',
        vote_average: 8.5,
        popularity: 42.8,
        genre_ids: [35, 18, 10749]
    },
    {
        id: 10,
        title: 'The Lion King',
        overview: 'Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.',
        poster_path: 'https://image.tmdb.org/t/p/w500/sKCr78MXS5XE4iUeu9FT8Dnjq7m.jpg',
        release_date: '1994-06-24',
        vote_average: 8.5,
        popularity: 39.6,
        genre_ids: [16, 10751, 18]
    },
    {
        id: 11,
        title: 'Gladiator',
        overview: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
        poster_path: 'https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1Hn1RIsDvimJ.jpg',
        release_date: '2000-05-05',
        vote_average: 8.5,
        popularity: 36.2,
        genre_ids: [28, 12, 18]
    },
    {
        id: 12,
        title: 'Titanic',
        overview: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',
        poster_path: 'https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg',
        release_date: '1997-11-18',
        vote_average: 7.9,
        popularity: 33.5,
        genre_ids: [18, 10749, 12]
    }
];

export const getMovieDetails = (id: number): MovieDetails | null => {
    const movie = dummyMovies.find(m => m.id === id);
    if (!movie) return null;
    return {
        ...movie,
        genres: dummyGenres.filter(g => movie.genre_ids?.includes(g.id) || false),
        runtime: 120 + Math.floor(Math.random() * 60),
        status: 'Released',
        tagline: 'A must-watch movie experience',
        budget: 100000000,
        revenue: 500000000,
        vote_count: 10000
    };
};

export const searchMovies = (query: string): Movie[] => {
    if (!query.trim()) return dummyMovies;
    const q = query.toLowerCase();
    return dummyMovies.filter(m =>
        m.title.toLowerCase().includes(q) ||
        m.overview.toLowerCase().includes(q)
    );
};