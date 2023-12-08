import Pagina from "@/components/Pagina";
import "../../app/globals.css";
import { useState } from "react";
import { IconMinus, IconPlus } from "@tabler/icons-react";

export default function PaginaContador() {
  const [num, setNum] = useState(0);

  function increment() {
    setNum(num + 1);
    console.log(num);
  }
  function decrement() {
    setNum(num - 1);
    console.log(num);
  }

  return (
    <Pagina titulo="Contador" subtitulo="Capítulo Estado">
      <div className="flex flex-col gap-5 justify-center items-center w-full h-full">
        <div className="text-7xl font-black">{num}</div>
        <div className="flex gap-5">
          <button className="bg-red-500 rounded-full p-4 hover:bg-red-400" onClick={decrement}>
            <IconMinus size={30} />
          </button>
          <button className="bg-blue-500 rounded-full p-4 hover:bg-blue-400" onClick={increment}>
            <IconPlus size={30}  />
          </button>
        </div>
      </div>
    </Pagina>
  );
}
