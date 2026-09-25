import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const team = [
  ["Татьяна", "Стратегия и маркетинг", "/figma-exact/tatyana.png", "50% 34%"],
  ["Игорь", "Продукт и разработка", "/figma-exact/igor.jpg", "50% 26%"],
  ["Дима", "Дизайн и веб", "/figma-exact/dima.png", "50% 34%"],
  ["Арина", "Контент и коммуникации", "/figma-exact/arina.png", "50% 54%"],
] as const;

export function TeamSection() {
  return (
    <section id="team" className="section-space bg-[var(--cream)] pt-36">
      <div className="container-shell">
        <Reveal className="grid gap-6 lg:grid-cols-[1fr_.55fr] lg:items-end"><h2 className="section-title text-[var(--leaf)]">Кто стоит<br />{" "}за Сэйлоном?</h2><p className="text-xl font-semibold text-[var(--muted)]">Четыре разных взгляда, один Сэйлон</p></Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {team.map(([name,role,image,position],index)=><Reveal key={name} delay={index*.05}><article className="group overflow-hidden rounded-2xl bg-[var(--leaf)] text-white"><div className="relative aspect-[.8] overflow-hidden"><Image src={image} alt={`Портрет: ${name}`} fill quality={90} loading="lazy" sizes="(max-width:639px) calc(100vw - 28px), (max-width:1023px) 50vw, 25vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" style={{ objectPosition: position }}/><div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--forest-deep)]/70 to-transparent"/><span className="absolute bottom-4 left-4 rounded-md bg-[var(--forest-deep)]/75 px-3 py-2 text-xs font-bold text-[var(--signal)] backdrop-blur">{role}</span></div><div className="flex items-center justify-between px-6 py-5"><h3 className="text-2xl font-extrabold">{name}</h3><ArrowDownRight size={19}/></div></article></Reveal>)}
        </div>
      </div>
    </section>
  );
}
