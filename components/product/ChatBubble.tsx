import { CheckCheck } from "lucide-react";

export function ChatBubble({ side, children, time }: { side: "client" | "assistant"; children: React.ReactNode; time?: string }) {
  const assistant = side === "assistant";
  return (
    <div className={`flex ${assistant ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[88%] rounded-[18px] px-4 py-3 text-[14px] leading-snug ${assistant ? "rounded-br-[5px] bg-[var(--forest)] text-white" : "rounded-bl-[5px] bg-[#eef0eb] text-[var(--ink)]"}`}>
        <p>{children}</p>
        {time && <span className={`mt-1 flex items-center justify-end gap-1 text-[10px] ${assistant ? "text-white/60" : "text-[var(--muted)]"}`}>{time}{assistant && <CheckCheck size={12} />}</span>}
      </div>
    </div>
  );
}
