import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Shield, Heart, Brain, MessageCircle } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    {
      url: "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Sesión de terapia individual - Tratamientos clínicos personalizados",
      service: "Tratamientos Clínicos"
    },
    {
      url: "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Pareja en sesión de terapia - Comunicación y vínculos afectivos",
      service: "Terapia de Pareja"
    },
    {
      url: "https://www.origamis.cl/wp-content/uploads/2025/09/Organizacional.png",
      alt: "Equipo empresarial en taller de bienestar - Consultoría organizacional",
      service: "Consultoría Empresarial"
    },
    {
      url: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Terapias corporales y bienestar integral",
      service: "Terapias Corporales"
    },
    {
      url: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Análisis de datos cerebrales con IA - Diagnósticos precisos en salud mental",
      service: "IA para Diagnóstico"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="inicio" className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 pt-20 pb-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              Innovación en Salud Mental
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transformamos la realidad hacia una vida más
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600"> consciente y resiliente</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed text-left" role="text">
              En Origamis creemos que el bienestar se construye paso a paso, juntos.
              Acompañamos a personas, parejas y organizaciones a recuperar la calma, fortalecer vínculos y crear espacios donde la vida y el trabajo se sientan más humanos.
            </p>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed text-left" role="text">
              Con el apoyo de la psicología, la neurociencia y prácticas de autocuidado, entregamos herramientas profundas que ayudan a reducir el estrés, prevenir el desgaste y cultivar relaciones más sanas y significativas.
            </p>

            {/* Feature highlights */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 mb-8">
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-sm sm:text-base text-gray-700 font-medium">+10,000 Atenciones Clínicas</span>
              </div>
              <div className="flex items-center">
                <div className="bg-emerald-100 p-2 rounded-lg mr-3">
                  <Heart className="h-5 w-5 text-emerald-600" />
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://www.origamis.cl/tamizaje/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center text-sm sm:text-base"
                aria-label="Realizar tamizaje emocional gratuito"
              >
                Completa tu Tamizaje Emocional
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="https://wa.me/56930179724?text=Hola%20Origamis%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20tratamientos%20de%20salud%20mental%20basados%20en%20neurociencias.%20%C2%BFPodr%C3%ADan%20brindarme%20informaci%C3%B3n%20sobre%20c%C3%B3mo%20pueden%20ayudarme%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-green-500 text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-green-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300 font-semibold flex items-center justify-center text-sm sm:text-base"
                aria-label="Contactar por WhatsApp para consulta gratuita"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Escribir por WhatsApp
              </a>
            </div>
          </div>

          {/* Visual Element */}
          <div className="lg:w-1/2 lg:pl-12">
            <div className="relative">
              {/* Carousel Container */}
              <div className="bg-gradient-to-br from-blue-400 to-emerald-400 rounded-3xl p-4 sm:p-8 transform rotate-1 sm:rotate-3 hover:rotate-0 sm:hover:rotate-1 transition-transform duration-300">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  {/* Images */}
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {carouselImages.map((image, index) => (
                      <div key={index} className="w-full flex-shrink-0 relative">
                        <img 
                          src={image.url} 
                          alt={image.alt}
                          className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                        />
                        {/* Service Label */}
                        <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-white/90 backdrop-blur-sm px-2 sm:px-4 py-1 sm:py-2 rounded-lg">
                          <p className="text-xs sm:text-sm font-semibold text-gray-900">{image.service}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Navigation Dots */}
                  <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 flex space-x-2">
                    {carouselImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${
                          index === currentSlide 
                            ? 'bg-white shadow-lg' 
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Ir a imagen ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating cards */}
              <div className="hidden sm:block absolute -top-4 -left-4 bg-white p-3 sm:p-4 rounded-xl shadow-xl border border-gray-100">
                <div className="flex items-center">
                  <div className="bg-emerald-100 p-2 rounded-lg mr-3">
                    <Brain className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-gray-900">IA Aplicada</p>
                    <p className="text-xs sm:text-sm text-gray-600">Diagnósticos precisos</p>
                  </div>
                </div>
              </div>

              <div className="hidden sm:block absolute -bottom-4 -right-4 bg-white p-3 sm:p-4 rounded-xl shadow-xl border border-gray-100">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <Heart className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-gray-900">+500</p>
                    <p className="text-xs sm:text-sm text-gray-600">Pacientes atendidos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;