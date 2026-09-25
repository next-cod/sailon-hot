export type MarketingEvent =
  | "hero_signup_click"
  | "demo_click"
  | "character_switch"
  | "demo_scenario_switch"
  | "pricing_signup_click"
  | "final_signup_click"
  | "custom_solution_click";

export function trackMarketingEvent(event: MarketingEvent) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("seylon:marketing", { detail: { event } }));
}
