import { useState } from "react";
import "../../app/globals.css";
import Pagina from "@/components/Pagina";

export default function PaginaSemEstado() {
  // let numero = 0;
  //  const [numero, alterarNumero] = useState(0)
   const [numero, setNumero] = useState(0)

  function incrementar() {
    // numero += 1;
    setNumero(numero + 1)
    console.log(numero);
  }
  function decrementar() {
    // numero += 1;
    if(numero >= 1){ 
      setNumero(numero - 1)
    }
    console.log(numero);
  }

  return (
    <Pagina titulo="Sem Estado" subtitulo="Capítulo Estado">
      <div>
        <div>
          <span>Valor:</span>
          <span>{numero}</span>
        </div>
        
        <button className="bg-blue-500 p-2 rounded-x"  onClick={decrementar}>Decrementar</button>
        <button className="bg-blue-500 p-2 rounded-x"  onClick={incrementar}>Incrementar</button>
       
      </div>
    </Pagina>
  );
}
