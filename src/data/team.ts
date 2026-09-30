export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  isOwner: boolean;
  image: string;
  imageAlt: string;
}

export const team: TeamMember[] = [
  {
    id: 'alejandro',
    name: 'Dr. Alejandro Reyes',
    role: 'Director Médico & Co-fundador',
    specialty: 'Cirugía y Medicina Interna',
    isOwner: true,
    image: '/images/team-owners.jpg',
    imageAlt: 'Dr. Alejandro Reyes, director médico de PetsVet',
  },
  {
    id: 'valeria',
    name: 'Dra. Valeria Torres',
    role: 'Directora Clínica & Co-fundadora',
    specialty: 'Dermatología y Nutrición Animal',
    isOwner: true,
    image: '/images/team-owners.jpg',
    imageAlt: 'Dra. Valeria Torres, directora clínica de PetsVet',
  },
  {
    id: 'equipo',
    name: 'Nuestro Equipo',
    role: '5 Veterinarias especializadas',
    specialty: 'Consulta general, vacunación y bienestar',
    isOwner: false,
    image: '/images/team-group.jpg',
    imageAlt: 'Equipo de veterinarias de PetsVet',
  },
];
