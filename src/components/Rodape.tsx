export default function Rodape(props: any) {
  console.log(props);
  return (
    <div
      className="
     flex 
      justify-between 
     items-center
      h-16 
      text-base
      px-10
      border-t
      bg-zinc-900
      border-zinc-800 
      text-zinc-500
      "
    >
      <span>{props.textoEsquerda}</span>
      <span>{props.textoDireita}</span>
    </div>
  );
}
