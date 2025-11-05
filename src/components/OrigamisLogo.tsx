import React from 'react';

interface OrigamisLogoProps {
  className?: string;
  showText?: boolean;
}

const OrigamisLogo: React.FC<OrigamisLogoProps> = ({ className = "", showText = true }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex items-center">
        <img 
          src="https://www.origamis.cl/wp-content/uploads/2025/11/Diseno-sin-titulo.png" 
          alt="Origamis - Unfold Your Mind" 
          className="h-12 w-auto mr-3"
        />
        {showText && (
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-gray-900 leading-tight">
              Origamis
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrigamisLogo;