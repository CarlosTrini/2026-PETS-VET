export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  imageAlt: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 'consultas',
    title: 'Consultas Generales',
    description: 'Diagnóstico completo y atención personalizada para que tu mascota siempre esté en su mejor estado de salud.',
    icon: 'stethoscope',
    image: '/images/service-consultation.jpg',
    imageAlt: 'Veterinario realizando consulta a un beagle',
    features: ['Revisión física completa', 'Diagnóstico por especialistas', 'Atención sin cita previa', 'Seguimiento post-consulta'],
  },
  {
    id: 'vacunas',
    title: 'Vacunación',
    description: 'Esquemas de vacunación completos y personalizados para proteger a tu mascota de enfermedades graves.',
    icon: 'syringe',
    image: '/images/service-vaccine.jpg',
    imageAlt: 'Veterinaria aplicando vacuna a un perro blanco',
    features: ['Vacunas nacionales e importadas', 'Carnet de vacunación digital', 'Recordatorios automáticos', 'Vacunación en domicilio (consultar)'],
  },
  {
    id: 'cirugia',
    title: 'Cirugías',
    description: 'Intervenciones quirúrgicas con equipo moderno y el más alto estándar de seguridad para tu compañero.',
    icon: 'scissors',
    image: '/images/hero-dog.jpg',
    imageAlt: 'Quirófano veterinario moderno',
    features: ['Cirugías electivas y de urgencia', 'Anestesiología especializada', 'Monitoreo constante', 'Recuperación supervisada'],
  },
  {
    id: 'seguimiento',
    title: 'Seguimiento & Bienestar',
    description: 'Planes de salud preventiva y seguimiento continuo para mantener a tu mascota feliz y saludable todo el año.',
    icon: 'heart-pulse',
    image: '/images/hero-cat.jpg',
    imageAlt: 'Veterinaria revisando ficha médica con dueño de mascota',
    features: ['Historial médico digital', 'Desparasitación', 'Control de peso y nutrición', 'Asesoría por WhatsApp'],
  },
  {
    id: 'tienda',
    title: 'Tienda Especializada',
    description: 'Todo lo que tu mascota necesita: alimentos premium, ropa, accesorios y juguetes seleccionados por nuestros expertos.',
    icon: 'shopping-bag',
    image: '/images/hero-dog.jpg',
    imageAlt: 'Productos para mascotas en nuestra tienda',
    features: ['Alimentos premium y terapéuticos', 'Ropa para todas las tallas', 'Accesorios y juguetes', 'Asesoría en nutrición'],
  },
];
