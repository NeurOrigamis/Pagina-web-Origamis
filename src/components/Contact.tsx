import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Calendar, Users } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Crear el contenido del email
    const subject = `Nueva consulta desde la web - ${formData.service}`;
    const body = `
Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}
Servicio de interés: ${formData.service}

Mensaje:
${formData.message}

---
Enviado desde el formulario de contacto de origamis.cl
    `.trim();

    // Crear el enlace mailto
    const mailtoLink = `mailto:carlos@origamis.cl?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Abrir el cliente de correo
    window.location.href = mailtoLink;
    
    // Mostrar mensaje de confirmación
    alert('Se abrirá tu cliente de correo para enviar la consulta. Si no se abre automáticamente, puedes escribir directamente a carlos@origamis.cl');
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Teléfono",
      info: "+56 930179724",
      description: "Lunes a Viernes, 9:00 - 20:00"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      info: "contacto@origamis.cl",
      description: "Respuesta en 24 horas"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Ubicación",
      info: "Santiago, Chile",
      description: "Consulta ubicación específica"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Horarios",
      info: "Lun - Vie: 9:00 - 20:00",
      description: "Sáb: 10:00 - 14:00"
    }
  ];

  const services = [
    "Tratamiento Clínico Individual",
    "Terapia de Pareja",
    "Consultoría Empresarial",
    "Evaluación Neuropsicológica",
    "Terapias Corporales",
    "Otro (especificar en mensaje)"
  ];

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium mb-4">
            <MessageCircle className="h-4 w-4 mr-2" />
            Contacto
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6" id="contacto-heading">
            Inicia tu
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600"> Transformación</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto" role="text">
            Estamos aquí para acompañarte en tu camino hacia el bienestar mental. 
            Contáctanos para una consulta personalizada y descubre cómo podemos ayudarte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-3 space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6" role="heading" aria-level="3">Información de Contacto</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6" role="list" aria-labelledby="contacto-heading">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 sm:space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-gradient-to-br from-blue-500 to-emerald-500 p-3 rounded-lg text-white flex-shrink-0" aria-hidden="true">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-sm sm:text-base text-blue-600 font-medium mb-1">{item.info}</p>
                      <p className="text-gray-600 text-xs sm:text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-blue-600 to-emerald-600 rounded-2xl p-4 sm:p-6 text-white">
              <h3 className="text-lg sm:text-xl font-bold mb-4" role="heading" aria-level="3">Acciones Rápidas</h3>
              <div className="space-y-3">
                <a 
                  href="https://saludorigamis.site.agendapro.com/cl/sucursal/352735"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white/20 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 p-3 rounded-lg transition-colors flex items-center text-sm sm:text-base"
                  aria-label="Agendar cita de psiquiatría online"
                >
                  <Calendar className="h-5 w-5 mr-3" />
                  Agendar Psiquiatría Online
                </a>
                <a
                  href="https://wa.me/56930179724?text=Hola%20Origamis%2C%20me%20gustar%C3%ADa%20hablar%20directamente%20con%20un%20especialista%20para%20resolver%20algunas%20dudas%20sobre%20los%20tratamientos.%20%C2%BFPodr%C3%ADan%20contactarme%20telef%C3%B3nicamente%3F"
                  href="https://wa.me/56930179724?text=Hola%20Origamis%2C%20me%20gustar%C3%ADa%20hablar%20para%20resolver%20algunas%20dudas%20sobre%20los%20tratamientos.%20%C2%BFPodr%C3%ADan%20contactarme%20telef%C3%B3nicamente%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white/20 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 p-3 rounded-lg transition-colors flex items-center text-sm sm:text-base"
                  aria-label="Solicitar contacto telefónico"
                >
                  <Phone className="h-5 w-5 mr-3" />
                  Contacto Telefónico
                </a>
                <a
                  href="https://wa.me/56930179724?text=Hola%20Origamis%2C%20represento%20a%20una%20empresa%20y%20estamos%20interesados%20en%20sus%20servicios%20de%20consultor%C3%ADa%20organizacional%20y%20programas%20de%20bienestar%20laboral.%20%C2%BFPodr%C3%ADan%20proporcionarnos%20informaci%C3%B3n%20detallada%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white/20 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 p-3 rounded-lg transition-colors flex items-center text-sm sm:text-base"
                  aria-label="Consultar servicios de consultoría empresarial"
                >
                  <Users className="h-5 w-5 mr-3" />
                  Consultoría Empresarial
                </a>
              </div>
            </div>

            {/* Emergency Notice */}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;