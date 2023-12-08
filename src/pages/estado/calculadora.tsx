import Pagina from "@/components/Pagina";
import { useState } from "react";

export default function Calculadora() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);

  return (
    <Pagina titulo="Pagina da calculadora" subtitulo="Calculadora desafio">
      <div className="flex flex-col gap-5">
        <div className="flex  gap-5">
          <input
            className="campo"
            min={0}
            max={10}
            type="number"
            onChange={(e) => setNumero1(+e.target.value)}
          />
          <input
            className="campo"
            min={0}
            max={10}
            type="number"
            onChange={(e) => setNumero2(+e.target.value)}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>
            {numero1} + {numero2} = {numero1 + numero2}
          </span>
          <span>
            {numero1} - {numero2} = {numero1 - numero2}
          </span>
          <span>
            {numero1} * {numero2} = {numero1 * numero2}
          </span>
          <span>
            {numero1} / {numero2} = {numero1 / numero2}
          </span>
        </div>
      </div>
    </Pagina>
  );
}
