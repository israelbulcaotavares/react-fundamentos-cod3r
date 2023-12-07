import { Icon24Hours, Icon360View } from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <div className="flex flex-col justify-start items-center w-52 bg-black p-2 gap-2">
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
