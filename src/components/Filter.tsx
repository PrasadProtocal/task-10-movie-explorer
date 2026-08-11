import React from 'react';
import type { ChangeEvent } from 'react';
import type { Genre } from '../types/Movie';

interface FilterProps {
    onGenreChange: (genre: string) => void;
    onSortChange: (sort: string) => void;
    selectedGenre: string;
    selectedSort: string;
    genres: Genre[];
}

const Filter: React.FC<FilterProps> = ({
    onGenreChange,
    onSortChange,
    selectedGenre,
    selectedSort,
    genres
}) => {
    return (
        <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Genre</label>
                <select
                    value={selectedGenre}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => onGenreChange(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    <option value="">All Genres</option>
                    {genres.map((genre) => (
                        <option key={genre.id} value={genre.name}>
                            {genre.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
                <select
                    value={selectedSort}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => onSortChange(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    <option value="rating-desc">Rating: High to Low</option>
                    <option value="rating-asc">Rating: Low to High</option>
                    <option value="popularity">Popularity</option>
                </select>
            </div>
        </div>
    );
};

export default Filter;