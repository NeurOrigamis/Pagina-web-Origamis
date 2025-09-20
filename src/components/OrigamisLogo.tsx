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
          src="https://www.origamis.cl/wp-content/uploads/2025/03/cropped-Imagen-de-WhatsApp-2025-03-25-a-las-14.31.50_3866463c-1.jpg" 
          alt="Origamis - Unfold Your Mind" 
          className="h-12 w-auto mr-3"
        />
        {showText && (
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-gray-900 leading-tight">
              Origamis
            </h1>
            <p className="text-sm text-blue-600 font-medium italic leading-tight">
              unfold your mind
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrigamisLogo;