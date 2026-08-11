import React from 'react';

interface ErrorMessageProps {
    message?: string;
    onRetry?: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
    message = 'Unable to load movies. Please try again.',
    onRetry
}) => {
    return (
        <div className="text-center py-12">
            <div className="text-red-500 text-6xl mb-4">⚠️</div>
            <p className="text-red-600 text-lg mb-4">{message}</p>
            {onRetry && (
                <button onClick={onRetry} className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                    Try Again
                </button>
            )}
        </div>
    );
};

export default ErrorMessage;