"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { legalDetails } from "@/config/legal-details";

type Language = "ru" | "en";
type BotChatMessage = { author: "bot" | "visitor"; text: string };

const journeyStages = [
  {
    name: "Интерес",
    goal: "Понять задачу",
    description: "Разобраться, что человек ищет и насколько срочно.",
    instruction: "Задать один точный вопрос — без длинной анкеты",
    knowledge: "Услуги / форматы / базовые условия",
    action: "Предложить подходящий следующий шаг",
    client: "Хочу попробовать, но пока не понимаю, какой формат выбрать",
    answer: "Расскажите, что для вас важнее: начать спокойно или быстро увидеть результат? Подберу вариант под вашу задачу",
  },
  {
    name: "Выбор",
    goal: "Помочь сравнить",
    description: "Понять критерии выбора и предложить подходящий вариант.",
    instruction: "Уточнить бюджет, формат и главное ограничение",
    knowledge: "Тарифы / отличия / доступные варианты",
    action: "Сузить выбор до двух решений",
    client: "Сравниваю два варианта и не понимаю, какой мне подойдёт",
    answer: "Сравню их по вашей задаче. Что важнее: быстрее запуститься или получить больше возможностей?",
  },
  {
    name: "Сомнение",
    goal: "Снять сомнение",
    description: "Понять причину паузы и ответить без давления.",
    instruction: "Разобрать одно сомнение конкретными фактами",
    knowledge: "Гарантии / ограничения / реальные условия",
    action: "Вернуть человека к решению",
    client: "Переживаю, что это не сработает именно в нашем случае",
    answer: "Понимаю. Давайте проверим на ваших обращениях: покажу, что бот сможет закрыть, а где подключится менеджер",
  },
  {
    name: "Действие",
    goal: "Довести до шага",
    description: "Помочь оформить запись, заявку, заказ или встречу.",
    instruction: "Предложить конкретное действие и удобное время",
    knowledge: "Свободные слоты / условия / контакты",
    action: "Зафиксировать заявку",
    client: "Хорошо, готов попробовать. Что нужно сделать?",
    answer: "Создам тестовый доступ и помогу подключить первый канал. На какой номер отправить данные?",
  },
];

const characters = [
  { name: "Цветочный магазин", tone: "мягкий / заботливый", answer: "Конечно. Подскажите, для кого букет и какое настроение хочется передать? Соберу 2–3 спокойных варианта в вашем бюджете" },
  { name: "Фитнес-зал", tone: "энергичный / поддерживающий", answer: "Отличный старт! Какая цель сейчас важнее: набрать форму, стать сильнее или вернуть регулярность? Подберу подходящий формат" },
  { name: "Автосервис", tone: "прямой / спокойный", answer: "Понял. Напишите марку, модель и что именно происходит с машиной. Сориентирую по диагностике и ближайшему времени" },
  { name: "Агентство недвижимости", tone: "сдержанный / тактичный", answer: "Подскажите район, бюджет и цель покупки. Отберу подходящие варианты и уточню важные условия до просмотра" },
];

const controlCardGroups = [
  ["2013:57", "2013:58", "2003:309", "2003:310", "2003:311", "2007:105", "2007:106"],
  ["2013:59", "2013:60", "2003:317", "2090:7", "2090:8", "2007:107", "2007:108"],
  ["2013:61", "2013:62", "2003:325", "2003:326", "2007:109", "2007:110"],
  ["2013:63", "2013:64", "2003:332", "2003:333", "2003:334", "2003:335", "2007:111", "2007:112"],
] as const;

