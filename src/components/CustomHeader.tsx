import type{ Props } from '../interfaces/custom-header';

export const CustomHeader = ({titulo, subtitulo}:Props) => {
  return (
    <div className="content-center">
      <h1> {titulo} </h1>
      <p> {subtitulo} </p>
    </div>
  )
}
