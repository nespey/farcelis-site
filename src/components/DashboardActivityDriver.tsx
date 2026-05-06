"use client";

import { useEffect } from "react";

const govMetricFrames = [
  ["12", "4", "6", "5", "1", "6", "3"],
  ["11", "5", "6", "4", "2", "5", "3"],
  ["13", "4", "7", "5", "1", "6", "4"],
  ["12", "3", "6", "6", "1", "4", "3"],
];

const homeMetricFrames = [
  ["48", "23", "5", "5"],
  ["47", "24", "5", "6"],
  ["49", "22", "4", "6"],
  ["48", "21", "6", "5"],
];

const statusFrames = ["Open", "Due", "Routed", "Cleared", "Review"];
const spotlightStatusFrames = ["Red", "Amber", "Open", "Assigned", "Closed"];
const homeActionFrames = ["Act now", "Draft", "Prep", "Review", "Queued"];
const homeUpcomingFrames = ["Due today", "Scheduled", "Booked", "Paid", "Queued"];
const homeInboxFrames = [
  [["10", "0", "Live"], ["3", "0", "Live"]],
  [["10", "1", "Live"], ["3", "1", "Live"]],
  [["9", "2", "Routed"], ["4", "1", "Live"]],
  [["11", "2", "Live"], ["3", "2", "Routed"]],
];
const govToastFrames = [
  ["Routing update", "Risk item moved to executive spotlight"],
  ["Evidence sync", "Readiness packet refreshed"],
  ["Decision path", "Owner assignment updated"],
  ["Contract lane", "Delivery item moved to review"],
  ["Control check", "Gap assigned to next owner"],
];
const homeToastFrames = [
  ["Auto-routing", "Email converted to follow-up"],
  ["Calendar sync", "Appointment moved into action queue"],
  ["Finance check", "Bill reminder refreshed"],
  ["Job finder", "Application follow-up staged"],
  ["Task list", "Shared item moved to today"],
];

function rotateChildren(selector: string) {
  document.querySelectorAll<HTMLElement>(selector).forEach((node) => {
    const first = node.firstElementChild;
    if (first) node.appendChild(first);
  });
}

export function DashboardActivityDriver() {
  useEffect(() => {
    if (window.matchMedia("(max-width: 700px)").matches) return;

    let step = 0;

    const interval = window.setInterval(() => {
      step += 1;

      document.querySelectorAll<HTMLElement>(".gov-metric-card strong").forEach((node, index) => {
        node.textContent = govMetricFrames[step % govMetricFrames.length][index] ?? node.textContent;
        const card = node.closest<HTMLElement>(".gov-metric-card");
        card?.classList.remove("is-updating");
        if (card) void card.offsetWidth;
        card?.classList.add("is-updating");
      });

      document.querySelectorAll<HTMLElement>(".home-metric strong").forEach((node, index) => {
        node.textContent = homeMetricFrames[step % homeMetricFrames.length][index] ?? node.textContent;
        const card = node.closest<HTMLElement>(".home-metric");
        card?.classList.remove("is-updating");
        if (card) void card.offsetWidth;
        card?.classList.add("is-updating");
      });

      const rotatingSelectors = [
        ".gov-tabs span",
        ".gov-record",
        ".gov-button",
        ".home-nav-card",
        ".home-control-pill",
        ".home-inbox-card",
        ".home-action-row",
        ".home-upcoming-row",
        ".gov-spotlight-card",
      ];

      rotatingSelectors.forEach((selector) => {
        const items = Array.from(document.querySelectorAll<HTMLElement>(selector));
        items.forEach((item) => item.classList.remove("is-active", "is-pressed", "is-updating"));
        const active = items[step % Math.max(items.length, 1)];
        active?.classList.add(selector.includes("button") || selector.includes("pill") ? "is-pressed" : "is-active");
      });

      document.querySelectorAll<HTMLElement>(".gov-record i").forEach((node, index) => {
        node.textContent = statusFrames[(step + index) % statusFrames.length];
      });

      document.querySelectorAll<HTMLElement>(".gov-spotlight-card i").forEach((node, index) => {
        node.textContent = spotlightStatusFrames[(step + index) % spotlightStatusFrames.length];
      });

      document.querySelectorAll<HTMLElement>(".home-action-row b").forEach((node, index) => {
        node.textContent = homeActionFrames[(step + index) % homeActionFrames.length];
      });

      document.querySelectorAll<HTMLElement>(".home-upcoming-row span").forEach((node, index) => {
        node.textContent = homeUpcomingFrames[(step + index) % homeUpcomingFrames.length];
      });

      document.querySelectorAll<HTMLElement>(".home-inbox-card").forEach((card, cardIndex) => {
        const statValues = homeInboxFrames[step % homeInboxFrames.length][cardIndex];
        if (!statValues) return;
        card.querySelectorAll<HTMLElement>(".home-inbox-stats b").forEach((node, statIndex) => {
          node.textContent = statValues[statIndex] ?? node.textContent;
        });
        const messageCount = card.querySelector<HTMLElement>(".home-inbox-top span");
        if (messageCount) messageCount.textContent = `${statValues[0]} messages`;
      });

      const liveToastPairs = [
        [".gov-live-toast", govToastFrames[step % govToastFrames.length]],
        [".home-live-toast", homeToastFrames[step % homeToastFrames.length]],
      ] as const;

      liveToastPairs.forEach(([selector, [toastTitle, toastBody]]) => {
        const toast = document.querySelector<HTMLElement>(selector);
        if (!toast) return;
        const title = toast?.querySelector("b");
        const body = toast?.querySelector("span");
        if (title) title.textContent = toastTitle;
        if (body) body.textContent = toastBody;
        toast.classList.remove("is-updating");
        void toast.offsetWidth;
        toast.classList.add("is-updating");
      });

      if (step % 3 === 0) rotateChildren(".home-action-list");
      if (step % 4 === 0) rotateChildren(".gov-record-scroll");
      if (step % 5 === 0) rotateChildren(".home-upcoming-scroll");
    }, 1150);

    return () => window.clearInterval(interval);
  }, []);

  return null;
}
