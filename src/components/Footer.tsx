import React from 'react';
import { Brain, Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import OrigamisLogo from './OrigamisLogo';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    servicios: [
      { name: "Tratamientos Clínicos", href: "#servicios" },
      { name: "Consultoría Empresarial", href: "#servicios" },
      { name: "Terapias Corporales", href: "#servicios" },
      { name: "IA Aplicada", href: "#servicios" },
      { name: "Terapia de Pareja", href: "#servicios" }
    ],
    empresa: [
      { name: "Sobre Nosotros", href: "#sobre-nosotros" },
      { name: "Quiénes Somos", href: "#equipo" },
      { name: "Testimonios", href: "#testimonios" },
      { name: "Casos de Éxito", href: "#testimonios" },
      { name: "Investigación", href: "#contacto" }
    ],
    recursos: [
      { name: "Artículos de Neurociencias", href: "#contacto" },
      { name: "Guías de Bienestar", href: "#contacto" },
      { name: "Técnicas de Mindfulness", href: "#contacto" },
      { name: "Recursos para Empresas", href: "#contacto" },
      { name: "FAQ", href: "#contacto" },
      { name: "Centro de Ayuda", href: "#contacto" }
    ]
  };

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", name: "Facebook" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", name: "Twitter" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", name: "Instagram" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", name: "LinkedIn" }
  ];

  return (
    <footer className="bg-white text-gray-900 border-t border-gray-200">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-3">
            <div className="mb-6">
              <div className="flex items-center">
                <OrigamisLogo showText={false} />
              </div>
            </div>
            
            <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
              Transformamos el bienestar mental a través de la neurociencia aplicada y tecnologías 
              de inteligencia artificial. Líderes en tratamientos personalizados y consultoría especializada.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-sm sm:text-base text-gray-600">
                <MapPin className="h-5 w-5 mr-3 text-blue-500" />
                <span>Santiago, Chile</span>
              </div>
              <div className="flex items-center text-sm sm:text-base text-gray-600">
                <Phone className="h-5 w-5 mr-3 text-blue-500" />
                <span>+56 930179724</span>
              </div>
              <div className="flex items-center text-sm sm:text-base text-gray-600">
                <Mail className="h-5 w-5 mr-3 text-blue-500" />
                <span>contacto@origamis.cl</span>
              </div>
              <div className="flex items-center text-sm sm:text-base text-gray-600">
                <Clock className="h-5 w-5 mr-3 text-blue-500" />
                <span>Lun - Vie: 9:00 - 20:00</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 sm:space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.name}
                  className="bg-gray-100 p-3 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-gray-600"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-blue-600">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors text-xs sm:text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-emerald-600">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-emerald-600 transition-colors text-xs sm:text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-purple-600">Recursos</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {footerLinks.recursos.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-purple-600 transition-colors text-xs sm:text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-xs sm:text-sm mb-4 md:mb-0 text-center md:text-left">
              <p>© {currentYear} Origamis. Todos los derechos reservados.</p>
              <p className="mt-1">
                Registro Profesional Chile - Más de 7 años transformando vidas
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <div className="text-gray-500 text-xs sm:text-sm">
                <span>Diseño y desarrollo: </span>
                <span className="text-blue-600">Origamis Tech</span>
              </div>
              <button
                onClick={scrollToTop}
                className="bg-gray-100 p-2 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-gray-600"
                aria-label="Volver arriba"
              >
                <ArrowUp className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;