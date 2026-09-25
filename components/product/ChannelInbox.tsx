import { MessageCircle, PanelsTopLeft, UserRound } from "lucide-react";

const threads = [
  ["Telegram", "Мария", "Спасибо большое за быструю запись! Завтра в 19 буду", "Только что", ""],
  ["VK", "Иван", "Хорошо, я подумаю", "Только что", "Бот напомнит клиенту через 12 часов"],
  ["Сайт", "Новый посетитель", "Спасибо, посоветуюсь с коллегами", "2 минуты назад", "Бот напомнит клиенту через 12 часов"],
  ["MAX", "Олег", "Понял, в субботу буду", "5 минут назад", ""],
] as const;

export function ChannelInbox() {
  return (
    <div className="mt-12 overflow-hidden rounded-[24px] border border-[var(--line)] bg-white shadow-soft">
      <div className="flex items-center gap-3 border-b border-[var(--line)] px-6 py-5 text-lg font-extrabold"><PanelsTopLeft size={20}/>Чаты</div>
      {threads.map(([channel,name,text,time,status],index)=><div key={name} className={`grid grid-cols-[40px_minmax(0,1fr)] items-center gap-x-3 gap-y-2 px-4 py-4 sm:grid-cols-[42px_minmax(0,1fr)_auto] sm:gap-4 sm:px-6 ${index<threads.length-1?"border-b border-[var(--line)]":""}`}><span className="grid size-10 place-items-center rounded-full bg-[var(--cream)] text-[var(--leaf)]"><MessageCircle size={17}/></span><div className="min-w-0"><div className="flex items-center gap-2"><strong>{name}</strong><span className="text-xs text-[var(--muted)]">{channel}</span></div><p className="truncate text-sm text-[var(--muted)]">{text}</p></div><div className="col-span-2 flex items-center justify-between gap-2 pl-[52px] text-left sm:col-span-1 sm:block sm:pl-0 sm:text-right"><span className="text-xs text-[var(--muted)]">{time}</span>{status&&<p className="rounded-full bg-[var(--cream)] px-3 py-1 text-[11px] text-[var(--leaf)] sm:mt-2 sm:text-xs">{status}</p>}</div></div>)}
      <div className="flex items-center gap-4 bg-[var(--leaf)] px-7 py-4 font-semibold text-white"><UserRound size={20}/><span><b>Сотрудник может подключиться</b> к диалогу в нужный момент</span></div>
    </div>
  );
}
