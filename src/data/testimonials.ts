export interface Testimonial {
  id: string;
  name: string;
  petName: string;
  petType: string;
  rating: number;
  text: string;
  image: string;
  imageAlt: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'María González',
    petName: 'Max',
    petType: 'Golden Retriever',
    rating: 5,
    text: 'Llevé a Max a PetsVet después de una operación de emergencia y el equipo fue increíble. Los doctores son súper jóvenes, profesionales y se nota que aman lo que hacen. Max se recuperó perfectamente.',
    image: '/images/hero-dog.jpg',
    imageAlt: 'Max, el golden retriever de María',
  },
  {
    id: '2',
    name: 'Roberto Sánchez',
    petName: 'Luna',
    petType: 'Gatita naranja',
    rating: 5,
    text: 'La Dra. Valeria es una crack. Mi Luna llegó muy malita y con mucho cariño y profesionalismo la recuperaron. Además el seguimiento por WhatsApp es un plus enorme para estar tranquilo.',
    image: '/images/hero-cat.jpg',
    imageAlt: 'Luna, la gatita de Roberto',
  },
  {
    id: '3',
    name: 'Sofía Martínez',
    petName: 'Rocky',
    petType: 'Bulldog Francés',
    rating: 5,
    text: 'El esquema de vacunación que nos dieron para Rocky es excelente. Me avisaron por WhatsApp de cada recordatorio y el servicio fue impecable. ¡100% recomendados en Texcoco!',
    image: '/images/hero-dog.jpg',
    imageAlt: 'Rocky el Bulldog Francés',
  },
  {
    id: '4',
    name: 'Fernanda Ruiz',
    petName: 'Mochi',
    petType: 'Persa',
    rating: 5,
    text: 'Nunca había visto una veterinaria tan bien organizada y moderna cerca del Rodeo. Mi Mochi odia ir al veterinario pero aquí lo trataron tan bien que hasta se calmó. ¡Gracias PetsVet!',
    image: '/images/hero-cat.jpg',
    imageAlt: 'Mochi el gato persa de Fernanda',
  },
  {
    id: '5',
    name: 'Carlos Herrera',
    petName: 'Toby',
    petType: 'Labrador',
    rating: 5,
    text: 'El Dr. Alejandro operó a Toby de la rodilla y en tiempo récord. La atención pre y post cirugía fue de primer nivel. Sin duda la mejor veterinaria en Texcoco y alrededores.',
    image: '/images/hero-dog.jpg',
    imageAlt: 'Toby el labrador de Carlos',
  },
];
