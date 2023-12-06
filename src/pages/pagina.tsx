import Cabecalho from "@/components/Cabecalho";
import "../app/globals.css";
import Conteudo from "@/components/Conteudo";
import Rodape from "@/components/Rodape";
import Menu from "@/components/Menu";

export default function Pagina() {
  return (
    <div className="flex flex-col h-screen p-5 gap-5 bg-black text-white">
      <Cabecalho titulo="Minha Página" subtitulo="Estou na pasta pages" />

      <div className="flex flex-1 gap-5">
        <Menu />
        <Conteudo>
            <button className="bg-blue-500 p-2 rounded-md">
                Teste
            </button>
        </Conteudo>
      </div>

      <Rodape textoEsquerda="Esquerda" textoDireita="Direita" />
    </div>
  );
}
