type TimeLeakEvent =
  | "time_leak_test_completed"
  | "time_leak_review_opened"
  | "time_leak_review_requested"
  | "time_leak_checkout_opened";

export function trackTimeLeakEvent(event: TimeLeakEvent, workflow: string) {
  if (typeof window === "undefined") return;
  const analytics = window as Window & { gtag?: (...args: unknown[]) => void };
  analytics.gtag?.("event", event, { workflow });
}

export function openTimeLeakCheckout(workflow: string, url: string) {
  let navigating = false;
  const navigate = () => {
    if (navigating) return;
    navigating = true;
    window.location.assign(url);
  };
  const analytics = window as Window & { gtag?: (...args: unknown[]) => void };
  if (!analytics.gtag) {
    navigate();
    return;
  }
  analytics.gtag("event", "time_leak_checkout_opened", {
    workflow,
    event_callback: navigate,
    event_timeout: 700,
  });
  window.setTimeout(navigate, 800);
}
