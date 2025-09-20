import React from 'react';
import { Building2, Award } from 'lucide-react';

const Clients = () => {
  return (
    <section className="py-12 sm:py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium mb-4">
            <Building2 className="h-4 w-4 mr-2" />
            Nuestros Clientes
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Confían en
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600"> Nuestra Experiencia</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Organizaciones líderes que han transformado el bienestar de sus equipos con nuestros programas especializados
          </p>
        </div>

        {/* Clients Grid */}
        <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 lg:p-12">
          <div className="overflow-hidden">
            <div className="flex animate-scroll-infinite">
              {/* Original set of images */}
              <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 px-2">
                <img 
                  src="https://www.origamis.cl/wp-content/uploads/2025/09/3-scaled.png" 
                  alt="Logos de clientes - Grupo 1"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 px-2">
                <img 
                  src="https://www.origamis.cl/wp-content/uploads/2025/09/4-scaled.png" 
                  alt="Logos de clientes - Grupo 2"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 px-2">
                <img 
                  src="https://www.origamis.cl/wp-content/uploads/2025/09/5-scaled.png" 
                  alt="Logos de clientes - Grupo 3"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 px-2">
                <img 
                  src="https://www.origamis.cl/wp-content/uploads/2025/09/6-scaled.png" 
                  alt="Logos de clientes - Grupo 4"
                  className="w-full h-auto object-contain"
                />
              </div>
              {/* Duplicate set for infinite seamless loop */}
              <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 px-2">
                <img 
                  src="https://www.origamis.cl/wp-content/uploads/2025/09/3-scaled.png" 
                  alt="Logos de clientes - Grupo 1"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 px-2">
                <img 
                  src="https://www.origamis.cl/wp-content/uploads/2025/09/4-scaled.png" 
                  alt="Logos de clientes - Grupo 2"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 px-2">
                <img 
                  src="https://www.origamis.cl/wp-content/uploads/2025/09/5-scaled.png" 
                  alt="Logos de clientes - Grupo 3"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 px-2">
                <img 
                  src="https://www.origamis.cl/wp-content/uploads/2025/09/6-scaled.png" 
                  alt="Logos de clientes - Grupo 4"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          <div className="text-center p-4 bg-blue-50 rounded-xl">
            <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">20+</div>
            <div className="text-xs sm:text-sm text-gray-600">Organizaciones Atendidas</div>
          </div>
          <div className="text-center p-4 bg-emerald-50 rounded-xl">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-600 mb-2">5,000+</div>
            <div className="text-xs sm:text-sm text-gray-600">Colaboradores Impactados</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-xl">
            <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">100+</div>
            <div className="text-xs sm:text-sm text-gray-600">Programas Implementados</div>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-xl">
            <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-2">95%</div>
            <div className="text-xs sm:text-sm text-gray-600">Satisfacción Cliente</div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full text-white font-semibold">
            <Award className="h-5 w-5 mr-2" />
            Certificados y Avalados por Instituciones Líderes
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;