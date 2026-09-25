import { Reveal } from "@/components/ui/Reveal";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { siteLinks } from "@/config/links";

export function CustomSection() {
  return (
    <section className="section-angle-top relative -my-10 overflow-hidden bg-[var(--forest-deep)] py-32 text-white">
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_12%_60%,#77d65b_0,transparent_22%),radial-gradient(circle_at_88%_30%,#26775e_0,transparent_20%)]"/>
      <div className="container-shell relative">
        <Reveal className="grid gap-10 lg:grid-cols-[1.05fr_.65fr] lg:items-end"><div><h2 className="section-title max-w-[850px]">Не нашли нужную функцию?<br />{" "}Добавим под ваш бизнес</h2><p className="mt-7 max-w-[650px] text-xl leading-relaxed text-white/65">Расскажите о задаче, обсудим решение и разработаем нужный сценарий, интеграцию или отдельную функцию</p></div><TrackedLink href={siteLinks.contact} event="custom_solution_click" variant="light" arrow className="justify-self-start lg:justify-self-end">Обсудить доработку</TrackedLink></Reveal>
      </div>
    </section>
  );
}
