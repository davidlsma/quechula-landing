export interface Servicio {
  id: string;
  nombre: string;
  descripcion: string;
  foto: string;
}

export const servicios: Servicio[] = [
  {
    id: 'coloracion',
    nombre: 'Coloración',
    descripcion: 'Mechas, balayage, color fantasía y coloración total. Técnica y creatividad para un resultado que brille y dure.',
    foto: 'photo-01.jpg',
  },
  {
    id: 'tratamientos',
    nombre: 'Tratamientos',
    descripcion: 'Recuperación capilar profunda: hidratación intensiva, keratina y más para devolver vida a tu cabello.',
    foto: 'photo-04.jpg',
  },
  {
    id: 'alisados',
    nombre: 'Alisados',
    descripcion: 'Alisado progresivo y definitivo con los mejores productos del mercado. Resultados duraderos y cabello sano.',
    foto: 'photo-07.jpg',
  },
  {
    id: 'cortes',
    nombre: 'Cortes',
    descripcion: 'Cortes personalizados según tu rostro y estilo. Desde lo clásico hasta la última tendencia.',
    foto: 'photo-10.jpg',
  },
];
