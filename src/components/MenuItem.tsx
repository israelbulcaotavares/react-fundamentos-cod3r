import Link from "next/link";

interface MenuItemProps {
  texto: string;
  url: string;
  icone: any;
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <Link
      href={props.url}
      className="
      flex items-center gap-2 px-4
      py-2 text-base w-full rounded-md
      hover:bg-zinc-800
      "
    >
      <span>{props.icone}</span>
      <span>{props.texto}</span>
    </Link>
  );
}