const scenarios = [
  {
    name: "Компьютерный клуб", stage: "Выбор времени", tone: "быстрый / свой человек", goal: "Довести до брони",
    messages: ["Есть места сегодня после десяти?", "Да. Вас сколько и хотите общий зал или буткемп? Проверю подходящие места", "Нас четверо, лучше рядом", "Есть 4 места рядом с 22:30. Зафиксировать бронь на два часа?"],
    note: "Для каждого сценария свои правила разговора. Меняются цель, характер и следующий шаг",
  },
  {
    name: "Салон красоты", stage: "Подбор услуги", tone: "заботливый / уверенный", goal: "Довести до записи",
    messages: ["Хочу освежить цвет, но не знаю, что выбрать", "Подскажите длину волос и желаемый результат. Помогу подобрать услугу", "Волосы до плеч, хочется натурально", "Подойдёт мягкое тонирование. Есть окно завтра в 18:00, записать вас?"],
    note: "Бот уточняет пожелания, помогает выбрать услугу и предлагает свободное время",
  },
  {
    name: "Падел", stage: "Сбор команды", tone: "живой / спортивный", goal: "Забронировать корт",
    messages: ["Можно поиграть в субботу утром?", "Да. Сколько вас будет и нужен ли тренер?", "Нас четверо, тренер не нужен", "Есть свободный корт в 10:30. Забронировать на полтора часа?"],
    note: "Сценарий учитывает состав игроков, инвентарь, тренера и доступные слоты",
  },
  {
    name: "Сложная продажа", stage: "Квалификация", tone: "спокойный / экспертный", goal: "Подготовить встречу",
    messages: ["Нужна интеграция с нашей CRM", "Уточню задачу: какая CRM и какие данные должны передаваться?", "Bitrix24, сделки и история диалогов", "Понял. Подготовлю контекст и предложу время разговора с техническим специалистом"],
    note: "AI собирает вводные и передаёт менеджеру подготовленный диалог без лишних повторов",
  },
];

const faq = [
  ["AI может ошибиться?", "Да, как и любой AI. Поэтому вы задаёте знания, правила и границы ответа, а нестандартные ситуации бот передаёт сотруднику."],
  ["Сэйлон заменяет менеджера?", "Нет. Он забирает повторяющуюся первую линию, квалифицирует обращение и подключает менеджера там, где нужен человек."],
  ["Подойдёт ли AI-бот сложному бизнесу?", "Подойдёт для понятной части диалога: первичной консультации, сбора вводных и подготовки клиента к разговору с экспертом."],
  ["Как настраивается характер?", "Вы выбираете тон, степень формальности, допустимые формулировки и примеры ответов. Всё можно менять без программирования."],
  ["Нужно ли уметь программировать?", "Нет. Базовые знания, сценарии и характер настраиваются через понятный интерфейс."],
  ["Какие каналы доступны сейчас?", "Подключаем сайт и популярные мессенджеры. Точный список зависит от выбранной конфигурации и этапа запуска."],
  ["Можно подключить нашу CRM или расписание?", "Да. Типовые подключения настраиваются готовыми способами, нестандартную интеграцию можно обсудить отдельно."],
  ["Что будет после 14 дней теста?", "Доступ не продлится автоматически. Вы увидите результаты теста и сможете сами решить, нужен ли платный тариф."],
];

const team = [
  ["Татьяна", "Формирует позиционирование, предложение и логику продвижения продукта."],
  ["Игорь", "Отвечает за архитектуру продукта, AI-логику и стабильность сервиса."],
  ["Дима", "Проектирует интерфейс, визуальную систему и пользовательский путь."],
  ["Арина", "Настраивает голос бренда, сценарии и понятную коммуникацию."],
];

const ctaAreas = [
  { left: 1267, top: 20, width: 222, height: 50, radius: 12, tone: "header" },
  { left: 210, top: 597, width: 299, height: 59, radius: 12, tone: "hero" },
  { left: 242, top: 11176, width: 350, height: 48, radius: 999, tone: "pricing-green-left" },
  { left: 674, top: 11165, width: 350, height: 48, radius: 999, tone: "pricing-light" },
  { left: 1106, top: 11176, width: 350, height: 48, radius: 999, tone: "pricing-green-right" },
  { left: 212, top: 12820, width: 290, height: 54, radius: 999, tone: "final" },
];

