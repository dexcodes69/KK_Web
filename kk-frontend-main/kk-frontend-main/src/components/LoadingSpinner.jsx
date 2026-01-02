import React from 'react';

const LoadingSpinner = ({ isLoading, children }) => {
  return (
    <div className="relative">
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-12 h-12 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      )}
      {children}
    </div>
  );
};

export default LoadingSpinner;
