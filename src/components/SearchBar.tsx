import React, { useState, useEffect } from 'react';
import type { ChangeEvent } from 'react';

interface SearchBarProps {
    onSearch: (query: string) => void;
    initialValue?: string;
    placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
    onSearch,
    initialValue = '',
    placeholder = 'Search movies...'
}) => {
    const [query, setQuery] = useState<string>(initialValue);

    useEffect(() => {
        const timer = setTimeout(() => {
            onSearch(query);
        }, 400);
        return () => clearTimeout(timer);
    }, [query, onSearch]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        onSearch(query);
    };

    const handleClear = (): void => {
        setQuery('');
        onSearch('');
    };

    return (
        <form onSubmit={handleSubmit} className="relative w-full">
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder={placeholder}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {query && (
                <button
                    type="button"
                    onClick={handleClear}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                    ✕
                </button>
            )}
        </form>
    );
};

export default SearchBar;