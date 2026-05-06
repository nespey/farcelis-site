import { test } from "playwright/test";

const paths = [
  "/",
  "/control-layer",
  "/services",
  "/services/ai-strategy-governance",
  "/services/workflow-operations",
  "/services/managed-operations",
  "/products",
  "/platforms",
  "/industries",
  "/resources",
  "/events",
  "/insights",
  "/team",
  "/results",
  "/contact",
  "/legal",
  "/privacy",
  "/ca-consumer",
  "/accessibility",
  "/terms",
];

test.use({
  channel: "chrome",
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
});

for (const path of paths) {
  test(`mobile audit ${path}`, async ({ page }) => {
    page.on("console", (msg) => {
      if (msg.type() === "error") console.log(`[console:${path}] ${msg.text()}`);
    });

    await page.goto(`http://localhost:3000${path}`, { waitUntil: "networkidle" });
    await page.waitForTimeout(500);

    const report = await page.evaluate(() => {
      const viewportWidth = document.documentElement.clientWidth;
      const bodyWidth = Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth
      );
      const offenders = Array.from(document.querySelectorAll("body *"))
        .map((node) => {
          const rect = node.getBoundingClientRect();
          return {
            tag: node.tagName.toLowerCase(),
            className: String(node.getAttribute("class") || "").slice(0, 140),
            text: String(node.textContent || "").trim().replace(/\s+/g, " ").slice(0, 90),
            left: Math.round(rect.left),
            right: Math.round(rect.right),
            width: Math.round(rect.width),
          };
        })
        .filter((item) => item.width > 0 && (item.left < -2 || item.right > viewportWidth + 2))
        .slice(0, 12);

      const tinyText = Array.from(document.querySelectorAll("a, button"))
        .map((node) => {
          const rect = node.getBoundingClientRect();
          return {
            tag: node.tagName.toLowerCase(),
            className: String(node.getAttribute("class") || "").slice(0, 120),
            text: String(node.textContent || "").trim().replace(/\s+/g, " ").slice(0, 80),
            width: Math.round(rect.width),
            height: Math.round(rect.height),
          };
        })
        .filter((item) => item.width > 0 && (item.width < 36 || item.height < 36))
        .slice(0, 10);

      return { viewportWidth, bodyWidth, offenders, tinyText };
    });

    console.log(JSON.stringify({ path, ...report }));
    await page.screenshot({
      path: `qa/mobile-shots/${path === "/" ? "home" : path.slice(1).replaceAll("/", "__")}.png`,
      fullPage: true,
    });
  });
}
