export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    id: '1',
    question: '¿Necesito cita previa para llevar a mi mascota?',
    answer: 'No es necesario, ¡somos una clínica de puertas abiertas! Atendemos sin cita de lunes a domingo de 10:00 am a 7:00 pm. Sin embargo, para cirugías programadas o consultas especializadas te recomendamos agendar con anticipación vía WhatsApp para garantizar tu lugar.',
  },
  {
    id: '2',
    question: '¿Atienden todo tipo de mascotas?',
    answer: 'Principalmente atendemos perros y gatos. Nuestro equipo está especializado en pequeñas especies. Si tienes una mascota exótica, escríbenos por WhatsApp y con gusto te orientamos.',
  },
  {
    id: '3',
    question: '¿Cuentan con servicio de urgencias?',
    answer: 'Sí. Durante nuestro horario de 10:00 am a 7:00 pm atendemos urgencias veterinarias. Para casos fuera de horario, contáctanos por WhatsApp y te orientamos sobre la acción a tomar.',
  },
  {
    id: '4',
    question: '¿Ofrecen asesoría por WhatsApp?',
    answer: '¡Sí! Es uno de nuestros servicios favoritos. Si tienes dudas sobre la salud de tu mascota, síntomas preocupantes o seguimiento post-consulta, escríbenos al WhatsApp y uno de nuestros veterinarios te responderá a la brevedad.',
  },
  {
    id: '5',
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos efectivo, tarjeta de débito y crédito (Visa, Mastercard), transferencias SPEI y pagos con CoDi. Pregunta en caja por nuestros planes de pago para tratamientos de mayor costo.',
  },
  {
    id: '6',
    question: '¿Dónde se ubican exactamente?',
    answer: 'Estamos en Blvd. Nezahualcóyotl 412, Col. San Sebastián, muy cerca del Rodeo Texcoco, en Texcoco de Mora, Estado de México. Puedes encontrarnos en Google Maps buscando "PetsVet Texcoco" o contactarnos por WhatsApp para indicaciones precisas.',
  },
];
