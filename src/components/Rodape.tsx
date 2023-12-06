export default function Rodape(props: any) {
  console.log(props);
  return (
    <div className="
    flex 
    justify-around 
     items-center
      h-36 
      bg-cyan-600 rounded-lg text-3xl">
      <span>{props.textoEsquerda}</span>
      <span>{props.textoDireita}</span>
    </div>
  );
}
