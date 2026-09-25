"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const ExactFigmaPage = dynamic(() => import("./ExactFigmaPage"), { ssr: false });
const InteractiveFooter = dynamic(
  () => import("./InteractiveFooter").then((module) => module.InteractiveFooter),
  { ssr: false },
);
const FunctionalLayer = dynamic(
  () => import("./FunctionalLayer").then((module) => module.FunctionalLayer),
  { ssr: false },
);

const SavingsCalculatorPopup = dynamic(
  () => import("@/components/marketing/SavingsCalculatorPopup").then((module) => module.SavingsCalculatorPopup),
  { ssr: false },
);

const DESIGN_WIDTH = 1700;
const DESIGN_HEIGHT = 13584;
const DESKTOP_QUERY = "(min-width: 1360px)";

function getCanvasScale() {
  return Math.min(document.documentElement.clientWidth / DESIGN_WIDTH, 1.25);
}

const links = [
  { label: "Как отвечает", href: "#how", x: 496, y: 17, w: 146, h: 56 },
  { label: "Настройка", href: "#features", x: 646, y: 17, w: 132, h: 56 },
  { label: "Сценарии", href: "#demo", x: 780, y: 17, w: 86, h: 56 },
  { label: "Тарифы", href: "#pricing", x: 900, y: 17, w: 100, h: 56 },
  { label: "Вопросы", href: "#faq", x: 1007, y: 17, w: 74, h: 56 },
  { label: "Попробовать бесплатно", href: "#pricing", x: 1267, y: 20, w: 222, h: 50, targetId: "2013:175" },
  { label: "Попробовать бесплатно", href: "#pricing", x: 210, y: 597, w: 299, h: 59, targetId: "2013:11" },
  { label: "Поразговаривать с ботом", href: "#demo", x: 551, y: 589, w: 248, h: 77, targetId: "2070:3" },
  { label: "Попробовать бесплатно", href: "#pricing", x: 516, y: 850, w: 273, h: 73, targetId: "2158:2" },
  { label: "Попробовать бесплатно", href: "#pricing", x: 212, y: 12820, w: 290, h: 54, targetId: "2013:10" },
];

const anchors = [
  { id: "how", y: 2747 },
  { id: "features", y: 4609 },
  { id: "demo", y: 5427 },
  { id: "pricing", y: 10577 },
  { id: "faq", y: 11537 },
  { id: "team", y: 9650 },
  { id: "custom", y: 9140 },
];

const anchorPositions: Record<string, number> = { "#top": 0, ...Object.fromEntries(anchors.map(({ id, y }) => [`#${id}`, y])) };

const headerLinks = [
  { ru: "Как отвечает", en: "How it responds", href: "#how" },
  { ru: "Настройка", en: "Setup", href: "#features" },
  { ru: "Сценарии", en: "Scenarios", href: "#demo" },
  { ru: "Тарифы", en: "Pricing", href: "#pricing" },
  { ru: "Вопросы", en: "Questions", href: "#faq" },
];

const revealNodeIds = [
  "2007:3", "2070:23", "2070:22", "2007:4", "2013:5", "2143:45",
  "2007:37", "2013:20", "2007:49", "2013:27", "2013:29", "2013:31", "2013:33", "2013:35",
  "2007:62", "2013:38", "2007:85", "2077:37", "2007:103", "2013:57", "2007:118",
  "2007:135", "2013:84", "2007:156", "2007:180", "2013:112", "2007:221", "2013:135",
  "2016:992", "2016:994", "2016:1005", "2016:1016", "2016:1027", "2007:244", "2013:143", "2007:276", "2013:162",
];

