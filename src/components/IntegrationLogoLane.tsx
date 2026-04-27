import Image from "next/image";

const appLogos = [
  { label: "Outlook", image: "/images/apps/outlook.png" },
  { label: "Gmail", image: "/images/apps/gmail.png" },
  { label: "HubSpot", image: "/images/apps/hubspot.png" },
  { label: "Salesforce", image: "/images/apps/salesforce.png" },
  { label: "ClickUp", image: "/images/apps/clickup.png" },
  { label: "Asana", image: "/images/apps/asana.png" },
  { label: "Monday", image: "/images/apps/monday.png" },
  { label: "Smartsheet", image: "/images/apps/smartsheet.png" },
  { label: "Jira", image: "/images/apps/jira.png" },
  { label: "SharePoint", image: "/images/apps/sharepoint.png" },
  { label: "Drive", image: "/images/apps/drive.png" },
  { label: "Docs", image: "/images/apps/docs.png" },
  { label: "Sheets", image: "/images/apps/sheets.png" },
  { label: "Slack", image: "/images/apps/slack.png" },
  { label: "Teams", image: "/images/apps/teams.png" },
  { label: "QuickBooks", image: "/images/apps/quickbooks.png" },
];

export function IntegrationLogoLane({ reverse = false }: { reverse?: boolean }) {
  const items = [...appLogos, ...appLogos];

  return (
    <div className={`integration-lane ${reverse ? "reverse" : ""}`}>
      <div className="integration-lane-track">
        {items.map((item, index) => (
          <div
            key={`${item.label}-${index}`}
            className="flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.06] px-3 py-2.5 text-[0.8rem] font-medium text-slate-100"
          >
            <div className="relative h-4 w-4 overflow-hidden rounded-[4px]">
              <Image src={item.image} alt={item.label} fill sizes="16px" className="object-contain" />
            </div>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
