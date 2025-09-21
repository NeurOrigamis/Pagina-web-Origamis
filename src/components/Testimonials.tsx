import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Laura García",
      profession: "Ejecutiva de Marketing",
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "El enfoque neurocientífico de Origamis transformó completamente mi manejo del estrés laboral. Las técnicas de IA para personalizar el tratamiento fueron increíblemente efectivas.",
      treatment: "Programa de Gestión del Estrés"
    },
    {
      name: "Miguel Rodríguez",
      profession: "Ingeniero de Software",
      image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Después de años lidiando con ansiedad, encontré en Origamis un equipo que realmente entiende cómo funciona la mente. Su aplicación de tecnología fue revolucionaria para mi tratamiento.",
      treatment: "Terapia Individual para Ansiedad"
    },
    {
      name: "Carmen Mendoza",
      profession: "Directora de RRHH",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Implementamos los programas de bienestar organizacional de Origamis en nuestra empresa. Los resultados en productividad y satisfacción laboral fueron excepcionales.",
      treatment: "Consultoría Empresarial"
    },
    {
      name: "David López",
      profession: "Psicólogo Clínico",
      image: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Como profesional de la salud mental, los cursos de formación en neurociencias aplicadas de Origamis elevaron significativamente mi práctica clínica.",
      treatment: "Consultoría Profesional"
    },
    {
      name: "Elena Ruiz",
      profession: "Empresaria",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "La terapia de pareja con enfoque neurocientífico nos ayudó a entender mejor nuestros patrones de comunicación. Salvó nuestra relación de 12 años.",
      treatment: "Terapia de Pareja"
    },
    {
      name: "Francisco Morales",
      profession: "Investigador Académico",
      image: "https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "La integración de inteligencia artificial para diagnósticos más precisos es impresionante. Origamis está a la vanguardia de la salud mental del futuro.",
      treatment: "Evaluación Neuropsicológica"
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-gradient-to-br from-blue-50 to-emerald-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 font-medium mb-4">
            <Star className="h-4 w-4 mr-2" />
            Testimonios
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Lo que dicen nuestros
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600"> Pacientes y Clientes</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Más de 500 personas han transformado su bienestar mental con nuestros tratamientos 
            innovadores basados en neurociencias y tecnología de inteligencia artificial.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6 sm:left-8 bg-gradient-to-br from-blue-500 to-emerald-500 p-3 rounded-full">
                <Quote className="h-6 w-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4 pt-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed italic text-justify">
                "{testimonial.text}"
              </p>

              {/* Treatment */}
              <div className="bg-gradient-to-r from-blue-100 to-emerald-100 px-3 py-1 rounded-full text-xs sm:text-sm text-blue-700 font-medium mb-6 inline-block">
                {testimonial.treatment}
              </div>

              {/* Profile */}
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover mr-3 sm:mr-4"
                />
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">{testimonial.profession}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-xs sm:text-sm text-gray-600">Atenciones Clínicas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-emerald-600 mb-2">1,000+</div>
              <div className="text-xs sm:text-sm text-gray-600">Terapias Exitosas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">7+</div>
              <div className="text-xs sm:text-sm text-gray-600">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-xs sm:text-sm text-gray-600">Enfoque Multidisciplinario</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;