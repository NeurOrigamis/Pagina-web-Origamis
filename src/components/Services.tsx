import React from 'react';
import { Brain, Users, GraduationCap, Activity, Cpu, HeartHandshake, Target, BookOpen } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Tratamientos Clínicos",
      description: "Terapias y tratamientos integrales para generar cambios profundos y sostenibles en el bienestar mental, con más de 10,000 atenciones realizadas.",
      features: ["Psicología clínica", "Psiquiatría especializada", "Medicina en salud mental"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Consultoría Empresarial",
      description: "Diseño y desarrollo de charlas, talleres y programas de coaching enfocados en bienestar integral y rendimiento organizacional.",
      features: ["Charlas especializadas", "Talleres de bienestar", "Coaching organizacional"]
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Terapias Corporales",
      description: "Integración de terapias corporales para bienestar físico y mental complementario, conectando cuerpo y mente.",
      features: ["Terapias integrativas", "Bienestar físico-mental", "Conexión cuerpo-mente"]
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "IA para Diagnóstico",
      description: "Herramientas de inteligencia artificial para análisis predictivo y diagnósticos más precisos en salud mental.",
      features: ["Análisis de patrones", "Predicción de riesgos", "Personalización de tratamientos"]
    },
    {
      icon: <HeartHandshake className="h-8 w-8" />,
      title: "Terapia de Pareja",
      description: "Especialización en terapia de pareja con enfoque neurocientífico para mejorar la comunicación y vínculos afectivos.",
      features: ["Análisis de dinámicas", "Comunicación efectiva", "Reconstrucción de vínculos"]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium mb-4">
            <Target className="h-4 w-4 mr-2" />
            Nuestros Servicios
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6" id="servicios-heading">
            Servicios
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600"> Multidisciplinarios</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto" role="text">
            Integramos saberes multidisciplinarios con más de 7 años de experiencia comprobada, 
            ofreciendo tratamientos integrales que generan cambios profundos y sostenibles en el bienestar mental.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" role="list" aria-labelledby="servicios-heading">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group focus-within:ring-2 focus-within:ring-blue-500"
              role="listitem"
              tabIndex="0"
            >
              {/* Icon */}
              <div className="bg-gradient-to-br from-blue-500 to-emerald-500 p-4 rounded-xl text-white mb-6 inline-block group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors" role="heading" aria-level="3">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed text-justify" role="text">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2" role="list" aria-label={`Características de ${service.title}`}>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-gray-700" role="listitem">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-white/10 rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-16 sm:w-24 h-16 sm:h-24 bg-white/10 rounded-full translate-y-8 sm:translate-y-12 -translate-x-8 sm:-translate-x-12"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">🧠 ¡Descubre tu Bienestar Mental!</h3>
              <p className="text-blue-100 mb-6 text-base sm:text-lg leading-relaxed">
                ¿Te has preguntado cómo está realmente tu salud emocional? 🤔 
                <br />
                Nuestro <strong>Tamizaje Emocional Inteligente</strong> te ayudará a conocerte mejor en solo 5 minutos. 
                Es como un "check-up" para tu mente, pero más divertido y revelador. ✨
              </p>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 sm:p-4 mb-6">
                <div className="grid grid-cols-2 sm:flex sm:items-center sm:justify-center gap-4 sm:space-x-8 text-xs sm:text-sm">
                  <div className="text-center">
                    <div className="text-2xl mb-1">⏱️</div>
                    <div>5 minutos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-1">🎯</div>
                    <div>100% Personalizado</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-1">🔒</div>
                    <div>Confidencial</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-1">🚀</div>
                    <div>Resultados Inmediatos</div>
                  </div>
                </div>
              </div>
              
              <p className="text-blue-100 mb-6 text-center italic text-sm sm:text-base">
                "El primer paso hacia el cambio es conocer dónde estás ahora" 💫
              </p>
              <a 
                href="https://www.origamis.cl/tamizaje/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-white/50 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-base sm:text-lg"
                aria-label="Comenzar tamizaje emocional gratuito - 5 minutos"
              >
                🎯 ¡Comenzar mi Tamizaje Ahora!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;