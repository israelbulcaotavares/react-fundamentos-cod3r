import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import Menu from "./Menu";
import Rodape from "./Rodape";

export default function Pagina(props: any) {
  return (
     
    <div className="flex flex-col gap-4 p-4 h-screen">
      <Cabecalho 
        titulo={props.titulo} 
        subtitulo={props.subtitulo}
        className='h-72 bg-gradient-to-r from-blue-700 to-zinc-900'
        />
      <div className="flex flex-1 gap-4">
        <Menu />
        <Conteudo>{props.children}</Conteudo>
      </div>
      <Rodape textoEsquerda="Feito com s2" textoDireita={`Desenvolvido em ${new Date().getFullYear()}`}/>
    </div>
  );
}
