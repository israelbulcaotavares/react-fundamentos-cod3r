import Pagina from "@/components/Pagina";
import { IconBrandReact } from "@tabler/icons-react";

export default function Page() {
  return (
    <Pagina titulo="Fundamentos React" subtitulo="Bem vindo ao mundo do react">
      <div
        className={`
        flex flex-col justify-center items-center
        w-full h-full text-zinc-500
      `}
      >
        <IconBrandReact size={200} stroke={1} />
        <span className="font-black">Curso fundamentos de React</span>
        <span className="text-sm">Aqui você vai aprender fundamentos sólidos</span>
      </div>
    </Pagina>
  );
}
