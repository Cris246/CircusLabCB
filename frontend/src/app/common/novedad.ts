export interface Novedad {
  _id: string
  titulo: string
  contenido: string
  media: string
  __v?: number
}
export interface Tutorial{
  _id: string
  titulo: string
  contenido: string
  media: string
  dificultad: 'principiante' | 'media' | 'dificil';
}

