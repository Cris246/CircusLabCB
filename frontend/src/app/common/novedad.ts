export interface Novedad {
  _id: string
  titulo: string
  contenido: string
  media: string
  visitas:number
  __v?: number
}
export interface Tutorial{
  _id: string
  titulo: string
  contenido: string
  media: string
  dificultad: 'principiante' | 'media' | 'dificil';
}
export interface Usuario {
  _id: string
  usuario: string
  password: string
  rol: string
  __v?: number
}
