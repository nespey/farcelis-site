type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  variant?: "default" | "inverse";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  variant = "default",
}: SectionHeaderProps) {
  const isCenter = align === "center";
  const inverse = variant === "inverse";

  return (
    <div className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p
          className={`mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] ${
            inverse ? "text-white/60" : "text-[color:#9f412c]"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-balance text-[2.2rem] font-semibold tracking-[-0.065em] sm:text-[2.9rem] lg:text-[3.55rem] lg:leading-[0.96] ${
          inverse ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 max-w-2xl text-pretty text-[15px] leading-7 sm:text-[17px] sm:leading-8 ${
            inverse ? "text-white/72" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
