import Pagina from "@/components/Pagina";
import { useState } from "react";

export default function PaginaCampoTexto() {
  const [valor, setValor] = useState("");
  return (
    <Pagina titulo="Campo de Texto" subtitulo="Capítulo Estado">
      <input className="campo" type="text" value={valor} />
    </Pagina>
  );
}
