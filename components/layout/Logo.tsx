import Image from "next/image";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="inline-flex items-center gap-2 rounded-md font-extrabold" aria-label="Сейлон — на главную">
      <Image src={light ? "/figma/logo-footer.png" : "/figma/logo-header.png"} alt="" width={42} height={42} className="size-10 object-contain" priority />
      <span className="text-[19px] tracking-[-.045em]">{light ? "Сэйлон" : "Saleon"}</span>
    </a>
  );
}
