import Cabecalho from "@/components/Cabecalho";
import Conteudo from "@/components/Conteudo";
import Menu from "@/components/Menu";
import Rodape from "@/components/Rodape";

export default function Page() {
  return (
    <div className="flex flex-col gap-4 p-4 h-screen">
      <Cabecalho titulo="Minha Página" subtitulo="Estou na pasta pages"  />
      <div className="flex flex-1 gap-4">
        <Menu />
        <Conteudo>Implementando chidren</Conteudo>
      </div>
      <Rodape />
    </div>
  );
}