import React from 'react';

interface FavoriteButtonProps {
    isFavorite: boolean;
    onToggle: () => void;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ isFavorite, onToggle }) => {
    return (
        <button
            onClick={onToggle}
            className={`p-2 rounded-full bg-white shadow-lg hover:scale-110 transition-transform ${isFavorite ? 'text-red-500' : 'text-gray-400'
                }`}
        >
            <svg className="w-6 h-6" fill={isFavorite ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        </button>
    );
};

export default FavoriteButton;