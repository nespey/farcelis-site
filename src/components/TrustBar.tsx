import { PartnerLogoGrid } from "@/components/PartnerLogoGrid";

export function TrustBar() {
  return (
    <section className="border-y border-black/5 bg-[rgba(255,255,255,0.82)] px-4 py-10 backdrop-blur-sm sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
          Organizations that have worked with Farcelis AI Consulting LLC
        </p>
        <PartnerLogoGrid compact />
      </div>
    </section>
  );
}
