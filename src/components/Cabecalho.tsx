interface CabecalhoProps {
  titulo: string, 
  subtitulo: string,
  className: string 
}

export default function Cabecalho(props: CabecalhoProps) {
  console.log(props);
  return (
    <div
      className={`
      flex flex-col 
      justify-center    
      px-5 
      ${props.className ?? ''}`}
    >
      <h1 className="text-xl font-black">{props.titulo}</h1>
      <h1 className="text-sm text-zinc-400">{props.subtitulo}</h1>
    </div>
  );
}
