export default function Cabecalho(props: any) {
  console.log(props)
  return (
    <div
      className={`flex flex-col justify-center items-center h-36 bg-purple-500 rounded-lg`}
    >
      <h1 className="text-3xl font-black">{props.titulo}</h1>
      <h1>{props.subtitulo}</h1>
    </div>
  );
}
