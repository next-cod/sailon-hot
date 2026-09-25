import type { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, copy, align = "left" }: { eyebrow: string; title: ReactNode; copy?: ReactNode; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>
      <span className={`eyebrow ${align === "center" ? "justify-center before:hidden" : ""}`}>{eyebrow}</span>
      <h2 className="section-title balance mt-5">{title}</h2>
      {copy && <p className="muted pretty mt-6 max-w-3xl text-lg leading-relaxed">{copy}</p>}
    </div>
  );
}
