import { Icon24Hours, Icon360View, IconBraces, IconCode, IconHome } from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <div className="flex flex-col justify-start w-72 bg-black p-2 gap-2">
      <span className="text-sm text-zinc-500 pl-3 pt-4 ">Estado</span>
      <MenuItem
        icone={<IconCode />}
        texto="Componente sem estado"
        url="/componente/basico"
        />
      <span className="text-sm text-zinc-500 pl-3 pt-4 ">Fundamentos</span>
      <MenuItem
        icone={<IconHome />}
        texto="Básico"
        url="/componente/basico"
        />
      <MenuItem
        icone={<IconHome />}
        texto="Titulo"
        url="/componente/titulo"
        />
        <span className="text-sm text-zinc-500 pl-3 pt-4"  >Componentes</span>
      <MenuItem
        icone={<Icon24Hours />}
        texto="Pagina #1"
        url="/fundamentos/pagina"
      />
      <MenuItem 
        icone={<Icon360View />} 
        texto="Pagina #2" 
        url="/pagina" />
    </div>
  );
}
