import Pagina from "@/components/Pagina";

import { useState } from "react";
import { IconMinus, IconPlus } from "@tabler/icons-react";

export default function PaginaContador() {
  const [num, setNum] = useState(0) 
  const [delta, setDelta] = useState(1)


  // function increment() {
  //   setNum(num + 1);
  //   console.log(num);
  // }
  // function decrement() {
  //   setNum(num - 1);
  //   console.log(num);
  // }
  function incrementDelta() {
    setDelta(delta + 1); 
  }
  function decrementDelta() {
    setDelta(delta - 1); 
  }
  function increment() {
    setNum(num + delta); 
  }
  function decrement() {
    setNum(num - delta); 
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
        <div className="flex gap-5 ">
        <button className="bg-purple-400 rounded-full p-2 hover:bg-red-400" onClick={decrementDelta}>
            <IconMinus size={16} />
          </button>
          <span>{delta}</span>
          <button className="bg-purple-500 rounded-full p-2 hover:bg-blue-400" onClick={incrementDelta}>
            <IconPlus size={16}  />
          </button>
        </div>
      </div>
    </Pagina>
  );
}
