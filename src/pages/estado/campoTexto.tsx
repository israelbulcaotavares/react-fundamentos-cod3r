import Pagina from "@/components/Pagina";
import { useState } from "react";

export default function PaginaCampoTexto() {
  const [valor, setValor] = useState('');
  // const [valor, setValor] = useState(0);

  function alterar() {
    setValor("Maria");
  }
  // function alterar() {
  //   setValor(Math.random());
  // }

  function alterarValor(e: any){
    console.log(e.target.value) //mostra o que aparece no console (inspecionar no chrome)
    setValor(e.target.value) //faz aparecer as palavras no input
  }

  return (
    <Pagina titulo="Campo de Texto" subtitulo="Capítulo Estado">
      <div className="flex  flex-col items-center  gap-5">
        <input 
          type="text" 
          className="campo" 
          value={valor}
          onChange={alterarValor}
          />
        <button 
          className="botao" 
          onClick={alterar}>
          Alterar
        </button>
        <span>{valor}</span>
      </div>
    </Pagina>
  );
}
