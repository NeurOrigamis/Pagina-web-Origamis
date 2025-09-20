import React, { useState } from 'react';
import { Menu, X, Brain, MessageCircle, Sparkles } from 'lucide-react';
import OrigamisLogo from './OrigamisLogo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <OrigamisLogo showText={true} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1" aria-label="Ir a la sección de inicio">
              Inicio
            </a>
            <a href="#servicios" className="text-gray-700 hover:text-blue-600 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1" aria-label="Ver nuestros servicios de salud mental">
              Servicios
            </a>
            <a href="#equipo" className="text-gray-700 hover:text-blue-600 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1" aria-label="Conocer nuestro equipo profesional">
              Quiénes Somos
            </a>
            <a href="#testimonios" className="text-gray-700 hover:text-blue-600 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1" aria-label="Leer testimonios de nuestros pacientes">
              Testimonios
            </a>
            <a href="#contacto" className="text-gray-700 hover:text-blue-600 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1" aria-label="Contactar con Origamis">
              Contacto
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-3">
              <a
                href="https://wa.me/56930179724?text=Hola%20Origamis%2C%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20salud%20mental.%20%C2%BFPodr%C3%ADan%20ayudarme%20a%20agendar%20una%20consulta%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#inicio" onClick={closeMenu} className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-2 py-1">
                Inicio
              </a>
              <a href="#servicios" onClick={closeMenu} className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-2 py-1" aria-label="Ver servicios de salud mental">
                Servicios
              </a>
              <a href="#equipo" onClick={closeMenu} className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-2 py-1" aria-label="Conocer nuestro equipo">
                Quiénes Somos
              </a>
              <a href="#testimonios" onClick={closeMenu} className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-2 py-1" aria-label="Leer testimonios">
                Testimonios
              </a>
              <a href="#contacto" onClick={closeMenu} className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-2 py-1" aria-label="Contactar">
                Contacto
              </a>
              <a
                href="https://wa.me/56930179724?text=Hola%20Origamis%2C%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20salud%20mental.%20%C2%BFPodr%C3%ADan%20ayudarme%20a%20agendar%20una%20consulta%3F"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold mt-4 text-left flex items-center"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                😊 Hablemos
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;