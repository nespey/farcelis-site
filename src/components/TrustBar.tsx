import { PartnerLogoGrid } from "@/components/PartnerLogoGrid";

export function TrustBar() {
  return (
    <section className="border-y border-white/8 bg-transparent px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-white/44">
          Organizations that have worked with Farcelis AI Consulting LLC
        </p>
        <PartnerLogoGrid compact />
      </div>
    </section>
  );
}
