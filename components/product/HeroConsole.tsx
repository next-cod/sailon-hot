"use client";

export function HeroConsole() {
  return (
    <div className="hero-console-float relative mx-auto w-full max-w-[490px] rounded-[24px] bg-white p-5 shadow-[0_12px_25px_rgba(0,0,0,.11)]">
      <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
        <div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-full bg-[var(--cream)] text-sm font-extrabold">К</span><div><p className="text-sm font-extrabold">Клиент</p><p className="text-xs text-[var(--muted)]">выбирает формат</p></div></div>
        <span className="flex items-center gap-2 text-xs font-bold text-[var(--leaf)]"><span className="status-pulse size-2 rounded-full bg-[var(--signal)]"/>Отвечает AI-бот</span>
      </div>
      <div className="mt-7 grid gap-5 text-sm leading-relaxed">
        <Bubble>Хочу попробовать, но немного переживаю — вдруг бот будет отвечать клиентам как-то не так</Bubble>
        <Bubble right green>Понимаю ваше переживание. Я общаюсь по вашей базе и подстраиваюсь под стиль вашего бизнеса</Bubble>
        <Bubble>А если вопрос будет какой-то нестандартный?</Bubble>
        <Bubble right green>Разберусь в смысле и контексте, чтобы ответ был уместным и понятным, если нужно, передам менеджеру</Bubble>
      </div>
    </div>
  );
}

function Bubble({ children, right = false, green = false }: { children: React.ReactNode; right?: boolean; green?: boolean }) {
  return <div className={`${right ? "ml-auto rounded-br-md text-right" : "mr-auto rounded-bl-md"} max-w-[83%] rounded-[18px] px-4 py-3 ${green ? "bg-[#e1ffd8]" : "bg-[#eef0eb]"}`}><p>{children}</p><span className="mt-1 block text-[10px] text-[var(--muted)]">12:4{right ? "5" : "2"}</span></div>;
}
