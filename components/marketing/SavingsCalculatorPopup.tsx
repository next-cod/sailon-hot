"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, Check, Sparkles, X } from "lucide-react";

const CALCULATOR_AFTER_MS = 60 * 1000;
const START_AFTER_MS = 5 * 60 * 1000;
const CALCULATOR_SESSION_KEY = "saleon-marketing-calculator-shown-v3";
const TRIAL_SESSION_KEY = "saleon-marketing-trial-shown-v2";
const START_SESSION_KEY = "saleon-marketing-start-shown-v2";
const WORK_MINUTES_PER_MONTH = 160 * 60;

type PopupKind = "calculator" | "trial" | "start";

const money = new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 0 });

function rangeStyle(value: number, min: number, max: number): CSSProperties {
  return { "--slider-progress": `${((value - min) / (max - min)) * 100}%` } as CSSProperties;
}

function getPlan(monthlyRequests: number) {
  if (monthlyRequests <= 300) return { name: "Старт", price: 5_900 };
  if (monthlyRequests <= 800) return { name: "Продажи", price: 11_900 };
  return { name: "Команда", price: 24_900 };
}

type SavingsCalculatorPopupProps = { onCreateBot: () => void };

export function SavingsCalculatorPopup({ onCreateBot }: SavingsCalculatorPopupProps) {
  const [activePopup, setActivePopup] = useState<PopupKind | null>(null);
  const [monthlyRequests, setMonthlyRequests] = useState(900);
  const [minutesPerRequest, setMinutesPerRequest] = useState(12);
  const [managerSalary, setManagerSalary] = useState(60_000);
  const popupQueue = useRef<PopupKind[]>([]);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const showPopup = useCallback((kind: PopupKind) => {
    setActivePopup((current) => {
      if (current === kind || popupQueue.current.includes(kind)) return current;
      if (current) {
        popupQueue.current.push(kind);
        return current;
      }
      return kind;
    });
  }, []);

  const close = useCallback(() => {
    setActivePopup(popupQueue.current.shift() ?? null);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const preview = process.env.NODE_ENV === "development"
      ? params.get("popup") || (params.get("calculator") === "1" ? "calculator" : null)
      : null;

    if (preview === "calculator" || preview === "trial" || preview === "start") {
      const previewTimer = window.setTimeout(() => showPopup(preview), 0);
      return () => window.clearTimeout(previewTimer);
    }

    const cleanups: Array<() => void> = [];
    const scheduleVisibleTimer = (kind: PopupKind, delay: number, sessionKey: string) => {
      if (window.sessionStorage.getItem(sessionKey) === "1") return;
      let remaining = delay;
      let startedAt = 0;
      let timer: number | undefined;

      const show = () => {
        timer = undefined;
        window.sessionStorage.setItem(sessionKey, "1");
        showPopup(kind);
      };
      const start = () => {
        if (document.hidden || timer !== undefined) return;
        startedAt = performance.now();
        timer = window.setTimeout(show, remaining);
      };
      const pause = () => {
        if (timer === undefined) return;
        window.clearTimeout(timer);
        remaining = Math.max(0, remaining - (performance.now() - startedAt));
        timer = undefined;
      };
      const handleVisibility = () => {
        if (document.hidden) pause();
        else if (remaining <= 0) show();
        else start();
      };

      start();
      document.addEventListener("visibilitychange", handleVisibility);
      cleanups.push(() => {
        if (timer !== undefined) window.clearTimeout(timer);
        document.removeEventListener("visibilitychange", handleVisibility);
      });
    };

    scheduleVisibleTimer("calculator", CALCULATOR_AFTER_MS, CALCULATOR_SESSION_KEY);
    scheduleVisibleTimer("start", START_AFTER_MS, START_SESSION_KEY);
    return () => cleanups.forEach((cleanup) => cleanup());
  }, [showPopup]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (process.env.NODE_ENV === "development" && (params.has("popup") || params.get("calculator") === "1")) return;
    if (window.sessionStorage.getItem(TRIAL_SESSION_KEY) === "1") return;

    const sectionHeading = document.querySelector('[data-node-id="2007:118"], .responsive-landing #pricing');
    if (!sectionHeading) return;

    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      window.sessionStorage.setItem(TRIAL_SESSION_KEY, "1");
      showPopup("trial");
      observer.disconnect();
    }, { threshold: 0.15, rootMargin: "0px 0px -18% 0px" });

    observer.observe(sectionHeading);
    return () => observer.disconnect();
  }, [showPopup]);

  useEffect(() => {
    if (!activePopup) return;
    const previousOverflow = document.body.style.overflow;
    const previousScrollBehavior = document.documentElement.style.scrollBehavior;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>("button, input, a[href]"));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      // A popup can appear while the visitor is reading any part of the page.
      // Returning focus must never pull that person to the element that had focus
      // before the popup appeared (for example, a header navigation item).
      previousFocus?.focus({ preventScroll: true });
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(scrollX, scrollY);
      document.documentElement.style.scrollBehavior = previousScrollBehavior;
    };
  }, [activePopup, close]);

  const result = useMemo(() => {
    const plan = getPlan(monthlyRequests);
    const managerCost = Math.round((monthlyRequests * minutesPerRequest / WORK_MINUTES_PER_MONTH) * managerSalary);
    const monthlyDifference = managerCost - plan.price;
    return {
      ...plan,
      managerCost,
      monthlyDifference,
      yearlyDifference: Math.abs(monthlyDifference * 12),
      routineHours: Math.round(monthlyRequests * minutesPerRequest / 60),
    };
  }, [managerSalary, minutesPerRequest, monthlyRequests]);

  const createBot = () => {
    popupQueue.current = [];
    setActivePopup(null);
    window.setTimeout(onCreateBot, 120);
  };

  if (!activePopup) return null;
  const isCalculator = activePopup === "calculator";
  const promo = activePopup === "trial"
    ? {
        badge: "14 дней бесплатно",
        title: "Проверьте Сэйлон на реальных диалогах",
        text: "Подключите первый канал и посмотрите, как AI-бот отвечает вашим клиентам.",
        facts: ["10 000 кредитов уже на аккаунте"],
        cta: "Начать бесплатный тест",
      }
    : {
        badge: "Можно запускаться",
        title: "Настройте своего AI-бота",
        text: "Добавьте знания, выберите характер и первый сценарий — Сэйлон возьмёт входящие обращения в работу.",
        facts: ["14 дней бесплатно", "Настройка без кода"],
        cta: "Создать AI-бота",
      };

  return createPortal(
    <div className="savings-popup-backdrop" onMouseDown={(event) => event.target === event.currentTarget && close()}>
      <div className={`savings-popup${isCalculator ? "" : " savings-popup--promo"}`} ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="marketing-popup-title">
        <button ref={closeRef} className="savings-popup__close" type="button" aria-label="Закрыть окно" onClick={close}>
          <X size={21} aria-hidden="true" />
        </button>

        {isCalculator ? (
          <>
            <div className="savings-popup__heading">
              <h2 id="marketing-popup-title">Посчитайте стоимость ручных переписок</h2>
              <p>Укажите ваш поток и время менеджера — сравним его с подходящим тарифом Сэйлона.</p>
            </div>

            <div className="savings-popup__controls">
              <label className="savings-popup__control">
                <span><b>Обращений в месяц</b><output>{money.format(monthlyRequests)}</output></span>
                <input type="range" min="100" max="3000" step="50" value={monthlyRequests} style={rangeStyle(monthlyRequests, 100, 3000)} onChange={(event) => setMonthlyRequests(Number(event.target.value))} />
                <small>Входящие сообщения, заявки и чаты</small>
              </label>
              <label className="savings-popup__control">
                <span><b>Минут менеджера на обращение</b><output>{minutesPerRequest} мин</output></span>
                <input type="range" min="3" max="30" step="1" value={minutesPerRequest} style={rangeStyle(minutesPerRequest, 3, 30)} onChange={(event) => setMinutesPerRequest(Number(event.target.value))} />
                <small>Среднее время на чтение, ответ и уточнения</small>
              </label>
              <label className="savings-popup__control">
                <span><b>Зарплата менеджера в месяц</b><output>{money.format(managerSalary)} ₽</output></span>
                <input type="range" min="35000" max="150000" step="5000" value={managerSalary} style={rangeStyle(managerSalary, 35000, 150000)} onChange={(event) => setManagerSalary(Number(event.target.value))} />
                <small>Оклад с бонусами, до налогов</small>
              </label>
            </div>

            <div className="savings-popup__result" aria-live="polite">
              <div><span>Работа менеджера</span><strong>≈ {money.format(result.managerCost)} ₽ / мес</strong></div>
              <div><span>Сэйлон · тариф «{result.name}»</span><strong>{money.format(result.price)} ₽ / мес</strong></div>
              <div className="savings-popup__total">
                <span>{result.monthlyDifference >= 0 ? "Потенциальная разница за год" : "Доплата за автоматизацию за год"}</span>
                <strong>{money.format(result.yearlyDifference)} ₽</strong>
              </div>
              <p>Около {money.format(result.routineHours)} ч работы в месяц приходится на переписки.</p>
            </div>

            <button className="savings-popup__cta" type="button" onClick={createBot}>Создать AI-бота <ArrowRight size={19} aria-hidden="true" /></button>
            <p className="savings-popup__note">Расчёт ориентировочный: 160 рабочих часов в месяц и текущая тарифная сетка Сэйлона. Настроить бота самостоятельно можно бесплатно.</p>
          </>
        ) : (
          <div className="marketing-promo">
            <span className="marketing-promo__badge"><Sparkles size={18} aria-hidden="true" />{promo.badge}</span>
            <h2 id="marketing-popup-title">{promo.title}</h2>
            <p className="marketing-promo__text">{promo.text}</p>
            <div className="marketing-promo__facts">
              {promo.facts.map((fact) => <span key={fact}><Check size={17} aria-hidden="true" />{fact}</span>)}
            </div>
            <button className="savings-popup__cta marketing-promo__cta" type="button" onClick={createBot}>{promo.cta} <ArrowRight size={19} aria-hidden="true" /></button>
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
}
