import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return [
      {
        source: "/contact/build",
        destination:
          "/contact?request=build&work=website-development,app-portal-development,ai-agents-automations,platform-connections,dashboards-decision-views#strategy-form",
        permanent: false,
      },
      {
        source: "/contact/grow",
        destination:
          "/contact?request=grow&work=seo-search-visibility,aeo-ai-search-visibility,google-ads-paid-search,meta-ads-paid-social,crm-revenue-operations,content-revenue-systems#strategy-form",
        permanent: false,
      },
      {
        source: "/contact/operate",
        destination:
          "/contact?request=operate&work=ai-strategy-governance,workflow-managed-operations,farcelis-control-layer,reporting-decision-systems,deployment-operations-operate#strategy-form",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