function setNodeText(root: HTMLElement | null, id: string, value: string) {
  const node = root?.querySelector<HTMLElement>(`[data-node-id="${id}"]`);
  if (!node) return;
  const paragraphs = node.querySelectorAll("p");
  if (!paragraphs.length) return;
  paragraphs[0].textContent = value;
  for (let index = 1; index < paragraphs.length; index += 1) paragraphs[index].textContent = "";
}

export function FunctionalLayer({ rootRef, language }: { rootRef: React.RefObject<HTMLDivElement | null>; language: Language }) {
  const t = (value: string) => value;
  const [journey, setJourney] = useState(0);
  const [character, setCharacter] = useState(0);
  const [scenario, setScenario] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [chatPhase, setChatPhase] = useState(0);
  const [heroLive, setHeroLive] = useState(false);
  const [controlCard, setControlCard] = useState<number | null>(null);
  const [teamHover, setTeamHover] = useState<number | null>(null);
  const [chatHovered, setChatHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [botChatOpen, setBotChatOpen] = useState(false);
  const [botChatInput, setBotChatInput] = useState("");
  const [botChatMessages, setBotChatMessages] = useState<BotChatMessage[]>([
    { author: "bot", text: "Привет! Я Сэйлон — AI-продавец для входящих обращений. Могу рассказать, как помогаю бизнесу." },
  ]);
  const dialogRef = useRef<HTMLDivElement>(null);
  const heroLiveRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setMounted(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const openTrialDialog = () => {
      setSent(false);
      setBotChatOpen(false);
      setDialogOpen(true);
    };
    window.addEventListener("saleon:open-trial", openTrialDialog);
    return () => window.removeEventListener("saleon:open-trial", openTrialDialog);
  }, []);

  useEffect(() => {
    if (!dialogOpen) return;
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const dialog = dialogRef.current;
    const focusable = () => Array.from(dialog?.querySelectorAll<HTMLElement>("button, input, a[href]") ?? []);
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(() => focusable()[0]?.focus());

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDialogOpen(false);
        return;
      }
      if (event.key !== "Tab") return;
      const elements = focusable();
      if (!elements.length) return;
      const first = elements[0];
      const last = elements[elements.length - 1];
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
      previousFocus?.focus({ preventScroll: true });
    };
  }, [dialogOpen]);

  useEffect(() => {
    const hero = heroLiveRef.current;
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHeroLive(entry.isIntersecting),
      { threshold: 0.15 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    rootRef.current?.classList.toggle("hero-live-visible", heroLive);
  }, [heroLive, rootRef]);

  useEffect(() => {
    if (!heroLive) return;
    const times = [0, 1800, 3300, 5100, 7200, 9000, 10500, 12300];
    let timers: ReturnType<typeof setTimeout>[] = [];
    const play = () => {
      timers.forEach(clearTimeout);
      timers = times.map((time, index) => setTimeout(() => setChatPhase(index), time));
      timers.push(setTimeout(play, 15800));
    };
    play();
    return () => timers.forEach(clearTimeout);
  }, [heroLive]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const applyMotionClasses = () => {
      let found = 0;
      controlCardGroups.forEach((group, groupIndex) => group.forEach((id) => {
        const node = root.querySelector<HTMLElement>(`[data-node-id="${id}"]`);
        if (!node) return;
        found += 1;
        node.classList.add("control-card-motion");
        node.classList.toggle("control-card-fourth", groupIndex === 3);
      }));
      return found;
    };
    const expectedNodes = controlCardGroups.reduce((total, group) => total + group.length, 0);
    if (applyMotionClasses() === expectedNodes) return;
    const observer = new MutationObserver(() => {
      if (applyMotionClasses() === expectedNodes) observer.disconnect();
    });
    observer.observe(root, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [rootRef]);

  useEffect(() => {
    controlCardGroups.forEach((group, groupIndex) => group.forEach((id) => {
      rootRef.current
        ?.querySelector<HTMLElement>(`[data-node-id="${id}"]`)
        ?.classList.toggle("control-card-active", controlCard === groupIndex);
    }));
  }, [controlCard, rootRef]);

  useEffect(() => {
    const root = rootRef.current;
    ["2070:3", "2079:4"].forEach((id) => root?.querySelector<HTMLElement>(`[data-node-id="${id}"]`)?.classList.toggle("talk-hit-active", chatHovered));
  }, [chatHovered, rootRef]);

  useEffect(() => {
    ["2016:1003", "2016:1014", "2016:1025", "2016:1036"].forEach((id, index) => {
      rootRef.current
        ?.querySelector<HTMLElement>(`[data-node-id="${id}"]`)
        ?.classList.toggle("team-role-chip-hidden", teamHover === index);
    });
  }, [rootRef, teamHover]);

  useEffect(() => {
    const root = rootRef.current;
    const item = journeyStages[journey];
    const activeBg = root?.querySelector<HTMLElement>('[data-node-id="2013:40"]');
    if (activeBg) activeBg.style.left = `${223 + journey * 315}px`;
    ["2007:65", "2007:67", "2007:69", "2007:71"].forEach((id, index) => {
      const node = root?.querySelector<HTMLElement>(`[data-node-id="${id}"]`);
      if (node) node.style.color = index === journey ? "#ffffff" : "#626d68";
    });
    setNodeText(root, "2007:73", t(item.goal));
    setNodeText(root, "2007:74", t(item.description));
    setNodeText(root, "2007:76", t(item.instruction));
    setNodeText(root, "2007:78", t(item.knowledge));
    setNodeText(root, "2007:80", t(item.action));
    setNodeText(root, "2007:82", t(item.client));
    setNodeText(root, "2007:83", t(item.answer));
  }, [journey, language, rootRef]);

  useEffect(() => {
    const root = rootRef.current;
    const activeBg = root?.querySelector<HTMLElement>('[data-node-id="2013:50"]');
    if (activeBg) activeBg.style.top = `${4084.06 + character * 64}px`;
    for (let index = 0; index < characters.length; index += 1) {
      const title = root?.querySelector<HTMLElement>(`[data-node-id="2007:${88 + index * 2}"]`);
      const tone = root?.querySelector<HTMLElement>(`[data-node-id="2007:${89 + index * 2}"]`);
      const color = index === character ? "#0a241d" : "rgba(255,255,255,.7)";
      if (title) title.style.color = color;
      if (tone) tone.style.color = color;
    }
    setNodeText(root, "2007:98", t(characters[character].answer));
  }, [character, language, rootRef]);

  useEffect(() => {
    const root = rootRef.current;
    const scenarioLayout = [
      ["2013:82", 447, 170], ["2007:138", 532, 140],
      ["2013:83", 629, 126], ["2007:139", 692, 104],
      ["2013:84", 767, 220], ["2007:140", 877, 184],
    ] as const;
    scenarioLayout.forEach(([id, left, width]) => {
      const node = root?.querySelector<HTMLElement>(`[data-node-id="${id}"]`);
      if (node) { node.style.left = `${left}px`; node.style.width = `${width}px`; }
    });
    const active = ["2013:81", "2013:82", "2013:83", "2013:84"];
    const labels = ["2007:137", "2007:138", "2007:139", "2007:140"];
    active.forEach((id, index) => {
      const node = root?.querySelector<HTMLElement>(`[data-node-id="${id}"]`);
      if (node) node.style.background = index === scenario ? "#77d65b" : "rgba(255,255,255,.08)";
    });
    labels.forEach((id, index) => {
      const node = root?.querySelector<HTMLElement>(`[data-node-id="${id}"]`);
      if (node) node.style.color = index === scenario ? "#0a241d" : "rgba(255,255,255,.65)";
    });
  }, [scenario, rootRef]);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const contact = String(data.get("contact") ?? "").trim();
    const subject = language === "ru" ? "Заявка на бесплатный тест Сэйлона" : "Saleon free trial request";
    const body = language === "ru"
      ? `Здравствуйте!\n\nХочу начать бесплатный тест Сэйлона.\nИмя: ${name}\nКонтакт: ${contact}`
      : `Hello!\n\nI would like to start a Saleon free trial.\nName: ${name}\nContact: ${contact}`;
    window.open(`${legalDetails.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, "_self");
    setSent(true);
  };

  const submitBotChat = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = botChatInput.trim();
    if (!message) return;
    setBotChatMessages((items) => [...items, { author: "visitor", text: message }]);
    setBotChatInput("");
    window.setTimeout(() => {
      setBotChatMessages((items) => [...items, {
        author: "bot",
        text: "Я отвечаю по знаниям и правилам вашего бизнеса, уточняю задачу клиента и передаю менеджеру только сложные обращения. Хотите посмотреть такой сценарий на своих диалогах?",
      }]);
    }, 540);
  };

  return (
    <>
      <section ref={heroLiveRef} className="hero-chat-live" aria-label={t("Пример диалога с AI-ботом")}>
        <div className="chat-live-stack">
          {chatPhase === 0 && <div className="chat-live-typing client"><i /><i /><i /></div>}
          {chatPhase >= 1 && <div className="chat-live-message client">{t("Хочу попробовать, но немного переживаю — вдруг бот будет отвечать клиентам как-то не так")} <small>12:42</small></div>}
          {chatPhase === 2 && <div className="chat-live-typing bot"><i /><i /><i /></div>}
          {chatPhase >= 3 && <div className="chat-live-message bot">{t("Понимаю ваше переживание. Я общаюсь по вашей базе и подстраиваюсь под стиль вашего бизнеса")} <small>12:42</small></div>}
          {chatPhase === 4 && <div className="chat-live-typing client"><i /><i /><i /></div>}
          {chatPhase >= 5 && <div className="chat-live-message client compact">{t("А если вопрос будет какой-то нестандартный?")} <small>12:45</small></div>}
          {chatPhase === 6 && <div className="chat-live-typing bot"><i /><i /><i /></div>}
          {chatPhase >= 7 && <div className="chat-live-message bot wide">{t("Разберусь в смысле и контексте, чтобы ответ был уместным и понятным. Если нужно, передам менеджеру")} <small>12:45</small></div>}
        </div>
      </section>

      <div className="interaction-tabs journey-tabs" role="tablist" aria-label={t("Этапы пути клиента")}>
        {journeyStages.map((item, index) => <button key={item.name} type="button" role="tab" aria-selected={journey === index} onClick={() => setJourney(index)}>{t(item.name)}</button>)}
      </div>

      <section className="journey-live-detail" aria-live="polite" aria-label={`${t("Этап")}: ${t(journeyStages[journey].name)}`}>
        <p>{t("Цель этапа")}</p>
        <h3>{t(journeyStages[journey].goal)}</h3>
        <span>{t(journeyStages[journey].description)}</span>
        <div className="journey-live-row instruction"><strong>{t("Инструкция")}</strong><span>{t(journeyStages[journey].instruction)}</span></div>
        <div className="journey-live-row knowledge"><strong>{t("Нужные знания")}</strong><span>{t(journeyStages[journey].knowledge)}</span></div>
        <div className="journey-live-row action"><strong>{t("Действие")}</strong><span>{t(journeyStages[journey].action)}</span></div>
      </section>

      <div className="interaction-tabs character-tabs" role="tablist" aria-label={t("Характер ассистента")}>
        {characters.map((item, index) => <button key={item.name} type="button" role="tab" aria-selected={character === index} onClick={() => setCharacter(index)}>{t(item.name)}</button>)}
      </div>

      <div className="interaction-tabs scenario-tabs" role="tablist" aria-label={t("Сценарии бизнеса")}>
        {scenarios.map((item, index) => <button key={item.name} type="button" role="tab" aria-selected={scenario === index} onClick={() => setScenario(index)}>{t(item.name)}</button>)}
      </div>

      <section key={scenario} className="scenario-live scenario-live-enter" aria-live="polite" aria-label={`${t("Сценарий")}: ${t(scenarios[scenario].name)}`}>
        <div className="scenario-live-chat">
          <header><strong>{t("Диалог в работе")}</strong><span><i />{t("Онлайн")}</span></header>
          <div className="scenario-live-messages">
            {scenarios[scenario].messages.map((message, index) => (
              <div key={`${scenario}-${index}`} className={`scenario-message ${index % 2 ? "bot" : "client"}`}>{t(message)}</div>
            ))}
          </div>
        </div>
        <aside className="scenario-live-meta">
          <div><span>{t("Этап")}</span><strong>{t(scenarios[scenario].stage)}</strong></div>
          <div><span>{t("Характер")}</span><strong>{t(scenarios[scenario].tone)}</strong></div>
          <div><span>{t("Цель")}</span><strong>{t(scenarios[scenario].goal)}</strong></div>
          <p>{t(scenarios[scenario].note)}</p>
        </aside>
      </section>

      {[
        { left: 210, top: 4996, width: 609, height: 90 },
        { left: 298, top: 5096, width: 608, height: 90 },
        { left: 387, top: 5197, width: 608, height: 89 },
        { left: 474, top: 5298, width: 609, height: 90 },
      ].map((area, index) => (
        <div key={index} className="control-hover-zone" style={area} onMouseEnter={() => setControlCard(index)} onMouseLeave={() => setControlCard(null)} aria-hidden="true" />
      ))}

      {team.map(([name, copy], index) => (
        <div key={name} className="team-hover-card" style={{ left: 217 + index * 324 }} tabIndex={0} aria-label={`${t(name)}. ${t(copy)}`} onMouseEnter={() => setTeamHover(index)} onMouseLeave={() => setTeamHover(null)} onFocus={() => setTeamHover(index)} onBlur={() => setTeamHover(null)}>
          <div className="team-hover-clip"><div className="team-hover-surface"><strong>{t(name)}</strong><span>{t(copy)}</span></div></div>
        </div>
      ))}

      <section className="faq-live" aria-label={t("Частые вопросы")}>
        {faq.map(([question, answer], index) => (
          <div key={question} className={`faq-live-item ${openFaq === index ? "open" : ""}`}>
            <button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}>
              <span>{t(question)}</span><span className="faq-plus" aria-hidden="true" />
            </button>
            <div className="faq-answer"><p>{t(answer)}</p></div>
          </div>
        ))}
      </section>

      {ctaAreas.map(({ radius, tone, ...area }, index) => (
        <button key={index} type="button" className={`cta-hit cta-hit--${tone}`} style={{ ...area, borderRadius: radius }} aria-label={language === "ru" ? "Начать бесплатный тест" : "Start free trial"} onClick={() => { setSent(false); setDialogOpen(true); }} />
      ))}
      <button type="button" className="cta-hit cta-hit--chat" style={{ left: 541, top: 579, width: 252, height: 96 }} aria-label={t("Поразговаривать с ботом")} onMouseEnter={() => setChatHovered(true)} onMouseLeave={() => setChatHovered(false)} onFocus={() => setChatHovered(true)} onBlur={() => setChatHovered(false)} onClick={() => setBotChatOpen(true)} />
      <a className="cta-hit cta-hit--light cta-hit--custom" style={{ left: 864, top: 9389, width: 256, height: 50, borderRadius: 999 }} href="/contacts" aria-label={t("Обсудить доработку")} />

      {mounted && createPortal((
        <div className={`floating-chat${botChatOpen ? " is-open" : ""}`}>
          <button type="button" className="floating-chat-nudge" onClick={() => setBotChatOpen(true)}>{t("Поразговаривать с ботом")}</button>
          <button type="button" className="floating-chat-button" aria-label={t("Поразговаривать с ботом")} onClick={() => setBotChatOpen(true)}>
            <span className="floating-chat-icon" aria-hidden="true"><Image src="/figma/logo-header.png" alt="" width={64} height={64} /></span>
          </button>
        </div>
      ), document.body)}

      {botChatOpen && mounted && createPortal((
        <aside className="bot-chat-popover" role="dialog" aria-modal="true" aria-labelledby="bot-chat-title">
          <header>
            <div><Image src="/figma/logo-header.png" alt="" width={30} height={30} /><span><strong id="bot-chat-title">{t("Сэйлон")}</strong><small>{t("AI-продавец онлайн")}</small></span></div>
            <button type="button" aria-label={t("Закрыть чат")} onClick={() => setBotChatOpen(false)}>×</button>
          </header>
          <div className="bot-chat-messages" aria-live="polite">
            {botChatMessages.map((item, index) => <p key={`${item.author}-${index}`} className={item.author}>{item.author === "bot" ? t(item.text) : item.text}</p>)}
          </div>
          <form onSubmit={submitBotChat}>
            <input value={botChatInput} onChange={(event) => setBotChatInput(event.target.value)} placeholder={t("Напишите вопрос")} aria-label={t("Сообщение для Сэйлона")} />
            <button type="submit" aria-label={t("Отправить сообщение")}><ArrowUp aria-hidden="true" size={20} strokeWidth={2.2} /></button>
          </form>
        </aside>
      ), document.body)}

      {dialogOpen && mounted && createPortal((
        <div className="trial-dialog-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setDialogOpen(false)}>
          <div className="trial-dialog" role="dialog" aria-modal="true" aria-labelledby="trial-title" ref={dialogRef}>
            <button className="trial-close" type="button" aria-label={t("Закрыть")} onClick={() => setDialogOpen(false)}>×</button>
            {sent ? (
              <div className="trial-success"><span>✓</span><h2 id="trial-title">{language === "ru" ? "Письмо подготовлено" : "Email prepared"}</h2><p>{language === "ru" ? `Отправьте подготовленное письмо на ${legalDetails.email} — мы ответим и поможем запустить тест.` : `Send the prepared email to ${legalDetails.email}, and we will help you start the trial.`}</p><button type="button" onClick={() => setDialogOpen(false)}>{t("Готово")}</button></div>
            ) : (
              <form onSubmit={submit}>
                <span className="trial-kicker">{t("14 дней бесплатно")}</span>
                <h2 id="trial-title">{t("Посмотрите Сэйлон на своих обращениях")}</h2>
                <p>{t("Оставьте контакты — поможем подключить первый канал и настроить тест.")}</p>
                <label>{t("Ваше имя")}<input required name="name" autoComplete="name" /></label>
                <label>{t("Телефон или почта")}<input required name="contact" autoComplete="email" /></label>
                <label className="trial-consent">
                  <input required type="checkbox" name="personal-data-consent" />
                  <span>{language === "ru" ? "Согласен на " : "I agree to the "}<Link href="/legal/consent" target="_blank" rel="noopener noreferrer">{language === "ru" ? "обработку персональных данных" : "processing of personal data"}</Link></span>
                </label>
                <button type="submit">{t("Начать бесплатный тест")}</button>
                <small>{language === "ru" ? "Условия использования данных приведены в политике и отдельном согласии." : "Data-use terms are described in the policy and separate consent."}</small>
              </form>
            )}
          </div>
        </div>
      ), document.body)}
    </>
  );
}