export function ExactFigmaCanvas() {
  const [scale, setScale] = useState(1);
  const language = "ru" as const;
  const [headerCompact, setHeaderCompact] = useState(false);
  const [marketingReady, setMarketingReady] = useState(false);
  const [desktopActive, setDesktopActive] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let frame = 0;
    const updateScale = () => {
      frame = 0;
      const nextScale = getCanvasScale();
      setScale((currentScale) => currentScale === nextScale ? currentScale : nextScale);
    };
    const scheduleScaleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScale);
    };
    updateScale();
    window.addEventListener("resize", scheduleScaleUpdate, { passive: true });
    return () => {
      window.removeEventListener("resize", scheduleScaleUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const query = window.matchMedia(DESKTOP_QUERY);
    const update = () => setDesktopActive(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useLayoutEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    if (window.location.hash) window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    return () => { window.history.scrollRestoration = previousScrollRestoration; };
  }, []);

  useEffect(() => {
    const updateHeader = () => setHeaderCompact((current) => {
      const compact = window.scrollY > 36;
      return current === compact ? current : compact;
    });
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    const enableMarketing = () => setMarketingReady(true);
    const idleId = window.requestIdleCallback?.(enableMarketing, { timeout: 1200 });
    const timeoutId = idleId === undefined ? window.setTimeout(enableMarketing, 650) : undefined;
    return () => {
      if (idleId !== undefined) window.cancelIdleCallback?.(idleId);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, []);

  const navigateTo = useCallback((href: string) => {
    const target = anchorPositions[href];
    if (target === undefined) return;
    const currentScale = getCanvasScale();
    window.scrollTo({ top: Math.max(0, target * currentScale - 68), behavior: "smooth" });
  }, []);

  useEffect(() => {
    const root = canvasRef.current;
    if (!root) return;
    const nodes = revealNodeIds
      .map((id) => root.querySelector<HTMLElement>(`[data-node-id="${id}"]`))
      .filter((node): node is HTMLElement => Boolean(node));
    nodes.forEach((node, index) => {
      node.classList.add("figma-reveal");
      node.style.setProperty("--reveal-delay", `${Math.min(index % 5, 4) * 55}ms`);
    });
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const setInteracting = (targetId: string | undefined, active: boolean) => {
    if (!targetId) return;
    canvasRef.current?.querySelector<HTMLElement>(`[data-node-id="${targetId}"]`)?.classList.toggle("is-interacting", active);
  };

  return (
    <main
        className="figma-page-shell desktop-landing"
        style={{ width: DESIGN_WIDTH * scale, height: DESIGN_HEIGHT * scale }}
      >
      <header className={`sticky-site-header${headerCompact ? " is-compact" : ""}`}>
        <div className="sticky-site-header__inner">
          <button type="button" className="sticky-site-header__brand" aria-label={language === "ru" ? "Сэйлон — наверх" : "Saleon — back to top"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <Image src="/figma/logo-header.png" alt="" width={52} height={52} priority />
            <strong>{language === "ru" ? "Сэйлон" : "Saleon"}</strong>
          </button>
          <nav className="sticky-site-header__nav" aria-label={language === "ru" ? "Основная навигация" : "Main navigation"}>
            {headerLinks.map((item) => (
              <button key={item.href} type="button" onClick={() => navigateTo(item.href)}>
                {language === "ru" ? item.ru : item.en}
              </button>
            ))}
          </nav>
          <div className="sticky-site-header__actions">
            <button type="button" className="sticky-site-header__cta" onClick={() => window.dispatchEvent(new Event("saleon:open-trial"))}>{language === "ru" ? "Попробовать бесплатно" : "Try for free"}</button>
          </div>
        </div>
      </header>
      {marketingReady && desktopActive && <SavingsCalculatorPopup onCreateBot={() => window.dispatchEvent(new Event("saleon:open-trial"))} />}
      <div
        ref={canvasRef}
        className="figma-page-canvas"
        style={{ width: DESIGN_WIDTH, height: DESIGN_HEIGHT, transform: `scale(${scale})` }}
      >
        {desktopActive && <ExactFigmaPage language={language} />}
        {desktopActive && <FunctionalLayer rootRef={canvasRef} language={language} />}
        {desktopActive && anchors.map((anchor) => (
          <span key={anchor.id} id={anchor.id} className="site-anchor absolute left-0" style={{ top: anchor.y }} />
        ))}
        {desktopActive && links.slice(6).map((link, index) => (
          <button
            key={`${link.label}-${index}`}
            type="button"
            aria-label={link.label}
            className="absolute z-[100] block rounded-[8px] border-0 bg-transparent p-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#26775e]"
            style={{ left: link.x, top: link.y, width: link.w, height: link.h }}
            onClick={() => navigateTo(link.href)}
            onMouseEnter={() => setInteracting(link.targetId, true)}
            onMouseLeave={() => setInteracting(link.targetId, false)}
            onFocus={() => setInteracting(link.targetId, true)}
            onBlur={() => setInteracting(link.targetId, false)}
          />
        ))}
        {desktopActive && <InteractiveFooter language={language} onNavigate={navigateTo} />}
      </div>
    </main>
  );
}
