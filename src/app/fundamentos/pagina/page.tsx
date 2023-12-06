import Cabecalho from "@/components/Cabecalho";
import Conteudo from "@/components/Conteudo";
import Menu from "@/components/Menu";
import Pagina from "@/components/Pagina";
import Rodape from "@/components/Rodape";

export default function Page() {
  return (
    <Pagina titulo= "Minha Aplicação" subtitulo="Melhor app da Web!">
       <ul className="list-disc">
            <li>Ana</li>
            <li>Gustavo</li>
            <li>Rebeca</li>
            <li>Zico</li>
          </ul>
      </Pagina>
    
  );
}
