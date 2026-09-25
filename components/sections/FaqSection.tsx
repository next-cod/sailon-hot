import { Plus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { faqItems } from "@/content/site-content";

export function FaqSection() {
  return (
    <section id="faq" className="section-space bg-white">
      <div className="container-shell grid gap-12 lg:grid-cols-[.62fr_1.38fr]">
        <Reveal><h2 className="section-title max-w-[370px]">Что обычно важно уточнить до теста</h2></Reveal>
        <div className="border-t border-[var(--line)]">
          {faqItems.map(([question, answer], index) => <Reveal key={question} delay={index * .025}><details className="group border-b border-[var(--line)] py-1"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 text-xl font-extrabold"><span>{question}</span><Plus size={20} className="shrink-0 transition-transform group-open:rotate-45"/></summary><p className="muted max-w-2xl pb-6 pr-8 text-lg leading-relaxed">{answer}</p></details></Reveal>)}
        </div>
      </div>
    </section>
  );
}
