import React from 'react';
import { Award, Book, Users, Briefcase, Heart, Brain, Target, Lightbulb } from 'lucide-react';

const Team = () => {
  const specialistAreas = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Psicólogos Clínicos",
      specialization: "Terapia Individual y Grupal",
      description: "Profesionales con amplia experiencia en terapias cognitivo-conductuales, humanistas y sistémicas, especializados en el tratamiento de trastornos de ansiedad, depresión y trauma.",
      expertise: ["Terapia cognitivo-conductual", "Intervención en crisis", "Terapia de pareja y familia"]
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Psiquiatras Especializados",
      specialization: "Medicina en Salud Mental",
      description: "Médicos especialistas en psiquiatría con formación en neurociencias aplicadas, expertos en diagnóstico, tratamiento farmacológico y seguimiento integral de pacientes.",
      expertise: ["Diagnóstico psiquiátrico", "Psicofarmacología", "Tratamiento integral"]
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Especialistas en IA Aplicada",
      specialization: "Tecnología e Innovación Terapéutica",
      description: "Profesionales en la vanguardia de la aplicación de inteligencia artificial en salud mental, desarrollando herramientas de diagnóstico predictivo y personalización de tratamientos.",
      expertise: ["Análisis predictivo", "Personalización terapéutica", "Innovación tecnológica"]
    }
  ];

  const values = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Enfoque Multidisciplinario",
      description: "Integramos diferentes saberes y especialidades para ofrecer una atención integral y personalizada."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Cercanía y Empatía",
      description: "Creamos un ambiente de confianza y comprensión, donde cada persona se siente escuchada y valorada."
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Innovación Científica",
      description: "Aplicamos los últimos avances en neurociencias e inteligencia artificial para optimizar los resultados terapéuticos."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Excelencia Profesional",
      description: "Nuestro equipo mantiene una formación continua y los más altos estándares de calidad en la atención."
    }
  ];

  return (
    <section id="equipo" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 font-medium mb-4">
            <Users className="h-4 w-4 mr-2" />
            Quiénes Somos
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Profesionales Comprometidos con tu
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600"> Bienestar</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
            Somos un equipo multidisciplinario de especialistas altamente formados, unidos por la pasión de transformar vidas 
            a través de la neurociencia aplicada y la innovación tecnológica. Nuestra experiencia de más de 7 años nos respalda 
            como líderes en salud mental integral.
          </p>
        </div>

        {/* Specialist Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {specialistAreas.map((area, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-2xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Icon */}
              <div className="bg-gradient-to-br from-blue-500 to-emerald-500 p-4 rounded-xl text-white mb-6 inline-block group-hover:scale-110 transition-transform duration-300">
                {area.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {area.title}
              </h3>
              <p className="text-sm sm:text-base text-blue-600 font-semibold mb-4">{area.specialization}</p>
              <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">{area.description}</p>

              {/* Expertise */}
              <div className="space-y-2">
                <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-3">Áreas de Expertise:</h4>
                {area.expertise.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center text-xs sm:text-sm text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    {skill}
                  </div>
                ))}
              </div>

              {/* Botón específico para Psiquiatras */}
              {area.title === "Psiquiatras Especializados" && (
                <div className="mt-6">
                  <a
                    href="https://saludorigamis.site.agendapro.com/cl/sucursal/352735"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-4 py-3 rounded-lg hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm"
                  >
                    📅 Agendar Psiquiatría Online
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Our Values */}
        <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-3xl p-6 sm:p-8 lg:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Nuestros Valores</h3>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Los principios que guían nuestro trabajo y definen nuestra identidad como profesionales de la salud mental.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-4 rounded-xl shadow-lg mb-4 inline-block">
                  <div className="text-blue-600">
                    {value.icon}
                  </div>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Stats */}
        <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-6 sm:p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Nuestra Experiencia en Números</h3>
            <p className="text-sm sm:text-base text-blue-100">
              Más de 7 años transformando vidas con resultados comprobados y un enfoque innovador en salud mental.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold mb-2">7+</div>
              <div className="text-xs sm:text-sm text-blue-100">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold mb-2">10,000+</div>
              <div className="text-xs sm:text-sm text-blue-100">Atenciones Clínicas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold mb-2">1,000+</div>
              <div className="text-xs sm:text-sm text-blue-100">Terapias Exitosas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold mb-2">100%</div>
              <div className="text-xs sm:text-sm text-blue-100">Enfoque Multidisciplinario</div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Nuestra Misión</h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Ofrecer un espacio integrado de salud mental basado en neurociencias que apoye a individuos y organizaciones 
              a transformar su realidad, promoviendo cambios <strong>profundos</strong> y <strong>sostenibles</strong> para 
              una vida más <strong>consciente</strong>, <strong>resiliente</strong> y <strong>conectada</strong> con su entorno.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;